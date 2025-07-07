import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Dimensions, Image, Modal, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator, Card, Chip, IconButton, Paragraph, Title } from 'react-native-paper';

const { width } = Dimensions.get('window');

interface Evaluation {
  id: string;
  date: string;
  time: string;
  type: 'positive' | 'negative';
  description: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  image?: string;
  municipalityName: string;
}

export default function MunicipalityDetailScreen() {
  const { municipalityId, municipalityName } = useLocalSearchParams();
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageModalVisible, setImageModalVisible] = useState(false);

  useEffect(() => {
    loadEvaluations();
  }, []);

  const loadEvaluations = async () => {
    try {
      // AsyncStorage'dan gerçek değerlendirmeleri yükle
      const storedEvaluations = await AsyncStorage.getItem('evaluations');
      if (storedEvaluations) {
        const allEvaluations: Evaluation[] = JSON.parse(storedEvaluations);
        // Sadece seçilen belediyeye ait değerlendirmeleri filtrele
        const filteredEvaluations = allEvaluations.filter(
          evaluation => evaluation.municipalityName === municipalityName
        );
        // Değerlendirmeleri tarih ve saate göre yeniden eskiye doğru sırala (en son yapılan en üstte)
        const sortedEvaluations = filteredEvaluations.sort((a, b) => {
          const dateA = new Date(`${a.date}T${a.time}`);
          const dateB = new Date(`${b.date}T${b.time}`);
          return dateB.getTime() - dateA.getTime(); // Yeniden eskiye
        });
        setEvaluations(sortedEvaluations);
      } else {
        setEvaluations([]);
      }
    } catch (error) {
      console.log('Değerlendirmeler yüklenirken hata:', error);
      setEvaluations([]);
    } finally {
      setLoading(false);
    }
  };

  const handleViewPDF = (evaluation: Evaluation) => {
    // PDF görüntüleme sayfasına yönlendir
    router.push({
      pathname: '/pdf-viewer' as any,
      params: { 
        evaluationId: evaluation.id,
        municipalityName: evaluation.municipalityName
      }
    });
  };

  const handleImagePress = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setImageModalVisible(true);
  };

  const closeImageModal = () => {
    setImageModalVisible(false);
    setSelectedImage(null);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return format(date, 'dd MMMM yyyy', { locale: tr });
  };

  const formatTime = (timeStr: string) => {
    return timeStr;
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6366f1" />
        <Paragraph style={styles.loadingText}>Değerlendirmeler yükleniyor...</Paragraph>
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
          <Title style={styles.pageTitle}>{municipalityName}</Title>
          <Paragraph style={styles.pageSubtitle}>
            Son Değerlendirmeler ({evaluations.length})
          </Paragraph>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {evaluations.map((evaluation) => (
          <Card key={evaluation.id} style={styles.evaluationCard}>
            <Card.Content style={styles.cardContent}>
              <View style={styles.evaluationHeader}>
                <View style={styles.dateTimeContainer}>
                  <Paragraph style={styles.dateText}>
                    📅 {formatDate(evaluation.date)}
                  </Paragraph>
                  <Paragraph style={styles.timeText}>
                    🕐 {formatTime(evaluation.time)}
                  </Paragraph>
                </View>
                <Chip
                  style={[
                    styles.typeChip,
                    evaluation.type === 'positive' ? styles.positiveChip : styles.negativeChip
                  ]}
                  textStyle={styles.typeChipText}
                >
                  {evaluation.type === 'positive' ? '👍 Pozitif' : '👎 Negatif'}
                </Chip>
              </View>

              <Paragraph style={styles.descriptionText}>
                {evaluation.description}
              </Paragraph>

              <View style={styles.locationContainer}>
                <Paragraph style={styles.locationText}>
                  📍 {evaluation.location.address}
                </Paragraph>
              </View>

              {evaluation.image && (
                <View style={styles.imageContainer}>
                  <TouchableOpacity 
                    style={styles.imageWrapper}
                    onPress={() => handleImagePress(evaluation.image!)}
                  >
                    <Image 
                      source={{ uri: evaluation.image }}
                      style={styles.evaluationImage}
                      resizeMode="cover"
                    />
                    <LinearGradient
                      colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
                      style={styles.imageOverlay}
                    >
                      <Paragraph style={styles.imageText}>
                        📷 Fotoğrafı Görüntüle
                      </Paragraph>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              )}

              <TouchableOpacity
                style={styles.pdfButton}
                onPress={() => handleViewPDF(evaluation)}
              >
                <Paragraph style={styles.pdfButtonText}>
                  📄 PDF Görüntüle
                </Paragraph>
              </TouchableOpacity>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

      {/* Image Modal */}
      <Modal
        visible={imageModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeImageModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <IconButton
                icon="close"
                size={24}
                onPress={closeImageModal}
                style={styles.closeButton}
              />
            </View>
            {selectedImage && (
              <Image
                source={{ uri: selectedImage }}
                style={styles.modalImage}
                resizeMode="contain"
              />
            )}
          </View>
        </View>
      </Modal>
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
  evaluationCard: {
    marginBottom: 16,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    backgroundColor: 'white',
  },
  cardContent: {
    padding: 20,
    backgroundColor: 'white',
  },
  evaluationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  dateTimeContainer: {
    flex: 1,
  },
  dateText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  timeText: {
    fontSize: 12,
    color: '#64748b',
  },
  typeChip: {
    alignSelf: 'flex-start',
  },
  positiveChip: {
    backgroundColor: '#dcfce7',
  },
  negativeChip: {
    backgroundColor: '#fef3f2',
  },
  typeChipText: {
    fontSize: 12,
    fontWeight: '500',
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#1e293b',
    marginBottom: 16,
  },
  locationContainer: {
    marginBottom: 12,
  },
  locationText: {
    fontSize: 12,
    color: '#64748b',
  },
  imageContainer: {
    marginBottom: 16,
  },
  imageText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  pdfButton: {
    backgroundColor: '#6366f1',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  pdfButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  imageWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  evaluationImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    backgroundColor: '#f8fafc',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 80,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    height: '80%',
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 8,
    backgroundColor: 'white',
  },
  closeButton: {
    margin: 0,
  },
  modalImage: {
    flex: 1,
    width: '100%',
  },
}); 