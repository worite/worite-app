import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
    Alert,
    Dimensions,
    Image,
    KeyboardAvoidingView,
    Platform,
    Text as RNText,
    TextInput as RNTextInput,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import {
    Button,
    Card,
    Paragraph,
    Surface,
    Text,
    Title
} from 'react-native-paper';
import CustomCamera from '../components/CustomCamera';
import { useLocation } from '../context/LocationContext';
// import { getCooldownInfo, saveLastSubmissionTime, formatTimeRemaining } from '../utils/cooldown';

const { width } = Dimensions.get('window');

interface Submission {
  photo: string | null;
  vote: 'positive' | 'negative' | null;
  description: string;
  municipalityId: string;
  location?: {
    latitude: number;
    longitude: number;
    address?: string;
  };
}

export default function SubmitScreen() {
  const scrollViewRef = useRef<ScrollView>(null);
  const descriptionInputRef = useRef<RNTextInput>(null);
  const descriptionSectionRef = useRef<View>(null);
  const { locationData, selectedMunicipalities, setSelectedMunicipalities } = useLocation();
  
  const [submission, setSubmission] = useState<Submission>({
    photo: null,
    vote: null,
    description: '',
    municipalityId: selectedMunicipalities.length > 0 ? selectedMunicipalities[0].id : '1', // Seçili belediyelerden ilkini kullan
    location: locationData || undefined
  });
  const [loading, setLoading] = useState(false);
  const [photoLoading, setPhotoLoading] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  // const [cooldownInfo, setCooldownInfo] = useState<any>(null);
  // const [cooldownLoading, setCooldownLoading] = useState(true);

  // Uygulama başlangıcında tüm verileri temizle
  useEffect(() => {
    clearAllData();
  }, []);

  const clearAllData = async () => {
    try {
      await AsyncStorage.removeItem('evaluations');
      console.log('Tüm değerlendirme verileri temizlendi');
    } catch (error) {
      console.error('Veri temizleme hatası:', error);
    }
  };

  // useEffect(() => {
  //   // Test için: Değerlendirme verilerini sıfırla
  //   AsyncStorage.removeItem('evaluations');
  // }, []);

  // useEffect(() => {
  //   // checkCooldown(); // Geçici olarak devre dışı
  // }, []);

  // const checkCooldown = async () => {
  //   setCooldownLoading(true);
  //   try {
  //     const info = await getCooldownInfo();
  //     setCooldownInfo(info);
  //     
  //     if (!info.canSubmit) {
  //       Alert.alert(
  //         'Bekleme Süresi',
  //         `24 saat içinde sadece bir gönderi yapabilirsiniz.\n\nKalan süre: ${formatTimeRemaining(info.remainingHours, info.remainingMinutes, info.remainingSeconds)}`,
  //         [
  //           {
  //             text: 'Raporları Görüntüle',
  //             onPress: () => router.push('/reports')
  //           },
  //           {
  //             text: 'Ana Sayfaya Dön',
  //             onPress: () => router.push('/'),
  //             style: 'cancel'
  //           }
  //         ]
  //       );
  //     }
  //   } catch (error) {
  //     console.error('Error checking cooldown:', error);
  //   } finally {
  //     setCooldownLoading(false);
  //   }
  // };

  // Google Cloud Vision API ile fotoğrafı analiz et
  // const analyzePhotoWithAI = async (photoUri: string) => {
  //   try {
  //     const base64 = await FileSystem.readAsStringAsync(photoUri, {
  //       encoding: FileSystem.EncodingType.Base64,
  //     });
  //     const API_KEY = 'AIzaSyAWICRGSqdkHPFrIaH3g1yU3NgcP4Vxhf0';
  //     const url = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;
  //     const body = JSON.stringify({
  //       requests: [
  //         {
  //           image: { content: base64 },
  //           features: [
  //             { type: 'SAFE_SEARCH_DETECTION' },
  //             { type: 'FACE_DETECTION' }
  //           ]
  //         }
  //       ]
  //     });
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body,
  //     });
  //     const result = await response.json();
  //     const annotation = result.responses[0];
  //     const safe = annotation.safeSearchAnnotation;
  //     const faces = annotation.faceAnnotations || [];
  //     let reasons = [];
  //     // Sadece VERY_LIKELY olanları engelle
  //     if (safe?.adult === 'VERY_LIKELY') reasons.push('Müstehcenlik');
  //     if (safe?.violence === 'VERY_LIKELY') reasons.push('Şiddet');
  //     if (safe?.racy === 'VERY_LIKELY') reasons.push('Müstehcen veya uygunsuz içerik');
  //     if (safe?.medical === 'VERY_LIKELY') reasons.push('Tıbbi içerik');
  //     if (safe?.spoof === 'VERY_LIKELY') reasons.push('Sahte içerik');
  //     if (faces.length > 0) reasons.push('İnsan yüzü');
  //     if (reasons.length > 0) {
  //       return { ok: false, reason: reasons.join(', ') };
  //     }
  //     return { ok: true };
  //   } catch (error) {
  //     console.log('AI analiz hatası:', error);
  //     return { ok: null, error };
  //   }
  // };

  const takePhoto = async () => {
    setPhotoLoading(true);
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('İzin Gerekli', 'Kamera izni verilmedi.');
        return;
      }
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });
      if (!result.canceled && result.assets[0]) {
        setSubmission(prev => ({
          ...prev,
          photo: result.assets[0].uri
        }));
        scrollToCenter();
      }
    } catch (error) {
      Alert.alert('Hata', 'Fotoğraf çekilemedi.');
    } finally {
      setPhotoLoading(false);
    }
  };

  const retakePhoto = () => {
    setSubmission(prev => ({
      ...prev,
      photo: null
    }));
    
    // Yeniden çek butonuna basıldığında sayfanın ortasına scroll yap
    scrollToCenter();
  };

  const scrollToCenter = () => {
    setTimeout(() => {
      scrollViewRef.current?.scrollTo({
        y: 400, // Sayfanın ortası için sabit pozisyon
        animated: true
      });
    }, 100);
  };

  const handleVote = (vote: 'positive' | 'negative') => {
    setSubmission(prev => ({
      ...prev,
      vote
    }));
    
    // Değerlendirme verdikten sonra sayfanın ortasına scroll yap
    scrollToCenter();
  };

  const handleDescriptionFocus = () => {
    // Açıklama kutusuna focus olduğunda manuel scroll yap
    setTimeout(() => {
      scrollViewRef.current?.scrollTo({
        y: 650, // Daha yukarı pozisyon
        animated: true
      });
    }, 300);
    console.log('Açıklama kutusuna focus oldu');
  };

  const handleSubmit = async () => {
    if (!submission.photo) {
      Alert.alert('Fotoğraf Gerekli', 'Lütfen bir fotoğraf çekin.');
      return;
    }
    if (!submission.vote) {
      Alert.alert('Puanlama Gerekli', 'Lütfen pozitif veya negatif puanlama yapın.');
      return;
    }
    if (!submission.description.trim()) {
      Alert.alert('Açıklama Gerekli', 'Lütfen değerlendirmenizi açıklayın.');
      return;
    }

    setLoading(true);
    try {
      // Seçili belediyeyi context'e kaydet
      if (selectedMunicipalities.length === 0) {
        const defaultMunicipality = {
          id: submission.municipalityId,
          name: 'Seçili Belediye', // Varsayılan belediye adı
          type: 'ilçe' as const
        };
        setSelectedMunicipalities([defaultMunicipality]);
      }

      // Değerlendirme verisini oluştur
      const evaluation = {
        id: Date.now().toString(),
        photo: submission.photo,
        type: submission.vote,
        description: submission.description.trim(),
        municipalityName: selectedMunicipalities.length > 0 ? selectedMunicipalities[0].name : 'Şehitkamil',
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
        location: submission.location,
        image: submission.photo
      };

      // Mevcut değerlendirmeleri yükle ve yenisini ekle
      const existingEvaluations = await AsyncStorage.getItem('evaluations');
      const evaluations = existingEvaluations ? JSON.parse(existingEvaluations) : [];
      evaluations.push(evaluation);
      await AsyncStorage.setItem('evaluations', JSON.stringify(evaluations));
      
      // Başarı mesajı göster ve otomatik olarak raporlar sayfasına yönlendir
      Alert.alert(
        'Başarılı!', 
        'Değerlendirmeniz başarıyla kaydedildi.\n\nDuyarlı Vatandaşlığınız İçin Teşekkürler!',
        [
          {
            text: 'Tamam',
            onPress: () => router.push('/reports')
          }
        ]
      );
    } catch (error) {
      console.log('Değerlendirme kaydedilirken hata:', error);
      Alert.alert('Hata', 'Değerlendirme kaydedilemedi. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  // Fotoğrafı CustomCamera ile çek
  const handlePhotoTaken = (uri: string) => {
    setSubmission(prev => ({
      ...prev,
      photo: uri
    }));
    setShowCamera(false);
    scrollToCenter();
  };

  // Cooldown süresi varsa sadece uyarı göster
  // if (cooldownLoading) {
  //   return (
  //     <View style={styles.loadingContainer}>
  //       <Text style={styles.loadingText}>Kontrol ediliyor...</Text>
  //     </View>
  //   );
  // }

  // if (cooldownInfo && !cooldownInfo.canSubmit) {
  //   return (
  //     <View style={styles.container}>
  //       <LinearGradient
  //         colors={['#667eea', '#764ba2']}
  //         style={styles.headerGradient}
  //       >
  //         <View style={styles.header}>
  //           <Title style={styles.headerTitle}>⏰ Bekleme Süresi</Title>
  //           <Paragraph style={styles.headerSubtitle}>
  //             24 saat içinde sadece bir gönderi yapabilirsiniz
  //           </Paragraph>
  //         </View>
  //       </LinearGradient>

  //       <View style={styles.cooldownContainer}>
  //         <Surface style={styles.surface}>
  //           <Card style={styles.card}>
  //             <Card.Content style={styles.cardContent}>
  //               <View style={styles.cooldownIcon}>
  //                 <Text style={styles.cooldownEmoji}>⏳</Text>
  //               </View>
  //               
  //               <Title style={styles.cooldownTitle}>
  //                 Yeni Gönderi İçin Bekleyin
  //               </Title>
  //               
  //               <Paragraph style={styles.cooldownDescription}>
  //                 Son gönderinizden sonra 24 saat geçmesi gerekiyor.
  //               </Paragraph>

  //               <View style={styles.timerContainer}>
  //                 <Text style={styles.timerLabel}>Kalan Süre:</Text>
  //                 <Text style={styles.timerText}>
  //                   {formatTimeRemaining(
  //                     cooldownInfo.remainingHours,
  //                     cooldownInfo.remainingMinutes,
  //                     cooldownInfo.remainingSeconds
  //                   )}
  //                 </Text>
  //               </View>

  //               <View style={styles.buttonContainer}>
  //                 <Button
  //                   mode="contained"
  //                   onPress={() => router.push('/reports')}
  //                   style={styles.reportsButton}
  //                   icon="chart-bar"
  //                   labelStyle={styles.buttonLabel}
  //                 >
  //                   Raporları Görüntüle
  //                 </Button>
  //                 
  //                 <Button
  //                   mode="outlined"
  //                   onPress={() => router.push('/')}
  //                   style={styles.homeButton}
  //                   icon="home"
  //                   labelStyle={styles.outlinedButtonLabel}
  //                 >
  //                   Ana Sayfaya Dön
  //                 </Button>
  //               </View>
  //             </Card.Content>
  //           </Card>
  //         </Surface>
  //       </View>
  //     </View>
  //   );
  // }

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 80}
    >
      {/* Kamera Modalı */}
      {showCamera && (
        <View style={{ position: 'absolute', zIndex: 100, top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'black' }}>
          <CustomCamera 
            onPhotoTaken={handlePhotoTaken}
            onCancel={() => setShowCamera(false)}
          />
        </View>
      )}
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.headerGradient}
      >
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.push('/')}
            activeOpacity={0.7}
          >
            <Text style={styles.backButtonIcon}>←</Text>
          </TouchableOpacity>
          <Title style={styles.headerTitle}>📸 Gönderi Oluştur</Title>
          <Paragraph style={styles.headerSubtitle}>
            Belediye hizmetini fotoğraflayın ve değerlendirin
          </Paragraph>
        </View>
      </LinearGradient>

      <ScrollView 
        ref={scrollViewRef}
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
        keyboardDismissMode="interactive"
      >
        <View style={styles.content}>
          {/* Belediye Bilgisi */}
          {selectedMunicipalities.length > 0 && (
            <View style={styles.municipalityInfo}>
              <Text style={styles.municipalityLabel}>📋 Seçili Belediyeler:</Text>
              {selectedMunicipalities.map((municipality, index) => (
                <Text key={municipality.id} style={styles.municipalityText}>
                  {index + 1}. {municipality.name} ({municipality.type === 'büyükşehir' ? 'Büyükşehir' : 'İlçe'})
                </Text>
              ))}
            </View>
          )}
          {/* Fotoğraf Bölümü */}
          <Surface style={styles.surface}>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionIcon}>📸</Text>
                  <Title style={styles.sectionTitle}>Fotoğraf</Title>
                </View>
                <Paragraph style={styles.sectionSubtitle}>
                  Belediye hizmetiyle ilgili durumu fotoğraflayın
                </Paragraph>
                
                {submission.photo ? (
                  <View style={styles.photoPreviewContainer}>
                    <Image source={{ uri: submission.photo }} style={styles.photoPreview} />
                    {locationData && (
                      <View style={styles.locationInfo}>
                        <Text style={styles.locationLabel}>📍 Konum:</Text>
                        <RNText style={styles.locationText} 
                                numberOfLines={2} 
                                ellipsizeMode="tail"
                                adjustsFontSizeToFit={true}>
                          {locationData.address || `Enlem: ${locationData.latitude.toFixed(6)}, Boylam: ${locationData.longitude.toFixed(6)}`}
                        </RNText>
                      </View>
                    )}
                    <View style={styles.photoActionButtons}>
                      <Button 
                        mode="outlined" 
                        onPress={() => setSubmission(prev => ({ ...prev, photo: null }))}
                        icon="camera"
                        style={styles.retakeButton}
                        labelStyle={styles.retakeButtonLabel}
                      >
                        Tekrar Çek
                      </Button>
                    </View>
                  </View>
                ) : (
                  <View style={styles.photoPlaceholder}>
                    <Text style={styles.photoPlaceholderIcon}>📷</Text>
                    <Text style={styles.photoPlaceholderText}>
                      Henüz fotoğraf eklenmedi
                    </Text>
                    <Button 
                      mode="contained" 
                      onPress={() => setShowCamera(true)}
                      icon="camera"
                      loading={photoLoading}
                      style={styles.photoButton}
                      labelStyle={styles.photoButtonLabel}
                    >
                      Fotoğraf Ekle
                    </Button>
                  </View>
                )}
              </Card.Content>
            </Card>
          </Surface>

          {/* Değerlendirme Bölümü */}
          <Surface style={styles.surface}>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionIcon}>🗳️</Text>
                  <Title style={styles.sectionTitle}>Worite Puanı Veriniz!</Title>
                </View>
                <Paragraph style={styles.sectionSubtitle}>
                  Bu belediye hizmeti hakkında ne düşünüyorsunuz?
                </Paragraph>
                
                <View style={styles.voteContainer}>
                  <Button
                    mode={submission.vote === 'positive' ? 'contained' : 'outlined'}
                    onPress={() => handleVote('positive')}
                    icon="thumb-up"
                    style={[
                      styles.voteButton, 
                      submission.vote === 'positive' && styles.positiveVote
                    ]}
                    labelStyle={[
                      styles.voteButtonLabel,
                      submission.vote === 'positive' && styles.positiveVoteLabel
                    ]}
                    contentStyle={styles.voteButtonContent}
                  >
                    👍 Olumlu
                  </Button>
                  
                  <Button
                    mode={submission.vote === 'negative' ? 'contained' : 'outlined'}
                    onPress={() => handleVote('negative')}
                    icon="thumb-down"
                    style={[
                      styles.voteButton, 
                      submission.vote === 'negative' && styles.negativeVote
                    ]}
                    labelStyle={[
                      styles.voteButtonLabel,
                      submission.vote === 'negative' && styles.negativeVoteLabel
                    ]}
                    contentStyle={styles.voteButtonContent}
                  >
                    👎🏽 Olumsuz
                  </Button>
                </View>
              </Card.Content>
            </Card>
          </Surface>

          {/* Açıklama Bölümü */}
          <Surface style={styles.surface}>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionIcon}>💬</Text>
                  <Title style={styles.sectionTitle}>Düşünceleriniz</Title>
                </View>
                <Paragraph style={styles.sectionSubtitle}>
                  Düşüncelerinizi paylaşın (maksimum 200 karakter)
                </Paragraph>
                
                <View style={styles.inputContainer} ref={descriptionSectionRef}>
                  <RNTextInput
                    ref={descriptionInputRef}
                    placeholder="Düşüncelerinizi buraya yazınız..."
                    placeholderTextColor="#9ca3af"
                    value={submission.description}
                    onChangeText={(text) => setSubmission(prev => ({
                      ...prev,
                      description: text.slice(0, 200)
                    }))}
                    multiline
                    numberOfLines={3}
                    maxLength={200}
                    style={styles.nativeTextInput}
                    onFocus={handleDescriptionFocus}
                  />
                </View>
                
                <Text style={styles.characterCount}>
                  {submission.description.length}/200 karakter
                </Text>
              </Card.Content>
            </Card>
          </Surface>

          {/* Gönder Butonu */}
          <Button
            mode="contained"
            onPress={handleSubmit}
            loading={loading}
            disabled={!submission.photo || !submission.vote}
            style={styles.submitButton}
            icon="send"
            labelStyle={styles.submitButtonLabel}
            contentStyle={styles.submitButtonContent}
          >
            Gönder
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    paddingTop: 10,
    position: 'relative',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
  },
  headerSubtitle: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 13,
    lineHeight: 17,
  },
  cooldownContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  cooldownIcon: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cooldownEmoji: {
    fontSize: 64,
  },
  cooldownTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: '#1e293b',
  },
  cooldownDescription: {
    textAlign: 'center',
    color: '#64748b',
    marginBottom: 24,
    fontSize: 16,
    lineHeight: 22,
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 32,
    padding: 20,
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
  },
  timerLabel: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  timerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6366f1',
  },
  buttonContainer: {
    gap: 12,
  },
  reportsButton: {
    backgroundColor: '#6366f1',
    borderRadius: 12,
  },
  homeButton: {
    borderColor: '#6366f1',
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  outlinedButtonLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6366f1',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 200, // Daha fazla padding
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
  card: {
    borderRadius: 16,
    backgroundColor: 'white',
  },
  cardContent: {
    padding: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  sectionSubtitle: {
    color: '#64748b',
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 20,
  },
  photoPreviewContainer: {
    alignItems: 'center',
  },
  photoPreview: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  photoPreviewActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 12,
  },
  photoPreviewButton: {
    flex: 1,
    borderRadius: 8,
  },
  photoPreviewButtonLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  photoPlaceholder: {
    alignItems: 'center',
    padding: 40,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    borderStyle: 'dashed',
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: '#f8fafc',
  },
  photoPlaceholderIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  photoPlaceholderText: {
    color: '#64748b',
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  photoButton: {
    backgroundColor: '#6366f1',
    borderRadius: 8,
    paddingHorizontal: 24,
  },
  photoButtonLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  voteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 12,
  },
  voteButton: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 2,
  },
  positiveVote: {
    backgroundColor: '#10b981',
    borderColor: '#10b981',
  },
  negativeVote: {
    backgroundColor: '#ef4444',
    borderColor: '#ef4444',
  },
  voteButtonLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  positiveVoteLabel: {
    color: 'white',
  },
  negativeVoteLabel: {
    color: 'white',
  },
  voteButtonContent: {
    paddingVertical: 12,
  },
  descriptionInput: {
    marginBottom: 8,
    backgroundColor: '#f8fafc',
    minHeight: 80, // Daha yüksek input alanı
    color: '#000000', // Siyah yazı rengi
  },
  characterCount: {
    textAlign: 'right',
    color: '#64748b',
    fontSize: 12,
    marginBottom: 8, // 20'den 8'e düşürdük
  },
  submitButton: {
    marginTop: 8, // 20'den 8'e düşürdük
    marginBottom: 40,
    backgroundColor: '#6366f1',
    borderRadius: 12,
    elevation: 4,
  },
  submitButtonLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  submitButtonContent: {
    paddingVertical: 12,
  },
  photoActionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 12,
    marginTop: 10,
  },
  retakeButton: {
    flex: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  retakeButtonLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  usePhotoButton: {
    flex: 1,
    backgroundColor: '#10b981',
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  usePhotoButtonLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
  },
  inputContainer: {
    marginBottom: 8,
    backgroundColor: '#f8fafc',
    minHeight: 80, // Daha küçük input alanı
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  nativeTextInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000', // Siyah yazı rengi
    padding: 0, // React Native TextInput'un varsayılan padding'ini kaldır
    textAlignVertical: 'top', // Android için üstten başla
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 1,
  },
  backButtonIcon: {
    fontSize: 24,
    color: 'white',
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#e0e7ff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#bac8ff',
    maxWidth: '100%',
  },
  locationLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4f46e5',
    marginRight: 8,
    flexShrink: 0,
  },
  locationText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
    flexWrap: 'wrap',
  },
  municipalityInfo: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  municipalityLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4f46e5',
    marginBottom: 8,
  },
  municipalityText: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 4,
  },
}); 