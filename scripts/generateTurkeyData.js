const fs = require('fs');

// JSON dosyalarını oku
const citiesData = JSON.parse(fs.readFileSync('turkiye_il.json', 'utf8'));
const districtsData = JSON.parse(fs.readFileSync('turkiye_ilce.json', 'utf8'));

// Türkiye'nin tüm şehirlerinin koordinatları
const turkeyCityCoordinates = {
  "1": { latitude: 37.0000, longitude: 35.3213 }, // ADANA
  "2": { latitude: 37.7648, longitude: 38.2786 }, // ADIYAMAN
  "3": { latitude: 38.7507, longitude: 30.5567 }, // AFYONKARAHİSAR
  "4": { latitude: 39.7191, longitude: 43.0503 }, // AĞRI
  "5": { latitude: 40.6499, longitude: 35.8353 }, // AMASYA
  "6": { latitude: 39.9334, longitude: 32.8597 }, // ANKARA
  "7": { latitude: 36.8969, longitude: 30.7133 }, // ANTALYA
  "8": { latitude: 41.1828, longitude: 41.8183 }, // ARTVİN
  "9": { latitude: 37.8560, longitude: 27.8416 }, // AYDIN
  "10": { latitude: 39.6484, longitude: 27.8826 }, // BALIKESİR
  "11": { latitude: 40.1506, longitude: 29.9794 }, // BİLECİK
  "12": { latitude: 38.8855, longitude: 40.4966 }, // BİNGÖL
  "13": { latitude: 38.4006, longitude: 42.1095 }, // BİTLİS
  "14": { latitude: 40.7392, longitude: 31.6086 }, // BOLU
  "15": { latitude: 37.7205, longitude: 30.2906 }, // BURDUR
  "16": { latitude: 40.1885, longitude: 29.0610 }, // BURSA
  "17": { latitude: 40.1553, longitude: 26.4142 }, // ÇANAKKALE
  "18": { latitude: 40.6013, longitude: 33.6134 }, // ÇANKIRI
  "19": { latitude: 40.5499, longitude: 34.9537 }, // ÇORUM
  "20": { latitude: 37.7765, longitude: 29.0864 }, // DENİZLİ
  "21": { latitude: 37.9144, longitude: 40.2306 }, // DİYARBAKIR
  "22": { latitude: 41.6771, longitude: 26.5557 }, // EDİRNE
  "23": { latitude: 38.6810, longitude: 39.2264 }, // ELAZIĞ
  "24": { latitude: 39.7500, longitude: 39.5000 }, // ERZİNCAN
  "25": { latitude: 39.9000, longitude: 41.2700 }, // ERZURUM
  "26": { latitude: 39.7767, longitude: 30.5206 }, // ESKİŞEHİR
  "27": { latitude: 37.0662, longitude: 37.3833 }, // GAZİANTEP
  "28": { latitude: 40.9128, longitude: 38.3895 }, // GİRESUN
  "29": { latitude: 40.4603, longitude: 39.4814 }, // GÜMÜŞHANE
  "30": { latitude: 37.5833, longitude: 43.7333 }, // HAKKARİ
  "31": { latitude: 36.2023, longitude: 36.1613 }, // HATAY
  "32": { latitude: 37.7648, longitude: 30.5566 }, // ISPARTA
  "33": { latitude: 36.8000, longitude: 34.6333 }, // MERSİN
  "34": { latitude: 41.0082, longitude: 28.9784 }, // İSTANBUL
  "35": { latitude: 38.4192, longitude: 27.1287 }, // İZMİR
  "36": { latitude: 40.6167, longitude: 43.1000 }, // KARS
  "37": { latitude: 41.3887, longitude: 33.7827 }, // KASTAMONU
  "38": { latitude: 38.7205, longitude: 35.4826 }, // KAYSERİ
  "39": { latitude: 41.7333, longitude: 27.2167 }, // KIRKLARELİ
  "40": { latitude: 39.1425, longitude: 34.1709 }, // KIRŞEHİR
  "41": { latitude: 40.8533, longitude: 29.8815 }, // KOCAELİ
  "42": { latitude: 37.8667, longitude: 32.4833 }, // KONYA
  "43": { latitude: 39.4167, longitude: 29.9833 }, // KÜTAHYA
  "44": { latitude: 38.3552, longitude: 38.3095 }, // MALATYA
  "45": { latitude: 38.6191, longitude: 27.4289 }, // MANİSA
  "46": { latitude: 37.5858, longitude: 36.9371 }, // KAHRAMANMARAŞ
  "47": { latitude: 37.3212, longitude: 40.7245 }, // MARDİN
  "48": { latitude: 37.2154, longitude: 28.3636 }, // MUĞLA
  "49": { latitude: 38.7432, longitude: 41.5065 }, // MUŞ
  "50": { latitude: 38.6244, longitude: 34.7144 }, // NEVŞEHİR
  "51": { latitude: 37.0667, longitude: 37.3833 }, // NİĞDE
  "52": { latitude: 40.9839, longitude: 37.8764 }, // ORDU
  "53": { latitude: 41.2867, longitude: 36.3300 }, // RİZE
  "54": { latitude: 40.7833, longitude: 30.4000 }, // SAKARYA
  "55": { latitude: 41.2867, longitude: 36.3300 }, // SAMSUN
  "56": { latitude: 37.0667, longitude: 37.3833 }, // SİİRT
  "57": { latitude: 42.0283, longitude: 35.1500 }, // SİNOP
  "58": { latitude: 39.7477, longitude: 37.0179 }, // SİVAS
  "59": { latitude: 40.9833, longitude: 29.1167 }, // TEKİRDAĞ
  "60": { latitude: 40.3167, longitude: 36.5500 }, // TOKAT
  "61": { latitude: 41.0015, longitude: 39.7178 }, // TRABZON
  "62": { latitude: 38.6810, longitude: 39.2264 }, // TUNCELİ
  "63": { latitude: 37.1591, longitude: 38.7969 }, // ŞANLIURFA
  "64": { latitude: 38.6810, longitude: 39.2264 }, // UŞAK
  "65": { latitude: 38.6810, longitude: 39.2264 }, // VAN
  "66": { latitude: 39.8167, longitude: 34.8167 }, // YOZGAT
  "67": { latitude: 41.2500, longitude: 31.8333 }, // ZONGULDAK
  "68": { latitude: 39.8167, longitude: 34.8167 }, // AKSARAY
  "69": { latitude: 39.8167, longitude: 34.8167 }, // BAYBURT
  "70": { latitude: 39.8167, longitude: 34.8167 }, // KARAMAN
  "71": { latitude: 39.8167, longitude: 34.8167 }, // KIRIKKALE
  "72": { latitude: 37.0667, longitude: 37.3833 }, // BATMAN
  "73": { latitude: 37.0667, longitude: 37.3833 }, // ŞIRNAK
  "74": { latitude: 37.0667, longitude: 37.3833 }, // BARTIN
  "75": { latitude: 37.0667, longitude: 37.3833 }, // ARDAHAN
  "76": { latitude: 39.8167, longitude: 34.8167 }, // IĞDIR
  "77": { latitude: 39.8167, longitude: 34.8167 }, // YALOVA
  "78": { latitude: 39.8167, longitude: 34.8167 }, // KARABÜK
  "79": { latitude: 37.0667, longitude: 37.3833 }, // KİLİS
  "80": { latitude: 37.0667, longitude: 37.3833 }, // OSMANİYE
  "81": { latitude: 40.9833, longitude: 31.6167 }  // DÜZCE
};

