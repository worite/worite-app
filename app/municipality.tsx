import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Button, Card, Paragraph, Surface, Title } from 'react-native-paper';
import { useLocation } from '../context/LocationContext';

const { width } = Dimensions.get('window');

interface Municipality {
  id: string;
  name: string;
  type: 'büyükşehir' | 'ilçe';
  selected: boolean;
  logo: string;
  osmId?: string;
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
  const [selectedMetropolitan, setSelectedMetropolitan] = useState<Municipality | null>(null);
  const [availableDistricts, setAvailableDistricts] = useState<Municipality[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState<Municipality | null>(null);
  const [allMunicipalities, setAllMunicipalitiesLocal] = useState<Municipality[]>([]);
  const [selectedMunicipality, setSelectedMunicipality] = useState<Municipality | null>(null);
  
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
      // Hata durumunda mock veri yükle
      loadMockMunicipalities();
    }
  };

  const loadMunicipalitiesByLocation = async (latitude: number, longitude: number) => {
    try {
      setLoading(true);

      // Türkiye'deki büyükşehir belediyeleri ve koordinatları
      const turkishMunicipalities = [
        {
          id: 'istanbul_metropolitan',
          name: 'İstanbul Büyükşehir Belediyesi',
          type: 'büyükşehir' as const,
          logo: '🏛️',
          center: { lat: 41.0082, lng: 28.9784 },
          bounds: {
            north: 41.5, south: 40.5, east: 29.5, west: 28.5
          }
        },
        {
          id: 'ankara_metropolitan',
          name: 'Ankara Büyükşehir Belediyesi',
          type: 'büyükşehir' as const,
          logo: '🏛️',
          center: { lat: 39.9334, lng: 32.8597 },
          bounds: {
            north: 40.2, south: 39.7, east: 33.2, west: 32.5
          }
        },
        {
          id: 'izmir_metropolitan',
          name: 'İzmir Büyükşehir Belediyesi',
          type: 'büyükşehir' as const,
          logo: '🏛️',
          center: { lat: 38.4192, lng: 27.1287 },
          bounds: {
            north: 38.8, south: 38.0, east: 27.5, west: 26.8
          }
        },
        {
          id: 'bursa_metropolitan',
          name: 'Bursa Büyükşehir Belediyesi',
          type: 'büyükşehir' as const,
          logo: '🏛️',
          center: { lat: 40.1885, lng: 29.0610 },
          bounds: {
            north: 40.5, south: 39.9, east: 29.5, west: 28.6
          }
        },
        {
          id: 'antalya_metropolitan',
          name: 'Antalya Büyükşehir Belediyesi',
          type: 'büyükşehir' as const,
          logo: '🏛️',
          center: { lat: 36.8969, lng: 30.7133 },
          bounds: {
            north: 37.2, south: 36.6, east: 31.0, west: 30.4
          }
        },
        {
          id: 'adana_metropolitan',
          name: 'Adana Büyükşehir Belediyesi',
          type: 'büyükşehir' as const,
          logo: '🏛️',
          center: { lat: 37.0000, lng: 35.3213 },
          bounds: {
            north: 37.3, south: 36.7, east: 35.6, west: 35.0
          }
        },
        {
          id: 'konya_metropolitan',
          name: 'Konya Büyükşehir Belediyesi',
          type: 'büyükşehir' as const,
          logo: '🏛️',
          center: { lat: 37.8667, lng: 32.4833 },
          bounds: {
            north: 38.2, south: 37.5, east: 32.8, west: 32.2
          }
        },
        {
          id: 'gaziantep_metropolitan',
          name: 'Gaziantep Büyükşehir Belediyesi',
          type: 'büyükşehir' as const,
          logo: '🏛️',
          center: { lat: 37.0662, lng: 37.3833 },
          bounds: {
            north: 37.4, south: 36.8, east: 37.7, west: 37.1
          }
        },
        {
          id: 'mersin_metropolitan',
          name: 'Mersin Büyükşehir Belediyesi',
          type: 'büyükşehir' as const,
          logo: '🏛️',
          center: { lat: 36.8000, lng: 34.6333 },
          bounds: {
            north: 37.1, south: 36.5, east: 34.9, west: 34.4
          }
        },
        {
          id: 'diyarbakir_metropolitan',
          name: 'Diyarbakır Büyükşehir Belediyesi',
          type: 'büyükşehir' as const,
          logo: '🏛️',
          center: { lat: 37.9144, lng: 40.2306 },
          bounds: {
            north: 38.2, south: 37.6, east: 40.5, west: 40.0
          }
        },
        {
          id: 'samsun_metropolitan',
          name: 'Samsun Büyükşehir Belediyesi',
          type: 'büyükşehir' as const,
          logo: '🏛️',
          center: { lat: 41.2867, lng: 36.3300 },
          bounds: {
            north: 41.6, south: 41.0, east: 36.6, west: 36.0
          }
        },
        {
          id: 'denizli_metropolitan',
          name: 'Denizli Büyükşehir Belediyesi',
          type: 'büyükşehir' as const,
          logo: '🏛️',
          center: { lat: 37.7765, lng: 29.0864 },
          bounds: {
            north: 38.1, south: 37.5, east: 29.3, west: 28.8
          }
        },
        {
          id: 'eskisehir_metropolitan',
          name: 'Eskişehir Büyükşehir Belediyesi',
          type: 'büyükşehir' as const,
          logo: '🏛️',
          center: { lat: 39.7767, lng: 30.5206 },
          bounds: {
            north: 40.1, south: 39.5, east: 30.8, west: 30.2
          }
        },
        {
          id: 'urfa_metropolitan',
          name: 'Şanlıurfa Büyükşehir Belediyesi',
          type: 'büyükşehir' as const,
          logo: '🏛️',
          center: { lat: 37.1591, lng: 38.7969 },
          bounds: {
            north: 37.5, south: 36.8, east: 39.1, west: 38.5
          }
        },
        {
          id: 'malatya_metropolitan',
          name: 'Malatya Büyükşehir Belediyesi',
          type: 'büyükşehir' as const,
          logo: '🏛️',
          center: { lat: 38.3552, lng: 38.3095 },
          bounds: {
            north: 38.7, south: 38.0, east: 38.6, west: 38.0
          }
        }
      ];

      // Türkiye'deki il belediyeleri (büyükşehir olmayan)
      const cityMunicipalities = [
        { id: 'edirne_city', name: 'Edirne Belediyesi', type: 'ilçe' as const, logo: '🏛️', center: { lat: 41.6771, lng: 26.5557 } },
        { id: 'kirklareli_city', name: 'Kırklareli Belediyesi', type: 'ilçe' as const, logo: '🏛️', center: { lat: 41.7355, lng: 27.2256 } },
        { id: 'yalova_city', name: 'Yalova Belediyesi', type: 'ilçe' as const, logo: '🏛️', center: { lat: 40.6500, lng: 29.2667 } },
        { id: 'bolu_city', name: 'Bolu Belediyesi', type: 'ilçe' as const, logo: '🏛️', center: { lat: 40.7392, lng: 31.6089 } },
        { id: 'bartin_city', name: 'Bartın Belediyesi', type: 'ilçe' as const, logo: '🏛️', center: { lat: 41.6344, lng: 32.3375 } },
        { id: 'karabuk_city', name: 'Karabük Belediyesi', type: 'ilçe' as const, logo: '🏛️', center: { lat: 41.2061, lng: 32.6204 } },
        { id: 'cankiri_city', name: 'Çankırı Belediyesi', type: 'ilçe' as const, logo: '🏛️', center: { lat: 40.6013, lng: 33.6134 } },
        { id: 'sinop_city', name: 'Sinop Belediyesi', type: 'ilçe' as const, logo: '🏛️', center: { lat: 42.0231, lng: 35.1531 } },
        { id: 'adıyaman_city', name: 'Adıyaman Belediyesi', type: 'ilçe' as const, logo: '🏛️', center: { lat: 37.7648, lng: 38.2786 } },
        { id: 'karaman_city', name: 'Karaman Belediyesi', type: 'ilçe' as const, logo: '🏛️', center: { lat: 37.1811, lng: 33.2156 } },
        { id: 'nigde_city', name: 'Niğde Belediyesi', type: 'ilçe' as const, logo: '🏛️', center: { lat: 37.9667, lng: 34.6833 } },
        { id: 'nevsehir_city', name: 'Nevşehir Belediyesi', type: 'ilçe' as const, logo: '🏛️', center: { lat: 38.6244, lng: 34.7239 } },
        { id: 'kirsehir_city', name: 'Kırşehir Belediyesi', type: 'ilçe' as const, logo: '🏛️', center: { lat: 39.1425, lng: 34.1709 } },
        { id: 'tokat_city', name: 'Tokat Belediyesi', type: 'ilçe' as const, logo: '🏛️', center: { lat: 40.3167, lng: 36.5500 } },
        { id: 'amasya_city', name: 'Amasya Belediyesi', type: 'ilçe' as const, logo: '🏛️', center: { lat: 40.6499, lng: 35.8353 } },
        { id: 'kirikkale_city', name: 'Kırıkkale Belediyesi', type: 'ilçe' as const, logo: '🏛️', center: { lat: 39.8468, lng: 33.5153 } },
        { id: 'aksaray_city', name: 'Aksaray Belediyesi', type: 'ilçe' as const, logo: '🏛️', center: { lat: 38.3725, lng: 34.0254 } },
        { id: 'kutahya_city', name: 'Kütahya Belediyesi', type: 'ilçe' as const, logo: '🏛️', center: { lat: 39.4167, lng: 29.9833 } }
      ];

      // İlçe belediyeleri veritabanı
      const districtMunicipalities = [
        // İstanbul İlçeleri
        {
          id: 'kadikoy_district',
          name: 'Kadıköy Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'istanbul_metropolitan'
        },
        {
          id: 'besiktas_district',
          name: 'Beşiktaş Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'istanbul_metropolitan'
        },
        {
          id: 'sisli_district',
          name: 'Şişli Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'istanbul_metropolitan'
        },
        {
          id: 'uskudar_district',
          name: 'Üsküdar Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'istanbul_metropolitan'
        },
        {
          id: 'fatih_district',
          name: 'Fatih Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'istanbul_metropolitan'
        },
        // Ankara İlçeleri
        {
          id: 'cankaya_district',
          name: 'Çankaya Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'ankara_metropolitan'
        },
        {
          id: 'kecioren_district',
          name: 'Keçiören Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'ankara_metropolitan'
        },
        // İzmir İlçeleri
        {
          id: 'konak_district',
          name: 'Konak Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'izmir_metropolitan'
        },
        {
          id: 'bornova_district',
          name: 'Bornova Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'izmir_metropolitan'
        },
        // Bursa İlçeleri
        {
          id: 'nilufer_district',
          name: 'Nilüfer Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'bursa_metropolitan'
        },
        {
          id: 'osmangazi_district',
          name: 'Osmangazi Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'bursa_metropolitan'
        },
        // Gaziantep İlçeleri
        {
          id: 'sahinbey_district',
          name: 'Şahinbey Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'gaziantep_metropolitan'
        },
        {
          id: 'sehitkamil_district',
          name: 'Şehitkamil Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'gaziantep_metropolitan'
        },
        {
          id: 'nurdagi_district',
          name: 'Nurdağı Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'gaziantep_metropolitan'
        },
        {
          id: 'islahiye_district',
          name: 'İslahiye Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'gaziantep_metropolitan'
        },
        {
          id: 'araban_district',
          name: 'Araban Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'gaziantep_metropolitan'
        },
        {
          id: 'yavuzeli_district',
          name: 'Yavuzeli Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'gaziantep_metropolitan'
        },
        {
          id: 'oguzeli_district',
          name: 'Oğuzeli Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'gaziantep_metropolitan'
        },
        {
          id: 'karkamis_district',
          name: 'Karkamış Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'gaziantep_metropolitan'
        },
        // Antalya İlçeleri
        {
          id: 'muratpasa_district',
          name: 'Muratpaşa Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'antalya_metropolitan'
        },
        {
          id: 'kepez_district',
          name: 'Kepez Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'antalya_metropolitan'
        },
        {
          id: 'aksu_district',
          name: 'Aksu Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'antalya_metropolitan'
        },
        // Adana İlçeleri
        {
          id: 'seyhan_district',
          name: 'Seyhan Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'adana_metropolitan'
        },
        {
          id: 'ceukurova_district',
          name: 'Çukurova Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'adana_metropolitan'
        },
        {
          id: 'saricam_district',
          name: 'Sarıçam Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'adana_metropolitan'
        },
        // Konya İlçeleri
        {
          id: 'selcuklu_district',
          name: 'Selçuklu Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'konya_metropolitan'
        },
        {
          id: 'meram_district',
          name: 'Meram Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'konya_metropolitan'
        },
        {
          id: 'karatay_district',
          name: 'Karatay Belediyesi',
          type: 'ilçe' as const,
          logo: '🏢',
          parentMetropolitan: 'konya_metropolitan'
        }
      ];

      // Öncelikle reverse geocode ile adres bilgisini al
      let addressCity = '';
      let addressDistrict = '';
      try {
        const addressResponse = await Location.reverseGeocodeAsync({ latitude, longitude });
        if (addressResponse.length > 0) {
          addressCity = addressResponse[0].city || '';
          addressDistrict = addressResponse[0].district || '';
        }
      } catch (err) {
        console.log('Reverse geocode alınamadı:', err);
      }

      let detectedMunicipality: Municipality | null = null;
      let relatedDistricts: Municipality[] = [];
      let infoMessage = '';

      // 1. Önce ilçe belediyesi eşleşmesi
      let matchedDistrict = null;
      if (addressDistrict) {
        matchedDistrict = districtMunicipalities.find(d =>
          d.name.toLowerCase().includes(addressDistrict.toLowerCase())
        );
      }
      if (matchedDistrict) {
        detectedMunicipality = {
          id: matchedDistrict.id,
          name: matchedDistrict.name,
          type: matchedDistrict.type,
          selected: true,
          logo: matchedDistrict.logo
        };
        // Bağlı olduğu büyükşehir/il de eklenebilir
        const parent = turkishMunicipalities.find(m => m.id === matchedDistrict.parentMetropolitan);
        if (parent) {
          relatedDistricts = districtMunicipalities.filter(d => d.parentMetropolitan === parent.id).map(d => ({ ...d, selected: false }));
          detectedMunicipality = { ...detectedMunicipality, selected: false };
          // Büyükşehir en üstte, ilçe seçili
          setAllMunicipalitiesLocal([
            { id: parent.id, name: parent.name, type: parent.type, selected: false, logo: parent.logo },
            ...relatedDistricts
          ]);
          // setAllMunicipalities([
          //   { id: parent.id, name: parent.name, type: parent.type, selected: false, logo: parent.logo },
          //   ...relatedDistricts
          // ]);
        } else {
          setAllMunicipalitiesLocal([detectedMunicipality]);
          // setAllMunicipalities([detectedMunicipality]);
        }
        setSelectedMunicipality(detectedMunicipality);
        setSelectedMetropolitan(parent ? { ...parent, selected: false } : null);
        setLoading(false);
        return;
      }

      // 2. Büyükşehir/il belediyesi eşleşmesi (şehir adı ile)
      let matchedMetropolitan = null;
      if (addressCity) {
        matchedMetropolitan = turkishMunicipalities.find(m =>
          m.name.toLowerCase().includes(addressCity.toLowerCase())
        );
      }
      if (matchedMetropolitan) {
        detectedMunicipality = {
          id: matchedMetropolitan.id,
          name: matchedMetropolitan.name,
          type: matchedMetropolitan.type,
          selected: true,
          logo: matchedMetropolitan.logo
        };
        relatedDistricts = districtMunicipalities.filter(d => d.parentMetropolitan === matchedMetropolitan.id).map(d => ({ ...d, selected: false }));
        setAllMunicipalitiesLocal([
          { ...detectedMunicipality, selected: false },
          ...relatedDistricts
        ]);
        // setAllMunicipalities([
        //   { ...detectedMunicipality, selected: false },
        //   ...relatedDistricts
        // ]);
        setSelectedMunicipality(null);
        setSelectedMetropolitan(detectedMunicipality);
        setLoading(false);
        return;
      }

      // 3. İl belediyesi eşleşmesi (şehir adı ile, büyükşehir değilse)
      let matchedCity = null;
      if (addressCity) {
        matchedCity = cityMunicipalities.find(c =>
          c.name.toLowerCase().includes(addressCity.toLowerCase())
        );
      }
      if (matchedCity) {
        detectedMunicipality = {
          id: matchedCity.id,
          name: matchedCity.name,
          type: matchedCity.type,
          selected: true,
          logo: matchedCity.logo
        };
        setAllMunicipalitiesLocal([detectedMunicipality]);
        // setAllMunicipalities([detectedMunicipality]);
        setSelectedMunicipality(detectedMunicipality);
        setSelectedMetropolitan(null);
        setLoading(false);
        return;
      }

      // 4. Hiçbiri bulunamazsa eski bounds/mesafe algoritması
      // Belediye tespit et (büyükşehir veya il)
      detectedMunicipality = null;
      for (const metropolitan of turkishMunicipalities) {
        if (latitude >= metropolitan.bounds.south && 
            latitude <= metropolitan.bounds.north &&
            longitude >= metropolitan.bounds.west && 
            longitude <= metropolitan.bounds.east) {
          detectedMunicipality = {
            id: metropolitan.id,
            name: metropolitan.name,
            type: metropolitan.type,
            selected: true,
            logo: metropolitan.logo
          };
          break;
        }
      }
      if (!detectedMunicipality) {
        let closestCity = cityMunicipalities[0];
        let minDistance = Number.MAX_VALUE;
        for (const city of cityMunicipalities) {
          const distance = Math.sqrt(
            Math.pow(latitude - city.center.lat, 2) + 
            Math.pow(longitude - city.center.lng, 2)
          );
          if (distance < minDistance) {
            minDistance = distance;
            closestCity = city;
          }
        }
        detectedMunicipality = {
          id: closestCity.id,
          name: closestCity.name,
          type: closestCity.type,
          selected: true,
          logo: closestCity.logo
        };
      }
      if (!detectedMunicipality) {
        let closestMetropolitan = turkishMunicipalities[0];
        let minDistance = Number.MAX_VALUE;
        for (const metropolitan of turkishMunicipalities) {
          const distance = Math.sqrt(
            Math.pow(latitude - metropolitan.center.lat, 2) + 
            Math.pow(longitude - metropolitan.center.lng, 2)
          );
          if (distance < minDistance) {
            minDistance = distance;
            closestMetropolitan = metropolitan;
          }
        }
        detectedMunicipality = {
          id: closestMetropolitan.id,
          name: closestMetropolitan.name,
          type: closestMetropolitan.type,
          selected: true,
          logo: closestMetropolitan.logo
        };
      }
      setSelectedMetropolitan(detectedMunicipality);
      relatedDistricts = detectedMunicipality.type === 'büyükşehir' ? 
        districtMunicipalities.filter(d => d.parentMetropolitan === detectedMunicipality.id).map(d => ({ ...d, selected: false })) : [];
      const allList = [
        { ...detectedMunicipality, selected: false },
        ...relatedDistricts
      ];
      setAllMunicipalitiesLocal(allList);
      // setAllMunicipalities(allList);
      setSelectedMunicipality(null);
      setLoading(false);
      Alert.alert('Uyarı', 'Konumdan adres ile belediye eşleşmesi yapılamadı, en yakın belediye listeleniyor.');
    } catch (error) {
      console.error('Belediye tespit hatası:', error);
      loadMockMunicipalities();
    }
  };

  const loadMockMunicipalities = () => {
    // Mock veri - gerçek uygulamada konumdan tespit edilecek
    const mockMetropolitan: Municipality = {
      id: '1',
      name: 'İstanbul Büyükşehir Belediyesi',
      type: 'büyükşehir',
      selected: true, // Otomatik seçili
      logo: '🏛️'
    };
    
    setSelectedMetropolitan(mockMetropolitan);
    setMunicipalities([mockMetropolitan]);
    
    // İstanbul ilçeleri
    const istanbulDistricts: Municipality[] = [
      {
        id: 'kadikoy_mock',
        name: 'Kadıköy Belediyesi',
        type: 'ilçe',
        selected: false,
        logo: '🏢'
      },
      {
        id: 'besiktas_mock',
        name: 'Beşiktaş Belediyesi',
        type: 'ilçe',
        selected: false,
        logo: '🏢'
      },
      {
        id: 'sisli_mock',
        name: 'Şişli Belediyesi',
        type: 'ilçe',
        selected: false,
        logo: '🏢'
      }
    ];
    
    setAvailableDistricts(istanbulDistricts);
    setLoading(false);
  };

  const toggleMunicipality = (id: string) => {
    if (selectedMetropolitan && selectedMetropolitan.id === id) {
      setSelectedMetropolitan(prev => prev ? { ...prev, selected: !prev.selected } : null);
    }
  };

  const handleContinue = async () => {
    if (!selectedMunicipality) {
      Alert.alert('Uyarı', 'Lütfen bir belediye seçin.');
      return;
    }
    // Seçili belediyeyi ve bağlı olduğu ili context'e kaydet
    setSelectedMunicipalities([
      { id: selectedMunicipality.id, name: selectedMunicipality.name, type: selectedMunicipality.type },
      // Raporlar için bağlı tüm belediyeleri de ekleyebilirsiniz
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
            {locationData && selectedMetropolitan && (
              <Surface style={styles.surface}>
                <Card style={styles.locationCard}>
                  <Card.Content style={styles.cardContent}>
                    <View style={styles.cardHeader}>
                      <View style={styles.iconContainer}>
                        <Text style={styles.municipalityIcon}>📍</Text>
                      </View>
                      <View style={styles.textContainer}>
                        <Title style={styles.locationTitle}>
                          Konuma göre şu an "{selectedMetropolitan.name.replace(' Büyükşehir Belediyesi', '')}" ilindesiniz
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

                      const buttons = sortedMunicipalities.map((m, idx) => ({
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
                  description={locationData.address || 'Mevcut konum'}
                  pinColor="#6366f1"
                />
              )}
            </MapView>
            {locationData && (
              <View style={styles.locationInfo}>
                <Text style={styles.locationText}>
                  {locationData.address || `Enlem: ${locationData.latitude.toFixed(6)}, Boylam: ${locationData.longitude.toFixed(6)}`}
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Devam Butonu - Sayfanın En Altında */}
      <View style={styles.bottomButtonContainer}>
        <Button
          mode="contained"
          onPress={handleContinue}
          style={styles.continueButton}
          disabled={!selectedMunicipality}
          labelStyle={styles.buttonLabel}
          contentStyle={styles.continueButtonContent}
        >
          Devam Et
        </Button>
      </View>
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
    paddingTop: 20,
    paddingBottom: 6,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
  },
  backButtonIcon: {
    fontSize: 16,
    color: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
  },
  subtitle: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 13,
    lineHeight: 17,
  },
  content: {
    flex: 1,
    padding: 20,
    paddingBottom: 100, // Devam butonu için extra alan
  },
  scrollView: {
    flex: 1,
  },
  mapContainer: {
    marginTop: 16,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  mapTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 12,
    paddingBottom: 6,
    color: '#1e293b',
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: 200,
  },
  locationInfo: {
    padding: 8,
    paddingTop: 0,
    backgroundColor: '#f1f5f9',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  locationText: {
    fontSize: 12,
    color: '#475569',
    textAlign: 'center',
  },
  municipalityList: {
    flex: 1,
  },
  surface: {
    marginBottom: 12,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  municipalityCard: {
    borderRadius: 16,
    backgroundColor: 'white',
  },
  selectedCard: {
    borderColor: '#6366f1',
    borderWidth: 2,
    backgroundColor: '#f0f4ff',
  },
  cardContent: {
    padding: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  municipalityIcon: {
    fontSize: 20,
  },
  textContainer: {
    flex: 1,
  },
  municipalityName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 2,
  },
  municipalityType: {
    fontSize: 12,
    color: '#64748b',
  },
  checkmarkContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  buttonContainer: {
    marginTop: 16,
  },
  continueButton: {
    backgroundColor: '#6366f1',
    borderRadius: 12,
    elevation: 4,
  },
  continueButtonContent: {
    paddingVertical: 6,
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  locationButton: {
    margin: 12,
    marginTop: 8,
    borderRadius: 12,
    borderColor: '#6366f1',
    borderWidth: 1,
  },
  bottomButtonContainer: {
    padding: 20,
    backgroundColor: '#f8fafc',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  pickerContainer: {
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f1f5f9',
    borderColor: '#e2e8f0',
    borderWidth: 1,
    minHeight: 50,
  },
  picker: {
    width: '100%',
    color: '#1e293b',
    height: 50,
  },
  pickerItem: {
    fontSize: 14,
    color: '#1e293b',
    height: 50,
  },
  selectedDistrictDisplay: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    borderColor: '#e2e8f0',
    borderWidth: 1,
  },
  selectedDistrictHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  selectedDistrictLabel: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: 'bold',
  },
  clearButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#e53e3e',
    borderRadius: 8,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  selectedDistrictName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  districtButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderColor: '#6366f1',
    borderWidth: 2,
    marginTop: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  districtButtonText: {
    fontSize: 16,
    color: '#1e293b',
    fontWeight: '600',
    flex: 1,
  },
  districtButtonIcon: {
    fontSize: 18,
    color: '#6366f1',
    fontWeight: 'bold',
  },
  locationCard: {
    borderRadius: 10,
    backgroundColor: '#f0f9ff',
    borderColor: '#0ea5e9',
    borderWidth: 1,
    marginBottom: 4,
    elevation: 0,
    shadowOpacity: 0,
  },
  locationTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0c4a6e',
    marginBottom: 0,
  },
  locationSubtitle: {
    fontSize: 9,
    color: '#0369a1',
  },
}); 