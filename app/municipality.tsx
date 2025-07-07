import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Button, Card, Paragraph, Surface, Title } from 'react-native-paper';
import { useLocation } from '../context/LocationContext';
import { findCityByLocation, turkeyCities } from '../utils/turkeyData';

const { width } = Dimensions.get('window');

interface Municipality {
  id: string;
  name: string;
  type: 'büyükşehir' | 'ilçe';
  selected: boolean;
  logo: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

interface LocationData {
  latitude: number;
  longitude: number;
  address?: string;
}

export default function MunicipalitySelection() {
  const [municipalities, setMunicipalities] = useState<Municipality[]>([]);
  const [loading, setLoading] = useState(true);
  const [mapRegion, setMapRegion] = useState({
    latitude: 41.0082,
    longitude: 28.9784,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [selectedMunicipality, setSelectedMunicipality] = useState<Municipality | null>(null);
  const [allMunicipalities, setAllMunicipalitiesLocal] = useState<Municipality[]>([]);
  
  const { locationData, setLocationData, setSelectedMunicipalities } = useLocation();

  useEffect(() => {
    // Konum al ve belediyeleri yükle
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('İzin Gerekli', 'Konum izni verilmedi.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const newLocationData: LocationData = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };

      // Adres bilgisini al
      try {
        const addressResponse = await Location.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        
        if (addressResponse.length > 0) {
          const address = addressResponse[0];
          newLocationData.address = `${address.street || ''} ${address.district || ''} ${address.city || ''}`.trim();
        }
      } catch (error) {
        console.log('Adres alınamadı:', error);
      }

      setLocationData(newLocationData);
      
      // Harita bölgesini güncelle
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      console.log('Konum alındı:', newLocationData);
      
      // Belediyeleri konuma göre yükle
      await loadMunicipalitiesByLocation(location.coords.latitude, location.coords.longitude);
    } catch (error) {
      Alert.alert('Hata', 'Konum alınamadı.');
      console.log('Konum alma hatası:', error);
      // Hata durumunda tüm Türkiye'yi göster
      loadAllTurkeyMunicipalities();
    }
  };

  const loadMunicipalitiesByLocation = async (latitude: number, longitude: number) => {
    try {
      setLoading(true);

      // Konumdan şehir bul
      const currentCity = findCityByLocation(latitude, longitude);
      
      if (currentCity) {
        console.log(`Şehir bulundu: ${currentCity.name} - ${currentCity.municipalities.length} belediye`);
        
        // Şehrin tüm belediyelerini dönüştür
        const cityMunicipalities = currentCity.municipalities.map(municipality => ({
          id: municipality.id,
          name: municipality.name,
          type: municipality.type as 'büyükşehir' | 'ilçe',
          selected: false,
          logo: municipality.type === 'büyükşehir' ? '🏛️' : '🏢',
          coordinates: municipality.coordinates
        }));
        
        setMunicipalities(cityMunicipalities);
        setAllMunicipalitiesLocal(cityMunicipalities);
        
        // Harita bölgesini şehir merkezine ayarla
        setMapRegion({
          latitude: currentCity.coordinates.latitude,
          longitude: currentCity.coordinates.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        });
      } else {
        // Konum bulunamazsa tüm Türkiye'yi göster
        console.log('Konum bulunamadı, tüm Türkiye gösteriliyor');
        loadAllTurkeyMunicipalities();
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Belediye yükleme hatası:', error);
      loadAllTurkeyMunicipalities();
      setLoading(false);
    }
  };

  const loadAllTurkeyMunicipalities = () => {
    // Tüm Türkiye'deki belediyeleri yükle (ilk 50 şehir)
    const allMunicipalities = turkeyCities.slice(0, 50).flatMap(city => 
      city.municipalities.map(municipality => ({
        id: municipality.id,
        name: municipality.name,
        type: municipality.type as 'büyükşehir' | 'ilçe',
        selected: false,
        logo: municipality.type === 'büyükşehir' ? '🏛️' : '🏢',
        coordinates: municipality.coordinates
      }))
    );
    
    setMunicipalities(allMunicipalities);
    setAllMunicipalitiesLocal(allMunicipalities);
    
    // Türkiye merkezi
    setMapRegion({
      latitude: 39.9334,
      longitude: 32.8597,
      latitudeDelta: 10,
      longitudeDelta: 10,
    });
  };

  const toggleMunicipality = (id: string) => {
    setMunicipalities(prev => 
      prev.map(m => m.id === id ? { ...m, selected: !m.selected } : m)
    );
  };

  const handleContinue = async () => {
    if (!selectedMunicipality) {
      Alert.alert('Uyarı', 'Lütfen bir belediye seçin.');
      return;
    }
    // Seçili belediyeyi context'e kaydet
    setSelectedMunicipalities([
      { 
        id: selectedMunicipality.id, 
        name: selectedMunicipality.name, 
        type: selectedMunicipality.type,
        coordinates: selectedMunicipality.coordinates
      },
    ]);
    router.push('/submit');
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6366f1" />
        <Text style={styles.loadingText}>Belediyeler yükleniyor...</Text>
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
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.push('/')}
            activeOpacity={0.7}
          >
            <Text style={styles.backButtonIcon}>←</Text>
          </TouchableOpacity>
          <Title style={styles.title}>
            {selectedMunicipality ? selectedMunicipality.name : "Bir belediye seçiniz"}
          </Title>
        </View>
      </LinearGradient>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Konum Bilgisi Kartı */}
          {locationData && (
            <Surface style={styles.surface}>
              <Card style={styles.locationCard}>
                <Card.Content style={styles.cardContent}>
                  <View style={styles.cardHeader}>
                    <View style={styles.iconContainer}>
                      <Text style={styles.municipalityIcon}>📍</Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Title style={styles.locationTitle}>
                        Konumunuz tespit edildi
                      </Title>
                      <Paragraph style={styles.locationSubtitle}>
                        {locationData.address || `Enlem: ${locationData.latitude.toFixed(6)}, Boylam: ${locationData.longitude.toFixed(6)}`}
                      </Paragraph>
                    </View>
                  </View>
                </Card.Content>
              </Card>
            </Surface>
          )}

          <View style={styles.municipalityList}>
            {/* Belediye Seçim Kartı */}
            <Surface style={styles.surface}>
              <Card style={styles.municipalityCard}>
                <Card.Content style={styles.cardContent}>
                  <View style={styles.cardHeader}>
                    <View style={styles.iconContainer}>
                      <Text style={styles.municipalityIcon}>🏛️</Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Title style={styles.municipalityName}>
                        Eleştireceğiniz & Teşekkür Edeceğiniz Belediyeyi Seçiniz
                      </Title>
                    </View>
                  </View>
                  
                  {/* Belediye Seçim Butonu */}
                  <TouchableOpacity
                    style={styles.districtButton}
                    onPress={() => {
                      // Tüm belediyeleri sırala: büyükşehir en üstte, ilçeler alfabetik
                      const sortedMunicipalities = [...allMunicipalities].sort((a, b) => {
                        // Büyükşehir belediyesi her zaman en üstte
                        if (a.type === 'büyükşehir' && b.type === 'ilçe') return -1;
                        if (a.type === 'ilçe' && b.type === 'büyükşehir') return 1;
                        // İlçeler arasında alfabetik sıralama
                        if (a.type === 'ilçe' && b.type === 'ilçe') {
                          return a.name.localeCompare(b.name, 'tr');
                        }
                        return 0;
                      });

                      const buttons = sortedMunicipalities.map((m) => ({
                        text: m.name,
                        onPress: () => setSelectedMunicipality(m)
                      }));
                      
                      buttons.push({ text: 'İptal', onPress: () => {} });
                      
                      Alert.alert(
                        'Belediye Seçin',
                        'Eleştireceğiniz & Teşekkür Edeceğiniz Belediyeyi Seçiniz',
                        buttons
                      );
                    }}
                  >
                    <Text style={styles.districtButtonText}>
                      {selectedMunicipality
                        ? selectedMunicipality.name
                        : 'Konumunuza göre tespit edilen belediyeler (Tıklayınız!)'}
                    </Text>
                    <Text style={styles.districtButtonIcon}>▼</Text>
                  </TouchableOpacity>
                </Card.Content>
              </Card>
            </Surface>
          </View>

          {/* Konum Bölümü */}
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              region={mapRegion}
              showsUserLocation={true}
              showsMyLocationButton={true}
            >
              {locationData && (
                <Marker
                  coordinate={{
                    latitude: locationData.latitude,
                    longitude: locationData.longitude,
                  }}
                  title="Konumunuz"
                  description="Şu anki konumunuz"
                />
              )}
              
              {/* Seçili belediye marker'ı */}
              {selectedMunicipality && selectedMunicipality.coordinates && (
                <Marker
                  coordinate={{
                    latitude: selectedMunicipality.coordinates.latitude,
                    longitude: selectedMunicipality.coordinates.longitude,
                  }}
                  title={selectedMunicipality.name}
                  description="Seçili belediye"
                  pinColor="red"
                />
              )}
            </MapView>
          </View>

          {/* Devam Butonu */}
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={handleContinue}
              style={styles.continueButton}
              labelStyle={styles.continueButtonText}
              disabled={!selectedMunicipality}
            >
              Devam Et
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerGradient: {
    paddingTop: 50,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  backButtonIcon: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  surface: {
    marginBottom: 15,
    borderRadius: 12,
    elevation: 2,
  },
  locationCard: {
    backgroundColor: 'white',
    borderRadius: 12,
  },
  municipalityCard: {
    backgroundColor: 'white',
    borderRadius: 12,
  },
  cardContent: {
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  municipalityIcon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  locationSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  municipalityName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  municipalityList: {
    marginBottom: 20,
  },
  districtButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  districtButtonText: {
    flex: 1,
    fontSize: 16,
    color: '#495057',
    fontWeight: '500',
  },
  districtButtonIcon: {
    fontSize: 16,
    color: '#6c757d',
    marginLeft: 10,
  },
  mapContainer: {
    height: 300,
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 20,
  },
  continueButton: {
    backgroundColor: '#6366f1',
    borderRadius: 8,
    paddingVertical: 12,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: '#666',
  },
}); 