// Şehir adlarını normalize et
function normalizeCityName(name) {
  const cityNameMap = {
    'ADANA': 'Adana',
    'ADIYAMAN': 'Adıyaman',
    'AFYONKARAHİSAR': 'Afyonkarahisar',
    'AĞRI': 'Ağrı',
    'AMASYA': 'Amasya',
    'ANKARA': 'Ankara',
    'ANTALYA': 'Antalya',
    'ARTVİN': 'Artvin',
    'AYDIN': 'Aydın',
    'BALIKESİR': 'Balıkesir',
    'BİLECİK': 'Bilecik',
    'BİNGÖL': 'Bingöl',
    'BİTLİS': 'Bitlis',
    'BOLU': 'Bolu',
    'BURDUR': 'Burdur',
    'BURSA': 'Bursa',
    'ÇANAKKALE': 'Çanakkale',
    'ÇANKIRI': 'Çankırı',
    'ÇORUM': 'Çorum',
    'DENİZLİ': 'Denizli',
    'DİYARBAKIR': 'Diyarbakır',
    'EDİRNE': 'Edirne',
    'ELAZIĞ': 'Elazığ',
    'ERZİNCAN': 'Erzincan',
    'ERZURUM': 'Erzurum',
    'ESKİŞEHİR': 'Eskişehir',
    'GAZİANTEP': 'Gaziantep',
    'GİRESUN': 'Giresun',
    'GÜMÜŞHANE': 'Gümüşhane',
    'HAKKARİ': 'Hakkari',
    'HATAY': 'Hatay',
    'ISPARTA': 'Isparta',
    'MERSİN': 'Mersin',
    'İSTANBUL': 'İstanbul',
    'İZMİR': 'İzmir',
    'KARS': 'Kars',
    'KASTAMONU': 'Kastamonu',
    'KAYSERİ': 'Kayseri',
    'KIRKLARELİ': 'Kırklareli',
    'KIRŞEHİR': 'Kırşehir',
    'KOCAELİ': 'Kocaeli',
    'KONYA': 'Konya',
    'KÜTAHYA': 'Kütahya',
    'MALATYA': 'Malatya',
    'MANİSA': 'Manisa',
    'KAHRAMANMARAŞ': 'Kahramanmaraş',
    'MARDİN': 'Mardin',
    'MUĞLA': 'Muğla',
    'MUŞ': 'Muş',
    'NEVŞEHİR': 'Nevşehir',
    'NİĞDE': 'Niğde',
    'ORDU': 'Ordu',
    'RİZE': 'Rize',
    'SAKARYA': 'Sakarya',
    'SAMSUN': 'Samsun',
    'SİİRT': 'Siirt',
    'SİNOP': 'Sinop',
    'SİVAS': 'Sivas',
    'TEKİRDAĞ': 'Tekirdağ',
    'TOKAT': 'Tokat',
    'TRABZON': 'Trabzon',
    'TUNCELİ': 'Tunceli',
    'ŞANLIURFA': 'Şanlıurfa',
    'UŞAK': 'Uşak',
    'VAN': 'Van',
    'YOZGAT': 'Yozgat',
    'ZONGULDAK': 'Zonguldak',
    'AKSARAY': 'Aksaray',
    'BAYBURT': 'Bayburt',
    'KARAMAN': 'Karaman',
    'KIRIKKALE': 'Kırıkkale',
    'BATMAN': 'Batman',
    'ŞIRNAK': 'Şırnak',
    'BARTIN': 'Bartın',
    'ARDAHAN': 'Ardahan',
    'IĞDIR': 'Iğdır',
    'YALOVA': 'Yalova',
    'KARABÜK': 'Karabük',
    'KİLİS': 'Kilis',
    'OSMANİYE': 'Osmaniye',
    'DÜZCE': 'Düzce'
  };
  return cityNameMap[name] || name;
}

