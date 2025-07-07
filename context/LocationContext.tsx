import * as Location from 'expo-location';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { City, findCityByLocation, getAllCities, Municipality } from '../utils/turkeyData';

interface LocationData {
  latitude: number;
  longitude: number;
  address?: string;
}

interface LocationContextType {
  locationData: LocationData | null;
  selectedMunicipalities: Municipality[];
  allMunicipalities: Municipality[];
  currentCity: City | null;
  allCities: City[];
  setSelectedMunicipalities: (municipalities: Municipality[]) => void;
  setLocationData: (data: LocationData | null) => void;
  setCurrentCity: (city: City | null) => void;
  requestLocationPermission: () => Promise<void>;
  getCurrentLocation: () => Promise<void>;

  loading: boolean;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [selectedMunicipalities, setSelectedMunicipalities] = useState<Municipality[]>([]);
  const [allMunicipalities, setAllMunicipalities] = useState<Municipality[]>([]);
  const [currentCity, setCurrentCity] = useState<City | null>(null);
  const [allCities, setAllCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);

  // Tüm şehirleri yükle
  useEffect(() => {
    const cities = getAllCities();
    setAllCities(cities);
  }, []);

  // Konum izni isteme
  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        console.log('Konum izni verildi');
        await getCurrentLocation();
      } else {
        console.log('Konum izni reddedildi');
      }
    } catch (error) {
      console.error('Konum izni hatası:', error);
    }
  };

  // Mevcut konumu alma
  const getCurrentLocation = async () => {
    try {
      setLoading(true);
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const { latitude, longitude } = location.coords;
      console.log('Konum alındı:', location.coords);

      // Reverse geocoding ile adres bilgisi alma
      const geocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      const address = geocode[0] 
        ? `${geocode[0].streetNumber || ''} ${geocode[0].street || ''} ${geocode[0].district || ''} ${geocode[0].city || ''}`
        : undefined;

      const newLocationData = { latitude, longitude, address };
      setLocationData(newLocationData);
      console.log('Konum alındı:', { address, latitude, longitude });

      // Konuma göre şehir bulma
      const city = findCityByLocation(latitude, longitude);
      if (city) {
        setCurrentCity(city);
        setAllMunicipalities(city.municipalities);
        console.log(`Şehir bulundu: ${city.name} - ${city.municipalities.length} belediye`);
      } else {
        console.log('Konum için şehir bulunamadı');
        setCurrentCity(null);
        setAllMunicipalities([]);
      }

    } catch (error) {
      console.error('Konum alma hatası:', error);
    } finally {
      setLoading(false);
    }
  };



  // Uygulama başlangıcında konum izni iste
  useEffect(() => {
    requestLocationPermission();
  }, []);

  const value: LocationContextType = {
    locationData,
    selectedMunicipalities,
    allMunicipalities,
    currentCity,
    allCities,
    setSelectedMunicipalities,
    setLocationData,
    setCurrentCity,
    requestLocationPermission,
    getCurrentLocation,
    loading,
  };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
}; 