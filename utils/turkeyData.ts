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

export const turkeyCities: City[] = [
  {
    id: 'adana',
    name: 'Adana',
    plateNumber: 1,
    coordinates: { latitude: 37.0, longitude: 35.3213 },
    municipalities: [
      { id: 'adana-buyuksehir', name: 'Adana Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 37.0, longitude: 35.3213 } },
      { id: 'seyhan', name: 'Seyhan', type: 'ilçe', coordinates: { latitude: 37.0, longitude: 35.3213 } },
      { id: 'ceyhan', name: 'Ceyhan', type: 'ilçe', coordinates: { latitude: 37.0244, longitude: 35.8172 } },
      { id: 'yuregir', name: 'Yüreğir', type: 'ilçe', coordinates: { latitude: 37.0333, longitude: 35.3667 } },
      { id: 'saricam', name: 'Sarıçam', type: 'ilçe', coordinates: { latitude: 37.1667, longitude: 35.5000 } },
      { id: 'cukurova', name: 'Çukurova', type: 'ilçe', coordinates: { latitude: 37.0500, longitude: 35.2833 } },
      { id: 'karaisali', name: 'Karaisalı', type: 'ilçe', coordinates: { latitude: 37.2500, longitude: 35.4167 } },
      { id: 'pozanti', name: 'Pozantı', type: 'ilçe', coordinates: { latitude: 37.4333, longitude: 34.8667 } },
      { id: 'karatas', name: 'Karataş', type: 'ilçe', coordinates: { latitude: 36.5667, longitude: 35.3833 } },
      { id: 'imamoglu', name: 'İmamoğlu', type: 'ilçe', coordinates: { latitude: 37.2667, longitude: 35.6667 } },
      { id: 'aladag', name: 'Aladağ', type: 'ilçe', coordinates: { latitude: 37.5500, longitude: 35.7500 } },
      { id: 'feke', name: 'Feke', type: 'ilçe', coordinates: { latitude: 37.8167, longitude: 35.9167 } },
      { id: 'saimbeyli', name: 'Saimbeyli', type: 'ilçe', coordinates: { latitude: 37.9833, longitude: 36.0833 } },
      { id: 'tufanbeyli', name: 'Tufanbeyli', type: 'ilçe', coordinates: { latitude: 38.2667, longitude: 36.2167 } }
    ]
  },
  {
    id: 'adiyaman',
    name: 'Adıyaman',
    plateNumber: 2,
    coordinates: { latitude: 37.7648, longitude: 38.2786 },
    municipalities: [
      { id: 'adiyaman-merkez', name: 'Adıyaman Merkez', type: 'ilçe', coordinates: { latitude: 37.7648, longitude: 38.2786 } },
      { id: 'kahta', name: 'Kahta', type: 'ilçe', coordinates: { latitude: 37.7833, longitude: 38.6167 } },
      { id: 'besni', name: 'Besni', type: 'ilçe', coordinates: { latitude: 37.6833, longitude: 37.8667 } },
      { id: 'golbasi', name: 'Gölbaşı', type: 'ilçe', coordinates: { latitude: 37.7833, longitude: 37.6333 } },
      { id: 'gerger', name: 'Gerger', type: 'ilçe', coordinates: { latitude: 38.0333, longitude: 39.0333 } },
      { id: 'sincik', name: 'Sincik', type: 'ilçe', coordinates: { latitude: 38.0333, longitude: 38.6167 } },
      { id: 'tut', name: 'Tut', type: 'ilçe', coordinates: { latitude: 37.8000, longitude: 37.9167 } },
      { id: 'celikhan', name: 'Çelikhan', type: 'ilçe', coordinates: { latitude: 38.0333, longitude: 38.2333 } },
      { id: 'samsat', name: 'Samsat', type: 'ilçe', coordinates: { latitude: 37.5833, longitude: 38.4833 } }
    ]
  },
  {
    id: 'afyonkarahisar',
    name: 'Afyonkarahisar',
    plateNumber: 3,
    coordinates: { latitude: 38.7507, longitude: 30.5567 },
    municipalities: [
      { id: 'afyonkarahisar-merkez', name: 'Afyonkarahisar Merkez', type: 'ilçe', coordinates: { latitude: 38.7507, longitude: 30.5567 } },
      { id: 'sandikli', name: 'Sandıklı', type: 'ilçe', coordinates: { latitude: 38.4667, longitude: 30.2667 } },
      { id: 'dinar', name: 'Dinar', type: 'ilçe', coordinates: { latitude: 38.0667, longitude: 30.1667 } },
      { id: 'bolvadin', name: 'Bolvadin', type: 'ilçe', coordinates: { latitude: 38.7167, longitude: 31.0500 } },
      { id: 'suhut', name: 'Şuhut', type: 'ilçe', coordinates: { latitude: 38.5333, longitude: 30.5500 } },
      { id: 'emirdag', name: 'Emirdağ', type: 'ilçe', coordinates: { latitude: 39.0167, longitude: 31.1500 } },
      { id: 'iscehisar', name: 'İscehisar', type: 'ilçe', coordinates: { latitude: 38.8667, longitude: 30.7500 } },
      { id: 'cay', name: 'Çay', type: 'ilçe', coordinates: { latitude: 38.5833, longitude: 31.0333 } },
      { id: 'ihsaniye', name: 'İhsaniye', type: 'ilçe', coordinates: { latitude: 38.9333, longitude: 30.3833 } },
      { id: 'sincanli', name: 'Sincanlı', type: 'ilçe', coordinates: { latitude: 38.7333, longitude: 30.2333 } },
      { id: 'dazkiri', name: 'Dazkırı', type: 'ilçe', coordinates: { latitude: 37.9167, longitude: 29.8500 } },
      { id: 'hocalar', name: 'Hocalar', type: 'ilçe', coordinates: { latitude: 38.5833, longitude: 29.9667 } },
      { id: 'kiziloren', name: 'Kızılören', type: 'ilçe', coordinates: { latitude: 38.2500, longitude: 30.1500 } },
      { id: 'evciler', name: 'Evciler', type: 'ilçe', coordinates: { latitude: 37.8833, longitude: 29.8667 } },
      { id: 'basmakci', name: 'Başmakçı', type: 'ilçe', coordinates: { latitude: 37.9000, longitude: 30.0167 } },
      { id: 'bayat', name: 'Bayat', type: 'ilçe', coordinates: { latitude: 38.9833, longitude: 30.9167 } },
      { id: 'coskunt', name: 'Çobanlar', type: 'ilçe', coordinates: { latitude: 38.7000, longitude: 30.7833 } },
      { id: 'sultandagi', name: 'Sultandağı', type: 'ilçe', coordinates: { latitude: 38.5333, longitude: 31.2333 } }
    ]
  },
  {
    id: 'agri',
    name: 'Ağrı',
    plateNumber: 4,
    coordinates: { latitude: 39.7191, longitude: 43.0503 },
    municipalities: [
      { id: 'agri-buyuksehir', name: 'Ağrı Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 39.7191, longitude: 43.0503 } },
      { id: 'merkez', name: 'Merkez', type: 'ilçe', coordinates: { latitude: 39.7191, longitude: 43.0503 } },
      { id: 'dogubayazit', name: 'Doğubayazıt', type: 'ilçe', coordinates: { latitude: 39.5456, longitude: 44.0856 } },
      { id: 'diyadin', name: 'Diyadin', type: 'ilçe', coordinates: { latitude: 39.5333, longitude: 43.6667 } },
      { id: 'patnos', name: 'Patnos', type: 'ilçe', coordinates: { latitude: 39.2333, longitude: 42.8667 } },
      { id: 'tutak', name: 'Tutak', type: 'ilçe', coordinates: { latitude: 39.5333, longitude: 42.7667 } },
      { id: 'taslicay', name: 'Taşlıçay', type: 'ilçe', coordinates: { latitude: 39.6333, longitude: 43.3833 } },
      { id: 'hamur', name: 'Hamur', type: 'ilçe', coordinates: { latitude: 39.6167, longitude: 42.9833 } },
      { id: 'eleskirt', name: 'Eleşkirt', type: 'ilçe', coordinates: { latitude: 39.8000, longitude: 42.6833 } }
    ]
  },
  {
    id: 'amasya',
    name: 'Amasya',
    plateNumber: 5,
    coordinates: { latitude: 40.6499, longitude: 35.8353 },
    municipalities: [
      { id: 'amasya-buyuksehir', name: 'Amasya Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 40.6499, longitude: 35.8353 } },
      { id: 'merkez', name: 'Merkez', type: 'ilçe', coordinates: { latitude: 40.6499, longitude: 35.8353 } },
      { id: 'merzifon', name: 'Merzifon', type: 'ilçe', coordinates: { latitude: 40.8731, longitude: 35.4611 } },
      { id: 'gumushacikoy', name: 'Gümüşhacıköy', type: 'ilçe', coordinates: { latitude: 40.8667, longitude: 35.2167 } },
      { id: 'tasova', name: 'Taşova', type: 'ilçe', coordinates: { latitude: 40.7667, longitude: 36.3167 } },
      { id: 'suluova', name: 'Suluova', type: 'ilçe', coordinates: { latitude: 40.8333, longitude: 35.6500 } },
      { id: 'hamamozu', name: 'Hamamözü', type: 'ilçe', coordinates: { latitude: 40.7833, longitude: 35.0333 } },
      { id: 'goynucek', name: 'Göynücek', type: 'ilçe', coordinates: { latitude: 40.4000, longitude: 35.5167 } }
    ]
  },
  {
    id: 'ankara',
    name: 'Ankara',
    plateNumber: 6,
    coordinates: { latitude: 39.9334, longitude: 32.8597 },
    municipalities: [
      { id: 'ankara-buyuksehir', name: 'Ankara Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 39.9334, longitude: 32.8597 } },
      { id: 'cankaya', name: 'Çankaya', type: 'ilçe', coordinates: { latitude: 39.9179, longitude: 32.8627 } },
      { id: 'keçiören', name: 'Keçiören', type: 'ilçe', coordinates: { latitude: 39.9802, longitude: 32.8668 } }
    ]
  },
  {
    id: 'antalya',
    name: 'Antalya',
    plateNumber: 7,
    coordinates: { latitude: 36.8969, longitude: 30.7133 },
    municipalities: [
      { id: 'antalya-buyuksehir', name: 'Antalya Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 36.8969, longitude: 30.7133 } },
      { id: 'muratpasa', name: 'Muratpaşa', type: 'ilçe', coordinates: { latitude: 36.8969, longitude: 30.7133 } },
      { id: 'kepez', name: 'Kepez', type: 'ilçe', coordinates: { latitude: 36.8833, longitude: 30.7000 } },
      { id: 'aksu', name: 'Aksu', type: 'ilçe', coordinates: { latitude: 36.9500, longitude: 30.8500 } },
      { id: 'dosenmealti', name: 'Döşemealtı', type: 'ilçe', coordinates: { latitude: 36.9667, longitude: 30.6000 } },
      { id: 'alanya', name: 'Alanya', type: 'ilçe', coordinates: { latitude: 36.5437, longitude: 32.0045 } },
      { id: 'manavgat', name: 'Manavgat', type: 'ilçe', coordinates: { latitude: 36.7833, longitude: 31.4333 } },
      { id: 'serik', name: 'Serik', type: 'ilçe', coordinates: { latitude: 36.9167, longitude: 31.1000 } },
      { id: 'kas', name: 'Kaş', type: 'ilçe', coordinates: { latitude: 36.2000, longitude: 29.6333 } },
      { id: 'elmali', name: 'Elmalı', type: 'ilçe', coordinates: { latitude: 36.7333, longitude: 29.9167 } },
      { id: 'finike', name: 'Finike', type: 'ilçe', coordinates: { latitude: 36.3000, longitude: 30.1500 } },
      { id: 'korkuteli', name: 'Korkuteli', type: 'ilçe', coordinates: { latitude: 37.0667, longitude: 30.2000 } },
      { id: 'kumluca', name: 'Kumluca', type: 'ilçe', coordinates: { latitude: 36.3667, longitude: 30.2833 } },
      { id: 'demre', name: 'Demre', type: 'ilçe', coordinates: { latitude: 36.2333, longitude: 29.9833 } },
      { id: 'ibradi', name: 'İbradı', type: 'ilçe', coordinates: { latitude: 37.1000, longitude: 31.6000 } },
      { id: 'akseki', name: 'Akseki', type: 'ilçe', coordinates: { latitude: 37.0500, longitude: 31.7833 } },
      { id: 'gundogmus', name: 'Gündoğmuş', type: 'ilçe', coordinates: { latitude: 36.8167, longitude: 31.9833 } },
      { id: 'gazipasa', name: 'Gazipaşa', type: 'ilçe', coordinates: { latitude: 36.2667, longitude: 32.3167 } },
      { id: 'alanya', name: 'Alanya', type: 'ilçe', coordinates: { latitude: 36.5437, longitude: 32.0045 } }
    ]
  },
  {
    id: 'artvin',
    name: 'Artvin',
    plateNumber: 8,
    coordinates: { latitude: 41.1828, longitude: 41.8183 },
    municipalities: [
      { id: 'artvin-buyuksehir', name: 'Artvin Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 41.1828, longitude: 41.8183 } },
      { id: 'merkez', name: 'Merkez', type: 'ilçe', coordinates: { latitude: 41.1828, longitude: 41.8183 } },
      { id: 'hopa', name: 'Hopa', type: 'ilçe', coordinates: { latitude: 41.3906, longitude: 41.4375 } },
      { id: 'arhavi', name: 'Arhavi', type: 'ilçe', coordinates: { latitude: 41.3500, longitude: 41.3167 } },
      { id: 'yusufeli', name: 'Yusufeli', type: 'ilçe', coordinates: { latitude: 40.8167, longitude: 41.5500 } },
      { id: 'borcka', name: 'Borçka', type: 'ilçe', coordinates: { latitude: 41.3667, longitude: 41.6667 } },
      { id: 'savsat', name: 'Şavşat', type: 'ilçe', coordinates: { latitude: 41.2500, longitude: 42.3667 } },
      { id: 'murgul', name: 'Murgul', type: 'ilçe', coordinates: { latitude: 41.4667, longitude: 41.5667 } },
      { id: 'ardanuc', name: 'Ardanuç', type: 'ilçe', coordinates: { latitude: 41.1333, longitude: 42.0667 } }
    ]
  },
  {
    id: 'aydin',
    name: 'Aydın',
    plateNumber: 9,
    coordinates: { latitude: 37.8560, longitude: 27.8416 },
    municipalities: [
      { id: 'aydin-buyuksehir', name: 'Aydın Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 37.8560, longitude: 27.8416 } },
      { id: 'efeler', name: 'Efeler', type: 'ilçe', coordinates: { latitude: 37.8560, longitude: 27.8416 } },
      { id: 'nazilli', name: 'Nazilli', type: 'ilçe', coordinates: { latitude: 37.9167, longitude: 28.3167 } },
      { id: 'soke', name: 'Söke', type: 'ilçe', coordinates: { latitude: 37.7500, longitude: 27.4167 } },
      { id: 'kusadasi', name: 'Kuşadası', type: 'ilçe', coordinates: { latitude: 37.8667, longitude: 27.2667 } },
      { id: 'didim', name: 'Didim', type: 'ilçe', coordinates: { latitude: 37.3667, longitude: 27.2667 } },
      { id: 'germencik', name: 'Germencik', type: 'ilçe', coordinates: { latitude: 37.8667, longitude: 27.6667 } },
      { id: 'incirliova', name: 'İncirliova', type: 'ilçe', coordinates: { latitude: 37.8500, longitude: 27.7167 } },
      { id: 'buharkent', name: 'Buharkent', type: 'ilçe', coordinates: { latitude: 37.9667, longitude: 28.7500 } },
      { id: 'sultanhisar', name: 'Sultanhisar', type: 'ilçe', coordinates: { latitude: 37.8833, longitude: 28.1500 } },
      { id: 'kosk', name: 'Köşk', type: 'ilçe', coordinates: { latitude: 37.8500, longitude: 28.0500 } },
      { id: 'karpuzlu', name: 'Karpuzlu', type: 'ilçe', coordinates: { latitude: 37.5500, longitude: 27.8333 } },
      { id: 'bozdogan', name: 'Bozdoğan', type: 'ilçe', coordinates: { latitude: 37.6667, longitude: 28.3000 } },
      { id: 'cine', name: 'Çine', type: 'ilçe', coordinates: { latitude: 37.6167, longitude: 28.0667 } },
      { id: 'karacasu', name: 'Karacasu', type: 'ilçe', coordinates: { latitude: 37.7333, longitude: 28.6000 } },
      { id: 'yenipazar', name: 'Yenipazar', type: 'ilçe', coordinates: { latitude: 37.8167, longitude: 28.2000 } }
    ]
  },
  {
    id: 'balikesir',
    name: 'Balıkesir',
    plateNumber: 10,
    coordinates: { latitude: 39.6484, longitude: 27.8826 },
    municipalities: [
      { id: 'balikesir-buyuksehir', name: 'Balıkesir Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 39.6484, longitude: 27.8826 } },
      { id: 'karesi', name: 'Karesi', type: 'ilçe', coordinates: { latitude: 39.6484, longitude: 27.8826 } },
      { id: 'altieylul', name: 'Altıeylül', type: 'ilçe', coordinates: { latitude: 39.6500, longitude: 27.8833 } },
      { id: 'bandirma', name: 'Bandırma', type: 'ilçe', coordinates: { latitude: 40.3522, longitude: 27.9767 } },
      { id: 'edremit', name: 'Edremit', type: 'ilçe', coordinates: { latitude: 39.5833, longitude: 27.0167 } },
      { id: 'gomec', name: 'Gömeç', type: 'ilçe', coordinates: { latitude: 39.3833, longitude: 26.8333 } },
      { id: 'havran', name: 'Havran', type: 'ilçe', coordinates: { latitude: 39.5500, longitude: 27.1000 } },
      { id: 'burhaniye', name: 'Burhaniye', type: 'ilçe', coordinates: { latitude: 39.5000, longitude: 26.9667 } },
      { id: 'ayvalik', name: 'Ayvalık', type: 'ilçe', coordinates: { latitude: 39.3167, longitude: 26.7000 } },
      { id: 'dursunbey', name: 'Dursunbey', type: 'ilçe', coordinates: { latitude: 39.5833, longitude: 28.6167 } },
      { id: 'susurluk', name: 'Susurluk', type: 'ilçe', coordinates: { latitude: 39.9167, longitude: 28.1667 } },
      { id: 'bigadic', name: 'Bigadiç', type: 'ilçe', coordinates: { latitude: 39.4000, longitude: 28.1333 } },
      { id: 'sindirgi', name: 'Sındırgı', type: 'ilçe', coordinates: { latitude: 39.2333, longitude: 28.1833 } },
      { id: 'gordes', name: 'Gördes', type: 'ilçe', coordinates: { latitude: 38.9333, longitude: 28.2833 } },
      { id: 'savastepe', name: 'Savaştepe', type: 'ilçe', coordinates: { latitude: 39.3833, longitude: 27.6500 } },
      { id: 'ivrindi', name: 'İvrindi', type: 'ilçe', coordinates: { latitude: 39.5833, longitude: 27.4833 } },
      { id: 'kepsut', name: 'Kepsut', type: 'ilçe', coordinates: { latitude: 39.6833, longitude: 28.1500 } },
      { id: 'manyas', name: 'Manyas', type: 'ilçe', coordinates: { latitude: 40.0500, longitude: 27.9667 } },
      { id: 'gomec', name: 'Gönen', type: 'ilçe', coordinates: { latitude: 40.1000, longitude: 27.6500 } },
      { id: 'balya', name: 'Balya', type: 'ilçe', coordinates: { latitude: 39.7500, longitude: 27.5833 } }
    ]
  },
  {
    id: 'bilecik',
    name: 'Bilecik',
    plateNumber: 11,
    coordinates: { latitude: 40.1451, longitude: 29.9799 },
    municipalities: [
      { id: 'bilecik-merkez', name: 'Bilecik Merkez', type: 'ilçe', coordinates: { latitude: 40.1451, longitude: 29.9799 } },
      { id: 'bozuyuk', name: 'Bozüyük', type: 'ilçe', coordinates: { latitude: 39.9083, longitude: 30.0367 } }
    ]
  },
  {
    id: 'bingol',
    name: 'Bingöl',
    plateNumber: 12,
    coordinates: { latitude: 38.8855, longitude: 40.4966 },
    municipalities: [
      { id: 'bingol-merkez', name: 'Bingöl Merkez', type: 'ilçe', coordinates: { latitude: 38.8855, longitude: 40.4966 } },
      { id: 'genc', name: 'Genç', type: 'ilçe', coordinates: { latitude: 38.7500, longitude: 40.5500 } }
    ]
  },
  {
    id: 'bitlis',
    name: 'Bitlis',
    plateNumber: 13,
    coordinates: { latitude: 38.4006, longitude: 42.1095 },
    municipalities: [
      { id: 'bitlis-merkez', name: 'Bitlis Merkez', type: 'ilçe', coordinates: { latitude: 38.4006, longitude: 42.1095 } },
      { id: 'tatvan', name: 'Tatvan', type: 'ilçe', coordinates: { latitude: 38.5083, longitude: 42.2833 } }
    ]
  },
  {
    id: 'bolu',
    name: 'Bolu',
    plateNumber: 14,
    coordinates: { latitude: 40.7397, longitude: 31.6113 },
    municipalities: [
      { id: 'bolu-merkez', name: 'Bolu Merkez', type: 'ilçe', coordinates: { latitude: 40.7397, longitude: 31.6113 } },
      { id: 'gerede', name: 'Gerede', type: 'ilçe', coordinates: { latitude: 40.8000, longitude: 32.2000 } }
    ]
  },
  {
    id: 'burdur',
    name: 'Burdur',
    plateNumber: 15,
    coordinates: { latitude: 37.7205, longitude: 30.2906 },
    municipalities: [
      { id: 'burdur-merkez', name: 'Burdur Merkez', type: 'ilçe', coordinates: { latitude: 37.7205, longitude: 30.2906 } },
      { id: 'bucak', name: 'Bucak', type: 'ilçe', coordinates: { latitude: 37.4667, longitude: 30.2833 } }
    ]
  },
  {
    id: 'bursa',
    name: 'Bursa',
    plateNumber: 16,
    coordinates: { latitude: 40.1885, longitude: 29.0610 },
    municipalities: [
      { id: 'bursa-buyuksehir', name: 'Bursa Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 40.1885, longitude: 29.0610 } },
      { id: 'nilufer', name: 'Nilüfer', type: 'ilçe', coordinates: { latitude: 40.2167, longitude: 29.0667 } },
      { id: 'osmangazi', name: 'Osmangazi', type: 'ilçe', coordinates: { latitude: 40.1833, longitude: 29.0667 } }
    ]
  },
  {
    id: 'canakkale',
    name: 'Çanakkale',
    plateNumber: 17,
    coordinates: { latitude: 40.1553, longitude: 26.4142 },
    municipalities: [
      { id: 'canakkale-merkez', name: 'Çanakkale Merkez', type: 'ilçe', coordinates: { latitude: 40.1553, longitude: 26.4142 } },
      { id: 'biga', name: 'Biga', type: 'ilçe', coordinates: { latitude: 40.2281, longitude: 27.2422 } }
    ]
  },
  {
    id: 'cankiri',
    name: 'Çankırı',
    plateNumber: 18,
    coordinates: { latitude: 40.6013, longitude: 33.6134 },
    municipalities: [
      { id: 'cankiri-merkez', name: 'Çankırı Merkez', type: 'ilçe', coordinates: { latitude: 40.6013, longitude: 33.6134 } },
      { id: 'kursunlu', name: 'Kurşunlu', type: 'ilçe', coordinates: { latitude: 40.8333, longitude: 33.2667 } }
    ]
  },
  {
    id: 'corum',
    name: 'Çorum',
    plateNumber: 19,
    coordinates: { latitude: 40.5499, longitude: 34.9537 },
    municipalities: [
      { id: 'corum-merkez', name: 'Çorum Merkez', type: 'ilçe', coordinates: { latitude: 40.5499, longitude: 34.9537 } },
      { id: 'sungurlu', name: 'Sungurlu', type: 'ilçe', coordinates: { latitude: 40.1667, longitude: 34.3667 } }
    ]
  },
  {
    id: 'denizli',
    name: 'Denizli',
    plateNumber: 20,
    coordinates: { latitude: 37.7765, longitude: 29.0864 },
    municipalities: [
      { id: 'denizli-buyuksehir', name: 'Denizli Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 37.7765, longitude: 29.0864 } },
      { id: 'pamukkale', name: 'Pamukkale', type: 'ilçe', coordinates: { latitude: 37.9167, longitude: 29.1167 } }
    ]
  },
  {
    id: 'diyarbakir',
    name: 'Diyarbakır',
    plateNumber: 21,
    coordinates: { latitude: 37.9144, longitude: 40.2306 },
    municipalities: [
      { id: 'diyarbakir-buyuksehir', name: 'Diyarbakır Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 37.9144, longitude: 40.2306 } },
      { id: 'baglar', name: 'Bağlar', type: 'ilçe', coordinates: { latitude: 37.9167, longitude: 40.2167 } },
      { id: 'kayapinar', name: 'Kayapınar', type: 'ilçe', coordinates: { latitude: 37.9333, longitude: 40.2000 } }
    ]
  },
  {
    id: 'edirne',
    name: 'Edirne',
    plateNumber: 22,
    coordinates: { latitude: 41.6771, longitude: 26.5557 },
    municipalities: [
      { id: 'edirne-merkez', name: 'Edirne Merkez', type: 'ilçe', coordinates: { latitude: 41.6771, longitude: 26.5557 } },
      { id: 'keşan', name: 'Keşan', type: 'ilçe', coordinates: { latitude: 40.8500, longitude: 26.6333 } }
    ]
  },
  {
    id: 'elazig',
    name: 'Elazığ',
    plateNumber: 23,
    coordinates: { latitude: 38.6810, longitude: 39.2264 },
    municipalities: [
      { id: 'elazig-buyuksehir', name: 'Elazığ Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 38.6810, longitude: 39.2264 } },
      { id: 'karakocan', name: 'Karakocan', type: 'ilçe', coordinates: { latitude: 39.1667, longitude: 40.0333 } }
    ]
  },
  {
    id: 'erzincan',
    name: 'Erzincan',
    plateNumber: 24,
    coordinates: { latitude: 39.7500, longitude: 39.5000 },
    municipalities: [
      { id: 'erzincan-merkez', name: 'Erzincan Merkez', type: 'ilçe', coordinates: { latitude: 39.7500, longitude: 39.5000 } },
      { id: 'tercan', name: 'Tercan', type: 'ilçe', coordinates: { latitude: 39.7833, longitude: 40.3833 } }
    ]
  },
  {
    id: 'erzurum',
    name: 'Erzurum',
    plateNumber: 25,
    coordinates: { latitude: 39.9000, longitude: 41.2700 },
    municipalities: [
      { id: 'erzurum-buyuksehir', name: 'Erzurum Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 39.9000, longitude: 41.2700 } },
      { id: 'palandoken', name: 'Palandöken', type: 'ilçe', coordinates: { latitude: 39.9167, longitude: 41.2667 } }
    ]
  },
  {
    id: 'eskisehir',
    name: 'Eskişehir',
    plateNumber: 26,
    coordinates: { latitude: 39.7767, longitude: 30.5206 },
    municipalities: [
      { id: 'eskisehir-buyuksehir', name: 'Eskişehir Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 39.7767, longitude: 30.5206 } },
      { id: 'tepebasi', name: 'Tepebaşı', type: 'ilçe', coordinates: { latitude: 39.7833, longitude: 30.5167 } }
    ]
  },
  {
    id: 'gaziantep',
    name: 'Gaziantep',
    plateNumber: 27,
    coordinates: { latitude: 37.0662, longitude: 37.3833 },
    municipalities: [
      { id: 'gaziantep-buyuksehir', name: 'Gaziantep Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 37.0662, longitude: 37.3833 } },
      { id: 'sahinbey', name: 'Şahinbey', type: 'ilçe', coordinates: { latitude: 37.0667, longitude: 37.3833 } },
      { id: 'sehitkamil', name: 'Şehitkamil', type: 'ilçe', coordinates: { latitude: 37.1000, longitude: 37.3167 } }
    ]
  },
  {
    id: 'giresun',
    name: 'Giresun',
    plateNumber: 28,
    coordinates: { latitude: 40.9128, longitude: 38.3895 },
    municipalities: [
      { id: 'giresun-merkez', name: 'Giresun Merkez', type: 'ilçe', coordinates: { latitude: 40.9128, longitude: 38.3895 } },
      { id: 'bulancak', name: 'Bulancak', type: 'ilçe', coordinates: { latitude: 40.9333, longitude: 38.2333 } }
    ]
  },
  {
    id: 'gumushane',
    name: 'Gümüşhane',
    plateNumber: 29,
    coordinates: { latitude: 40.4603, longitude: 39.6884 },
    municipalities: [
      { id: 'gumushane-merkez', name: 'Gümüşhane Merkez', type: 'ilçe', coordinates: { latitude: 40.4603, longitude: 39.6884 } },
      { id: 'kelkit', name: 'Kelkit', type: 'ilçe', coordinates: { latitude: 40.1333, longitude: 39.4333 } }
    ]
  },
  {
    id: 'hakkari',
    name: 'Hakkari',
    plateNumber: 30,
    coordinates: { latitude: 37.5833, longitude: 43.7333 },
    municipalities: [
      { id: 'hakkari-merkez', name: 'Hakkari Merkez', type: 'ilçe', coordinates: { latitude: 37.5833, longitude: 43.7333 } },
      { id: 'yuksekova', name: 'Yüksekova', type: 'ilçe', coordinates: { latitude: 37.5667, longitude: 44.2833 } }
    ]
  },
  {
    id: 'hatay',
    name: 'Hatay',
    plateNumber: 31,
    coordinates: { latitude: 36.2023, longitude: 36.1613 },
    municipalities: [
      { id: 'hatay-buyuksehir', name: 'Hatay Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 36.2023, longitude: 36.1613 } },
      { id: 'antakya', name: 'Antakya', type: 'ilçe', coordinates: { latitude: 36.2023, longitude: 36.1613 } },
      { id: 'iskenderun', name: 'İskenderun', type: 'ilçe', coordinates: { latitude: 36.5872, longitude: 36.1733 } }
    ]
  },
  {
    id: 'isparta',
    name: 'Isparta',
    plateNumber: 32,
    coordinates: { latitude: 37.7648, longitude: 30.5566 },
    municipalities: [
      { id: 'isparta-merkez', name: 'Isparta Merkez', type: 'ilçe', coordinates: { latitude: 37.7648, longitude: 30.5566 } },
      { id: 'sarkikaraagac', name: 'Şarkikaraağaç', type: 'ilçe', coordinates: { latitude: 38.0833, longitude: 31.3667 } }
    ]
  },
  {
    id: 'mersin',
    name: 'Mersin',
    plateNumber: 33,
    coordinates: { latitude: 36.8121, longitude: 34.6415 },
    municipalities: [
      { id: 'mersin-buyuksehir', name: 'Mersin Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 36.8121, longitude: 34.6415 } },
      { id: 'akdeniz', name: 'Akdeniz', type: 'ilçe', coordinates: { latitude: 36.8167, longitude: 34.6333 } },
      { id: 'toroslar', name: 'Toroslar', type: 'ilçe', coordinates: { latitude: 36.8000, longitude: 34.6500 } }
    ]
  },
  {
    id: 'istanbul',
    name: 'İstanbul',
    plateNumber: 34,
    coordinates: { latitude: 41.0082, longitude: 28.9784 },
    municipalities: [
      { id: 'istanbul-buyuksehir', name: 'İstanbul Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 41.0082, longitude: 28.9784 } },
      { id: 'kadikoy', name: 'Kadıköy', type: 'ilçe', coordinates: { latitude: 40.9900, longitude: 29.0300 } },
      { id: 'besiktas', name: 'Beşiktaş', type: 'ilçe', coordinates: { latitude: 41.0422, longitude: 29.0083 } },
      { id: 'sisli', name: 'Şişli', type: 'ilçe', coordinates: { latitude: 41.0600, longitude: 28.9877 } }
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
      { id: 'bornova', name: 'Bornova', type: 'ilçe', coordinates: { latitude: 38.4667, longitude: 27.2167 } }
    ]
  },
  {
    id: 'kars',
    name: 'Kars',
    plateNumber: 36,
    coordinates: { latitude: 40.6167, longitude: 43.1000 },
    municipalities: [
      { id: 'kars-merkez', name: 'Kars Merkez', type: 'ilçe', coordinates: { latitude: 40.6167, longitude: 43.1000 } },
      { id: 'sarikamis', name: 'Sarıkamış', type: 'ilçe', coordinates: { latitude: 40.3333, longitude: 42.5833 } }
    ]
  },
  {
    id: 'kastamonu',
    name: 'Kastamonu',
    plateNumber: 37,
    coordinates: { latitude: 41.3887, longitude: 33.7827 },
    municipalities: [
      { id: 'kastamonu-merkez', name: 'Kastamonu Merkez', type: 'ilçe', coordinates: { latitude: 41.3887, longitude: 33.7827 } },
      { id: 'tosya', name: 'Tosya', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 34.0333 } }
    ]
  },
  {
    id: 'kayseri',
    name: 'Kayseri',
    plateNumber: 38,
    coordinates: { latitude: 38.7205, longitude: 35.4826 },
    municipalities: [
      { id: 'kayseri-buyuksehir', name: 'Kayseri Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 38.7205, longitude: 35.4826 } },
      { id: 'melikgazi', name: 'Melikgazi', type: 'ilçe', coordinates: { latitude: 38.7205, longitude: 35.4826 } },
      { id: 'kocasinan', name: 'Kocasinan', type: 'ilçe', coordinates: { latitude: 38.7333, longitude: 35.4833 } }
    ]
  },
  {
    id: 'kirklareli',
    name: 'Kırklareli',
    plateNumber: 39,
    coordinates: { latitude: 41.7333, longitude: 27.2167 },
    municipalities: [
      { id: 'kirklareli-merkez', name: 'Kırklareli Merkez', type: 'ilçe', coordinates: { latitude: 41.7333, longitude: 27.2167 } },
      { id: 'luleburgaz', name: 'Lüleburgaz', type: 'ilçe', coordinates: { latitude: 41.4000, longitude: 27.3500 } }
    ]
  },
  {
    id: 'kirsehir',
    name: 'Kırşehir',
    plateNumber: 40,
    coordinates: { latitude: 39.1425, longitude: 34.1709 },
    municipalities: [
      { id: 'kirsehir-merkez', name: 'Kırşehir Merkez', type: 'ilçe', coordinates: { latitude: 39.1425, longitude: 34.1709 } },
      { id: 'kaman', name: 'Kaman', type: 'ilçe', coordinates: { latitude: 39.3500, longitude: 33.7167 } }
    ]
  },
  {
    id: 'kocaeli',
    name: 'Kocaeli',
    plateNumber: 41,
    coordinates: { latitude: 40.8533, longitude: 29.8815 },
    municipalities: [
      { id: 'kocaeli-buyuksehir', name: 'Kocaeli Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 40.8533, longitude: 29.8815 } },
      { id: 'izmit', name: 'İzmit', type: 'ilçe', coordinates: { latitude: 40.8533, longitude: 29.8815 } },
      { id: 'gebze', name: 'Gebze', type: 'ilçe', coordinates: { latitude: 40.8000, longitude: 29.4333 } }
    ]
  },
  {
    id: 'konya',
    name: 'Konya',
    plateNumber: 42,
    coordinates: { latitude: 37.8667, longitude: 32.4833 },
    municipalities: [
      { id: 'konya-buyuksehir', name: 'Konya Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 37.8667, longitude: 32.4833 } },
      { id: 'selcuklu', name: 'Selçuklu', type: 'ilçe', coordinates: { latitude: 37.8667, longitude: 32.4833 } },
      { id: 'meram', name: 'Meram', type: 'ilçe', coordinates: { latitude: 37.8500, longitude: 32.4667 } }
    ]
  },
  {
    id: 'kutahya',
    name: 'Kütahya',
    plateNumber: 43,
    coordinates: { latitude: 39.4167, longitude: 29.9833 },
    municipalities: [
      { id: 'kutahya-merkez', name: 'Kütahya Merkez', type: 'ilçe', coordinates: { latitude: 39.4167, longitude: 29.9833 } },
      { id: 'tavsanli', name: 'Tavşanlı', type: 'ilçe', coordinates: { latitude: 39.5500, longitude: 29.4833 } }
    ]
  },
  {
    id: 'malatya',
    name: 'Malatya',
    plateNumber: 44,
    coordinates: { latitude: 38.3552, longitude: 38.3095 },
    municipalities: [
      { id: 'malatya-buyuksehir', name: 'Malatya Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 38.3552, longitude: 38.3095 } },
      { id: 'battalgazi', name: 'Battalgazi', type: 'ilçe', coordinates: { latitude: 38.3552, longitude: 38.3095 } },
      { id: 'yesilyurt', name: 'Yeşilyurt', type: 'ilçe', coordinates: { latitude: 38.3000, longitude: 38.2500 } }
    ]
  },
  {
    id: 'manisa',
    name: 'Manisa',
    plateNumber: 45,
    coordinates: { latitude: 38.6191, longitude: 27.4289 },
    municipalities: [
      { id: 'manisa-buyuksehir', name: 'Manisa Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 38.6191, longitude: 27.4289 } },
      { id: 'sehzadeler', name: 'Şehzadeler', type: 'ilçe', coordinates: { latitude: 38.6191, longitude: 27.4289 } },
      { id: 'yunusemre', name: 'Yunusemre', type: 'ilçe', coordinates: { latitude: 38.6333, longitude: 27.4333 } }
    ]
  },
  {
    id: 'kahramanmaras',
    name: 'Kahramanmaraş',
    plateNumber: 46,
    coordinates: { latitude: 37.5858, longitude: 36.9371 },
    municipalities: [
      { id: 'kahramanmaras-buyuksehir', name: 'Kahramanmaraş Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 37.5858, longitude: 36.9371 } },
      { id: 'dundarli', name: 'Dulkadiroğlu', type: 'ilçe', coordinates: { latitude: 37.5858, longitude: 36.9371 } },
      { id: 'onikişubat', name: 'Onikişubat', type: 'ilçe', coordinates: { latitude: 37.6000, longitude: 36.9333 } }
    ]
  },
  {
    id: 'mardin',
    name: 'Mardin',
    plateNumber: 47,
    coordinates: { latitude: 37.3212, longitude: 40.7245 },
    municipalities: [
      { id: 'mardin-buyuksehir', name: 'Mardin Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 37.3212, longitude: 40.7245 } },
      { id: 'artuklu', name: 'Artuklu', type: 'ilçe', coordinates: { latitude: 37.3212, longitude: 40.7245 } },
      { id: 'kiziltepe', name: 'Kızıltepe', type: 'ilçe', coordinates: { latitude: 37.1833, longitude: 40.5833 } }
    ]
  },
  {
    id: 'mugla',
    name: 'Muğla',
    plateNumber: 48,
    coordinates: { latitude: 37.2154, longitude: 28.3636 },
    municipalities: [
      { id: 'mugla-buyuksehir', name: 'Muğla Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 37.2154, longitude: 28.3636 } },
      { id: 'mentese', name: 'Menteşe', type: 'ilçe', coordinates: { latitude: 37.2154, longitude: 28.3636 } },
      { id: 'bodrum', name: 'Bodrum', type: 'ilçe', coordinates: { latitude: 37.0333, longitude: 27.4333 } }
    ]
  },
  {
    id: 'mus',
    name: 'Muş',
    plateNumber: 49,
    coordinates: { latitude: 38.7432, longitude: 41.5065 },
    municipalities: [
      { id: 'mus-merkez', name: 'Muş Merkez', type: 'ilçe', coordinates: { latitude: 38.7432, longitude: 41.5065 } },
      { id: 'bulanik', name: 'Bulanık', type: 'ilçe', coordinates: { latitude: 39.0833, longitude: 42.2667 } }
    ]
  },
  {
    id: 'nevsehir',
    name: 'Nevşehir',
    plateNumber: 50,
    coordinates: { latitude: 38.6244, longitude: 34.7239 },
    municipalities: [
      { id: 'nevsehir-merkez', name: 'Nevşehir Merkez', type: 'ilçe', coordinates: { latitude: 38.6244, longitude: 34.7239 } },
      { id: 'urgup', name: 'Ürgüp', type: 'ilçe', coordinates: { latitude: 38.6333, longitude: 34.9167 } }
    ]
  },
  {
    id: 'nigde',
    name: 'Niğde',
    plateNumber: 51,
    coordinates: { latitude: 37.9667, longitude: 34.6833 },
    municipalities: [
      { id: 'nigde-merkez', name: 'Niğde Merkez', type: 'ilçe', coordinates: { latitude: 37.9667, longitude: 34.6833 } },
      { id: 'bor', name: 'Bor', type: 'ilçe', coordinates: { latitude: 37.8833, longitude: 34.5667 } },
      { id: 'ulukisla', name: 'Ulukışla', type: 'ilçe', coordinates: { latitude: 37.5500, longitude: 34.4833 } }
    ]
  },
  {
    id: 'ordu',
    name: 'Ordu',
    plateNumber: 52,
    coordinates: { latitude: 40.9839, longitude: 37.8764 },
    municipalities: [
      { id: 'ordu-buyuksehir', name: 'Ordu Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 40.9839, longitude: 37.8764 } },
      { id: 'altinordu', name: 'Altınordu', type: 'ilçe', coordinates: { latitude: 40.9839, longitude: 37.8764 } },
      { id: 'fatsa', name: 'Fatsa', type: 'ilçe', coordinates: { latitude: 41.0333, longitude: 37.5000 } }
    ]
  },
  {
    id: 'rize',
    name: 'Rize',
    plateNumber: 53,
    coordinates: { latitude: 41.0201, longitude: 40.5234 },
    municipalities: [
      { id: 'rize-merkez', name: 'Rize Merkez', type: 'ilçe', coordinates: { latitude: 41.0201, longitude: 40.5234 } },
      { id: 'ardesen', name: 'Ardeşen', type: 'ilçe', coordinates: { latitude: 41.1833, longitude: 40.9833 } }
    ]
  },
  {
    id: 'sakarya',
    name: 'Sakarya',
    plateNumber: 54,
    coordinates: { latitude: 40.7569, longitude: 30.3781 },
    municipalities: [
      { id: 'sakarya-buyuksehir', name: 'Sakarya Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 40.7569, longitude: 30.3781 } },
      { id: 'adapazari', name: 'Adapazarı', type: 'ilçe', coordinates: { latitude: 40.7569, longitude: 30.3781 } },
      { id: 'serdivan', name: 'Serdivan', type: 'ilçe', coordinates: { latitude: 40.7667, longitude: 30.3667 } }
    ]
  },
  {
    id: 'samsun',
    name: 'Samsun',
    plateNumber: 55,
    coordinates: { latitude: 41.2867, longitude: 36.3300 },
    municipalities: [
      { id: 'samsun-buyuksehir', name: 'Samsun Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 41.2867, longitude: 36.3300 } },
      { id: 'ilkadim', name: 'İlkadım', type: 'ilçe', coordinates: { latitude: 41.2867, longitude: 36.3300 } },
      { id: 'canik', name: 'Canik', type: 'ilçe', coordinates: { latitude: 41.3000, longitude: 36.3333 } }
    ]
  },
  {
    id: 'siirt',
    name: 'Siirt',
    plateNumber: 56,
    coordinates: { latitude: 37.9333, longitude: 41.9500 },
    municipalities: [
      { id: 'siirt-merkez', name: 'Siirt Merkez', type: 'ilçe', coordinates: { latitude: 37.9333, longitude: 41.9500 } },
      { id: 'kurtalan', name: 'Kurtalan', type: 'ilçe', coordinates: { latitude: 37.9333, longitude: 41.7000 } }
    ]
  },
  {
    id: 'sinop',
    name: 'Sinop',
    plateNumber: 57,
    coordinates: { latitude: 42.0231, longitude: 35.1531 },
    municipalities: [
      { id: 'sinop-merkez', name: 'Sinop Merkez', type: 'ilçe', coordinates: { latitude: 42.0231, longitude: 35.1531 } },
      { id: 'boyabat', name: 'Boyabat', type: 'ilçe', coordinates: { latitude: 41.4667, longitude: 34.7667 } }
    ]
  },
  {
    id: 'sivas',
    name: 'Sivas',
    plateNumber: 58,
    coordinates: { latitude: 39.7477, longitude: 37.0179 },
    municipalities: [
      { id: 'sivas-buyuksehir', name: 'Sivas Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 39.7477, longitude: 37.0179 } },
      { id: 'merkez', name: 'Merkez', type: 'ilçe', coordinates: { latitude: 39.7477, longitude: 37.0179 } },
      { id: 'sarkisla', name: 'Şarkışla', type: 'ilçe', coordinates: { latitude: 39.3500, longitude: 36.4000 } }
    ]
  },
  {
    id: 'tekirdag',
    name: 'Tekirdağ',
    plateNumber: 59,
    coordinates: { latitude: 40.9781, longitude: 27.5117 },
    municipalities: [
      { id: 'tekirdag-buyuksehir', name: 'Tekirdağ Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 40.9781, longitude: 27.5117 } },
      { id: 'suleymanpasa', name: 'Süleymanpaşa', type: 'ilçe', coordinates: { latitude: 40.9781, longitude: 27.5117 } },
      { id: 'corlu', name: 'Çorlu', type: 'ilçe', coordinates: { latitude: 41.1500, longitude: 27.8000 } }
    ]
  },
  {
    id: 'tokat',
    name: 'Tokat',
    plateNumber: 60,
    coordinates: { latitude: 40.3167, longitude: 36.5500 },
    municipalities: [
      { id: 'tokat-merkez', name: 'Tokat Merkez', type: 'ilçe', coordinates: { latitude: 40.3167, longitude: 36.5500 } },
      { id: 'turhal', name: 'Turhal', type: 'ilçe', coordinates: { latitude: 40.3833, longitude: 36.0833 } }
    ]
  },
  {
    id: 'trabzon',
    name: 'Trabzon',
    plateNumber: 61,
    coordinates: { latitude: 41.0015, longitude: 39.7178 },
    municipalities: [
      { id: 'trabzon-buyuksehir', name: 'Trabzon Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 41.0015, longitude: 39.7178 } },
      { id: 'ortahisar', name: 'Ortahisar', type: 'ilçe', coordinates: { latitude: 41.0015, longitude: 39.7178 } },
      { id: 'akcaabat', name: 'Akçaabat', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 39.5667 } }
    ]
  },
  {
    id: 'tunceli',
    name: 'Tunceli',
    plateNumber: 62,
    coordinates: { latitude: 39.1079, longitude: 39.5401 },
    municipalities: [
      { id: 'tunceli-merkez', name: 'Tunceli Merkez', type: 'ilçe', coordinates: { latitude: 39.1079, longitude: 39.5401 } },
      { id: 'pertek', name: 'Pertek', type: 'ilçe', coordinates: { latitude: 38.8667, longitude: 39.3167 } }
    ]
  },
  {
    id: 'sanliurfa',
    name: 'Şanlıurfa',
    plateNumber: 63,
    coordinates: { latitude: 37.1591, longitude: 38.7969 },
    municipalities: [
      { id: 'sanliurfa-buyuksehir', name: 'Şanlıurfa Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 37.1591, longitude: 38.7969 } },
      { id: 'eyyubiye', name: 'Eyyübiye', type: 'ilçe', coordinates: { latitude: 37.1591, longitude: 38.7969 } },
      { id: 'haliliye', name: 'Haliliye', type: 'ilçe', coordinates: { latitude: 37.1500, longitude: 38.8000 } }
    ]
  },
  {
    id: 'usak',
    name: 'Uşak',
    plateNumber: 64,
    coordinates: { latitude: 38.6742, longitude: 29.4058 },
    municipalities: [
      { id: 'usak-merkez', name: 'Uşak Merkez', type: 'ilçe', coordinates: { latitude: 38.6742, longitude: 29.4058 } },
      { id: 'banaz', name: 'Banaz', type: 'ilçe', coordinates: { latitude: 38.7333, longitude: 29.7500 } }
    ]
  },
  {
    id: 'van',
    name: 'Van',
    plateNumber: 65,
    coordinates: { latitude: 38.4891, longitude: 43.4089 },
    municipalities: [
      { id: 'van-buyuksehir', name: 'Van Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 38.4891, longitude: 43.4089 } },
      { id: 'edremit', name: 'Edremit', type: 'ilçe', coordinates: { latitude: 38.4167, longitude: 43.2500 } },
      { id: 'tusba', name: 'Tuşba', type: 'ilçe', coordinates: { latitude: 38.4891, longitude: 43.4089 } }
    ]
  },
  {
    id: 'yozgat',
    name: 'Yozgat',
    plateNumber: 66,
    coordinates: { latitude: 39.8181, longitude: 34.8147 },
    municipalities: [
      { id: 'yozgat-merkez', name: 'Yozgat Merkez', type: 'ilçe', coordinates: { latitude: 39.8181, longitude: 34.8147 } },
      { id: 'sorgun', name: 'Sorgun', type: 'ilçe', coordinates: { latitude: 39.8167, longitude: 35.1833 } }
    ]
  },
  {
    id: 'zonguldak',
    name: 'Zonguldak',
    plateNumber: 67,
    coordinates: { latitude: 41.4564, longitude: 31.7987 },
    municipalities: [
      { id: 'zonguldak-merkez', name: 'Zonguldak Merkez', type: 'ilçe', coordinates: { latitude: 41.4564, longitude: 31.7987 } },
      { id: 'kozlu', name: 'Kozlu', type: 'ilçe', coordinates: { latitude: 41.4333, longitude: 31.7500 } }
    ]
  },
  {
    id: 'aksaray',
    name: 'Aksaray',
    plateNumber: 68,
    coordinates: { latitude: 38.3726, longitude: 34.0254 },
    municipalities: [
      { id: 'aksaray-buyuksehir', name: 'Aksaray Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 38.3726, longitude: 34.0254 } },
      { id: 'merkez', name: 'Merkez', type: 'ilçe', coordinates: { latitude: 38.3726, longitude: 34.0254 } },
      { id: 'ortakoy', name: 'Ortaköy', type: 'ilçe', coordinates: { latitude: 38.7333, longitude: 34.0333 } }
    ]
  },
  {
    id: 'bayburt',
    name: 'Bayburt',
    plateNumber: 69,
    coordinates: { latitude: 40.2552, longitude: 40.2249 },
    municipalities: [
      { id: 'bayburt-merkez', name: 'Bayburt Merkez', type: 'ilçe', coordinates: { latitude: 40.2552, longitude: 40.2249 } },
      { id: 'demirozu', name: 'Demirözü', type: 'ilçe', coordinates: { latitude: 40.1667, longitude: 39.9000 } }
    ]
  },
  {
    id: 'karaman',
    name: 'Karaman',
    plateNumber: 70,
    coordinates: { latitude: 37.1759, longitude: 33.2287 },
    municipalities: [
      { id: 'karaman-buyuksehir', name: 'Karaman Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 37.1759, longitude: 33.2287 } },
      { id: 'merkez', name: 'Merkez', type: 'ilçe', coordinates: { latitude: 37.1759, longitude: 33.2287 } },
      { id: 'ermenek', name: 'Ermenek', type: 'ilçe', coordinates: { latitude: 36.6000, longitude: 32.8833 } }
    ]
  },
  {
    id: 'kirikkale',
    name: 'Kırıkkale',
    plateNumber: 71,
    coordinates: { latitude: 39.8468, longitude: 33.5153 },
    municipalities: [
      { id: 'kirikkale-merkez', name: 'Kırıkkale Merkez', type: 'ilçe', coordinates: { latitude: 39.8468, longitude: 33.5153 } },
      { id: 'yahsihan', name: 'Yahşihan', type: 'ilçe', coordinates: { latitude: 39.8500, longitude: 33.4500 } }
    ]
  },
  {
    id: 'batman',
    name: 'Batman',
    plateNumber: 72,
    coordinates: { latitude: 37.8812, longitude: 41.1351 },
    municipalities: [
      { id: 'batman-buyuksehir', name: 'Batman Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 37.8812, longitude: 41.1351 } },
      { id: 'merkez', name: 'Merkez', type: 'ilçe', coordinates: { latitude: 37.8812, longitude: 41.1351 } },
      { id: 'kozluk', name: 'Kozluk', type: 'ilçe', coordinates: { latitude: 38.1833, longitude: 41.4833 } }
    ]
  },
  {
    id: 'sirnak',
    name: 'Şırnak',
    plateNumber: 73,
    coordinates: { latitude: 37.5164, longitude: 42.4611 },
    municipalities: [
      { id: 'sirnak-merkez', name: 'Şırnak Merkez', type: 'ilçe', coordinates: { latitude: 37.5164, longitude: 42.4611 } },
      { id: 'cizre', name: 'Cizre', type: 'ilçe', coordinates: { latitude: 37.3333, longitude: 42.1833 } }
    ]
  },
  {
    id: 'bartin',
    name: 'Bartın',
    plateNumber: 74,
    coordinates: { latitude: 41.6344, longitude: 32.3375 },
    municipalities: [
      { id: 'bartin-merkez', name: 'Bartın Merkez', type: 'ilçe', coordinates: { latitude: 41.6344, longitude: 32.3375 } },
      { id: 'amasra', name: 'Amasra', type: 'ilçe', coordinates: { latitude: 41.7500, longitude: 32.3833 } }
    ]
  },
  {
    id: 'ardahan',
    name: 'Ardahan',
    plateNumber: 75,
    coordinates: { latitude: 41.1105, longitude: 42.7022 },
    municipalities: [
      { id: 'ardahan-merkez', name: 'Ardahan Merkez', type: 'ilçe', coordinates: { latitude: 41.1105, longitude: 42.7022 } },
      { id: 'gole', name: 'Göle', type: 'ilçe', coordinates: { latitude: 40.7833, longitude: 42.6000 } }
    ]
  },
  {
    id: 'igdir',
    name: 'Iğdır',
    plateNumber: 76,
    coordinates: { latitude: 39.9167, longitude: 44.0333 },
    municipalities: [
      { id: 'igdir-merkez', name: 'Iğdır Merkez', type: 'ilçe', coordinates: { latitude: 39.9167, longitude: 44.0333 } },
      { id: 'tuzluca', name: 'Tuzluca', type: 'ilçe', coordinates: { latitude: 40.0500, longitude: 43.6500 } }
    ]
  },
  {
    id: 'yalova',
    name: 'Yalova',
    plateNumber: 77,
    coordinates: { latitude: 40.6500, longitude: 29.2667 },
    municipalities: [
      { id: 'yalova-buyuksehir', name: 'Yalova Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 40.6500, longitude: 29.2667 } },
      { id: 'merkez', name: 'Merkez', type: 'ilçe', coordinates: { latitude: 40.6500, longitude: 29.2667 } },
      { id: 'cinarcik', name: 'Çınarcık', type: 'ilçe', coordinates: { latitude: 40.6333, longitude: 29.1167 } }
    ]
  },
  {
    id: 'karabuk',
    name: 'Karabük',
    plateNumber: 78,
    coordinates: { latitude: 41.2061, longitude: 32.6204 },
    municipalities: [
      { id: 'karabuk-buyuksehir', name: 'Karabük Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 41.2061, longitude: 32.6204 } },
      { id: 'merkez', name: 'Merkez', type: 'ilçe', coordinates: { latitude: 41.2061, longitude: 32.6204 } },
      { id: 'safranbolu', name: 'Safranbolu', type: 'ilçe', coordinates: { latitude: 41.2500, longitude: 32.6833 } }
    ]
  },
  {
    id: 'kilis',
    name: 'Kilis',
    plateNumber: 79,
    coordinates: { latitude: 36.7184, longitude: 37.1212 },
    municipalities: [
      { id: 'kilis-buyuksehir', name: 'Kilis Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 36.7184, longitude: 37.1212 } },
      { id: 'merkez', name: 'Merkez', type: 'ilçe', coordinates: { latitude: 36.7184, longitude: 37.1212 } },
      { id: 'musabeyli', name: 'Musabeyli', type: 'ilçe', coordinates: { latitude: 36.8833, longitude: 36.9167 } }
    ]
  },
  {
    id: 'osmaniye',
    name: 'Osmaniye',
    plateNumber: 80,
    coordinates: { latitude: 37.0742, longitude: 36.2500 },
    municipalities: [
      { id: 'osmaniye-buyuksehir', name: 'Osmaniye Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 37.0742, longitude: 36.2500 } },
      { id: 'merkez', name: 'Merkez', type: 'ilçe', coordinates: { latitude: 37.0742, longitude: 36.2500 } },
      { id: 'kadirli', name: 'Kadirli', type: 'ilçe', coordinates: { latitude: 37.3667, longitude: 36.1000 } }
    ]
  },
  {
    id: 'duzce',
    name: 'Düzce',
    plateNumber: 81,
    coordinates: { latitude: 40.8438, longitude: 31.1565 },
    municipalities: [
      { id: 'duzce-buyuksehir', name: 'Düzce Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 40.8438, longitude: 31.1565 } },
      { id: 'merkez', name: 'Merkez', type: 'ilçe', coordinates: { latitude: 40.8438, longitude: 31.1565 } },
      { id: 'akcakoca', name: 'Akçakoca', type: 'ilçe', coordinates: { latitude: 41.0833, longitude: 31.1167 } }
    ]
  }
];

// Konumdan en yakın ili bulur
export function findCityByLocation(latitude: number, longitude: number): City | null {
  function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // km
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
    const distance = calculateDistance(latitude, longitude, city.coordinates.latitude, city.coordinates.longitude);
    if (distance < minDistance) {
      minDistance = distance;
      closestCity = city;
    }
  }
  return closestCity;
}

// Bir ilin tüm belediyelerini döndürür
export function getMunicipalitiesOfCity(cityId: string): Municipality[] {
  const city = turkeyCities.find(c => c.id === cityId);
  return city ? city.municipalities : [];
} 