// Şehir ID'sini normalize et
function normalizeCityId(name) {
  return name.toLowerCase()
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u')
    .replace(/\s+/g, '-');
}

// Türkiye şehirlerini oluştur
const turkeyCities = citiesData.map(city => {
  const cityKey = city.sehir_key;
  const cityName = normalizeCityName(city.sehir_title);
  const cityId = normalizeCityId(cityName);
  const coordinates = turkeyCityCoordinates[cityKey] || { latitude: 39.9334, longitude: 32.8597 };
  
  // Bu şehrin ilçelerini bul
  const cityDistricts = districtsData.filter(district => district.ilce_sehirkey === cityKey);
  
  const municipalities = cityDistricts.map(district => ({
    id: district.ilce_key,
    name: district.ilce_title,
    type: 'ilçe',
    coordinates: coordinates
  }));
  
  // Büyükşehir belediyesi ekle (eğer büyükşehir ise)
  if (['1', '6', '7', '16', '26', '27', '34', '35', '42', '46'].includes(cityKey)) {
    municipalities.unshift({
      id: `${cityId}-buyuksehir`,
      name: `${cityName} Büyükşehir`,
      type: 'büyükşehir',
      coordinates: coordinates
    });
  }
  
  return {
    id: cityId,
    name: cityName,
    plateNumber: parseInt(cityKey),
    coordinates: coordinates,
    municipalities: municipalities
  };
});

// TypeScript dosyasını oluştur
const tsContent = `// Türkiye'nin il ve belediye verileri
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

// Türkiye'nin tüm şehirleri ve ilçeleri
export const turkeyCities: City[] = ${JSON.stringify(turkeyCities, null, 2)};

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
`;

// Dosyayı yaz
fs.writeFileSync('utils/turkeyData.ts', tsContent, 'utf8');

console.log(`✅ Türkiye veri seti oluşturuldu!`);
console.log(`📊 Toplam ${turkeyCities.length} şehir`);
console.log(`🏛️ Toplam ${turkeyCities.reduce((sum, city) => sum + city.municipalities.length, 0)} belediye`);

// İstatistikleri göster
turkeyCities.forEach(city => {
  console.log(`${city.name}: ${city.municipalities.length} belediye`);
}); 