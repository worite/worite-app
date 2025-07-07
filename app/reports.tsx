import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Dimensions,
    RefreshControl,
    ScrollView,
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import {
    Button,
    Card,
    Chip,
    Paragraph,
    Surface,
    Text,
    Title
} from 'react-native-paper';
import { useLocation } from '../context/LocationContext';
// import { getCooldownInfo, formatTimeRemaining } from '../utils/cooldown';

const { width } = Dimensions.get('window');

interface MunicipalityReport {
  id: string;
  name: string;
  type: 'büyükşehir' | 'ilçe';
  totalSubmissions: number;
  positiveVotes: number;
  negativeVotes: number;
  topSubmissions: TopSubmission[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

interface TopSubmission {
  id: string;
  description: string;
  vote: 'positive' | 'negative';
  createdAt: string;
  score: number;
}

export default function ReportsScreen() {
  const [reports, setReports] = useState<MunicipalityReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [mapRegion, setMapRegion] = useState({
    latitude: 41.0082,
    longitude: 28.9784,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });
  const [legendFontSize, setLegendFontSize] = useState(14);
  const [resetInput, setResetInput] = useState('');
  const inputRef = useRef<TextInput>(null);
  
  const { locationData, selectedMunicipalities, allMunicipalities, currentCity } = useLocation();

  useEffect(() => {
    loadReports();
    if (locationData) {
      setMapRegion({
        latitude: locationData.latitude,
        longitude: locationData.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      });
    }
  }, [locationData, currentCity]);

  // Font boyutunu hesapla
  useEffect(() => {
    if (reports.length > 0 && selectedMunicipalities.length > 0) {
      const selectedReports = reports.filter(report => 
        selectedMunicipalities.some(selected => selected.id === report.id)
      );
      
      if (selectedReports.length > 0) {
        // En uzun belediye ismini bul
        const longestName = selectedReports.reduce((longest, current) => 
          current.name.length > longest.name.length ? current : longest
        );
        
        // Font boyutunu hesapla (basit bir hesaplama)
        const baseFontSize = 14;
        const maxLength = longestName.name.length;
        let calculatedFontSize = baseFontSize;
        
        if (maxLength > 25) {
          calculatedFontSize = 11;
        } else if (maxLength > 20) {
          calculatedFontSize = 12;
        } else if (maxLength > 15) {
          calculatedFontSize = 13;
        }
        
        setLegendFontSize(calculatedFontSize);
      }
    }
  }, [reports, selectedMunicipalities]);

  const loadReports = async () => {
    setLoading(true);
    try {
      // Gerçek değerlendirmeleri yükle
      const storedEvaluations = await AsyncStorage.getItem('evaluations');
      let allEvaluations = storedEvaluations ? JSON.parse(storedEvaluations) : [];
      
      // Eğer hiç değerlendirme yoksa ve konum belirlenmişse, o şehrin belediyelerini göster
      if (allEvaluations.length === 0 && currentCity) {
        const defaultMunicipalities = currentCity.municipalities.map(municipality => ({
          id: municipality.id,
          name: municipality.name,
          type: municipality.type as 'büyükşehir' | 'ilçe',
          totalSubmissions: 0,
          positiveVotes: 0,
          negativeVotes: 0,
          topSubmissions: [],
          coordinates: municipality.coordinates,
        }));
        setReports(defaultMunicipalities);
        return;
      }
      
      // Eğer konum belirlenmemişse, boş liste göster
      if (!currentCity) {
        setReports([]);
        return;
      }
      
      // Belediyeleri ve sayaçları gerçek değerlendirmelerden oluştur
      const municipalityMap: { [id: string]: MunicipalityReport } = {};
      
      // Önce mevcut şehrin tüm belediyelerini ekle (sayaçları 0 ile)
      currentCity.municipalities.forEach(municipality => {
        municipalityMap[municipality.id] = {
          id: municipality.id,
          name: municipality.name,
          type: municipality.type as 'büyükşehir' | 'ilçe',
          totalSubmissions: 0,
          positiveVotes: 0,
          negativeVotes: 0,
          topSubmissions: [],
          coordinates: municipality.coordinates
        };
      });
      
      // Sonra gerçek değerlendirmeleri ekle
      allEvaluations.forEach((evaluation: any) => {
        // Belediye ID'sini doğru şekilde al
        const municipalityId = evaluation.municipalityId || evaluation.municipalityName;
        const municipalityName = evaluation.municipalityName || 'Bilinmeyen Belediye';
        
        // Eğer belediye map'te yoksa ekle
        if (!municipalityMap[municipalityId]) {
          municipalityMap[municipalityId] = {
            id: municipalityId,
            name: municipalityName,
            type: 'ilçe', // Varsayılan olarak ilçe
            totalSubmissions: 0,
            positiveVotes: 0,
            negativeVotes: 0,
            topSubmissions: [],
            coordinates: {
              latitude: evaluation.location?.latitude || currentCity.coordinates.latitude,
              longitude: evaluation.location?.longitude || currentCity.coordinates.longitude,
            },
          };
        }
        
        municipalityMap[municipalityId].totalSubmissions++;
        
        // Vote tipini doğru şekilde kontrol et
        if (evaluation.vote === 'positive' || evaluation.type === 'positive') {
          municipalityMap[municipalityId].positiveVotes++;
        } else if (evaluation.vote === 'negative' || evaluation.type === 'negative') {
          municipalityMap[municipalityId].negativeVotes++;
        }
        
        // En iyi değerlendirmeler için ekle
        municipalityMap[municipalityId].topSubmissions.push({
          id: evaluation.id || Date.now().toString(),
          description: evaluation.description || '',
          vote: (evaluation.vote || evaluation.type) as 'positive' | 'negative',
          createdAt: evaluation.date || new Date().toISOString(),
          score: 1
        });
      });
      
      const finalReports = Object.values(municipalityMap);
      setReports(finalReports);
      
    } catch (error) {
      console.error('Raporlar yüklenemedi:', error);
      setReports([]);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadReports();
    setRefreshing(false);
  };

  const handleResetData = async () => {
    // resetdata_00.00.0000_00:00 formatını kontrol et
    const match = resetInput.match(/^resetdata_(\d{2})\.(\d{2})\.(\d{4})_(\d{2}):(\d{2})$/);
    if (!match) {
      Alert.alert('Hatalı Komut', 'Komut formatı: resetdata_gg.aa.yyyy_ss:dd şeklinde olmalı.');
      return;
    }
    const [_, day, month, year, hour, minute] = match;
    const resetDate = new Date(`${year}-${month}-${day}T${hour}:${minute}:00`);
    if (isNaN(resetDate.getTime())) {
      Alert.alert('Geçersiz Tarih', 'Tarih/saat doğru formatta değil.');
      return;
    }
    // Değerlendirmeleri filtrele
    const storedEvaluations = await AsyncStorage.getItem('evaluations');
    let allEvaluations = storedEvaluations ? JSON.parse(storedEvaluations) : [];
    const filtered = allEvaluations.filter((ev: any) => {
      // ev.date: YYYY-MM-DD, ev.time: ss:dd
      const [y, m, d] = ev.date.split('-');
      const [h, min] = (ev.time || '00:00').split(':');
      const evDate = new Date(`${y}-${m}-${d}T${h}:${min}:00`);
      return evDate <= resetDate;
    });
    await AsyncStorage.setItem('evaluations', JSON.stringify(filtered));
    setResetInput('');
    loadReports();
    Alert.alert('Başarılı', `${day}.${month}.${year} ${hour}:${minute} sonrasındaki tüm veriler silindi.`);
  };


  const calculatePositivePercentage = (positive: number, negative: number) => {
    const total = positive + negative;
    return total > 0 ? Math.round((positive / total) * 100) : 0;
  };

  const getVoteEmoji = (vote: 'positive' | 'negative') => {
    return vote === 'positive' ? '👍' : '👎🏽';
  };

  const getVoteColor = (vote: 'positive' | 'negative') => {
    return vote === 'positive' ? '#10b981' : '#ef4444';
  };

  // Kullanıcının seçtiği belediyeyi bul
  const getUserSelectedMunicipality = () => {
    if (reports.length === 0) return null;
    
    // Context'ten seçili belediyeyi bul
    if (selectedMunicipalities && selectedMunicipalities.length > 0) {
      const selectedReport = reports.find(report => 
        selectedMunicipalities.some(selected => 
          selected.id === report.id || selected.name === report.name
        )
      );
      if (selectedReport) {
        return selectedReport;
      }
    }
    
    // Eğer seçili belediye bulunamazsa, hiçbir şey gösterme
    return null;
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6366f1" />
        <Text style={styles.loadingText}>Raporlar yükleniyor...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.headerGradient}
      >
        <View style={styles.header}>
          <Title style={styles.pageTitle}>
            📊 {currentCity ? `${currentCity.name} Belediye Worite Puanları` : 'Belediye Worite Puanları'}
          </Title>
          <Paragraph style={styles.pageSubtitle}>
            {currentCity ? `${currentCity.name} kamuya açık belediye performans raporları` : 'Kamuya açık belediye performans raporları'}
          </Paragraph>
        </View>
      </LinearGradient>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.content}>
          {/* Kullanıcının Seçtiği Belediye - Detaylı Görünüm */}
          {(() => {
            const selectedMunicipality = getUserSelectedMunicipality();
            if (!selectedMunicipality) return null;
            
            return (
              <Surface style={styles.surface}>
                <Card style={styles.reportCard}>
                  <Card.Content style={styles.cardContent}>
                    {/* Belediye Başlığı */}
                    <View style={styles.municipalityHeader}>
                      <View style={styles.municipalityInfo}>
                        <View style={styles.iconContainer}>
                          <Text style={styles.municipalityIcon}>
                            {selectedMunicipality.type === 'büyükşehir' ? '🏛️' : '🏢'}
                          </Text>
                        </View>
                        <View style={styles.textContainer}>
                          <Title style={styles.municipalityName}>
                            {selectedMunicipality.name}
                          </Title>
                          <Chip 
                            style={styles.typeChip}
                            textStyle={styles.typeChipText}
                          >
                            {selectedMunicipality.type === 'büyükşehir' ? 'Büyükşehir' : 'İlçe'} Belediyesi
                          </Chip>
                        </View>
                      </View>
                    </View>

                    {/* Genel İstatistikler */}
                    <View style={styles.statsContainer}>
                      <View style={styles.statItem}>
                        <View style={styles.statCircle}>
                          <Text style={styles.statNumber}>{selectedMunicipality.totalSubmissions}</Text>
                          <Text style={styles.statEmoji}>📋</Text>
                        </View>
                        <Text style={styles.statLabel}>Toplam Worite Puanı</Text>
                      </View>
                      <View style={styles.statItem}>
                        <View style={[styles.statCircle, styles.positiveCircle]}>
                          <Text style={styles.statNumber}>{selectedMunicipality.positiveVotes}</Text>
                          <Text style={styles.statEmoji}>👍</Text>
                        </View>
                        <Text style={styles.statLabel}>Puanlama</Text>
                      </View>
                      <View style={styles.statItem}>
                        <View style={[styles.statCircle, styles.negativeCircle]}>
                          <Text style={styles.statNumber}>{selectedMunicipality.negativeVotes}</Text>
                          <Text style={styles.statEmoji}>👎</Text>
                        </View>
                        <Text style={styles.statLabel}>Puanlama</Text>
                      </View>
                    </View>

                    {/* Detay Butonu */}
                    <View style={styles.detailButtonContainer}>
                      <Button
                        mode="contained"
                        onPress={() => router.push({
                          pathname: '/municipality-detail',
                          params: { 
                            municipalityId: selectedMunicipality.id,
                            municipalityName: selectedMunicipality.name
                          }
                        })}
                        style={styles.detailButton}
                        labelStyle={styles.detailButtonLabel}
                      >
                        📋 Detaylı Değerlendirmeleri Görüntüle
                      </Button>
                    </View>
                  </Card.Content>
                </Card>
              </Surface>
            );
          })()}



          {/* Belediye Değerlendirme Oranları Özeti */}
          <Surface style={styles.surface}>
            <Card style={styles.summaryCard}>
              <Card.Content style={styles.cardContent}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionIcon}>📊</Text>
                  <Title style={styles.sectionTitle}>Belediye Worite Puanları Özeti</Title>
                </View>
                
                <View style={styles.summaryList}>
                  {[...reports].sort((a, b) => {
                    // Büyükşehir belediyesi her zaman en üstte
                    if (a.type === 'büyükşehir' && b.type === 'ilçe') return -1;
                    if (a.type === 'ilçe' && b.type === 'büyükşehir') return 1;
                    // İlçeler arasında alfabetik sıralama
                    if (a.type === 'ilçe' && b.type === 'ilçe') {
                      return a.name.localeCompare(b.name, 'tr');
                    }
                    return 0;
                  }).map((report) => {
                    return (
                        <View key={report.id} style={styles.summaryItem}>
                          <View style={styles.summaryHeader}>
                            <View style={styles.summaryIconContainer}>
                              <Text style={styles.summaryIcon}>
                                {report.type === 'büyükşehir' ? '🏛️' : '🏢'}
                              </Text>
                            </View>
                            <View style={styles.summaryTextContainer}>
                              <Text style={styles.summaryName}>{report.name}</Text>
                              <Text style={styles.summaryType}>
                                {report.type === 'büyükşehir' ? 'Büyükşehir' : report.name.includes('İlçe') ? 'İlçe' : 'İl'} Belediyesi
                              </Text>
                            </View>
                          </View>
                          <View style={styles.percentageRow}>
                            <View style={styles.totalItem}>
                              <Text style={styles.totalLabel}>Toplam Worite Puanı</Text>
                              <Text style={styles.totalCount}>{report.totalSubmissions}</Text>
                              <Text style={styles.voteCountText}>Puanlama</Text>
                            </View>
                            <View style={styles.percentageItem}>
                              <Text style={styles.percentageLabel}>👍</Text>
                              <View style={styles.voteCountContainer}>
                                <Text style={styles.voteCountNumber}>{report.positiveVotes}</Text>
                                <Text style={styles.voteCountText}>Puanlama</Text>
                              </View>
                            </View>
                            <View style={styles.percentageItem}>
                              <Text style={styles.percentageLabel}>👎</Text>
                              <View style={styles.voteCountContainer}>
                                <Text style={styles.voteCountNumber}>{report.negativeVotes}</Text>
                                <Text style={styles.voteCountText}>Puanlama</Text>
                              </View>
                            </View>
                          </View>
                        </View>
                      );
                    })}
                </View>
              </Card.Content>
            </Card>
          </Surface>

          {/* En Çalışkan Belediye */}
          {reports.length > 0 && (
            <Surface style={styles.surface}>
              <Card style={styles.bestCard}>
                <Card.Content style={styles.cardContent}>
                  <View style={styles.sectionHeader}>
                    <Text style={styles.sectionIcon}>🏆</Text>
                    <Title style={styles.sectionTitle}>Worite Puan Şampiyonu</Title>
                  </View>
                  {(() => {
                    // Net olumlu puana (olumlu - olumsuz) göre şampiyonu bul
                    const bestMunicipality = reports.reduce((best, current) => {
                      const bestNet = best.positiveVotes - best.negativeVotes;
                      const currentNet = current.positiveVotes - current.negativeVotes;
                      return currentNet > bestNet ? current : best;
                    });
                    const totalVotes = bestMunicipality.positiveVotes + bestMunicipality.negativeVotes;
                    const positivePercentage = totalVotes > 0 ? Math.round((bestMunicipality.positiveVotes / totalVotes) * 100) : 0;
                    const netScore = bestMunicipality.positiveVotes - bestMunicipality.negativeVotes;
                    return (
                      <View style={styles.bestItem}>
                        <View style={styles.bestHeader}>
                          <View style={styles.bestIconContainer}>
                            <Text style={styles.bestIcon}>
                              {bestMunicipality.type === 'büyükşehir' ? '🏛️' : '🏢'}
                            </Text>
                          </View>
                          <View style={styles.bestTextContainer}>
                            <Text style={styles.bestName}>{bestMunicipality.name}</Text>
                            <Text style={styles.bestType}>
                              {bestMunicipality.type === 'büyükşehir' ? 'Büyükşehir' : 'İlçe'} Belediyesi
                            </Text>
                          </View>
                        </View>
                        <View style={styles.bestPercentageContainer}>
                          <Text style={styles.bestPercentageLabel}>Net Olumlu Puan: {netScore}</Text>
                        </View>
                        <View style={styles.bestNote}>
                          <Text style={styles.bestNoteText}>
                            Görünüşe göre net en yüksek olumlu puana sahip belediye "{bestMunicipality.name.replace(' Büyükşehir Belediyesi', '').replace(' Belediyesi', '')}"
                          </Text>
                        </View>
                      </View>
                    );
                  })()}
                </Card.Content>
              </Card>
            </Surface>
          )}
        </View>
      </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#64748b',
  },
  headerGradient: {
    paddingTop: 24,
    paddingBottom: 8,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
  },
  pageSubtitle: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 13,
    lineHeight: 17,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  surface: {
    marginBottom: 20,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  reportCard: {
    borderRadius: 16,
    backgroundColor: 'white',
  },
  cardContent: {
    padding: 24,
  },
  municipalityHeader: {
    marginBottom: 24,
  },
  municipalityInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  municipalityIcon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  municipalityName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  typeChip: {
    backgroundColor: '#e0e7ff',
    alignSelf: 'flex-start',
  },
  typeChipText: {
    color: '#6366f1',
    fontSize: 12,
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  positiveCircle: {
    backgroundColor: '#dcfce7',
  },
  negativeCircle: {
    backgroundColor: '#fef3f2',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  statEmoji: {
    fontSize: 12,
    marginTop: 2,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
    fontWeight: '500',
  },
  divider: {
    marginVertical: 20,
    backgroundColor: '#e2e8f0',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  topSubmissionItem: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  rankingContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  rankingNumber: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  submissionContent: {
    flex: 1,
  },
  submissionDescription: {
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 20,
    color: '#1e293b',
  },
  submissionMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  voteChip: {
    marginBottom: 4,
  },
  submissionDate: {
    fontSize: 12,
    color: '#64748b',
  },
  submissionScore: {
    fontSize: 12,
    color: '#6366f1',
    fontWeight: 'bold',
  },
  mapCard: {
    borderRadius: 16,
    backgroundColor: 'white',
  },
  mapDescription: {
    color: '#64748b',
    marginBottom: 16,
    fontSize: 14,
  },
  mapContainer: {
    height: 300,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#e2e8f0',
  },
  map: {
    flex: 1,
  },
  customMarker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#6366f1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  markerContainer: {
    alignItems: 'center',
  },
  markerEmoji: {
    fontSize: 20,
    marginBottom: 2,
  },
  markerText: {
    fontSize: 10,
    color: '#1e293b',
    fontWeight: 'bold',
  },
  mapLegend: {
    marginTop: 16,
    paddingVertical: 10,
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  legendText: {
    fontWeight: 'bold',
    color: '#1e293b',
    flex: 1,
    marginRight: 10,
  },
  percentageContainer: {
    flexDirection: 'row',
    gap: 4,
    minWidth: 80,
    justifyContent: 'flex-end',
  },
  percentageText: {
    fontSize: 12,
    color: '#64748b',
  },

  summaryCard: {
    borderRadius: 16,
    backgroundColor: 'white',
  },
  summaryList: {
    gap: 12,
  },
  summaryItem: {
    padding: 12,
    backgroundColor: '#f8fafc',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  summaryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  summaryIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  summaryIcon: {
    fontSize: 20,
  },
  summaryTextContainer: {
    flex: 1,
  },
  summaryName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 2,
  },
  summaryType: {
    fontSize: 12,
    color: '#64748b',
  },
  percentageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  percentageItem: {
    alignItems: 'center',
    flex: 1,
  },
  percentageLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  positivePercentage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  negativePercentage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ef4444',
  },
  voteCount: {
    fontSize: 10,
    color: '#64748b',
    marginTop: 2,
  },
  voteCountContainer: {
    alignItems: 'center',
    marginTop: 2,
  },
  voteCountNumber: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#64748b',
    textAlign: 'center',
  },
  voteCountText: {
    fontSize: 9,
    color: '#64748b',
    textAlign: 'center',
  },
  totalItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  totalLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#64748b',
    marginBottom: 2,
    textAlign: 'center',
  },
  totalCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
  },
  listCard: {
    borderRadius: 16,
    backgroundColor: 'white',
  },
  municipalityList: {
    gap: 12,
  },
  listItem: {
    padding: 12,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  listItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  listIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  listIcon: {
    fontSize: 16,
  },
  listTextContainer: {
    flex: 1,
  },
  listName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 2,
  },
  listType: {
    fontSize: 11,
    color: '#64748b',
  },
  listPercentageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  listPercentageItem: {
    alignItems: 'center',
    flex: 1,
  },
  listPercentageLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 2,
  },
  listPositivePercentage: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  listNegativePercentage: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ef4444',
  },
  bestCard: {
    borderRadius: 16,
    backgroundColor: '#fef7ed',
    borderColor: '#f59e0b',
    borderWidth: 2,
  },
  bestItem: {
    padding: 16,
    backgroundColor: '#fff7ed',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fed7aa',
  },
  bestHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  bestIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fef3c7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  bestIcon: {
    fontSize: 24,
  },
  bestTextContainer: {
    flex: 1,
  },
  bestName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#92400e',
    marginBottom: 4,
  },
  bestType: {
    fontSize: 12,
    color: '#a16207',
  },
  bestPercentageContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  bestPercentageLabel: {
    fontSize: 14,
    color: '#92400e',
    marginBottom: 4,
  },
  bestPercentage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#10b981',
  },
  bestNote: {
    padding: 12,
    backgroundColor: '#fef3c7',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fbbf24',
  },
  bestNoteText: {
    fontSize: 14,
    color: '#92400e',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  detailButtonContainer: {
    marginTop: 20,
  },
  detailButton: {
    backgroundColor: '#6366f1',
    borderRadius: 12,
    paddingVertical: 4,
  },
  detailButtonLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
}); 