// Türkiye'nin il ve belediye verileri
export interface Municipality {
  id: string;
  name: string;
  type: 'büyükşehir' | 'ilçe' | 'belde';
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface City {
  id: string;
  name: string;
  plateNumber: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  municipalities: Municipality[];
}

// Türkiye'nin büyükşehir belediyeleri ve ilçeleri
export const turkeyCities: City[] = [
  {
    id: 'gaziantep',
    name: 'Gaziantep',
    plateNumber: 27,
    coordinates: { latitude: 37.0662, longitude: 37.3833 },
    municipalities: [
      { id: 'gaziantep-buyuksehir', name: 'Gaziantep Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 37.0662, longitude: 37.3833 } },
      { id: 'sehitkamil', name: 'Şehitkamil', type: 'ilçe', coordinates: { latitude: 37.0662, longitude: 37.3833 } },
      { id: 'sahinbey', name: 'Şahinbey', type: 'ilçe', coordinates: { latitude: 37.0662, longitude: 37.3833 } },
      { id: 'nurdagi', name: 'Nurdağı', type: 'ilçe', coordinates: { latitude: 37.0662, longitude: 37.3833 } },
      { id: 'araban', name: 'Araban', type: 'ilçe', coordinates: { latitude: 37.0662, longitude: 37.3833 } },
      { id: 'yavuzeli', name: 'Yavuzeli', type: 'ilçe', coordinates: { latitude: 37.0662, longitude: 37.3833 } },
      { id: 'oguzeli', name: 'Oğuzeli', type: 'ilçe', coordinates: { latitude: 37.0662, longitude: 37.3833 } },
      { id: 'karkamis', name: 'Karkamış', type: 'ilçe', coordinates: { latitude: 37.0662, longitude: 37.3833 } },
      { id: 'nizip', name: 'Nizip', type: 'ilçe', coordinates: { latitude: 37.0662, longitude: 37.3833 } },
      { id: 'islahiye', name: 'İslahiye', type: 'ilçe', coordinates: { latitude: 37.0662, longitude: 37.3833 } }
    ]
  },
  {
    id: 'istanbul',
    name: 'İstanbul',
    plateNumber: 34,
    coordinates: { latitude: 41.0082, longitude: 28.9784 },
    municipalities: [
      { id: 'istanbul-buyuksehir', name: 'İstanbul Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 41.0082, longitude: 28.9784 } },
      { id: 'kadikoy', name: 'Kadıköy', type: 'ilçe', coordinates: { latitude: 40.9909, longitude: 29.0303 } },
      { id: 'besiktas', name: 'Beşiktaş', type: 'ilçe', coordinates: { latitude: 41.0422, longitude: 29.0083 } },
      { id: 'sisli', name: 'Şişli', type: 'ilçe', coordinates: { latitude: 41.0602, longitude: 28.9877 } },
      { id: 'fatih', name: 'Fatih', type: 'ilçe', coordinates: { latitude: 41.0082, longitude: 28.9784 } },
      { id: 'uskudar', name: 'Üsküdar', type: 'ilçe', coordinates: { latitude: 41.0235, longitude: 29.0122 } },
      { id: 'maltepe', name: 'Maltepe', type: 'ilçe', coordinates: { latitude: 40.9351, longitude: 29.1510 } },
      { id: 'kartal', name: 'Kartal', type: 'ilçe', coordinates: { latitude: 40.9108, longitude: 29.1897 } },
      { id: 'pendik', name: 'Pendik', type: 'ilçe', coordinates: { latitude: 40.8778, longitude: 29.2333 } },
      { id: 'tuzla', name: 'Tuzla', type: 'ilçe', coordinates: { latitude: 40.8167, longitude: 29.3000 } },
      { id: 'sultanbeyli', name: 'Sultanbeyli', type: 'ilçe', coordinates: { latitude: 40.9603, longitude: 29.2708 } },
      { id: 'sile', name: 'Şile', type: 'ilçe', coordinates: { latitude: 41.1753, longitude: 29.6139 } },
      { id: 'catalca', name: 'Çatalca', type: 'ilçe', coordinates: { latitude: 41.1433, longitude: 28.4614 } },
      { id: 'silivri', name: 'Silivri', type: 'ilçe', coordinates: { latitude: 41.0733, longitude: 28.2467 } },
      { id: 'beykoz', name: 'Beykoz', type: 'ilçe', coordinates: { latitude: 41.1333, longitude: 29.1000 } },
      { id: 'sariyer', name: 'Sarıyer', type: 'ilçe', coordinates: { latitude: 41.1667, longitude: 29.0500 } },
      { id: 'eyupsultan', name: 'Eyüpsultan', type: 'ilçe', coordinates: { latitude: 41.0500, longitude: 28.9333 } },
      { id: 'bayrampasa', name: 'Bayrampaşa', type: 'ilçe', coordinates: { latitude: 41.0333, longitude: 28.9167 } },
      { id: 'sultangazi', name: 'Sultangazi', type: 'ilçe', coordinates: { latitude: 41.1000, longitude: 28.8667 } },
      { id: 'gaziosmanpasa', name: 'Gaziosmanpaşa', type: 'ilçe', coordinates: { latitude: 41.0667, longitude: 28.9000 } },
      { id: 'kagithane', name: 'Kağıthane', type: 'ilçe', coordinates: { latitude: 41.0833, longitude: 28.9667 } },
      { id: 'sultangazi', name: 'Sultangazi', type: 'ilçe', coordinates: { latitude: 41.1000, longitude: 28.8667 } },
      { id: 'bagcilar', name: 'Bağcılar', type: 'ilçe', coordinates: { latitude: 41.0333, longitude: 28.8500 } },
      { id: 'bahcelievler', name: 'Bahçelievler', type: 'ilçe', coordinates: { latitude: 40.9967, longitude: 28.8667 } },
      { id: 'bakirkoy', name: 'Bakırköy', type: 'ilçe', coordinates: { latitude: 40.9833, longitude: 28.8667 } },
      { id: 'kucukcekmece', name: 'Küçükçekmece', type: 'ilçe', coordinates: { latitude: 41.0000, longitude: 28.8000 } },
      { id: 'avcilar', name: 'Avcılar', type: 'ilçe', coordinates: { latitude: 40.9789, longitude: 28.7214 } },
      { id: 'esenyurt', name: 'Esenyurt', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 28.6833 } },
      { id: 'beylikduzu', name: 'Beylikdüzü', type: 'ilçe', coordinates: { latitude: 40.9833, longitude: 28.6333 } },
      { id: 'buyukcekmece', name: 'Büyükçekmece', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 28.6000 } },
      { id: 'cekmekoy', name: 'Çekmeköy', type: 'ilçe', coordinates: { latitude: 41.0333, longitude: 29.1833 } },
      { id: 'umraniye', name: 'Ümraniye', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 29.1167 } },
      { id: 'atasehir', name: 'Ataşehir', type: 'ilçe', coordinates: { latitude: 40.9833, longitude: 29.1167 } },
      { id: 'sancaktepe', name: 'Sancaktepe', type: 'ilçe', coordinates: { latitude: 41.0000, longitude: 29.2333 } },
      { id: 'sultanbeyli', name: 'Sultanbeyli', type: 'ilçe', coordinates: { latitude: 40.9603, longitude: 29.2708 } },
      { id: 'basaksehir', name: 'Başakşehir', type: 'ilçe', coordinates: { latitude: 41.1000, longitude: 28.8000 } },
      { id: 'bagcilar', name: 'Bağcılar', type: 'ilçe', coordinates: { latitude: 41.0333, longitude: 28.8500 } },
      { id: 'esenyurt', name: 'Esenyurt', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 28.6833 } },
      { id: 'sultangazi', name: 'Sultangazi', type: 'ilçe', coordinates: { latitude: 41.1000, longitude: 28.8667 } },
      { id: 'gaziosmanpasa', name: 'Gaziosmanpaşa', type: 'ilçe', coordinates: { latitude: 41.0667, longitude: 28.9000 } },
      { id: 'kagithane', name: 'Kağıthane', type: 'ilçe', coordinates: { latitude: 41.0833, longitude: 28.9667 } },
      { id: 'sultangazi', name: 'Sultangazi', type: 'ilçe', coordinates: { latitude: 41.1000, longitude: 28.8667 } },
      { id: 'bagcilar', name: 'Bağcılar', type: 'ilçe', coordinates: { latitude: 41.0333, longitude: 28.8500 } },
      { id: 'bahcelievler', name: 'Bahçelievler', type: 'ilçe', coordinates: { latitude: 40.9967, longitude: 28.8667 } },
      { id: 'bakirkoy', name: 'Bakırköy', type: 'ilçe', coordinates: { latitude: 40.9833, longitude: 28.8667 } },
      { id: 'kucukcekmece', name: 'Küçükçekmece', type: 'ilçe', coordinates: { latitude: 41.0000, longitude: 28.8000 } },
      { id: 'avcilar', name: 'Avcılar', type: 'ilçe', coordinates: { latitude: 40.9789, longitude: 28.7214 } },
      { id: 'esenyurt', name: 'Esenyurt', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 28.6833 } },
      { id: 'beylikduzu', name: 'Beylikdüzü', type: 'ilçe', coordinates: { latitude: 40.9833, longitude: 28.6333 } },
      { id: 'buyukcekmece', name: 'Büyükçekmece', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 28.6000 } },
      { id: 'cekmekoy', name: 'Çekmeköy', type: 'ilçe', coordinates: { latitude: 41.0333, longitude: 29.1833 } },
      { id: 'umraniye', name: 'Ümraniye', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 29.1167 } },
      { id: 'atasehir', name: 'Ataşehir', type: 'ilçe', coordinates: { latitude: 40.9833, longitude: 29.1167 } },
      { id: 'sancaktepe', name: 'Sancaktepe', type: 'ilçe', coordinates: { latitude: 41.0000, longitude: 29.2333 } },
      { id: 'sultanbeyli', name: 'Sultanbeyli', type: 'ilçe', coordinates: { latitude: 40.9603, longitude: 29.2708 } },
      { id: 'basaksehir', name: 'Başakşehir', type: 'ilçe', coordinates: { latitude: 41.1000, longitude: 28.8000 } }
    ]
  },
  {
    id: 'ankara',
    name: 'Ankara',
    plateNumber: 6,
    coordinates: { latitude: 39.9334, longitude: 32.8597 },
    municipalities: [
      { id: 'ankara-buyuksehir', name: 'Ankara Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 39.9334, longitude: 32.8597 } },
      { id: 'cankaya', name: 'Çankaya', type: 'ilçe', coordinates: { latitude: 39.9208, longitude: 32.8541 } },
      { id: 'kecioren', name: 'Keçiören', type: 'ilçe', coordinates: { latitude: 39.9833, longitude: 32.8667 } },
      { id: 'mamak', name: 'Mamak', type: 'ilçe', coordinates: { latitude: 39.9500, longitude: 32.9167 } },
      { id: 'yenimahalle', name: 'Yenimahalle', type: 'ilçe', coordinates: { latitude: 39.9833, longitude: 32.7833 } },
      { id: 'etimesgut', name: 'Etimesgut', type: 'ilçe', coordinates: { latitude: 39.9500, longitude: 32.6667 } },
      { id: 'sincan', name: 'Sincan', type: 'ilçe', coordinates: { latitude: 39.9667, longitude: 32.5667 } },
      { id: 'altindag', name: 'Altındağ', type: 'ilçe', coordinates: { latitude: 39.9667, longitude: 32.8667 } },
      { id: 'pursaklar', name: 'Pursaklar', type: 'ilçe', coordinates: { latitude: 40.0333, longitude: 32.9833 } },
      { id: 'golbasi', name: 'Gölbaşı', type: 'ilçe', coordinates: { latitude: 39.7833, longitude: 32.8167 } },
      { id: 'polatli', name: 'Polatlı', type: 'ilçe', coordinates: { latitude: 39.5833, longitude: 32.1500 } },
      { id: 'cubuk', name: 'Çubuk', type: 'ilçe', coordinates: { latitude: 40.2333, longitude: 33.0333 } },
      { id: 'kazan', name: 'Kazan', type: 'ilçe', coordinates: { latitude: 40.2333, longitude: 32.6833 } },
      { id: 'ayas', name: 'Ayaş', type: 'ilçe', coordinates: { latitude: 40.0167, longitude: 32.3333 } },
      { id: 'beypazari', name: 'Beypazarı', type: 'ilçe', coordinates: { latitude: 40.1667, longitude: 31.9167 } },
      { id: 'nallihan', name: 'Nallıhan', type: 'ilçe', coordinates: { latitude: 40.1833, longitude: 31.3500 } },
      { id: 'kizilcahamam', name: 'Kızılcahamam', type: 'ilçe', coordinates: { latitude: 40.4667, longitude: 32.6500 } },
      { id: 'kalecik', name: 'Kalecik', type: 'ilçe', coordinates: { latitude: 40.1000, longitude: 33.4167 } },
      { id: 'sereflikochisar', name: 'Şereflikoçhisar', type: 'ilçe', coordinates: { latitude: 38.9333, longitude: 33.5500 } },
      { id: 'haymana', name: 'Haymana', type: 'ilçe', coordinates: { latitude: 39.4333, longitude: 32.4833 } },
      { id: 'gudul', name: 'Güdül', type: 'ilçe', coordinates: { latitude: 40.2167, longitude: 32.2500 } },
      { id: 'evren', name: 'Evren', type: 'ilçe', coordinates: { latitude: 39.0167, longitude: 33.8000 } },
      { id: 'elmadag', name: 'Elmadağ', type: 'ilçe', coordinates: { latitude: 39.9167, longitude: 33.2333 } },
      { id: 'camlidere', name: 'Çamlıdere', type: 'ilçe', coordinates: { latitude: 40.4833, longitude: 32.4833 } },
      { id: 'bala', name: 'Bala', type: 'ilçe', coordinates: { latitude: 39.5500, longitude: 33.1167 } },
      { id: 'akdere', name: 'Akyurt', type: 'ilçe', coordinates: { latitude: 40.1333, longitude: 33.0833 } }
    ]
  },
  {
    id: 'izmir',
    name: 'İzmir',
    plateNumber: 35,
    coordinates: { latitude: 38.4192, longitude: 27.1287 },
    municipalities: [
      { id: 'izmir-buyuksehir', name: 'İzmir Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 38.4192, longitude: 27.1287 } },
      { id: 'konak', name: 'Konak', type: 'ilçe', coordinates: { latitude: 38.4192, longitude: 27.1287 } },
      { id: 'bornova', name: 'Bornova', type: 'ilçe', coordinates: { latitude: 38.4667, longitude: 27.2167 } },
      { id: 'karsiyaka', name: 'Karşıyaka', type: 'ilçe', coordinates: { latitude: 38.4667, longitude: 27.1167 } },
      { id: 'bayrakli', name: 'Bayraklı', type: 'ilçe', coordinates: { latitude: 38.4667, longitude: 27.1667 } },
      { id: 'cigli', name: 'Çiğli', type: 'ilçe', coordinates: { latitude: 38.5000, longitude: 27.0667 } },
      { id: 'gaziemir', name: 'Gaziemir', type: 'ilçe', coordinates: { latitude: 38.3667, longitude: 27.1500 } },
      { id: 'karabaglar', name: 'Karabağlar', type: 'ilçe', coordinates: { latitude: 38.3833, longitude: 27.1167 } },
      { id: 'odemis', name: 'Ödemiş', type: 'ilçe', coordinates: { latitude: 38.2333, longitude: 27.9667 } },
      { id: 'tire', name: 'Tire', type: 'ilçe', coordinates: { latitude: 38.0833, longitude: 27.7333 } },
      { id: 'bergama', name: 'Bergama', type: 'ilçe', coordinates: { latitude: 39.1167, longitude: 27.1833 } },
      { id: 'urla', name: 'Urla', type: 'ilçe', coordinates: { latitude: 38.3167, longitude: 26.7667 } },
      { id: 'cesme', name: 'Çeşme', type: 'ilçe', coordinates: { latitude: 38.3167, longitude: 26.3000 } },
      { id: 'karaburun', name: 'Karaburun', type: 'ilçe', coordinates: { latitude: 38.6333, longitude: 26.5167 } },
      { id: 'foça', name: 'Foça', type: 'ilçe', coordinates: { latitude: 38.6667, longitude: 26.7500 } },
      { id: 'dikili', name: 'Dikili', type: 'ilçe', coordinates: { latitude: 39.0667, longitude: 26.8833 } },
      { id: 'aliaga', name: 'Aliağa', type: 'ilçe', coordinates: { latitude: 38.8000, longitude: 26.9667 } },
      { id: 'menemen', name: 'Menemen', type: 'ilçe', coordinates: { latitude: 38.6000, longitude: 27.0667 } },
      { id: 'torbalı', name: 'Torbalı', type: 'ilçe', coordinates: { latitude: 38.1667, longitude: 27.3500 } },
      { id: 'bayindir', name: 'Bayındır', type: 'ilçe', coordinates: { latitude: 38.2167, longitude: 27.6500 } },
      { id: 'kınık', name: 'Kınık', type: 'ilçe', coordinates: { latitude: 39.0833, longitude: 27.6833 } },
      { id: 'beydag', name: 'Beydağ', type: 'ilçe', coordinates: { latitude: 38.0833, longitude: 28.2000 } },
      { id: 'kula', name: 'Kula', type: 'ilçe', coordinates: { latitude: 38.5500, longitude: 28.6500 } },
      { id: 'salihli', name: 'Salihli', type: 'ilçe', coordinates: { latitude: 38.4833, longitude: 28.1333 } },
      { id: 'alaşehir', name: 'Alaşehir', type: 'ilçe', coordinates: { latitude: 38.3500, longitude: 28.5167 } },
      { id: 'sarigol', name: 'Sarigöl', type: 'ilçe', coordinates: { latitude: 38.2333, longitude: 28.7000 } },
      { id: 'demirci', name: 'Demirci', type: 'ilçe', coordinates: { latitude: 39.0500, longitude: 28.6500 } },
      { id: 'gordes', name: 'Gördes', type: 'ilçe', coordinates: { latitude: 38.9333, longitude: 28.2833 } },
      { id: 'selendi', name: 'Selendi', type: 'ilçe', coordinates: { latitude: 38.7500, longitude: 28.8667 } },
      { id: 'koprubasi', name: 'Köprübaşı', type: 'ilçe', coordinates: { latitude: 38.7500, longitude: 28.4000 } },
      { id: 'ahmetli', name: 'Ahmetli', type: 'ilçe', coordinates: { latitude: 38.5167, longitude: 27.9333 } },
      { id: 'golmarmara', name: 'Gölmarmara', type: 'ilçe', coordinates: { latitude: 38.7167, longitude: 28.2833 } },
      { id: 'turgutlu', name: 'Turgutlu', type: 'ilçe', coordinates: { latitude: 38.5000, longitude: 27.7000 } },
      { id: 'akhisar', name: 'Akhisar', type: 'ilçe', coordinates: { latitude: 38.9167, longitude: 27.8333 } },
      { id: 'soma', name: 'Soma', type: 'ilçe', coordinates: { latitude: 39.1833, longitude: 27.6000 } },
      { id: 'kırkağaç', name: 'Kırkağaç', type: 'ilçe', coordinates: { latitude: 39.1000, longitude: 27.6667 } },
      { id: 'balikesir', name: 'Balıkesir', type: 'ilçe', coordinates: { latitude: 39.6500, longitude: 27.8833 } }
    ]
  }
];

// Konumdan şehir bulma fonksiyonu
export function findCityByLocation(latitude: number, longitude: number): City | null {
  // Basit mesafe hesaplama (Haversine formülü)
  function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Dünya'nın yarıçapı (km)
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  let closestCity: City | null = null;
  let minDistance = Infinity;

  for (const city of turkeyCities) {
    const distance = calculateDistance(
      latitude, 
      longitude, 
      city.coordinates.latitude, 
      city.coordinates.longitude
    );
    
    // 50 km içindeki en yakın şehri bul
    if (distance < minDistance && distance <= 50) {
      minDistance = distance;
      closestCity = city;
    }
  }

  return closestCity;
}

// Şehir ID'sinden şehir bulma
export function findCityById(cityId: string): City | null {
  return turkeyCities.find(city => city.id === cityId) || null;
}

// Belediye ID'sinden belediye bulma
export function findMunicipalityById(municipalityId: string): Municipality | null {
  for (const city of turkeyCities) {
    const municipality = city.municipalities.find(m => m.id === municipalityId);
    if (municipality) return municipality;
  }
  return null;
} 