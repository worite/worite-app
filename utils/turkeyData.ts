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
      { id: 'agri-il', name: 'Ağrı Belediyesi', type: 'ilçe', coordinates: { latitude: 39.7191, longitude: 43.0503 } },
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
      { id: 'amasya-il', name: 'Amasya Belediyesi', type: 'ilçe', coordinates: { latitude: 40.6499, longitude: 35.8353 } },
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
      { id: 'keçiören', name: 'Keçiören', type: 'ilçe', coordinates: { latitude: 39.9802, longitude: 32.8668 } },
      { id: 'mamak', name: 'Mamak', type: 'ilçe', coordinates: { latitude: 39.9500, longitude: 32.9167 } },
      { id: 'yenimahalle', name: 'Yenimahalle', type: 'ilçe', coordinates: { latitude: 39.9833, longitude: 32.8167 } },
      { id: 'etimesgut', name: 'Etimesgut', type: 'ilçe', coordinates: { latitude: 39.9500, longitude: 32.6667 } },
      { id: 'sincan', name: 'Sincan', type: 'ilçe', coordinates: { latitude: 39.9667, longitude: 32.5667 } },
      { id: 'altindag', name: 'Altındağ', type: 'ilçe', coordinates: { latitude: 39.9667, longitude: 32.8667 } },
      { id: 'pursaklar', name: 'Pursaklar', type: 'ilçe', coordinates: { latitude: 40.0333, longitude: 32.9833 } },
      { id: 'golbasi', name: 'Gölbaşı', type: 'ilçe', coordinates: { latitude: 39.7833, longitude: 32.8167 } },
      { id: 'polatli', name: 'Polatlı', type: 'ilçe', coordinates: { latitude: 39.5833, longitude: 32.1500 } },
      { id: 'cubuk', name: 'Çubuk', type: 'ilçe', coordinates: { latitude: 40.2333, longitude: 33.0333 } },
      { id: 'kazan', name: 'Kazan', type: 'ilçe', coordinates: { latitude: 40.2333, longitude: 32.6833 } },
      { id: 'akyurt', name: 'Akyurt', type: 'ilçe', coordinates: { latitude: 40.1333, longitude: 33.0833 } },
      { id: 'kalecik', name: 'Kalecik', type: 'ilçe', coordinates: { latitude: 40.1000, longitude: 33.4167 } },
      { id: 'kizilcahamam', name: 'Kızılcahamam', type: 'ilçe', coordinates: { latitude: 40.4667, longitude: 32.6500 } },
      { id: 'beypazari', name: 'Beypazarı', type: 'ilçe', coordinates: { latitude: 40.1667, longitude: 31.9167 } },
      { id: 'nallihan', name: 'Nallıhan', type: 'ilçe', coordinates: { latitude: 40.1833, longitude: 31.3500 } },
      { id: 'sereflikochisar', name: 'Şereflikoçhisar', type: 'ilçe', coordinates: { latitude: 38.9333, longitude: 33.5500 } },
      { id: 'haymana', name: 'Haymana', type: 'ilçe', coordinates: { latitude: 39.4333, longitude: 32.4833 } },
      { id: 'bala', name: 'Bala', type: 'ilçe', coordinates: { latitude: 39.5500, longitude: 33.1167 } },
      { id: 'elmadag', name: 'Elmadağ', type: 'ilçe', coordinates: { latitude: 39.9167, longitude: 33.2333 } },
      { id: 'gudul', name: 'Güdül', type: 'ilçe', coordinates: { latitude: 40.2167, longitude: 32.2500 } },
      { id: 'camlidere', name: 'Çamlıdere', type: 'ilçe', coordinates: { latitude: 40.4833, longitude: 32.4833 } },
      { id: 'evren', name: 'Evren', type: 'ilçe', coordinates: { latitude: 39.0167, longitude: 33.8167 } }
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
      { id: 'gazipasa', name: 'Gazipaşa', type: 'ilçe', coordinates: { latitude: 36.2667, longitude: 32.3167 } }
    ]
  },
  {
    id: 'artvin',
    name: 'Artvin',
    plateNumber: 8,
    coordinates: { latitude: 41.1828, longitude: 41.8183 },
    municipalities: [
      { id: 'artvin-il', name: 'Artvin Belediyesi', type: 'ilçe', coordinates: { latitude: 41.1828, longitude: 41.8183 } },
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
      { id: 'bilecik-il', name: 'Bilecik Belediyesi', type: 'ilçe', coordinates: { latitude: 40.1451, longitude: 29.9799 } },
      { id: 'bozuyuk', name: 'Bozüyük', type: 'ilçe', coordinates: { latitude: 39.9083, longitude: 30.0367 } },
      { id: 'osmaneli', name: 'Osmaneli', type: 'ilçe', coordinates: { latitude: 40.3500, longitude: 30.0167 } },
      { id: 'sogut', name: 'Söğüt', type: 'ilçe', coordinates: { latitude: 40.0167, longitude: 30.1833 } },
      { id: 'golpazari', name: 'Gölpazarı', type: 'ilçe', coordinates: { latitude: 40.2833, longitude: 30.3167 } },
      { id: 'pazaryeri', name: 'Pazaryeri', type: 'ilçe', coordinates: { latitude: 39.9833, longitude: 29.9167 } },
      { id: 'yenipazar', name: 'Yenipazar', type: 'ilçe', coordinates: { latitude: 40.1833, longitude: 30.5167 } },
      { id: 'inhisar', name: 'İnhisar', type: 'ilçe', coordinates: { latitude: 40.0500, longitude: 30.3833 } }
    ]
  },
  {
    id: 'bingol',
    name: 'Bingöl',
    plateNumber: 12,
    coordinates: { latitude: 38.8855, longitude: 40.4966 },
    municipalities: [
      { id: 'bingol-il', name: 'Bingöl Belediyesi', type: 'ilçe', coordinates: { latitude: 38.8855, longitude: 40.4966 } },
      { id: 'genc', name: 'Genç', type: 'ilçe', coordinates: { latitude: 38.7500, longitude: 40.5500 } },
      { id: 'solhan', name: 'Solhan', type: 'ilçe', coordinates: { latitude: 38.9667, longitude: 41.0500 } },
      { id: 'karlıova', name: 'Karlıova', type: 'ilçe', coordinates: { latitude: 39.3000, longitude: 41.0167 } },
      { id: 'adakli', name: 'Adaklı', type: 'ilçe', coordinates: { latitude: 39.2333, longitude: 40.4833 } },
      { id: 'kiği', name: 'Kiğı', type: 'ilçe', coordinates: { latitude: 39.3167, longitude: 40.3500 } },
      { id: 'yayladere', name: 'Yayladere', type: 'ilçe', coordinates: { latitude: 39.2167, longitude: 40.0667 } },
      { id: 'yedisu', name: 'Yedisu', type: 'ilçe', coordinates: { latitude: 39.4333, longitude: 40.5500 } }
    ]
  },
  {
    id: 'bitlis',
    name: 'Bitlis',
    plateNumber: 13,
    coordinates: { latitude: 38.4006, longitude: 42.1095 },
    municipalities: [
      { id: 'bitlis-il', name: 'Bitlis Belediyesi', type: 'ilçe', coordinates: { latitude: 38.4006, longitude: 42.1095 } },
      { id: 'tatvan', name: 'Tatvan', type: 'ilçe', coordinates: { latitude: 38.5083, longitude: 42.2833 } },
      { id: 'ahlat', name: 'Ahlat', type: 'ilçe', coordinates: { latitude: 38.7500, longitude: 42.4833 } },
      { id: 'hizan', name: 'Hizan', type: 'ilçe', coordinates: { latitude: 38.2167, longitude: 42.4167 } },
      { id: 'mutki', name: 'Mutki', type: 'ilçe', coordinates: { latitude: 38.4167, longitude: 41.9167 } },
      { id: 'guroymak', name: 'Güroymak', type: 'ilçe', coordinates: { latitude: 38.5833, longitude: 42.0167 } },
      { id: 'adilcevaz', name: 'Adilcevaz', type: 'ilçe', coordinates: { latitude: 38.8000, longitude: 42.7333 } }
    ]
  },
  {
    id: 'bolu',
    name: 'Bolu',
    plateNumber: 14,
    coordinates: { latitude: 40.7397, longitude: 31.6113 },
    municipalities: [
      { id: 'bolu-il', name: 'Bolu Belediyesi', type: 'ilçe', coordinates: { latitude: 40.7397, longitude: 31.6113 } },
      { id: 'gerede', name: 'Gerede', type: 'ilçe', coordinates: { latitude: 40.8000, longitude: 32.2000 } },
      { id: 'mengen', name: 'Mengen', type: 'ilçe', coordinates: { latitude: 40.9333, longitude: 31.9667 } },
      { id: 'mudurnu', name: 'Mudurnu', type: 'ilçe', coordinates: { latitude: 40.4667, longitude: 31.2167 } },
      { id: 'goynuk', name: 'Göynük', type: 'ilçe', coordinates: { latitude: 40.4000, longitude: 30.7833 } },
      { id: 'dortdivan', name: 'Dörtdivan', type: 'ilçe', coordinates: { latitude: 40.7167, longitude: 31.9667 } },
      { id: 'yeniçaga', name: 'Yeniçağa', type: 'ilçe', coordinates: { latitude: 40.7667, longitude: 32.0333 } },
      { id: 'seben', name: 'Seben', type: 'ilçe', coordinates: { latitude: 40.4167, longitude: 31.5667 } },
      { id: 'kibriscik', name: 'Kıbrıscık', type: 'ilçe', coordinates: { latitude: 40.4833, longitude: 31.8500 } }
    ]
  },
  {
    id: 'burdur',
    name: 'Burdur',
    plateNumber: 15,
    coordinates: { latitude: 37.7206, longitude: 30.2906 },
    municipalities: [
      { id: 'burdur-il', name: 'Burdur Belediyesi', type: 'ilçe', coordinates: { latitude: 37.7206, longitude: 30.2906 } },
      { id: 'bucak', name: 'Bucak', type: 'ilçe', coordinates: { latitude: 37.4667, longitude: 30.2833 } },
      { id: 'golhisar', name: 'Gölhisar', type: 'ilçe', coordinates: { latitude: 37.1333, longitude: 29.5000 } },
      { id: 'tefenni', name: 'Tefenni', type: 'ilçe', coordinates: { latitude: 37.3167, longitude: 29.7667 } },
      { id: 'yesilova', name: 'Yeşilova', type: 'ilçe', coordinates: { latitude: 37.5000, longitude: 29.7500 } },
      { id: 'karamanli', name: 'Karamanlı', type: 'ilçe', coordinates: { latitude: 37.3667, longitude: 30.2833 } },
      { id: 'kemer', name: 'Kemer', type: 'ilçe', coordinates: { latitude: 37.3500, longitude: 30.0667 } },
      { id: 'altinyayla', name: 'Altınyayla', type: 'ilçe', coordinates: { latitude: 37.0000, longitude: 29.5333 } },
      { id: 'cavdir', name: 'Çavdır', type: 'ilçe', coordinates: { latitude: 37.1500, longitude: 29.7000 } },
      { id: 'celtikci', name: 'Çeltikçi', type: 'ilçe', coordinates: { latitude: 37.5333, longitude: 30.4833 } },
      { id: 'aglasun', name: 'Ağlasun', type: 'ilçe', coordinates: { latitude: 37.6500, longitude: 30.5333 } }
    ]
  },
  {
    id: 'bursa',
    name: 'Bursa',
    plateNumber: 16,
    coordinates: { latitude: 40.1885, longitude: 29.0610 },
    municipalities: [
      { id: 'bursa-buyuksehir', name: 'Bursa Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 40.1885, longitude: 29.0610 } },
      { id: 'nilufer', name: 'Nilüfer', type: 'ilçe', coordinates: { latitude: 40.1885, longitude: 29.0610 } },
      { id: 'osmangazi', name: 'Osmangazi', type: 'ilçe', coordinates: { latitude: 40.1885, longitude: 29.0610 } },
      { id: 'yildirim', name: 'Yıldırım', type: 'ilçe', coordinates: { latitude: 40.1885, longitude: 29.0610 } },
      { id: 'mudanya', name: 'Mudanya', type: 'ilçe', coordinates: { latitude: 40.3667, longitude: 28.8833 } },
      { id: 'gemlik', name: 'Gemlik', type: 'ilçe', coordinates: { latitude: 40.4333, longitude: 29.1500 } },
      { id: 'iznik', name: 'İznik', type: 'ilçe', coordinates: { latitude: 40.4333, longitude: 29.7167 } },
      { id: 'orhangazi', name: 'Orhangazi', type: 'ilçe', coordinates: { latitude: 40.4833, longitude: 29.3000 } },
      { id: 'karacabey', name: 'Karacabey', type: 'ilçe', coordinates: { latitude: 40.2167, longitude: 28.3500 } },
      { id: 'mustafakemalpasa', name: 'Mustafakemalpaşa', type: 'ilçe', coordinates: { latitude: 40.0333, longitude: 28.4167 } },
      { id: 'inegol', name: 'İnegöl', type: 'ilçe', coordinates: { latitude: 40.0833, longitude: 29.5167 } },
      { id: 'yenisehir', name: 'Yenişehir', type: 'ilçe', coordinates: { latitude: 40.2667, longitude: 29.6500 } },
      { id: 'kestel', name: 'Kestel', type: 'ilçe', coordinates: { latitude: 40.2000, longitude: 29.2167 } },
      { id: 'gursu', name: 'Gürsu', type: 'ilçe', coordinates: { latitude: 40.2333, longitude: 29.1833 } },
      { id: 'keles', name: 'Keles', type: 'ilçe', coordinates: { latitude: 39.9167, longitude: 29.2333 } },
      { id: 'harmancik', name: 'Harmancık', type: 'ilçe', coordinates: { latitude: 39.6833, longitude: 29.1500 } },
      { id: 'buyukorhan', name: 'Büyükorhan', type: 'ilçe', coordinates: { latitude: 39.7667, longitude: 28.8833 } },
      { id: 'orhaneli', name: 'Orhaneli', type: 'ilçe', coordinates: { latitude: 39.9000, longitude: 28.9833 } }
    ]
  },
  {
    id: 'canakkale',
    name: 'Çanakkale',
    plateNumber: 17,
    coordinates: { latitude: 40.1553, longitude: 26.4142 },
    municipalities: [
      { id: 'canakkale-il', name: 'Çanakkale Belediyesi', type: 'ilçe', coordinates: { latitude: 40.1553, longitude: 26.4142 } },
      { id: 'gelibolu', name: 'Gelibolu', type: 'ilçe', coordinates: { latitude: 40.4000, longitude: 26.6667 } },
      { id: 'biga', name: 'Biga', type: 'ilçe', coordinates: { latitude: 40.2333, longitude: 27.2500 } },
      { id: 'can', name: 'Çan', type: 'ilçe', coordinates: { latitude: 40.0333, longitude: 27.0500 } },
      { id: 'yenice', name: 'Yenice', type: 'ilçe', coordinates: { latitude: 39.9333, longitude: 27.2500 } },
      { id: 'ayvacik', name: 'Ayvacık', type: 'ilçe', coordinates: { latitude: 39.6000, longitude: 26.4000 } },
      { id: 'ezine', name: 'Ezine', type: 'ilçe', coordinates: { latitude: 39.7833, longitude: 26.3333 } },
      { id: 'bayramic', name: 'Bayramiç', type: 'ilçe', coordinates: { latitude: 39.8167, longitude: 26.6167 } },
      { id: 'lapseki', name: 'Lapseki', type: 'ilçe', coordinates: { latitude: 40.3500, longitude: 26.6833 } },
      { id: 'gokceada', name: 'Gökçeada', type: 'ilçe', coordinates: { latitude: 40.2000, longitude: 25.9000 } },
      { id: 'bozcaada', name: 'Bozcaada', type: 'ilçe', coordinates: { latitude: 39.8333, longitude: 26.0667 } },
      { id: 'eceabat', name: 'Eceabat', type: 'ilçe', coordinates: { latitude: 40.1833, longitude: 26.3667 } }
    ]
  },
  {
    id: 'cankiri',
    name: 'Çankırı',
    plateNumber: 18,
    coordinates: { latitude: 40.6013, longitude: 33.6134 },
    municipalities: [
      { id: 'cankiri-il', name: 'Çankırı Belediyesi', type: 'ilçe', coordinates: { latitude: 40.6013, longitude: 33.6134 } },
      { id: 'cerkes', name: 'Çerkeş', type: 'ilçe', coordinates: { latitude: 40.8167, longitude: 32.9000 } },
      { id: 'ilgaz', name: 'Ilgaz', type: 'ilçe', coordinates: { latitude: 40.9167, longitude: 33.6167 } },
      { id: 'kursunlu', name: 'Kurşunlu', type: 'ilçe', coordinates: { latitude: 40.8333, longitude: 33.2667 } },
      { id: 'orta', name: 'Orta', type: 'ilçe', coordinates: { latitude: 40.6167, longitude: 33.1167 } },
      { id: 'sabanozu', name: 'Şabanözü', type: 'ilçe', coordinates: { latitude: 40.4833, longitude: 33.2833 } },
      { id: 'yaprakli', name: 'Yapraklı', type: 'ilçe', coordinates: { latitude: 40.7667, longitude: 33.7833 } },
      { id: 'kizilirmak', name: 'Kızılırmak', type: 'ilçe', coordinates: { latitude: 40.3500, longitude: 33.9833 } },
      { id: 'atkaracalar', name: 'Atkaracalar', type: 'ilçe', coordinates: { latitude: 40.8167, longitude: 33.0667 } },
      { id: 'eldivan', name: 'Eldivan', type: 'ilçe', coordinates: { latitude: 40.5333, longitude: 33.5000 } },
      { id: 'korgun', name: 'Korgun', type: 'ilçe', coordinates: { latitude: 40.7333, longitude: 33.5167 } },
      { id: 'bayramoren', name: 'Bayramören', type: 'ilçe', coordinates: { latitude: 40.9500, longitude: 33.2000 } }
    ]
  },
  {
    id: 'corum',
    name: 'Çorum',
    plateNumber: 19,
    coordinates: { latitude: 40.5499, longitude: 34.9537 },
    municipalities: [
      { id: 'corum-il', name: 'Çorum Belediyesi', type: 'ilçe', coordinates: { latitude: 40.5499, longitude: 34.9537 } },
      { id: 'sungurlu', name: 'Sungurlu', type: 'ilçe', coordinates: { latitude: 40.1667, longitude: 34.3667 } },
      { id: 'iskilip', name: 'İskilip', type: 'ilçe', coordinates: { latitude: 40.7333, longitude: 34.4667 } },
      { id: 'alaca', name: 'Alaca', type: 'ilçe', coordinates: { latitude: 40.1667, longitude: 34.8333 } },
      { id: 'ortakoy', name: 'Ortaköy', type: 'ilçe', coordinates: { latitude: 40.2667, longitude: 35.2500 } },
      { id: 'mecitozu', name: 'Mecitözü', type: 'ilçe', coordinates: { latitude: 40.5167, longitude: 35.2833 } },
      { id: 'osmancik', name: 'Osmancık', type: 'ilçe', coordinates: { latitude: 40.9667, longitude: 34.8000 } },
      { id: 'kargi', name: 'Kargı', type: 'ilçe', coordinates: { latitude: 41.1333, longitude: 34.4833 } },
      { id: 'ugurludag', name: 'Uğurludağ', type: 'ilçe', coordinates: { latitude: 40.4500, longitude: 34.4500 } },
      { id: 'dodurga', name: 'Dodurga', type: 'ilçe', coordinates: { latitude: 40.8500, longitude: 34.8167 } },
      { id: 'laçin', name: 'Laçin', type: 'ilçe', coordinates: { latitude: 40.7667, longitude: 34.8667 } },
      { id: 'oguzlar', name: 'Oğuzlar', type: 'ilçe', coordinates: { latitude: 40.7500, longitude: 34.7000 } },
      { id: 'boğazkale', name: 'Boğazkale', type: 'ilçe', coordinates: { latitude: 40.0167, longitude: 34.6167 } }
    ]
  },
  {
    id: 'denizli',
    name: 'Denizli',
    plateNumber: 20,
    coordinates: { latitude: 37.7765, longitude: 29.0864 },
    municipalities: [
      { id: 'denizli-buyuksehir', name: 'Denizli Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 37.7765, longitude: 29.0864 } },
      { id: 'merkezefendi', name: 'Merkezefendi', type: 'ilçe', coordinates: { latitude: 37.7765, longitude: 29.0864 } },
      { id: 'pamukkale', name: 'Pamukkale', type: 'ilçe', coordinates: { latitude: 37.7765, longitude: 29.0864 } },
      { id: 'tavas', name: 'Tavas', type: 'ilçe', coordinates: { latitude: 37.5667, longitude: 29.0667 } },
      { id: 'acipayam', name: 'Acıpayam', type: 'ilçe', coordinates: { latitude: 37.4167, longitude: 29.3500 } },
      { id: 'buldan', name: 'Buldan', type: 'ilçe', coordinates: { latitude: 38.5500, longitude: 28.8333 } },
      { id: 'cal', name: 'Çal', type: 'ilçe', coordinates: { latitude: 38.0833, longitude: 29.4000 } },
      { id: 'saraykoy', name: 'Sarayköy', type: 'ilçe', coordinates: { latitude: 37.9333, longitude: 28.9167 } },
      { id: 'kale', name: 'Kale', type: 'ilçe', coordinates: { latitude: 37.4333, longitude: 28.8333 } },
      { id: 'honaz', name: 'Honaz', type: 'ilçe', coordinates: { latitude: 37.9167, longitude: 29.2833 } },
      { id: 'bozkurt', name: 'Bozkurt', type: 'ilçe', coordinates: { latitude: 37.8167, longitude: 29.6167 } },
      { id: 'guneysinir', name: 'Güneysınır', type: 'ilçe', coordinates: { latitude: 37.2667, longitude: 32.7167 } },
      { id: 'civril', name: 'Çivril', type: 'ilçe', coordinates: { latitude: 38.3000, longitude: 29.7333 } },
      { id: 'sarikoy', name: 'Sarıköy', type: 'ilçe', coordinates: { latitude: 37.9333, longitude: 28.9167 } },
      { id: 'babadag', name: 'Babadağ', type: 'ilçe', coordinates: { latitude: 37.8167, longitude: 28.8667 } },
      { id: 'bekilli', name: 'Bekilli', type: 'ilçe', coordinates: { latitude: 38.2333, longitude: 29.4167 } },
      { id: 'serinhisar', name: 'Serinhisar', type: 'ilçe', coordinates: { latitude: 37.5833, longitude: 29.2667 } },
      { id: 'cardak', name: 'Çardak', type: 'ilçe', coordinates: { latitude: 37.8167, longitude: 29.7000 } },
      { id: 'cameli', name: 'Çameli', type: 'ilçe', coordinates: { latitude: 37.0833, longitude: 29.3000 } },
      { id: 'beyağaç', name: 'Beyağaç', type: 'ilçe', coordinates: { latitude: 37.2167, longitude: 28.8833 } }
    ]
  },
  {
    id: 'diyarbakir',
    name: 'Diyarbakır',
    plateNumber: 21,
    coordinates: { latitude: 37.9144, longitude: 40.2306 },
    municipalities: [
      { id: 'diyarbakir-buyuksehir', name: 'Diyarbakır Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 37.9144, longitude: 40.2306 } },
      { id: 'baglar', name: 'Bağlar', type: 'ilçe', coordinates: { latitude: 37.9144, longitude: 40.2306 } },
      { id: 'kayapinar', name: 'Kayapınar', type: 'ilçe', coordinates: { latitude: 37.9144, longitude: 40.2306 } },
      { id: 'sur', name: 'Sur', type: 'ilçe', coordinates: { latitude: 37.9144, longitude: 40.2306 } },
      { id: 'yenishehir', name: 'Yenişehir', type: 'ilçe', coordinates: { latitude: 37.9144, longitude: 40.2306 } },
      { id: 'ergani', name: 'Ergani', type: 'ilçe', coordinates: { latitude: 38.2667, longitude: 39.7667 } },
      { id: 'bismil', name: 'Bismil', type: 'ilçe', coordinates: { latitude: 37.8500, longitude: 40.6667 } },
      { id: 'silvan', name: 'Silvan', type: 'ilçe', coordinates: { latitude: 38.1500, longitude: 41.0000 } },
      { id: 'cermik', name: 'Çermik', type: 'ilçe', coordinates: { latitude: 38.1333, longitude: 39.4500 } },
      { id: 'dicle', name: 'Dicle', type: 'ilçe', coordinates: { latitude: 38.3667, longitude: 40.0667 } },
      { id: 'kulp', name: 'Kulp', type: 'ilçe', coordinates: { latitude: 38.5000, longitude: 41.0000 } },
      { id: 'hani', name: 'Hani', type: 'ilçe', coordinates: { latitude: 38.4167, longitude: 40.3833 } },
      { id: 'lice', name: 'Lice', type: 'ilçe', coordinates: { latitude: 38.4667, longitude: 40.6500 } },
      { id: 'egil', name: 'Eğil', type: 'ilçe', coordinates: { latitude: 38.2500, longitude: 40.0833 } },
      { id: 'hazro', name: 'Hazro', type: 'ilçe', coordinates: { latitude: 38.2500, longitude: 40.7833 } },
      { id: 'kocakoy', name: 'Kocaköy', type: 'ilçe', coordinates: { latitude: 38.2833, longitude: 40.5000 } },
      { id: 'cungus', name: 'Çüngüş', type: 'ilçe', coordinates: { latitude: 38.2167, longitude: 39.2833 } }
    ]
  },
  {
    id: 'edirne',
    name: 'Edirne',
    plateNumber: 22,
    coordinates: { latitude: 41.6771, longitude: 26.5557 },
    municipalities: [
      { id: 'edirne-il', name: 'Edirne Belediyesi', type: 'ilçe', coordinates: { latitude: 41.6771, longitude: 26.5557 } },
      { id: 'keşan', name: 'Keşan', type: 'ilçe', coordinates: { latitude: 40.8500, longitude: 26.6333 } },
      { id: 'uzunkopru', name: 'Uzunköprü', type: 'ilçe', coordinates: { latitude: 41.2667, longitude: 26.6833 } },
      { id: 'ipsala', name: 'İpsala', type: 'ilçe', coordinates: { latitude: 40.9167, longitude: 26.3833 } },
      { id: 'havsa', name: 'Havsa', type: 'ilçe', coordinates: { latitude: 41.5500, longitude: 26.8167 } },
      { id: 'enez', name: 'Enez', type: 'ilçe', coordinates: { latitude: 40.7167, longitude: 26.0833 } },
      { id: 'suloglu', name: 'Süloğlu', type: 'ilçe', coordinates: { latitude: 41.7667, longitude: 26.9167 } },
      { id: 'meric', name: 'Meriç', type: 'ilçe', coordinates: { latitude: 41.1833, longitude: 26.4167 } },
      { id: 'lalapasa', name: 'Lalapaşa', type: 'ilçe', coordinates: { latitude: 41.8333, longitude: 26.7333 } }
    ]
  },
  {
    id: 'elazig',
    name: 'Elazığ',
    plateNumber: 23,
    coordinates: { latitude: 38.6810, longitude: 39.2264 },
    municipalities: [
      { id: 'elazig-buyuksehir', name: 'Elazığ Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 38.6810, longitude: 39.2264 } },
      { id: 'merkez', name: 'Merkez', type: 'ilçe', coordinates: { latitude: 38.6810, longitude: 39.2264 } },
      { id: 'karakoçan', name: 'Karakoçan', type: 'ilçe', coordinates: { latitude: 38.9500, longitude: 40.0333 } },
      { id: 'palu', name: 'Palu', type: 'ilçe', coordinates: { latitude: 38.7000, longitude: 39.9333 } },
      { id: 'aracli', name: 'Aralık', type: 'ilçe', coordinates: { latitude: 39.8833, longitude: 44.5167 } },
      { id: 'karayazi', name: 'Karaçoban', type: 'ilçe', coordinates: { latitude: 39.3500, longitude: 41.9833 } },
      { id: 'tuzluca', name: 'Tuzluca', type: 'ilçe', coordinates: { latitude: 40.0500, longitude: 43.6500 } },
      { id: 'igdir', name: 'Iğdır', type: 'ilçe', coordinates: { latitude: 39.9167, longitude: 44.0333 } },
      { id: 'karakoyunlu', name: 'Karakoyunlu', type: 'ilçe', coordinates: { latitude: 39.8667, longitude: 43.6167 } },
      { id: 'maden', name: 'Maden', type: 'ilçe', coordinates: { latitude: 38.3833, longitude: 39.1167 } },
      { id: 'sivrice', name: 'Sivrice', type: 'ilçe', coordinates: { latitude: 38.4500, longitude: 39.3167 } },
      { id: 'agın', name: 'Ağın', type: 'ilçe', coordinates: { latitude: 38.9333, longitude: 38.7167 } },
      { id: 'alacakaya', name: 'Alacakaya', type: 'ilçe', coordinates: { latitude: 38.4500, longitude: 39.8500 } },
      { id: 'keban', name: 'Keban', type: 'ilçe', coordinates: { latitude: 38.8000, longitude: 38.7333 } },
      { id: 'baskil', name: 'Baskil', type: 'ilçe', coordinates: { latitude: 38.5667, longitude: 39.2167 } }
    ]
  },
  {
    id: 'erzincan',
    name: 'Erzincan',
    plateNumber: 24,
    coordinates: { latitude: 39.7500, longitude: 39.5000 },
    municipalities: [
      { id: 'erzincan-il', name: 'Erzincan Belediyesi', type: 'ilçe', coordinates: { latitude: 39.7500, longitude: 39.5000 } },
      { id: 'tercan', name: 'Tercan', type: 'ilçe', coordinates: { latitude: 39.7833, longitude: 40.3833 } },
      { id: 'uzumlu', name: 'Üzümlü', type: 'ilçe', coordinates: { latitude: 39.7000, longitude: 39.7000 } },
      { id: 'refahiye', name: 'Refahiye', type: 'ilçe', coordinates: { latitude: 39.9000, longitude: 38.7667 } },
      { id: 'ilic', name: 'İliç', type: 'ilçe', coordinates: { latitude: 39.4500, longitude: 38.5667 } },
      { id: 'kemah', name: 'Kemah', type: 'ilçe', coordinates: { latitude: 39.6000, longitude: 39.0333 } },
      { id: 'kemaliye', name: 'Kemaliye', type: 'ilçe', coordinates: { latitude: 39.2667, longitude: 38.9833 } },
      { id: 'otlukbeli', name: 'Otlukbeli', type: 'ilçe', coordinates: { latitude: 39.9667, longitude: 40.0167 } },
      { id: 'cayirli', name: 'Çayırlı', type: 'ilçe', coordinates: { latitude: 39.8000, longitude: 40.0333 } }
    ]
  },
  {
    id: 'erzurum',
    name: 'Erzurum',
    plateNumber: 25,
    coordinates: { latitude: 39.9000, longitude: 41.2700 },
    municipalities: [
      { id: 'erzurum-buyuksehir', name: 'Erzurum Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 39.9000, longitude: 41.2700 } },
      { id: 'yakutiye', name: 'Yakutiye', type: 'ilçe', coordinates: { latitude: 39.9000, longitude: 41.2700 } },
      { id: 'palandoken', name: 'Palandöken', type: 'ilçe', coordinates: { latitude: 39.9000, longitude: 41.2700 } },
      { id: 'aziziye', name: 'Aziziye', type: 'ilçe', coordinates: { latitude: 39.9000, longitude: 41.2700 } },
      { id: 'horasan', name: 'Horasan', type: 'ilçe', coordinates: { latitude: 40.0333, longitude: 42.1667 } },
      { id: 'karayazi', name: 'Karaçoban', type: 'ilçe', coordinates: { latitude: 39.3500, longitude: 41.9833 } },
      { id: 'pasinler', name: 'Pasinler', type: 'ilçe', coordinates: { latitude: 39.9833, longitude: 41.6667 } },
      { id: 'oltu', name: 'Oltu', type: 'ilçe', coordinates: { latitude: 40.5500, longitude: 41.9833 } },
      { id: 'tortum', name: 'Tortum', type: 'ilçe', coordinates: { latitude: 40.2833, longitude: 41.5500 } },
      { id: 'hinis', name: 'Hınıs', type: 'ilçe', coordinates: { latitude: 39.3667, longitude: 41.7000 } },
      { id: 'cat', name: 'Çat', type: 'ilçe', coordinates: { latitude: 39.6167, longitude: 40.9833 } },
      { id: 'tekman', name: 'Tekman', type: 'ilçe', coordinates: { latitude: 39.6333, longitude: 41.5167 } },
      { id: 'karaçoban', name: 'Karaçoban', type: 'ilçe', coordinates: { latitude: 39.3500, longitude: 41.9833 } },
      { id: 'askale', name: 'Aşkale', type: 'ilçe', coordinates: { latitude: 39.9333, longitude: 40.6833 } },
      { id: 'uzundere', name: 'Uzundere', type: 'ilçe', coordinates: { latitude: 40.5333, longitude: 41.5500 } },
      { id: 'narman', name: 'Narman', type: 'ilçe', coordinates: { latitude: 40.3500, longitude: 41.8667 } },
      { id: 'olur', name: 'Olur', type: 'ilçe', coordinates: { latitude: 40.8167, longitude: 42.1333 } },
      { id: 'ispir', name: 'İspir', type: 'ilçe', coordinates: { latitude: 40.4833, longitude: 40.9833 } },
      { id: 'senkaya', name: 'Şenkaya', type: 'ilçe', coordinates: { latitude: 40.5667, longitude: 42.3500 } },
      { id: 'koprukoy', name: 'Köprüköy', type: 'ilçe', coordinates: { latitude: 39.9667, longitude: 41.8667 } }
    ]
  },
  {
    id: 'eskisehir',
    name: 'Eskişehir',
    plateNumber: 26,
    coordinates: { latitude: 39.7767, longitude: 30.5206 },
    municipalities: [
      { id: 'eskisehir-buyuksehir', name: 'Eskişehir Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 39.7767, longitude: 30.5206 } },
      { id: 'tepebasi', name: 'Tepebaşı', type: 'ilçe', coordinates: { latitude: 39.7767, longitude: 30.5206 } },
      { id: 'odunpazari', name: 'Odunpazarı', type: 'ilçe', coordinates: { latitude: 39.7767, longitude: 30.5206 } },
      { id: 'sivrihisar', name: 'Sivrihisar', type: 'ilçe', coordinates: { latitude: 39.4500, longitude: 31.5333 } },
      { id: 'cifteler', name: 'Çifteler', type: 'ilçe', coordinates: { latitude: 39.3833, longitude: 31.0333 } },
      { id: 'seyitgazi', name: 'Seyitgazi', type: 'ilçe', coordinates: { latitude: 39.4500, longitude: 30.7000 } },
      { id: 'mihalgazi', name: 'Mihalgazi', type: 'ilçe', coordinates: { latitude: 40.0167, longitude: 30.5667 } },
      { id: 'mihaliccik', name: 'Mihalıççık', type: 'ilçe', coordinates: { latitude: 39.8667, longitude: 31.5000 } },
      { id: 'günyüzü', name: 'Günyüzü', type: 'ilçe', coordinates: { latitude: 39.3833, longitude: 31.7833 } },
      { id: 'saricakaya', name: 'Sarıcakaya', type: 'ilçe', coordinates: { latitude: 40.0333, longitude: 30.6167 } },
      { id: 'beylikova', name: 'Beylikova', type: 'ilçe', coordinates: { latitude: 39.6833, longitude: 31.2000 } },
      { id: 'inegol', name: 'İnönü', type: 'ilçe', coordinates: { latitude: 39.8167, longitude: 30.1500 } },
      { id: 'alpu', name: 'Alpu', type: 'ilçe', coordinates: { latitude: 39.7667, longitude: 30.9667 } },
      { id: 'günyüzü', name: 'Günyüzü', type: 'ilçe', coordinates: { latitude: 39.3833, longitude: 31.7833 } }
    ]
  },
  {
    id: 'gaziantep',
    name: 'Gaziantep',
    plateNumber: 27,
    coordinates: { latitude: 37.0662, longitude: 37.3833 },
    municipalities: [
      { id: 'gaziantep-buyuksehir', name: 'Gaziantep Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 37.0662, longitude: 37.3833 } },
      { id: 'sahinbey', name: 'Şahinbey', type: 'ilçe', coordinates: { latitude: 37.0662, longitude: 37.3833 } },
      { id: 'sehitkamil', name: 'Şehitkamil', type: 'ilçe', coordinates: { latitude: 37.0662, longitude: 37.3833 } },
      { id: 'oguzeli', name: 'Oğuzeli', type: 'ilçe', coordinates: { latitude: 36.9667, longitude: 37.5167 } },
      { id: 'nurdagi', name: 'Nurdağı', type: 'ilçe', coordinates: { latitude: 37.1667, longitude: 36.7333 } },
      { id: 'islahiye', name: 'İslahiye', type: 'ilçe', coordinates: { latitude: 37.0167, longitude: 36.6333 } },
      { id: 'araban', name: 'Araban', type: 'ilçe', coordinates: { latitude: 37.4167, longitude: 37.6833 } },
      { id: 'yavuzeli', name: 'Yavuzeli', type: 'ilçe', coordinates: { latitude: 37.3167, longitude: 37.5667 } },
      { id: 'nisan', name: 'Nizip', type: 'ilçe', coordinates: { latitude: 37.0167, longitude: 37.8000 } },
      { id: 'karkamis', name: 'Karkamış', type: 'ilçe', coordinates: { latitude: 36.8333, longitude: 37.9833 } }
    ]
  },
  {
    id: 'giresun',
    name: 'Giresun',
    plateNumber: 28,
    coordinates: { latitude: 40.9128, longitude: 38.3895 },
    municipalities: [
      { id: 'giresun-il', name: 'Giresun Belediyesi', type: 'ilçe', coordinates: { latitude: 40.9128, longitude: 38.3895 } },
      { id: 'bulancak', name: 'Bulancak', type: 'ilçe', coordinates: { latitude: 40.9333, longitude: 38.2333 } },
      { id: 'espiye', name: 'Espiye', type: 'ilçe', coordinates: { latitude: 40.9500, longitude: 38.4167 } },
      { id: 'tirebolu', name: 'Tirebolu', type: 'ilçe', coordinates: { latitude: 41.0000, longitude: 38.8167 } },
      { id: 'gorele', name: 'Görele', type: 'ilçe', coordinates: { latitude: 41.0333, longitude: 39.0000 } },
      { id: 'piraziz', name: 'Piraziz', type: 'ilçe', coordinates: { latitude: 40.9500, longitude: 38.1167 } },
      { id: 'yaglidere', name: 'Yağlıdere', type: 'ilçe', coordinates: { latitude: 40.8667, longitude: 38.6333 } },
      { id: 'kelkit', name: 'Kelkit', type: 'ilçe', coordinates: { latitude: 40.1333, longitude: 39.4333 } },
      { id: 'sebinkarahisar', name: 'Şebinkarahisar', type: 'ilçe', coordinates: { latitude: 40.2833, longitude: 38.4167 } },
      { id: 'dereli', name: 'Dereli', type: 'ilçe', coordinates: { latitude: 40.7333, longitude: 38.4500 } },
      { id: 'dogankent', name: 'Doğankent', type: 'ilçe', coordinates: { latitude: 40.8167, longitude: 38.9167 } },
      { id: 'canakci', name: 'Çanakçı', type: 'ilçe', coordinates: { latitude: 40.9333, longitude: 39.0333 } },
      { id: 'alucra', name: 'Alucra', type: 'ilçe', coordinates: { latitude: 40.3167, longitude: 38.7667 } },
      { id: 'güce', name: 'Güce', type: 'ilçe', coordinates: { latitude: 40.8833, longitude: 38.8000 } },
      { id: 'eynesil', name: 'Eynesil', type: 'ilçe', coordinates: { latitude: 41.0500, longitude: 39.1333 } },
      { id: 'camoluk', name: 'Çamoluk', type: 'ilçe', coordinates: { latitude: 40.1333, longitude: 38.7333 } }
    ]
  },
  {
    id: 'gumushane',
    name: 'Gümüşhane',
    plateNumber: 29,
    coordinates: { latitude: 40.4603, longitude: 39.6884 },
    municipalities: [
      { id: 'gumushane-il', name: 'Gümüşhane Belediyesi', type: 'ilçe', coordinates: { latitude: 40.4603, longitude: 39.6884 } },
      { id: 'kelkit', name: 'Kelkit', type: 'ilçe', coordinates: { latitude: 40.1333, longitude: 39.4333 } },
      { id: 'sebinkarahisar', name: 'Şebinkarahisar', type: 'ilçe', coordinates: { latitude: 40.2833, longitude: 38.4167 } },
      { id: 'torul', name: 'Torul', type: 'ilçe', coordinates: { latitude: 40.5500, longitude: 39.2833 } },
      { id: 'kose', name: 'Köse', type: 'ilçe', coordinates: { latitude: 40.2167, longitude: 39.6500 } },
      { id: 'kurtun', name: 'Kürtün', type: 'ilçe', coordinates: { latitude: 40.6833, longitude: 39.1000 } }
    ]
  },
  {
    id: 'hakkari',
    name: 'Hakkari',
    plateNumber: 30,
    coordinates: { latitude: 37.5833, longitude: 43.7333 },
    municipalities: [
      { id: 'hakkari-il', name: 'Hakkari Belediyesi', type: 'ilçe', coordinates: { latitude: 37.5833, longitude: 43.7333 } },
      { id: 'yuksekova', name: 'Yüksekova', type: 'ilçe', coordinates: { latitude: 37.5667, longitude: 44.2833 } },
      { id: 'cukurca', name: 'Çukurca', type: 'ilçe', coordinates: { latitude: 37.2500, longitude: 43.6167 } },
      { id: 'semdinli', name: 'Şemdinli', type: 'ilçe', coordinates: { latitude: 37.3167, longitude: 44.5667 } },
      { id: 'derecik', name: 'Derecik', type: 'ilçe', coordinates: { latitude: 37.3667, longitude: 44.1667 } }
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
      { id: 'iskenderun', name: 'İskenderun', type: 'ilçe', coordinates: { latitude: 36.5833, longitude: 36.1667 } },
      { id: 'defne', name: 'Defne', type: 'ilçe', coordinates: { latitude: 36.2023, longitude: 36.1613 } },
      { id: 'dortyol', name: 'Dörtyol', type: 'ilçe', coordinates: { latitude: 36.8500, longitude: 36.2167 } },
      { id: 'samandag', name: 'Samandağ', type: 'ilçe', coordinates: { latitude: 36.0833, longitude: 35.9833 } },
      { id: 'kırıkhan', name: 'Kırıkhan', type: 'ilçe', coordinates: { latitude: 36.5000, longitude: 36.3500 } },
      { id: 'reyhanli', name: 'Reyhanlı', type: 'ilçe', coordinates: { latitude: 36.2667, longitude: 36.5667 } },
      { id: 'kumlu', name: 'Kumlu', type: 'ilçe', coordinates: { latitude: 36.3667, longitude: 36.4500 } },
      { id: 'altinozu', name: 'Altınözü', type: 'ilçe', coordinates: { latitude: 36.1167, longitude: 36.2333 } },
      { id: 'hassa', name: 'Hassa', type: 'ilçe', coordinates: { latitude: 36.8000, longitude: 36.5167 } },
      { id: 'yayladagi', name: 'Yayladağı', type: 'ilçe', coordinates: { latitude: 35.9000, longitude: 36.0667 } },
      { id: 'belen', name: 'Belen', type: 'ilçe', coordinates: { latitude: 36.4833, longitude: 36.1833 } },
      { id: 'payas', name: 'Payas', type: 'ilçe', coordinates: { latitude: 36.7500, longitude: 36.2167 } },
      { id: 'erzin', name: 'Erzin', type: 'ilçe', coordinates: { latitude: 36.9500, longitude: 36.2000 } }
    ]
  },
  {
    id: 'isparta',
    name: 'Isparta',
    plateNumber: 32,
    coordinates: { latitude: 37.7648, longitude: 30.5566 },
    municipalities: [
      { id: 'isparta-il', name: 'Isparta Belediyesi', type: 'ilçe', coordinates: { latitude: 37.7648, longitude: 30.5566 } },
      { id: 'yalvac', name: 'Yalvaç', type: 'ilçe', coordinates: { latitude: 38.3000, longitude: 31.1833 } },
      { id: 'egirdir', name: 'Eğirdir', type: 'ilçe', coordinates: { latitude: 37.8667, longitude: 30.8500 } },
      { id: 'sarkikaraagac', name: 'Şarkikaraağaç', type: 'ilçe', coordinates: { latitude: 38.0833, longitude: 31.3667 } },
      { id: 'gelendost', name: 'Gelendost', type: 'ilçe', coordinates: { latitude: 38.1167, longitude: 31.0167 } },
      { id: 'keçiborlu', name: 'Keçiborlu', type: 'ilçe', coordinates: { latitude: 37.9500, longitude: 30.3000 } },
      { id: 'senirkent', name: 'Senirkent', type: 'ilçe', coordinates: { latitude: 38.1000, longitude: 30.5500 } },
      { id: 'sutculer', name: 'Sütçüler', type: 'ilçe', coordinates: { latitude: 37.5000, longitude: 30.9833 } },
      { id: 'gonen', name: 'Gönen', type: 'ilçe', coordinates: { latitude: 37.9500, longitude: 30.5000 } },
      { id: 'uluborlu', name: 'Uluborlu', type: 'ilçe', coordinates: { latitude: 38.0833, longitude: 30.4500 } },
      { id: 'atabey', name: 'Atabey', type: 'ilçe', coordinates: { latitude: 37.9500, longitude: 30.6333 } },
      { id: 'aksu', name: 'Aksu', type: 'ilçe', coordinates: { latitude: 37.8000, longitude: 31.0833 } },
      { id: 'yenisarbademli', name: 'Yenişarbademli', type: 'ilçe', coordinates: { latitude: 37.7000, longitude: 31.3833 } }
    ]
  },
  {
    id: 'mersin',
    name: 'Mersin',
    plateNumber: 33,
    coordinates: { latitude: 36.8121, longitude: 34.6415 },
    municipalities: [
      { id: 'mersin-buyuksehir', name: 'Mersin Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 36.8121, longitude: 34.6415 } },
      { id: 'akdeniz', name: 'Akdeniz', type: 'ilçe', coordinates: { latitude: 36.8121, longitude: 34.6415 } },
      { id: 'toroslar', name: 'Toroslar', type: 'ilçe', coordinates: { latitude: 36.8121, longitude: 34.6415 } },
      { id: 'yenishehir', name: 'Yenişehir', type: 'ilçe', coordinates: { latitude: 36.8121, longitude: 34.6415 } },
      { id: 'mezitli', name: 'Mezitli', type: 'ilçe', coordinates: { latitude: 36.8121, longitude: 34.6415 } },
      { id: 'tarsus', name: 'Tarsus', type: 'ilçe', coordinates: { latitude: 36.9167, longitude: 34.9000 } },
      { id: 'silifke', name: 'Silifke', type: 'ilçe', coordinates: { latitude: 36.3667, longitude: 33.9333 } },
      { id: 'anamur', name: 'Anamur', type: 'ilçe', coordinates: { latitude: 36.0833, longitude: 32.8333 } },
      { id: 'mut', name: 'Mut', type: 'ilçe', coordinates: { latitude: 36.6500, longitude: 33.4333 } },
      { id: 'gülnar', name: 'Gülnar', type: 'ilçe', coordinates: { latitude: 36.3333, longitude: 33.4000 } },
      { id: 'bozyazi', name: 'Bozyazı', type: 'ilçe', coordinates: { latitude: 36.1000, longitude: 32.9667 } },
      { id: 'erdemli', name: 'Erdemli', type: 'ilçe', coordinates: { latitude: 36.6000, longitude: 34.3000 } },
      { id: 'aydincik', name: 'Aydıncık', type: 'ilçe', coordinates: { latitude: 36.1500, longitude: 33.3167 } },
      { id: 'camliyayla', name: 'Çamlıyayla', type: 'ilçe', coordinates: { latitude: 37.1667, longitude: 34.6000 } }
    ]
  },
  {
    id: 'istanbul',
    name: 'İstanbul',
    plateNumber: 34,
    coordinates: { latitude: 41.0082, longitude: 28.9784 },
    municipalities: [
      { id: 'istanbul-buyuksehir', name: 'İstanbul Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 41.0082, longitude: 28.9784 } },
      { id: 'kadikoy', name: 'Kadıköy', type: 'ilçe', coordinates: { latitude: 40.9833, longitude: 29.0333 } },
      { id: 'uskudar', name: 'Üsküdar', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 29.0167 } },
      { id: 'besiktas', name: 'Beşiktaş', type: 'ilçe', coordinates: { latitude: 41.0333, longitude: 29.0000 } },
      { id: 'sariyer', name: 'Sarıyer', type: 'ilçe', coordinates: { latitude: 41.1667, longitude: 29.0500 } },
      { id: 'sisli', name: 'Şişli', type: 'ilçe', coordinates: { latitude: 41.0500, longitude: 28.9833 } },
      { id: 'beyoglu', name: 'Beyoğlu', type: 'ilçe', coordinates: { latitude: 41.0333, longitude: 28.9833 } },
      { id: 'fatih', name: 'Fatih', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 28.9500 } },
      { id: 'eyupsultan', name: 'Eyüpsultan', type: 'ilçe', coordinates: { latitude: 41.0500, longitude: 28.9333 } },
      { id: 'sultangazi', name: 'Sultangazi', type: 'ilçe', coordinates: { latitude: 41.1000, longitude: 28.8667 } },
      { id: 'bagcilar', name: 'Bağcılar', type: 'ilçe', coordinates: { latitude: 41.0333, longitude: 28.8500 } },
      { id: 'kucukcekmece', name: 'Küçükçekmece', type: 'ilçe', coordinates: { latitude: 41.0000, longitude: 28.8000 } },
      { id: 'avcilar', name: 'Avcılar', type: 'ilçe', coordinates: { latitude: 40.9833, longitude: 28.7167 } },
      { id: 'esenyurt', name: 'Esenyurt', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 28.6667 } },
      { id: 'beylikduzu', name: 'Beylikdüzü', type: 'ilçe', coordinates: { latitude: 40.9833, longitude: 28.6333 } },
      { id: 'buyukcekmece', name: 'Büyükçekmece', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 28.6000 } },
      { id: 'catalca', name: 'Çatalca', type: 'ilçe', coordinates: { latitude: 41.1500, longitude: 28.4667 } },
      { id: 'silivri', name: 'Silivri', type: 'ilçe', coordinates: { latitude: 41.0667, longitude: 28.2333 } },
      { id: 'sultanbeyli', name: 'Sultanbeyli', type: 'ilçe', coordinates: { latitude: 40.9500, longitude: 29.2667 } },
      { id: 'sile', name: 'Şile', type: 'ilçe', coordinates: { latitude: 41.1833, longitude: 29.6167 } },
      { id: 'cekmekoy', name: 'Çekmeköy', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 29.1833 } },
      { id: 'umraniye', name: 'Ümraniye', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 29.1167 } },
      { id: 'maltepe', name: 'Maltepe', type: 'ilçe', coordinates: { latitude: 40.9333, longitude: 29.1333 } },
      { id: 'kartal', name: 'Kartal', type: 'ilçe', coordinates: { latitude: 40.9000, longitude: 29.1833 } },
      { id: 'pendik', name: 'Pendik', type: 'ilçe', coordinates: { latitude: 40.8667, longitude: 29.2333 } },
      { id: 'tuzla', name: 'Tuzla', type: 'ilçe', coordinates: { latitude: 40.8167, longitude: 29.3000 } },
      { id: 'gebze', name: 'Gebze', type: 'ilçe', coordinates: { latitude: 40.8000, longitude: 29.4333 } },
      { id: 'darica', name: 'Darıca', type: 'ilçe', coordinates: { latitude: 40.7667, longitude: 29.3833 } },
      { id: 'korfez', name: 'Körfez', type: 'ilçe', coordinates: { latitude: 40.7667, longitude: 29.7333 } },
      { id: 'golcuk', name: 'Gölcük', type: 'ilçe', coordinates: { latitude: 40.7000, longitude: 29.8167 } },
      { id: 'derince', name: 'Derince', type: 'ilçe', coordinates: { latitude: 40.7667, longitude: 29.8167 } },
      { id: 'kartepe', name: 'Kartepe', type: 'ilçe', coordinates: { latitude: 40.7500, longitude: 29.9833 } },
      { id: 'basiskele', name: 'Başiskele', type: 'ilçe', coordinates: { latitude: 40.6333, longitude: 29.9000 } },
      { id: 'cayirova', name: 'Çayırova', type: 'ilçe', coordinates: { latitude: 40.8167, longitude: 29.3833 } },
      { id: 'dilovasi', name: 'Dilovası', type: 'ilçe', coordinates: { latitude: 40.7833, longitude: 29.5333 } },
      { id: 'karamursel', name: 'Karamürsel', type: 'ilçe', coordinates: { latitude: 40.6833, longitude: 29.6167 } },
      { id: 'kandira', name: 'Kandıra', type: 'ilçe', coordinates: { latitude: 41.0667, longitude: 29.4833 } }
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
      { id: 'karabaglar', name: 'Karabağlar', type: 'ilçe', coordinates: { latitude: 38.4000, longitude: 27.1167 } },
      { id: 'bayrakli', name: 'Bayraklı', type: 'ilçe', coordinates: { latitude: 38.4667, longitude: 27.1667 } },
      { id: 'cigli', name: 'Çiğli', type: 'ilçe', coordinates: { latitude: 38.5000, longitude: 27.0667 } },
      { id: 'karsiyaka', name: 'Karşıyaka', type: 'ilçe', coordinates: { latitude: 38.4667, longitude: 27.1167 } },
      { id: 'buca', name: 'Buca', type: 'ilçe', coordinates: { latitude: 38.3833, longitude: 27.1667 } },
      { id: 'menemen', name: 'Menemen', type: 'ilçe', coordinates: { latitude: 38.6000, longitude: 27.0667 } },
      { id: 'torbali', name: 'Torbalı', type: 'ilçe', coordinates: { latitude: 38.1667, longitude: 27.3500 } },
      { id: 'odemis', name: 'Ödemiş', type: 'ilçe', coordinates: { latitude: 38.2333, longitude: 27.9667 } },
      { id: 'bergama', name: 'Bergama', type: 'ilçe', coordinates: { latitude: 39.1167, longitude: 27.1833 } },
      { id: 'urla', name: 'Urla', type: 'ilçe', coordinates: { latitude: 38.3167, longitude: 26.7667 } },
      { id: 'cesme', name: 'Çeşme', type: 'ilçe', coordinates: { latitude: 38.3167, longitude: 26.3000 } },
      { id: 'dikili', name: 'Dikili', type: 'ilçe', coordinates: { latitude: 39.0667, longitude: 26.8833 } },
      { id: 'foça', name: 'Foça', type: 'ilçe', coordinates: { latitude: 38.6667, longitude: 26.7500 } },
      { id: 'karaburun', name: 'Karaburun', type: 'ilçe', coordinates: { latitude: 38.6333, longitude: 26.5167 } },
      { id: 'beydag', name: 'Beydağ', type: 'ilçe', coordinates: { latitude: 38.0833, longitude: 28.2167 } },
      { id: 'kınık', name: 'Kınık', type: 'ilçe', coordinates: { latitude: 39.0833, longitude: 27.6833 } },
      { id: 'aliaga', name: 'Aliağa', type: 'ilçe', coordinates: { latitude: 38.8000, longitude: 26.9667 } },
      { id: 'seferihisar', name: 'Seferihisar', type: 'ilçe', coordinates: { latitude: 38.2000, longitude: 27.0333 } },
      { id: 'guzelbahce', name: 'Güzelbahçe', type: 'ilçe', coordinates: { latitude: 38.3667, longitude: 27.0167 } },
      { id: 'menderes', name: 'Menderes', type: 'ilçe', coordinates: { latitude: 38.2500, longitude: 27.1333 } },
      { id: 'bayindir', name: 'Bayındır', type: 'ilçe', coordinates: { latitude: 38.2167, longitude: 27.6500 } },
      { id: 'tire', name: 'Tire', type: 'ilçe', coordinates: { latitude: 38.0833, longitude: 27.7333 } },
      { id: 'kemalpasa', name: 'Kemalpaşa', type: 'ilçe', coordinates: { latitude: 38.4167, longitude: 27.4167 } },
      { id: 'gaziemir', name: 'Gaziemir', type: 'ilçe', coordinates: { latitude: 38.3667, longitude: 27.1167 } },
      { id: 'balcova', name: 'Balçova', type: 'ilçe', coordinates: { latitude: 38.3833, longitude: 27.0667 } },
      { id: 'narlidere', name: 'Narlıdere', type: 'ilçe', coordinates: { latitude: 38.3833, longitude: 27.0000 } },
      { id: 'güzelbahçe', name: 'Güzelbahçe', type: 'ilçe', coordinates: { latitude: 38.3667, longitude: 27.0167 } }
    ]
  },
  {
    id: 'kars',
    name: 'Kars',
    plateNumber: 36,
    coordinates: { latitude: 40.6167, longitude: 43.1000 },
    municipalities: [
      { id: 'kars-il', name: 'Kars Belediyesi', type: 'ilçe', coordinates: { latitude: 40.6167, longitude: 43.1000 } },
      { id: 'sarikamis', name: 'Sarıkamış', type: 'ilçe', coordinates: { latitude: 40.3333, longitude: 42.5833 } },
      { id: 'kagizman', name: 'Kağızman', type: 'ilçe', coordinates: { latitude: 40.1500, longitude: 43.1333 } },
      { id: 'digor', name: 'Digor', type: 'ilçe', coordinates: { latitude: 40.3667, longitude: 43.4167 } },
      { id: 'selim', name: 'Selim', type: 'ilçe', coordinates: { latitude: 40.4667, longitude: 42.7833 } },
      { id: 'arpaçay', name: 'Arpaçay', type: 'ilçe', coordinates: { latitude: 40.8500, longitude: 43.3333 } },
      { id: 'aksu', name: 'Akyaka', type: 'ilçe', coordinates: { latitude: 40.7333, longitude: 43.6167 } },
      { id: 'susuz', name: 'Susuz', type: 'ilçe', coordinates: { latitude: 40.7833, longitude: 43.1333 } }
    ]
  },
  {
    id: 'kastamonu',
    name: 'Kastamonu',
    plateNumber: 37,
    coordinates: { latitude: 41.3887, longitude: 33.7827 },
    municipalities: [
      { id: 'kastamonu-il', name: 'Kastamonu Belediyesi', type: 'ilçe', coordinates: { latitude: 41.3887, longitude: 33.7827 } },
      { id: 'tosya', name: 'Tosya', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 34.0333 } },
      { id: 'taskopru', name: 'Taşköprü', type: 'ilçe', coordinates: { latitude: 41.5167, longitude: 34.2167 } },
      { id: 'inebolu', name: 'İnebolu', type: 'ilçe', coordinates: { latitude: 41.9667, longitude: 33.7667 } },
      { id: 'boyabat', name: 'Boyabat', type: 'ilçe', coordinates: { latitude: 41.4667, longitude: 34.7667 } },
      { id: 'araç', name: 'Araç', type: 'ilçe', coordinates: { latitude: 41.2500, longitude: 33.3333 } },
      { id: 'azdavay', name: 'Azdavay', type: 'ilçe', coordinates: { latitude: 41.6333, longitude: 33.3000 } },
      { id: 'cide', name: 'Cide', type: 'ilçe', coordinates: { latitude: 41.8833, longitude: 33.0000 } },
      { id: 'devrekani', name: 'Devrekani', type: 'ilçe', coordinates: { latitude: 41.6000, longitude: 33.8333 } },
      { id: 'kure', name: 'Küre', type: 'ilçe', coordinates: { latitude: 41.8000, longitude: 33.7167 } },
      { id: 'pinarbasi', name: 'Pınarbaşı', type: 'ilçe', coordinates: { latitude: 41.6000, longitude: 33.1167 } },
      { id: 'seydiler', name: 'Seydiler', type: 'ilçe', coordinates: { latitude: 41.6167, longitude: 33.7167 } },
      { id: 'senpazar', name: 'Şenpazar', type: 'ilçe', coordinates: { latitude: 41.8167, longitude: 33.2167 } },
      { id: 'doganyurt', name: 'Doğanyurt', type: 'ilçe', coordinates: { latitude: 42.0000, longitude: 33.4667 } },
      { id: 'ihsangazi', name: 'İhsangazi', type: 'ilçe', coordinates: { latitude: 41.6333, longitude: 33.5500 } },
      { id: 'abana', name: 'Abana', type: 'ilçe', coordinates: { latitude: 41.9833, longitude: 34.0167 } },
      { id: 'bozkurt', name: 'Bozkurt', type: 'ilçe', coordinates: { latitude: 41.9667, longitude: 34.0167 } },
      { id: 'catalzeytin', name: 'Çatalzeytin', type: 'ilçe', coordinates: { latitude: 41.9500, longitude: 34.2167 } },
      { id: 'hanonu', name: 'Hanonu', type: 'ilçe', coordinates: { latitude: 41.6333, longitude: 34.4667 } }
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
      { id: 'kocasinan', name: 'Kocasinan', type: 'ilçe', coordinates: { latitude: 38.7333, longitude: 35.4833 } },
      { id: 'talas', name: 'Talas', type: 'ilçe', coordinates: { latitude: 38.6833, longitude: 35.5667 } },
      { id: 'develi', name: 'Develi', type: 'ilçe', coordinates: { latitude: 38.3833, longitude: 35.4833 } },
      { id: 'yahyali', name: 'Yahyalı', type: 'ilçe', coordinates: { latitude: 37.9500, longitude: 35.3500 } },
      { id: 'bunyan', name: 'Bünyan', type: 'ilçe', coordinates: { latitude: 38.8500, longitude: 35.8500 } },
      { id: 'incesu', name: 'İncesu', type: 'ilçe', coordinates: { latitude: 38.6167, longitude: 35.1833 } },
      { id: 'sarioglan', name: 'Sarıoğlan', type: 'ilçe', coordinates: { latitude: 39.0833, longitude: 35.9667 } },
      { id: 'yesilhisar', name: 'Yeşilhisar', type: 'ilçe', coordinates: { latitude: 38.3500, longitude: 35.0833 } },
      { id: 'hacilar', name: 'Hacılar', type: 'ilçe', coordinates: { latitude: 38.6500, longitude: 35.4500 } },
      { id: 'sarkisla', name: 'Şarkışla', type: 'ilçe', coordinates: { latitude: 39.3500, longitude: 36.4000 } },
      { id: 'akiskaray', name: 'Akkışla', type: 'ilçe', coordinates: { latitude: 39.0000, longitude: 36.1667 } },
      { id: 'felahiye', name: 'Felahiye', type: 'ilçe', coordinates: { latitude: 39.0833, longitude: 35.5667 } },
      { id: 'ozvatan', name: 'Özvatan', type: 'ilçe', coordinates: { latitude: 39.1167, longitude: 35.7167 } },
      { id: 'pinarozu', name: 'Pınarbaşı', type: 'ilçe', coordinates: { latitude: 38.7167, longitude: 36.3833 } },
      { id: 'tomarza', name: 'Tomarza', type: 'ilçe', coordinates: { latitude: 38.4500, longitude: 35.8000 } }
    ]
  },
  {
    id: 'kirklareli',
    name: 'Kırklareli',
    plateNumber: 39,
    coordinates: { latitude: 41.7333, longitude: 27.2167 },
    municipalities: [
      { id: 'kirklareli-il', name: 'Kırklareli Belediyesi', type: 'ilçe', coordinates: { latitude: 41.7333, longitude: 27.2167 } },
      { id: 'luleburgaz', name: 'Lüleburgaz', type: 'ilçe', coordinates: { latitude: 41.4000, longitude: 27.3500 } },
      { id: 'babaeski', name: 'Babaeski', type: 'ilçe', coordinates: { latitude: 41.4333, longitude: 26.9833 } },
      { id: 'vize', name: 'Vize', type: 'ilçe', coordinates: { latitude: 41.5667, longitude: 27.7667 } },
      { id: 'pinarhisar', name: 'Pınarhisar', type: 'ilçe', coordinates: { latitude: 41.6167, longitude: 27.5167 } },
      { id: 'demirkoy', name: 'Demirköy', type: 'ilçe', coordinates: { latitude: 41.8167, longitude: 27.7667 } },
      { id: 'kofcaz', name: 'Kofçaz', type: 'ilçe', coordinates: { latitude: 41.9500, longitude: 27.1667 } },
      { id: 'pehlivankoy', name: 'Pehlivanköy', type: 'ilçe', coordinates: { latitude: 41.3500, longitude: 26.9167 } }
    ]
  },
  {
    id: 'kirsehir',
    name: 'Kırşehir',
    plateNumber: 40,
    coordinates: { latitude: 39.1425, longitude: 34.1709 },
    municipalities: [
      { id: 'kirsehir-il', name: 'Kırşehir Belediyesi', type: 'ilçe', coordinates: { latitude: 39.1425, longitude: 34.1709 } },
      { id: 'kaman', name: 'Kaman', type: 'ilçe', coordinates: { latitude: 39.3500, longitude: 33.7167 } },
      { id: 'mucur', name: 'Mucur', type: 'ilçe', coordinates: { latitude: 39.0667, longitude: 34.3833 } },
      { id: 'cicekdagi', name: 'Çiçekdağı', type: 'ilçe', coordinates: { latitude: 39.6000, longitude: 34.4000 } },
      { id: 'akpinar', name: 'Akpınar', type: 'ilçe', coordinates: { latitude: 39.4500, longitude: 33.9667 } },
      { id: 'boztepe', name: 'Boztepe', type: 'ilçe', coordinates: { latitude: 39.2667, longitude: 34.2667 } }
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
      { id: 'gebze', name: 'Gebze', type: 'ilçe', coordinates: { latitude: 40.8000, longitude: 29.4333 } },
      { id: 'darica', name: 'Darıca', type: 'ilçe', coordinates: { latitude: 40.7667, longitude: 29.3833 } },
      { id: 'korfez', name: 'Körfez', type: 'ilçe', coordinates: { latitude: 40.7667, longitude: 29.7333 } },
      { id: 'golcuk', name: 'Gölcük', type: 'ilçe', coordinates: { latitude: 40.7000, longitude: 29.8167 } },
      { id: 'derince', name: 'Derince', type: 'ilçe', coordinates: { latitude: 40.7667, longitude: 29.8167 } },
      { id: 'kartepe', name: 'Kartepe', type: 'ilçe', coordinates: { latitude: 40.7500, longitude: 29.9833 } },
      { id: 'basiskele', name: 'Başiskele', type: 'ilçe', coordinates: { latitude: 40.6333, longitude: 29.9000 } },
      { id: 'cayirova', name: 'Çayırova', type: 'ilçe', coordinates: { latitude: 40.8167, longitude: 29.3833 } },
      { id: 'dilovasi', name: 'Dilovası', type: 'ilçe', coordinates: { latitude: 40.7833, longitude: 29.5333 } },
      { id: 'karamursel', name: 'Karamürsel', type: 'ilçe', coordinates: { latitude: 40.6833, longitude: 29.6167 } },
      { id: 'kandira', name: 'Kandıra', type: 'ilçe', coordinates: { latitude: 41.0667, longitude: 29.4833 } }
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
      { id: 'meram', name: 'Meram', type: 'ilçe', coordinates: { latitude: 37.8667, longitude: 32.4833 } },
      { id: 'karatay', name: 'Karatay', type: 'ilçe', coordinates: { latitude: 37.8667, longitude: 32.4833 } },
      { id: 'eregli', name: 'Ereğli', type: 'ilçe', coordinates: { latitude: 37.5167, longitude: 34.0500 } },
      { id: 'aksehir', name: 'Akşehir', type: 'ilçe', coordinates: { latitude: 38.3500, longitude: 31.4167 } },
      { id: 'beysehir', name: 'Beyşehir', type: 'ilçe', coordinates: { latitude: 37.6833, longitude: 31.7167 } },
      { id: 'cumra', name: 'Çumra', type: 'ilçe', coordinates: { latitude: 37.5667, longitude: 32.7667 } },
      { id: 'seydisehir', name: 'Seydişehir', type: 'ilçe', coordinates: { latitude: 37.4167, longitude: 31.8500 } },
      { id: 'bozkir', name: 'Bozkır', type: 'ilçe', coordinates: { latitude: 37.1833, longitude: 32.2500 } },
      { id: 'celtik', name: 'Çeltik', type: 'ilçe', coordinates: { latitude: 39.0333, longitude: 31.7833 } },
      { id: 'cıhanbeyli', name: 'Cihanbeyli', type: 'ilçe', coordinates: { latitude: 38.6500, longitude: 32.9333 } },
      { id: 'kadınhanı', name: 'Kadınhanı', type: 'ilçe', coordinates: { latitude: 38.2333, longitude: 32.2167 } },
      { id: 'sarayonu', name: 'Sarayönü', type: 'ilçe', coordinates: { latitude: 38.2667, longitude: 32.4000 } },
      { id: 'kulu', name: 'Kulu', type: 'ilçe', coordinates: { latitude: 39.1000, longitude: 33.0833 } },
      { id: 'altınekin', name: 'Altınekin', type: 'ilçe', coordinates: { latitude: 38.3000, longitude: 32.8667 } },
      { id: 'huyuk', name: 'Hüyük', type: 'ilçe', coordinates: { latitude: 37.9500, longitude: 31.6000 } },
      { id: 'yunisre', name: 'Yunak', type: 'ilçe', coordinates: { latitude: 38.8167, longitude: 31.7333 } },
      { id: 'tuzlukcu', name: 'Tuzlukçu', type: 'ilçe', coordinates: { latitude: 38.4833, longitude: 31.6333 } },
      { id: 'doganhisar', name: 'Doğanhisar', type: 'ilçe', coordinates: { latitude: 38.1500, longitude: 31.6833 } },
      { id: 'halkapinar', name: 'Halkapınar', type: 'ilçe', coordinates: { latitude: 37.4333, longitude: 34.1833 } },
      { id: 'yaliho', name: 'Yalıhüyük', type: 'ilçe', coordinates: { latitude: 37.3000, longitude: 32.1000 } },
      { id: 'emirgazi', name: 'Emirgazi', type: 'ilçe', coordinates: { latitude: 37.9000, longitude: 33.8333 } },
      { id: 'guneysinir', name: 'Güneysınır', type: 'ilçe', coordinates: { latitude: 37.2667, longitude: 32.7167 } },
      { id: 'derbent', name: 'Derbent', type: 'ilçe', coordinates: { latitude: 38.0167, longitude: 32.0167 } },
      { id: 'taskent', name: 'Taşkent', type: 'ilçe', coordinates: { latitude: 36.9167, longitude: 32.4833 } },
      { id: 'ahırlı', name: 'Ahırlı', type: 'ilçe', coordinates: { latitude: 37.2333, longitude: 32.1167 } },
      { id: 'hadim', name: 'Hadim', type: 'ilçe', coordinates: { latitude: 36.9833, longitude: 32.4500 } }
    ]
  },
  {
    id: 'kutahya',
    name: 'Kütahya',
    plateNumber: 43,
    coordinates: { latitude: 39.4167, longitude: 29.9833 },
    municipalities: [
      { id: 'kutahya-il', name: 'Kütahya Belediyesi', type: 'ilçe', coordinates: { latitude: 39.4167, longitude: 29.9833 } },
      { id: 'tavsanli', name: 'Tavşanlı', type: 'ilçe', coordinates: { latitude: 39.5500, longitude: 29.4833 } },
      { id: 'simav', name: 'Simav', type: 'ilçe', coordinates: { latitude: 39.0833, longitude: 28.9667 } },
      { id: 'gediz', name: 'Gediz', type: 'ilçe', coordinates: { latitude: 38.9167, longitude: 29.4000 } },
      { id: 'emet', name: 'Emet', type: 'ilçe', coordinates: { latitude: 39.3333, longitude: 29.2667 } },
      { id: 'altintas', name: 'Altıntaş', type: 'ilçe', coordinates: { latitude: 39.0667, longitude: 30.1167 } },
      { id: 'domanic', name: 'Domaniç', type: 'ilçe', coordinates: { latitude: 39.8000, longitude: 29.6167 } },
      { id: 'hisarcik', name: 'Hisarcık', type: 'ilçe', coordinates: { latitude: 39.2500, longitude: 29.2333 } },
      { id: 'cavdarhisar', name: 'Çavdarhisar', type: 'ilçe', coordinates: { latitude: 39.2000, longitude: 29.6167 } },
      { id: 'saphane', name: 'Şaphane', type: 'ilçe', coordinates: { latitude: 39.0333, longitude: 29.2167 } },
      { id: 'aslanapa', name: 'Aslanapa', type: 'ilçe', coordinates: { latitude: 39.2167, longitude: 29.8833 } },
      { id: 'dumlupinar', name: 'Dumlupınar', type: 'ilçe', coordinates: { latitude: 38.8500, longitude: 29.9833 } },
      { id: 'pazarlar', name: 'Pazarlar', type: 'ilçe', coordinates: { latitude: 38.9833, longitude: 29.1333 } }
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
      { id: 'yesilyurt', name: 'Yeşilyurt', type: 'ilçe', coordinates: { latitude: 38.3552, longitude: 38.3095 } },
      { id: 'dogansehir', name: 'Doğanşehir', type: 'ilçe', coordinates: { latitude: 38.0833, longitude: 37.8833 } },
      { id: 'akcadag', name: 'Akçadağ', type: 'ilçe', coordinates: { latitude: 38.3333, longitude: 37.9667 } },
      { id: 'hekimhan', name: 'Hekimhan', type: 'ilçe', coordinates: { latitude: 38.8167, longitude: 37.9333 } },
      { id: 'puturge', name: 'Pütürge', type: 'ilçe', coordinates: { latitude: 38.2000, longitude: 38.8667 } },
      { id: 'yazihan', name: 'Yazıhan', type: 'ilçe', coordinates: { latitude: 38.5833, longitude: 38.1833 } },
      { id: 'arapgir', name: 'Arapgir', type: 'ilçe', coordinates: { latitude: 39.0333, longitude: 38.4833 } },
      { id: 'arguvan', name: 'Arguvan', type: 'ilçe', coordinates: { latitude: 38.7667, longitude: 38.2667 } },
      { id: 'kuluncak', name: 'Kuluncak', type: 'ilçe', coordinates: { latitude: 38.8833, longitude: 37.6667 } },
      { id: 'kale', name: 'Kale', type: 'ilçe', coordinates: { latitude: 38.4000, longitude: 38.7500 } }
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
      { id: 'yunusemre', name: 'Yunusemre', type: 'ilçe', coordinates: { latitude: 38.6191, longitude: 27.4289 } },
      { id: 'akhisar', name: 'Akhisar', type: 'ilçe', coordinates: { latitude: 38.9167, longitude: 27.8333 } },
      { id: 'turgutlu', name: 'Turgutlu', type: 'ilçe', coordinates: { latitude: 38.5000, longitude: 27.7000 } },
      { id: 'alasehir', name: 'Alaşehir', type: 'ilçe', coordinates: { latitude: 38.3500, longitude: 28.5167 } },
      { id: 'salihli', name: 'Salihli', type: 'ilçe', coordinates: { latitude: 38.4833, longitude: 28.1333 } },
      { id: 'demirci', name: 'Demirci', type: 'ilçe', coordinates: { latitude: 39.0500, longitude: 28.6500 } },
      { id: 'gordes', name: 'Gördes', type: 'ilçe', coordinates: { latitude: 38.9333, longitude: 28.2833 } },
      { id: 'kula', name: 'Kula', type: 'ilçe', coordinates: { latitude: 38.5500, longitude: 28.6500 } },
      { id: 'sarigol', name: 'Sarıgöl', type: 'ilçe', coordinates: { latitude: 38.2333, longitude: 28.7000 } },
      { id: 'selendi', name: 'Selendi', type: 'ilçe', coordinates: { latitude: 38.7500, longitude: 28.8667 } },
      { id: 'kirkagac', name: 'Kırkağaç', type: 'ilçe', coordinates: { latitude: 39.1000, longitude: 27.6667 } },
      { id: 'soma', name: 'Soma', type: 'ilçe', coordinates: { latitude: 39.1833, longitude: 27.6000 } },
      { id: 'golmarmara', name: 'Gölmarmara', type: 'ilçe', coordinates: { latitude: 38.7167, longitude: 28.2833 } },
      { id: 'ahmetli', name: 'Ahmetli', type: 'ilçe', coordinates: { latitude: 38.5167, longitude: 27.9333 } },
      { id: 'koprubasi', name: 'Köprübaşı', type: 'ilçe', coordinates: { latitude: 38.7500, longitude: 28.4000 } }
    ]
  },
  {
    id: 'kahramanmaras',
    name: 'Kahramanmaraş',
    plateNumber: 46,
    coordinates: { latitude: 37.5858, longitude: 36.9371 },
    municipalities: [
      { id: 'kahramanmaras-buyuksehir', name: 'Kahramanmaraş Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 37.5858, longitude: 36.9371 } },
      { id: 'dulkadiroglu', name: 'Dulkadiroğlu', type: 'ilçe', coordinates: { latitude: 37.5858, longitude: 36.9371 } },
      { id: 'onikişubat', name: 'Onikişubat', type: 'ilçe', coordinates: { latitude: 37.5858, longitude: 36.9371 } },
      { id: 'elbistan', name: 'Elbistan', type: 'ilçe', coordinates: { latitude: 38.2000, longitude: 37.2000 } },
      { id: 'afsin', name: 'Afşin', type: 'ilçe', coordinates: { latitude: 38.2500, longitude: 36.9167 } },
      { id: 'pazarcik', name: 'Pazarcık', type: 'ilçe', coordinates: { latitude: 37.4833, longitude: 37.3000 } },
      { id: 'goksun', name: 'Göksun', type: 'ilçe', coordinates: { latitude: 38.0167, longitude: 36.5000 } },
      { id: 'andirin', name: 'Andırın', type: 'ilçe', coordinates: { latitude: 37.5667, longitude: 36.3500 } },
      { id: 'caglayancerit', name: 'Çağlayancerit', type: 'ilçe', coordinates: { latitude: 37.7500, longitude: 37.2833 } },
      { id: 'nurhak', name: 'Nurhak', type: 'ilçe', coordinates: { latitude: 37.9667, longitude: 37.4333 } },
      { id: 'ekinozu', name: 'Ekinözü', type: 'ilçe', coordinates: { latitude: 38.0667, longitude: 37.1833 } },
      { id: 'turkoglu', name: 'Türkoğlu', type: 'ilçe', coordinates: { latitude: 37.3833, longitude: 36.8500 } }
    ]
  },
  {
    id: 'mardin',
    name: 'Mardin',
    plateNumber: 47,
    coordinates: { latitude: 37.3212, longitude: 40.7245 },
    municipalities: [
      { id: 'mardin-il', name: 'Mardin Belediyesi', type: 'ilçe', coordinates: { latitude: 37.3212, longitude: 40.7245 } },
      { id: 'kızıltepe', name: 'Kızıltepe', type: 'ilçe', coordinates: { latitude: 37.1833, longitude: 40.5833 } },
      { id: 'midyat', name: 'Midyat', type: 'ilçe', coordinates: { latitude: 37.4167, longitude: 41.3667 } },
      { id: 'nusaybin', name: 'Nusaybin', type: 'ilçe', coordinates: { latitude: 37.0667, longitude: 41.2167 } },
      { id: 'derik', name: 'Derik', type: 'ilçe', coordinates: { latitude: 37.3667, longitude: 40.2667 } },
      { id: 'mazidagi', name: 'Mazıdağı', type: 'ilçe', coordinates: { latitude: 37.4833, longitude: 40.4833 } },
      { id: 'savur', name: 'Savur', type: 'ilçe', coordinates: { latitude: 37.5500, longitude: 40.8833 } },
      { id: 'yesilli', name: 'Yeşilli', type: 'ilçe', coordinates: { latitude: 37.2333, longitude: 40.8167 } },
      { id: 'dargecit', name: 'Dargeçit', type: 'ilçe', coordinates: { latitude: 37.5500, longitude: 41.7167 } },
      { id: 'artuklu', name: 'Artuklu', type: 'ilçe', coordinates: { latitude: 37.3212, longitude: 40.7245 } }
    ]
  },
  {
    id: 'mugla',
    name: 'Muğla',
    plateNumber: 48,
    coordinates: { latitude: 37.2154, longitude: 28.3636 },
    municipalities: [
      { id: 'mugla-il', name: 'Muğla Belediyesi', type: 'ilçe', coordinates: { latitude: 37.2154, longitude: 28.3636 } },
      { id: 'fethiye', name: 'Fethiye', type: 'ilçe', coordinates: { latitude: 36.6333, longitude: 29.1167 } },
      { id: 'bodrum', name: 'Bodrum', type: 'ilçe', coordinates: { latitude: 37.0333, longitude: 27.4333 } },
      { id: 'marmaris', name: 'Marmaris', type: 'ilçe', coordinates: { latitude: 36.8500, longitude: 28.2667 } },
      { id: 'milas', name: 'Milas', type: 'ilçe', coordinates: { latitude: 37.3167, longitude: 27.7833 } },
      { id: 'datca', name: 'Datça', type: 'ilçe', coordinates: { latitude: 36.7333, longitude: 27.6833 } },
      { id: 'koycegiz', name: 'Köyceğiz', type: 'ilçe', coordinates: { latitude: 36.9667, longitude: 28.6833 } },
      { id: 'ortaca', name: 'Ortaca', type: 'ilçe', coordinates: { latitude: 36.8333, longitude: 28.7667 } },
      { id: 'ula', name: 'Ula', type: 'ilçe', coordinates: { latitude: 37.1000, longitude: 28.4167 } },
      { id: 'yatan', name: 'Yatağan', type: 'ilçe', coordinates: { latitude: 37.3333, longitude: 28.1500 } },
      { id: 'dalaman', name: 'Dalaman', type: 'ilçe', coordinates: { latitude: 36.7667, longitude: 28.8000 } },
      { id: 'seydikemer', name: 'Seydikemer', type: 'ilçe', coordinates: { latitude: 36.6333, longitude: 29.1167 } },
      { id: 'kavaklidere', name: 'Kavaklıdere', type: 'ilçe', coordinates: { latitude: 37.4333, longitude: 28.3667 } }
    ]
  },
  {
    id: 'mus',
    name: 'Muş',
    plateNumber: 49,
    coordinates: { latitude: 38.7432, longitude: 41.5065 },
    municipalities: [
      { id: 'mus-il', name: 'Muş Belediyesi', type: 'ilçe', coordinates: { latitude: 38.7432, longitude: 41.5065 } },
      { id: 'bulanik', name: 'Bulanık', type: 'ilçe', coordinates: { latitude: 38.9333, longitude: 42.2667 } },
      { id: 'malazgirt', name: 'Malazgirt', type: 'ilçe', coordinates: { latitude: 39.1500, longitude: 42.5333 } },
      { id: 'varto', name: 'Varto', type: 'ilçe', coordinates: { latitude: 39.1667, longitude: 41.4667 } },
      { id: 'haskoy', name: 'Hasköy', type: 'ilçe', coordinates: { latitude: 38.6833, longitude: 41.6833 } },
      { id: 'korkut', name: 'Korkut', type: 'ilçe', coordinates: { latitude: 38.7333, longitude: 41.7833 } }
    ]
  },
  {
    id: 'nevsehir',
    name: 'Nevşehir',
    plateNumber: 50,
    coordinates: { latitude: 38.6244, longitude: 34.7239 },
    municipalities: [
      { id: 'nevsehir-il', name: 'Nevşehir Belediyesi', type: 'ilçe', coordinates: { latitude: 38.6244, longitude: 34.7239 } },
      { id: 'urgup', name: 'Ürgüp', type: 'ilçe', coordinates: { latitude: 38.6333, longitude: 34.9167 } },
      { id: 'avanos', name: 'Avanos', type: 'ilçe', coordinates: { latitude: 38.7167, longitude: 34.8500 } },
      { id: 'gulsehir', name: 'Gülşehir', type: 'ilçe', coordinates: { latitude: 38.7500, longitude: 34.6167 } },
      { id: 'derinkuyu', name: 'Derinkuyu', type: 'ilçe', coordinates: { latitude: 38.3667, longitude: 34.7333 } },
      { id: 'acigol', name: 'Acıgöl', type: 'ilçe', coordinates: { latitude: 38.5500, longitude: 34.5167 } },
      { id: 'kozakli', name: 'Kozaklı', type: 'ilçe', coordinates: { latitude: 39.2167, longitude: 34.8167 } },
      { id: 'hacibektas', name: 'Hacıbektaş', type: 'ilçe', coordinates: { latitude: 38.9333, longitude: 34.5667 } }
    ]
  },
  {
    id: 'nigde',
    name: 'Niğde',
    plateNumber: 51,
    coordinates: { latitude: 37.9667, longitude: 34.6833 },
    municipalities: [
      { id: 'nigde-il', name: 'Niğde Belediyesi', type: 'ilçe', coordinates: { latitude: 37.9667, longitude: 34.6833 } },
      { id: 'bor', name: 'Bor', type: 'ilçe', coordinates: { latitude: 37.8833, longitude: 34.5667 } },
      { id: 'ulukisla', name: 'Ulukışla', type: 'ilçe', coordinates: { latitude: 37.5500, longitude: 34.4833 } },
      { id: 'camardi', name: 'Çamardı', type: 'ilçe', coordinates: { latitude: 37.8333, longitude: 34.9833 } },
      { id: 'altunhisar', name: 'Altunhisar', type: 'ilçe', coordinates: { latitude: 37.9833, longitude: 34.3667 } },
      { id: 'ciftlik', name: 'Çiftlik', type: 'ilçe', coordinates: { latitude: 37.9833, longitude: 34.3667 } }
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
      { id: 'unye', name: 'Ünye', type: 'ilçe', coordinates: { latitude: 41.1333, longitude: 37.2833 } },
      { id: 'fatsa', name: 'Fatsa', type: 'ilçe', coordinates: { latitude: 41.0333, longitude: 37.5000 } },
      { id: 'golkoy', name: 'Gölköy', type: 'ilçe', coordinates: { latitude: 40.6833, longitude: 37.6167 } },
      { id: 'korgan', name: 'Korgan', type: 'ilçe', coordinates: { latitude: 40.8167, longitude: 37.3500 } },
      { id: 'kumru', name: 'Kumru', type: 'ilçe', coordinates: { latitude: 40.8667, longitude: 37.2667 } },
      { id: 'aybasti', name: 'Aybastı', type: 'ilçe', coordinates: { latitude: 40.6833, longitude: 37.4000 } },
      { id: 'perşembe', name: 'Perşembe', type: 'ilçe', coordinates: { latitude: 41.0667, longitude: 37.7667 } },
      { id: 'ulubey', name: 'Ulubey', type: 'ilçe', coordinates: { latitude: 40.8667, longitude: 37.7500 } },
      { id: 'mesudiye', name: 'Mesudiye', type: 'ilçe', coordinates: { latitude: 40.4500, longitude: 37.7667 } },
      { id: 'ikizce', name: 'İkizce', type: 'ilçe', coordinates: { latitude: 41.0667, longitude: 37.0833 } },
      { id: 'kabatas', name: 'Kabataş', type: 'ilçe', coordinates: { latitude: 40.7500, longitude: 37.4500 } },
      { id: 'camas', name: 'Çamaş', type: 'ilçe', coordinates: { latitude: 40.9000, longitude: 37.5333 } },
      { id: 'catalpinar', name: 'Çatalpınar', type: 'ilçe', coordinates: { latitude: 40.8833, longitude: 37.4500 } },
      { id: 'caybasi', name: 'Çaybaşı', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 37.1000 } },
      { id: 'akkus', name: 'Akkuş', type: 'ilçe', coordinates: { latitude: 40.7833, longitude: 36.9667 } },
      { id: 'gurgentepe', name: 'Gürgentepe', type: 'ilçe', coordinates: { latitude: 40.7833, longitude: 37.5833 } }
    ]
  },
  {
    id: 'rize',
    name: 'Rize',
    plateNumber: 53,
    coordinates: { latitude: 41.0201, longitude: 40.5234 },
    municipalities: [
      { id: 'rize-il', name: 'Rize Belediyesi', type: 'ilçe', coordinates: { latitude: 41.0201, longitude: 40.5234 } },
      { id: 'pazar', name: 'Pazar', type: 'ilçe', coordinates: { latitude: 41.1833, longitude: 40.8833 } },
      { id: 'ardesen', name: 'Ardeşen', type: 'ilçe', coordinates: { latitude: 41.1833, longitude: 40.9833 } },
      { id: 'fındıklı', name: 'Fındıklı', type: 'ilçe', coordinates: { latitude: 41.2667, longitude: 41.1333 } },
      { id: 'cayeli', name: 'Çayeli', type: 'ilçe', coordinates: { latitude: 41.0833, longitude: 40.7333 } },
      { id: 'kalkandere', name: 'Kalkandere', type: 'ilçe', coordinates: { latitude: 40.9333, longitude: 40.4333 } },
      { id: 'guneysu', name: 'Güneysu', type: 'ilçe', coordinates: { latitude: 40.9833, longitude: 40.6000 } },
      { id: 'camlihemsin', name: 'Çamlıhemşin', type: 'ilçe', coordinates: { latitude: 41.0500, longitude: 41.0000 } },
      { id: 'ikizdere', name: 'İkizdere', type: 'ilçe', coordinates: { latitude: 40.7833, longitude: 40.5500 } },
      { id: 'derepazari', name: 'Derepazarı', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 40.4333 } },
      { id: 'hemşin', name: 'Hemşin', type: 'ilçe', coordinates: { latitude: 41.0500, longitude: 40.9000 } },
      { id: 'iyidere', name: 'İyidere', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 40.3500 } }
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
      { id: 'serdivan', name: 'Serdivan', type: 'ilçe', coordinates: { latitude: 40.7569, longitude: 30.3781 } },
      { id: 'akyazi', name: 'Akyazı', type: 'ilçe', coordinates: { latitude: 40.6833, longitude: 30.6167 } },
      { id: 'hendek', name: 'Hendek', type: 'ilçe', coordinates: { latitude: 40.8000, longitude: 30.7500 } },
      { id: 'karasu', name: 'Karasu', type: 'ilçe', coordinates: { latitude: 41.1000, longitude: 30.6833 } },
      { id: 'geyve', name: 'Geyve', type: 'ilçe', coordinates: { latitude: 40.5000, longitude: 30.2833 } },
      { id: 'sapanca', name: 'Sapanca', type: 'ilçe', coordinates: { latitude: 40.6833, longitude: 30.2667 } },
      { id: 'pamukova', name: 'Pamukova', type: 'ilçe', coordinates: { latitude: 40.5000, longitude: 30.1667 } },
      { id: 'tarakli', name: 'Taraklı', type: 'ilçe', coordinates: { latitude: 40.4000, longitude: 30.4833 } },
      { id: 'ferizli', name: 'Ferizli', type: 'ilçe', coordinates: { latitude: 40.8667, longitude: 30.4833 } },
      { id: 'kaynarca', name: 'Kaynarca', type: 'ilçe', coordinates: { latitude: 41.0333, longitude: 30.3000 } },
      { id: 'kocaali', name: 'Kocaali', type: 'ilçe', coordinates: { latitude: 41.0500, longitude: 30.8500 } },
      { id: 'sogutlu', name: 'Söğütlü', type: 'ilçe', coordinates: { latitude: 40.9000, longitude: 30.4667 } },
      { id: 'arifiye', name: 'Arifiye', type: 'ilçe', coordinates: { latitude: 40.7167, longitude: 30.3500 } },
      { id: 'erenler', name: 'Erenler', type: 'ilçe', coordinates: { latitude: 40.7569, longitude: 30.3781 } }
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
      { id: 'canik', name: 'Canik', type: 'ilçe', coordinates: { latitude: 41.2867, longitude: 36.3300 } },
      { id: 'atakum', name: 'Atakum', type: 'ilçe', coordinates: { latitude: 41.2867, longitude: 36.3300 } },
      { id: 'bafra', name: 'Bafra', type: 'ilçe', coordinates: { latitude: 41.5667, longitude: 35.9000 } },
      { id: 'carsamba', name: 'Çarşamba', type: 'ilçe', coordinates: { latitude: 41.2000, longitude: 36.7333 } },
      { id: 'vezirkopru', name: 'Vezirköprü', type: 'ilçe', coordinates: { latitude: 41.1500, longitude: 35.4667 } },
      { id: 'terme', name: 'Terme', type: 'ilçe', coordinates: { latitude: 41.2000, longitude: 36.9667 } },
      { id: 'havza', name: 'Havza', type: 'ilçe', coordinates: { latitude: 40.9667, longitude: 35.6667 } },
      { id: 'alaçam', name: 'Alaçam', type: 'ilçe', coordinates: { latitude: 41.6167, longitude: 35.6000 } },
      { id: 'salipazari', name: 'Salıpazarı', type: 'ilçe', coordinates: { latitude: 41.0833, longitude: 36.8333 } },
      { id: 'asarcik', name: 'Asarcık', type: 'ilçe', coordinates: { latitude: 41.0333, longitude: 36.2333 } },
      { id: 'ondokuzmayis', name: 'Ondokuzmayıs', type: 'ilçe', coordinates: { latitude: 41.5000, longitude: 36.0833 } },
      { id: 'kavak', name: 'Kavak', type: 'ilçe', coordinates: { latitude: 41.0667, longitude: 36.0333 } },
      { id: 'ladik', name: 'Ladik', type: 'ilçe', coordinates: { latitude: 40.9167, longitude: 35.8833 } },
      { id: 'ayvacik', name: 'Ayvacık', type: 'ilçe', coordinates: { latitude: 40.9833, longitude: 36.6333 } },
      { id: 'yakakent', name: 'Yakakent', type: 'ilçe', coordinates: { latitude: 41.6333, longitude: 35.5333 } }
    ]
  },
  {
    id: 'siirt',
    name: 'Siirt',
    plateNumber: 56,
    coordinates: { latitude: 37.9333, longitude: 41.9500 },
    municipalities: [
      { id: 'siirt-il', name: 'Siirt Belediyesi', type: 'ilçe', coordinates: { latitude: 37.9333, longitude: 41.9500 } },
      { id: 'kurtalan', name: 'Kurtalan', type: 'ilçe', coordinates: { latitude: 37.9333, longitude: 41.7000 } },
      { id: 'pervari', name: 'Pervari', type: 'ilçe', coordinates: { latitude: 37.9333, longitude: 42.5500 } },
      { id: 'sirvan', name: 'Şirvan', type: 'ilçe', coordinates: { latitude: 38.0667, longitude: 42.0167 } },
      { id: 'baykan', name: 'Baykan', type: 'ilçe', coordinates: { latitude: 38.1667, longitude: 41.7833 } },
      { id: 'eruh', name: 'Eruh', type: 'ilçe', coordinates: { latitude: 37.7500, longitude: 42.1833 } },
      { id: 'tillo', name: 'Tillo', type: 'ilçe', coordinates: { latitude: 37.9333, longitude: 42.0000 } }
    ]
  },
  {
    id: 'sinop',
    name: 'Sinop',
    plateNumber: 57,
    coordinates: { latitude: 42.0231, longitude: 35.1531 },
    municipalities: [
      { id: 'sinop-il', name: 'Sinop Belediyesi', type: 'ilçe', coordinates: { latitude: 42.0231, longitude: 35.1531 } },
      { id: 'boyabat', name: 'Boyabat', type: 'ilçe', coordinates: { latitude: 41.4667, longitude: 34.7667 } },
      { id: 'ayancik', name: 'Ayancık', type: 'ilçe', coordinates: { latitude: 41.9500, longitude: 34.5833 } },
      { id: 'duragan', name: 'Durağan', type: 'ilçe', coordinates: { latitude: 41.4167, longitude: 35.0500 } },
      { id: 'gerze', name: 'Gerze', type: 'ilçe', coordinates: { latitude: 41.8000, longitude: 35.2000 } },
      { id: 'turkeli', name: 'Türkeli', type: 'ilçe', coordinates: { latitude: 41.9500, longitude: 34.3333 } },
      { id: 'dikmen', name: 'Dikmen', type: 'ilçe', coordinates: { latitude: 41.6500, longitude: 35.2667 } },
      { id: 'sarayduzu', name: 'Saraydüzü', type: 'ilçe', coordinates: { latitude: 41.3333, longitude: 34.8500 } },
      { id: 'erfelek', name: 'Erfelek', type: 'ilçe', coordinates: { latitude: 41.8833, longitude: 34.9167 } }
    ]
  },
  {
    id: 'sivas',
    name: 'Sivas',
    plateNumber: 58,
    coordinates: { latitude: 39.7477, longitude: 37.0179 },
    municipalities: [
      { id: 'sivas-il', name: 'Sivas Belediyesi', type: 'ilçe', coordinates: { latitude: 39.7477, longitude: 37.0179 } },
      { id: 'şarkışla', name: 'Şarkışla', type: 'ilçe', coordinates: { latitude: 39.3500, longitude: 36.4000 } },
      { id: 'yildizeli', name: 'Yıldızeli', type: 'ilçe', coordinates: { latitude: 39.8667, longitude: 36.6000 } },
      { id: 'susehri', name: 'Suşehri', type: 'ilçe', coordinates: { latitude: 40.1667, longitude: 38.0833 } },
      { id: 'divrigi', name: 'Divriği', type: 'ilçe', coordinates: { latitude: 39.3667, longitude: 38.1167 } },
      { id: 'kangal', name: 'Kangal', type: 'ilçe', coordinates: { latitude: 39.2333, longitude: 37.3833 } },
      { id: 'gurun', name: 'Gürün', type: 'ilçe', coordinates: { latitude: 38.7167, longitude: 37.2667 } },
      { id: 'hafik', name: 'Hafik', type: 'ilçe', coordinates: { latitude: 39.8500, longitude: 37.3833 } },
      { id: 'imranli', name: 'İmranlı', type: 'ilçe', coordinates: { latitude: 39.8667, longitude: 38.1167 } },
      { id: 'zara', name: 'Zara', type: 'ilçe', coordinates: { latitude: 39.8833, longitude: 37.7500 } },
      { id: 'koyseri', name: 'Koyulhisar', type: 'ilçe', coordinates: { latitude: 40.3000, longitude: 37.8167 } },
      { id: 'gemerek', name: 'Gemerek', type: 'ilçe', coordinates: { latitude: 39.1833, longitude: 36.0667 } },
      { id: 'akincilar', name: 'Akıncılar', type: 'ilçe', coordinates: { latitude: 40.0833, longitude: 38.3500 } },
      { id: 'dogansar', name: 'Doğanşar', type: 'ilçe', coordinates: { latitude: 40.2167, longitude: 37.5333 } },
      { id: 'golova', name: 'Gölova', type: 'ilçe', coordinates: { latitude: 40.0667, longitude: 38.6167 } },
      { id: 'celallan', name: 'Ulaş', type: 'ilçe', coordinates: { latitude: 39.4500, longitude: 37.0333 } },
      { id: 'altinyayla', name: 'Altınyayla', type: 'ilçe', coordinates: { latitude: 39.2667, longitude: 36.7500 } }
    ]
  },
  {
    id: 'tekirdag',
    name: 'Tekirdağ',
    plateNumber: 59,
    coordinates: { latitude: 40.9833, longitude: 27.5167 },
    municipalities: [
      { id: 'tekirdag-il', name: 'Tekirdağ Belediyesi', type: 'ilçe', coordinates: { latitude: 40.9833, longitude: 27.5167 } },
      { id: 'corlu', name: 'Çorlu', type: 'ilçe', coordinates: { latitude: 41.1500, longitude: 27.8000 } },
      { id: 'malkara', name: 'Malkara', type: 'ilçe', coordinates: { latitude: 40.8833, longitude: 26.9000 } },
      { id: 'sarkoy', name: 'Şarköy', type: 'ilçe', coordinates: { latitude: 40.6167, longitude: 27.1167 } },
      { id: 'hayrabolu', name: 'Hayrabolu', type: 'ilçe', coordinates: { latitude: 41.2167, longitude: 27.1000 } },
      { id: 'suleymanpasa', name: 'Süleymanpaşa', type: 'ilçe', coordinates: { latitude: 40.9833, longitude: 27.5167 } },
      { id: 'ergene', name: 'Ergene', type: 'ilçe', coordinates: { latitude: 41.1500, longitude: 27.8000 } },
      { id: 'kapakli', name: 'Kapaklı', type: 'ilçe', coordinates: { latitude: 41.3167, longitude: 27.9667 } },
      { id: 'saray', name: 'Saray', type: 'ilçe', coordinates: { latitude: 41.4500, longitude: 27.9167 } },
      { id: 'marmaraereglisi', name: 'Marmaraereğlisi', type: 'ilçe', coordinates: { latitude: 40.9667, longitude: 27.9500 } },
      { id: 'murath', name: 'Muratlı', type: 'ilçe', coordinates: { latitude: 41.1833, longitude: 27.5167 } }
    ]
  },
  {
    id: 'tokat',
    name: 'Tokat',
    plateNumber: 60,
    coordinates: { latitude: 40.3167, longitude: 36.5500 },
    municipalities: [
      { id: 'tokat-il', name: 'Tokat Belediyesi', type: 'ilçe', coordinates: { latitude: 40.3167, longitude: 36.5500 } },
      { id: 'turhal', name: 'Turhal', type: 'ilçe', coordinates: { latitude: 40.3833, longitude: 36.0833 } },
      { id: 'zile', name: 'Zile', type: 'ilçe', coordinates: { latitude: 40.3000, longitude: 35.8833 } },
      { id: 'erbaa', name: 'Erbaa', type: 'ilçe', coordinates: { latitude: 40.6667, longitude: 36.5667 } },
      { id: 'niksar', name: 'Niksar', type: 'ilçe', coordinates: { latitude: 40.5833, longitude: 36.9667 } },
      { id: 'resadiye', name: 'Reşadiye', type: 'ilçe', coordinates: { latitude: 40.4333, longitude: 37.3667 } },
      { id: 'almus', name: 'Almus', type: 'ilçe', coordinates: { latitude: 40.3833, longitude: 36.9000 } },
      { id: 'pazar', name: 'Pazar', type: 'ilçe', coordinates: { latitude: 40.2833, longitude: 36.2833 } },
      { id: 'yesilyurt', name: 'Yeşilyurt', type: 'ilçe', coordinates: { latitude: 40.0000, longitude: 36.2333 } },
      { id: 'artova', name: 'Artova', type: 'ilçe', coordinates: { latitude: 39.8167, longitude: 36.1167 } },
      { id: 'sulusaray', name: 'Sulusaray', type: 'ilçe', coordinates: { latitude: 39.9833, longitude: 35.9667 } },
      { id: 'basciftlik', name: 'Başçiftlik', type: 'ilçe', coordinates: { latitude: 40.5500, longitude: 37.1667 } }
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
      { id: 'akcaabat', name: 'Akçaabat', type: 'ilçe', coordinates: { latitude: 41.0167, longitude: 39.5667 } },
      { id: 'araksin', name: 'Araklı', type: 'ilçe', coordinates: { latitude: 40.9333, longitude: 39.9333 } },
      { id: 'of', name: 'Of', type: 'ilçe', coordinates: { latitude: 40.9500, longitude: 40.2667 } },
      { id: 'sürmene', name: 'Sürmene', type: 'ilçe', coordinates: { latitude: 40.9000, longitude: 40.1167 } },
      { id: 'yomra', name: 'Yomra', type: 'ilçe', coordinates: { latitude: 40.9500, longitude: 39.8167 } },
      { id: 'vakfikebir', name: 'Vakfıkebir', type: 'ilçe', coordinates: { latitude: 41.0500, longitude: 39.2833 } },
      { id: 'besikduzu', name: 'Beşikdüzü', type: 'ilçe', coordinates: { latitude: 41.0500, longitude: 39.2333 } },
      { id: 'caykara', name: 'Çaykara', type: 'ilçe', coordinates: { latitude: 40.7500, longitude: 40.2333 } },
      { id: 'dernekpazari', name: 'Dernekpazarı', type: 'ilçe', coordinates: { latitude: 40.8000, longitude: 40.2333 } },
      { id: 'düzköy', name: 'Düzköy', type: 'ilçe', coordinates: { latitude: 40.8667, longitude: 39.4167 } },
      { id: 'hayrat', name: 'Hayrat', type: 'ilçe', coordinates: { latitude: 40.8833, longitude: 40.3667 } },
      { id: 'koprubasi', name: 'Köprübaşı', type: 'ilçe', coordinates: { latitude: 40.8167, longitude: 40.1167 } },
      { id: 'maçka', name: 'Maçka', type: 'ilçe', coordinates: { latitude: 40.8167, longitude: 39.6167 } },
      { id: 'salpazari', name: 'Salpazarı', type: 'ilçe', coordinates: { latitude: 40.9333, longitude: 39.1833 } },
      { id: 'tonya', name: 'Tonya', type: 'ilçe', coordinates: { latitude: 40.8833, longitude: 39.2833 } }
    ]
  },
  {
    id: 'tunceli',
    name: 'Tunceli',
    plateNumber: 62,
    coordinates: { latitude: 39.1079, longitude: 39.5401 },
    municipalities: [
      { id: 'tunceli-il', name: 'Tunceli Belediyesi', type: 'ilçe', coordinates: { latitude: 39.1079, longitude: 39.5401 } },
      { id: 'pertek', name: 'Pertek', type: 'ilçe', coordinates: { latitude: 38.8667, longitude: 39.3167 } },
      { id: 'mazgirt', name: 'Mazgirt', type: 'ilçe', coordinates: { latitude: 39.0167, longitude: 39.6000 } },
      { id: 'cemisgezek', name: 'Çemişgezek', type: 'ilçe', coordinates: { latitude: 39.0667, longitude: 38.9167 } },
      { id: 'ovacik', name: 'Ovacık', type: 'ilçe', coordinates: { latitude: 39.3500, longitude: 39.2167 } },
      { id: 'hozat', name: 'Hozat', type: 'ilçe', coordinates: { latitude: 39.1000, longitude: 39.2167 } },
      { id: 'nazimiye', name: 'Nazımiye', type: 'ilçe', coordinates: { latitude: 39.1833, longitude: 39.8333 } },
      { id: 'pulumur', name: 'Pülümür', type: 'ilçe', coordinates: { latitude: 39.4833, longitude: 39.9000 } }
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
      { id: 'haliliye', name: 'Haliliye', type: 'ilçe', coordinates: { latitude: 37.1591, longitude: 38.7969 } },
      { id: 'karakopru', name: 'Karaköprü', type: 'ilçe', coordinates: { latitude: 37.1591, longitude: 38.7969 } },
      { id: 'siverek', name: 'Siverek', type: 'ilçe', coordinates: { latitude: 37.7500, longitude: 39.3167 } },
      { id: 'viransehir', name: 'Viranşehir', type: 'ilçe', coordinates: { latitude: 37.2333, longitude: 39.7667 } },
      { id: 'suruc', name: 'Suruç', type: 'ilçe', coordinates: { latitude: 36.9667, longitude: 38.4167 } },
      { id: 'birecik', name: 'Birecik', type: 'ilçe', coordinates: { latitude: 37.0167, longitude: 37.9833 } },
      { id: 'akcakale', name: 'Akçakale', type: 'ilçe', coordinates: { latitude: 36.7167, longitude: 38.9500 } },
      { id: 'harran', name: 'Harran', type: 'ilçe', coordinates: { latitude: 36.8667, longitude: 39.0333 } },
      { id: 'bozova', name: 'Bozova', type: 'ilçe', coordinates: { latitude: 37.3667, longitude: 38.5167 } },
      { id: 'halfeti', name: 'Halfeti', type: 'ilçe', coordinates: { latitude: 37.2500, longitude: 37.8667 } },
      { id: 'hilvan', name: 'Hilvan', type: 'ilçe', coordinates: { latitude: 37.5833, longitude: 38.9500 } }
    ]
  },
  {
    id: 'usak',
    name: 'Uşak',
    plateNumber: 64,
    coordinates: { latitude: 38.6742, longitude: 29.4058 },
    municipalities: [
      { id: 'usak-il', name: 'Uşak Belediyesi', type: 'ilçe', coordinates: { latitude: 38.6742, longitude: 29.4058 } },
      { id: 'banaz', name: 'Banaz', type: 'ilçe', coordinates: { latitude: 38.7333, longitude: 29.7500 } },
      { id: 'esme', name: 'Eşme', type: 'ilçe', coordinates: { latitude: 38.4000, longitude: 28.9667 } },
      { id: 'sivasli', name: 'Sivaslı', type: 'ilçe', coordinates: { latitude: 38.5000, longitude: 29.6833 } },
      { id: 'ulubey', name: 'Ulubey', type: 'ilçe', coordinates: { latitude: 38.4167, longitude: 29.2833 } },
      { id: 'karahalli', name: 'Karahallı', type: 'ilçe', coordinates: { latitude: 38.3167, longitude: 29.5333 } }
    ]
  },
  {
    id: 'van',
    name: 'Van',
    plateNumber: 65,
    coordinates: { latitude: 38.4891, longitude: 43.4089 },
    municipalities: [
      { id: 'van-buyuksehir', name: 'Van Büyükşehir', type: 'büyükşehir', coordinates: { latitude: 38.4891, longitude: 43.4089 } },
      { id: 'edremit', name: 'Edremit', type: 'ilçe', coordinates: { latitude: 38.4891, longitude: 43.4089 } },
      { id: 'tuşba', name: 'Tuşba', type: 'ilçe', coordinates: { latitude: 38.4891, longitude: 43.4089 } },
      { id: 'ipekyolu', name: 'İpekyolu', type: 'ilçe', coordinates: { latitude: 38.4891, longitude: 43.4089 } },
      { id: 'ercis', name: 'Erciş', type: 'ilçe', coordinates: { latitude: 39.0333, longitude: 43.3667 } },
      { id: 'cevak', name: 'Çevak', type: 'ilçe', coordinates: { latitude: 38.7333, longitude: 43.9667 } },
      { id: 'gurpinar', name: 'Gürpınar', type: 'ilçe', coordinates: { latitude: 38.3167, longitude: 43.4000 } },
      { id: 'muradiye', name: 'Muradiye', type: 'ilçe', coordinates: { latitude: 38.9833, longitude: 43.7667 } },
      { id: 'bahcesaray', name: 'Bahçesaray', type: 'ilçe', coordinates: { latitude: 38.1333, longitude: 42.8000 } },
      { id: 'caldiran', name: 'Çaldıran', type: 'ilçe', coordinates: { latitude: 39.1500, longitude: 43.9167 } },
      { id: 'ozalp', name: 'Özalp', type: 'ilçe', coordinates: { latitude: 38.6500, longitude: 43.9833 } },
      { id: 'saray', name: 'Saray', type: 'ilçe', coordinates: { latitude: 38.6500, longitude: 44.1667 } },
      { id: 'gevas', name: 'Gevaş', type: 'ilçe', coordinates: { latitude: 38.3000, longitude: 43.1000 } }
    ]
  },
  {
    id: 'yozgat',
    name: 'Yozgat',
    plateNumber: 66,
    coordinates: { latitude: 39.8181, longitude: 34.8147 },
    municipalities: [
      { id: 'yozgat-il', name: 'Yozgat Belediyesi', type: 'ilçe', coordinates: { latitude: 39.8181, longitude: 34.8147 } },
      { id: 'boğazlıyan', name: 'Boğazlıyan', type: 'ilçe', coordinates: { latitude: 39.1833, longitude: 35.1833 } },
      { id: 'sorgun', name: 'Sorgun', type: 'ilçe', coordinates: { latitude: 39.8167, longitude: 35.1833 } },
      { id: 'saraykent', name: 'Saraykent', type: 'ilçe', coordinates: { latitude: 39.4333, longitude: 35.5167 } },
      { id: 'akdagmadeni', name: 'Akdağmadeni', type: 'ilçe', coordinates: { latitude: 39.6667, longitude: 35.8833 } },
      { id: 'sarikaya', name: 'Sarıkaya', type: 'ilçe', coordinates: { latitude: 39.5000, longitude: 35.3667 } },
      { id: 'cayiralan', name: 'Çayıralan', type: 'ilçe', coordinates: { latitude: 39.3000, longitude: 35.6500 } },
      { id: 'candir', name: 'Çandır', type: 'ilçe', coordinates: { latitude: 39.2500, longitude: 35.5167 } },
      { id: 'sarikaya', name: 'Sarıkaya', type: 'ilçe', coordinates: { latitude: 39.5000, longitude: 35.3667 } },
      { id: 'yerkoy', name: 'Yerköy', type: 'ilçe', coordinates: { latitude: 39.6333, longitude: 34.4667 } },
      { id: 'sefaatli', name: 'Şefaatli', type: 'ilçe', coordinates: { latitude: 39.5000, longitude: 34.7500 } },
      { id: 'kadisehri', name: 'Kadışehri', type: 'ilçe', coordinates: { latitude: 39.3500, longitude: 35.8000 } },
      { id: 'aydincik', name: 'Aydıncık', type: 'ilçe', coordinates: { latitude: 40.1500, longitude: 35.3167 } },
      { id: 'cayiralan', name: 'Çayıralan', type: 'ilçe', coordinates: { latitude: 39.3000, longitude: 35.6500 } },
      { id: 'yenifakili', name: 'Yenifakılı', type: 'ilçe', coordinates: { latitude: 39.2167, longitude: 35.0000 } }
    ]
  },
  {
    id: 'zonguldak',
    name: 'Zonguldak',
    plateNumber: 67,
    coordinates: { latitude: 41.4564, longitude: 31.7987 },
    municipalities: [
      { id: 'zonguldak-il', name: 'Zonguldak Belediyesi', type: 'ilçe', coordinates: { latitude: 41.4564, longitude: 31.7987 } },
      { id: 'kozlu', name: 'Kozlu', type: 'ilçe', coordinates: { latitude: 41.4564, longitude: 31.7987 } },
      { id: 'kilimli', name: 'Kilimli', type: 'ilçe', coordinates: { latitude: 41.4564, longitude: 31.7987 } },
      { id: 'caycuma', name: 'Çaycuma', type: 'ilçe', coordinates: { latitude: 41.4333, longitude: 31.9500 } },
      { id: 'devrek', name: 'Devrek', type: 'ilçe', coordinates: { latitude: 41.2167, longitude: 31.9500 } },
      { id: 'gokcebey', name: 'Gökçebey', type: 'ilçe', coordinates: { latitude: 41.3000, longitude: 32.1500 } },
      { id: 'alapali', name: 'Alaplı', type: 'ilçe', coordinates: { latitude: 41.1833, longitude: 31.3833 } }
    ]
  },
  {
    id: 'aksaray',
    name: 'Aksaray',
    plateNumber: 68,
    coordinates: { latitude: 38.3726, longitude: 34.0254 },
    municipalities: [
      { id: 'aksaray-il', name: 'Aksaray Belediyesi', type: 'ilçe', coordinates: { latitude: 38.3726, longitude: 34.0254 } },
      { id: 'ortakoy', name: 'Ortaköy', type: 'ilçe', coordinates: { latitude: 38.2667, longitude: 35.2500 } },
      { id: 'sultanhani', name: 'Sultanhanı', type: 'ilçe', coordinates: { latitude: 38.2500, longitude: 33.5500 } },
      { id: 'eskil', name: 'Eskil', type: 'ilçe', coordinates: { latitude: 38.4000, longitude: 33.4167 } },
      { id: 'guzelyurt', name: 'Güzelyurt', type: 'ilçe', coordinates: { latitude: 38.2833, longitude: 34.3667 } },
      { id: 'agacoren', name: 'Ağaçören', type: 'ilçe', coordinates: { latitude: 38.8667, longitude: 33.9167 } },
      { id: 'sariyahsi', name: 'Sarıyahşi', type: 'ilçe', coordinates: { latitude: 38.9833, longitude: 33.8500 } }
    ]
  },
  {
    id: 'bayburt',
    name: 'Bayburt',
    plateNumber: 69,
    coordinates: { latitude: 40.2552, longitude: 40.2249 },
    municipalities: [
      { id: 'bayburt-il', name: 'Bayburt Belediyesi', type: 'ilçe', coordinates: { latitude: 40.2552, longitude: 40.2249 } },
      { id: 'demirozu', name: 'Demirözü', type: 'ilçe', coordinates: { latitude: 40.1667, longitude: 39.9000 } },
      { id: 'aydintepe', name: 'Aydıntepe', type: 'ilçe', coordinates: { latitude: 40.3833, longitude: 40.1500 } }
    ]
  },
  {
    id: 'karaman',
    name: 'Karaman',
    plateNumber: 70,
    coordinates: { latitude: 37.1759, longitude: 33.2287 },
    municipalities: [
      { id: 'karaman-il', name: 'Karaman Belediyesi', type: 'ilçe', coordinates: { latitude: 37.1759, longitude: 33.2287 } },
      { id: 'ermenek', name: 'Ermenek', type: 'ilçe', coordinates: { latitude: 36.6000, longitude: 32.8833 } },
      { id: 'sariveliler', name: 'Sarıveliler', type: 'ilçe', coordinates: { latitude: 36.6833, longitude: 32.6167 } },
      { id: 'ayranci', name: 'Ayrancı', type: 'ilçe', coordinates: { latitude: 37.3667, longitude: 33.7000 } },
      { id: 'kazimkarabekir', name: 'Kazımkarabekir', type: 'ilçe', coordinates: { latitude: 37.2333, longitude: 32.9667 } },
      { id: 'basayar', name: 'Başyayla', type: 'ilçe', coordinates: { latitude: 36.7500, longitude: 32.6833 } }
    ]
  },
  {
    id: 'kirikkale',
    name: 'Kırıkkale',
    plateNumber: 71,
    coordinates: { latitude: 39.8468, longitude: 33.5153 },
    municipalities: [
      { id: 'kirikkale-il', name: 'Kırıkkale Belediyesi', type: 'ilçe', coordinates: { latitude: 39.8468, longitude: 33.5153 } },
      { id: 'keskin', name: 'Keskin', type: 'ilçe', coordinates: { latitude: 39.6833, longitude: 33.6167 } },
      { id: 'sulakyurt', name: 'Sulakyurt', type: 'ilçe', coordinates: { latitude: 40.1667, longitude: 33.7167 } },
      { id: 'bahsili', name: 'Bahşıli', type: 'ilçe', coordinates: { latitude: 39.7833, longitude: 33.4333 } },
      { id: 'karakecili', name: 'Karakecili', type: 'ilçe', coordinates: { latitude: 39.6333, longitude: 33.3833 } },
      { id: 'baliseyh', name: 'Balışeyh', type: 'ilçe', coordinates: { latitude: 39.9167, longitude: 33.7167 } },
      { id: 'yahsihan', name: 'Yahşihan', type: 'ilçe', coordinates: { latitude: 39.8500, longitude: 33.4500 } },
      { id: 'delice', name: 'Delice', type: 'ilçe', coordinates: { latitude: 39.9500, longitude: 34.0333 } },
      { id: 'karakoyunlu', name: 'Karakoyunlu', type: 'ilçe', coordinates: { latitude: 39.8667, longitude: 33.6167 } }
    ]
  },
  {
    id: 'batman',
    name: 'Batman',
    plateNumber: 72,
    coordinates: { latitude: 37.8812, longitude: 41.1351 },
    municipalities: [
      { id: 'batman-il', name: 'Batman Belediyesi', type: 'ilçe', coordinates: { latitude: 37.8812, longitude: 41.1351 } },
      { id: 'besiri', name: 'Beşiri', type: 'ilçe', coordinates: { latitude: 37.9167, longitude: 41.2833 } },
      { id: 'gercus', name: 'Gercüş', type: 'ilçe', coordinates: { latitude: 37.5667, longitude: 41.4000 } },
      { id: 'kozluk', name: 'Kozluk', type: 'ilçe', coordinates: { latitude: 38.1833, longitude: 41.4833 } },
      { id: 'hasankeyf', name: 'Hasankeyf', type: 'ilçe', coordinates: { latitude: 37.7167, longitude: 41.4167 } },
      { id: 'sason', name: 'Sason', type: 'ilçe', coordinates: { latitude: 38.3333, longitude: 41.4167 } }
    ]
  },
  {
    id: 'sirnak',
    name: 'Şırnak',
    plateNumber: 73,
    coordinates: { latitude: 37.5164, longitude: 42.4611 },
    municipalities: [
      { id: 'sirnak-il', name: 'Şırnak Belediyesi', type: 'ilçe', coordinates: { latitude: 37.5164, longitude: 42.4611 } },
      { id: 'cilduz', name: 'Cizre', type: 'ilçe', coordinates: { latitude: 37.3333, longitude: 42.1833 } },
      { id: 'idil', name: 'İdil', type: 'ilçe', coordinates: { latitude: 37.3333, longitude: 41.8833 } },
      { id: 'silopi', name: 'Silopi', type: 'ilçe', coordinates: { latitude: 37.2500, longitude: 42.4667 } },
      { id: 'uludere', name: 'Uludere', type: 'ilçe', coordinates: { latitude: 37.4500, longitude: 42.8500 } },
      { id: 'beytussebap', name: 'Beytüşşebap', type: 'ilçe', coordinates: { latitude: 37.6167, longitude: 43.1667 } },
      { id: 'gucarsu', name: 'Güçarsu', type: 'ilçe', coordinates: { latitude: 37.4500, longitude: 42.8500 } }
    ]
  },
  {
    id: 'bartin',
    name: 'Bartın',
    plateNumber: 74,
    coordinates: { latitude: 41.6344, longitude: 32.3375 },
    municipalities: [
      { id: 'bartin-il', name: 'Bartın Belediyesi', type: 'ilçe', coordinates: { latitude: 41.6344, longitude: 32.3375 } },
      { id: 'amasra', name: 'Amasra', type: 'ilçe', coordinates: { latitude: 41.7500, longitude: 32.3833 } },
      { id: 'kurucasile', name: 'Kurucaşile', type: 'ilçe', coordinates: { latitude: 41.8333, longitude: 32.2167 } },
      { id: 'ulus', name: 'Ulus', type: 'ilçe', coordinates: { latitude: 41.5833, longitude: 32.6333 } }
    ]
  },
  {
    id: 'ardahan',
    name: 'Ardahan',
    plateNumber: 75,
    coordinates: { latitude: 41.1105, longitude: 42.7022 },
    municipalities: [
      { id: 'ardahan-il', name: 'Ardahan Belediyesi', type: 'ilçe', coordinates: { latitude: 41.1105, longitude: 42.7022 } },
      { id: 'gole', name: 'Göle', type: 'ilçe', coordinates: { latitude: 40.7833, longitude: 42.6000 } },
      { id: 'posof', name: 'Posof', type: 'ilçe', coordinates: { latitude: 41.5000, longitude: 42.7167 } },
      { id: 'cildir', name: 'Çıldır', type: 'ilçe', coordinates: { latitude: 41.1333, longitude: 43.1333 } },
      { id: 'hanak', name: 'Hanak', type: 'ilçe', coordinates: { latitude: 41.2333, longitude: 42.8500 } },
      { id: 'damal', name: 'Damal', type: 'ilçe', coordinates: { latitude: 41.3500, longitude: 42.8500 } }
    ]
  },
  {
    id: 'igdir',
    name: 'Iğdır',
    plateNumber: 76,
    coordinates: { latitude: 39.9167, longitude: 44.0333 },
    municipalities: [
      { id: 'igdir-il', name: 'Iğdır Belediyesi', type: 'ilçe', coordinates: { latitude: 39.9167, longitude: 44.0333 } },
      { id: 'tuzluca', name: 'Tuzluca', type: 'ilçe', coordinates: { latitude: 40.0500, longitude: 43.6500 } },
      { id: 'karakoyunlu', name: 'Karakoyunlu', type: 'ilçe', coordinates: { latitude: 39.8667, longitude: 43.6167 } },
      { id: 'aralik', name: 'Aralık', type: 'ilçe', coordinates: { latitude: 39.8833, longitude: 44.5167 } }
    ]
  },
  {
    id: 'yalova',
    name: 'Yalova',
    plateNumber: 77,
    coordinates: { latitude: 40.6500, longitude: 29.2667 },
    municipalities: [
      { id: 'yalova-il', name: 'Yalova Belediyesi', type: 'ilçe', coordinates: { latitude: 40.6500, longitude: 29.2667 } },
      { id: 'cinarcik', name: 'Çınarcık', type: 'ilçe', coordinates: { latitude: 40.6333, longitude: 29.1167 } },
      { id: 'termal', name: 'Termal', type: 'ilçe', coordinates: { latitude: 40.6000, longitude: 29.1667 } },
      { id: 'armutlu', name: 'Armutlu', type: 'ilçe', coordinates: { latitude: 40.5167, longitude: 28.8333 } },
      { id: 'altinova', name: 'Altınova', type: 'ilçe', coordinates: { latitude: 40.7000, longitude: 29.5167 } },
      { id: 'ciftlikkoy', name: 'Çiftlikköy', type: 'ilçe', coordinates: { latitude: 40.6500, longitude: 29.3667 } }
    ]
  },
  {
    id: 'karabuk',
    name: 'Karabük',
    plateNumber: 78,
    coordinates: { latitude: 41.2061, longitude: 32.6204 },
    municipalities: [
      { id: 'karabuk-il', name: 'Karabük Belediyesi', type: 'ilçe', coordinates: { latitude: 41.2061, longitude: 32.6204 } },
      { id: 'safranbolu', name: 'Safranbolu', type: 'ilçe', coordinates: { latitude: 41.2500, longitude: 32.6833 } },
      { id: 'yenice', name: 'Yenice', type: 'ilçe', coordinates: { latitude: 41.2000, longitude: 32.3333 } },
      { id: 'eskipazar', name: 'Eskipazar', type: 'ilçe', coordinates: { latitude: 40.9500, longitude: 32.5333 } },
      { id: 'ovacik', name: 'Ovacık', type: 'ilçe', coordinates: { latitude: 41.0833, longitude: 32.9167 } }
    ]
  },
  {
    id: 'kilis',
    name: 'Kilis',
    plateNumber: 79,
    coordinates: { latitude: 36.7184, longitude: 37.1212 },
    municipalities: [
      { id: 'kilis-il', name: 'Kilis Belediyesi', type: 'ilçe', coordinates: { latitude: 36.7184, longitude: 37.1212 } },
      { id: 'elbeyli', name: 'Elbeyli', type: 'ilçe', coordinates: { latitude: 36.6833, longitude: 37.4667 } },
      { id: 'musabeyli', name: 'Musabeyli', type: 'ilçe', coordinates: { latitude: 36.8833, longitude: 36.9167 } },
      { id: 'polateli', name: 'Polateli', type: 'ilçe', coordinates: { latitude: 36.8333, longitude: 37.1500 } }
    ]
  },
  {
    id: 'osmaniye',
    name: 'Osmaniye',
    plateNumber: 80,
    coordinates: { latitude: 37.0742, longitude: 36.2500 },
    municipalities: [
      { id: 'osmaniye-il', name: 'Osmaniye Belediyesi', type: 'ilçe', coordinates: { latitude: 37.0742, longitude: 36.2500 } },
      { id: 'kadirli', name: 'Kadirli', type: 'ilçe', coordinates: { latitude: 37.3667, longitude: 36.1000 } },
      { id: 'düziçi', name: 'Düziçi', type: 'ilçe', coordinates: { latitude: 37.2500, longitude: 36.4667 } },
      { id: 'bahçe', name: 'Bahçe', type: 'ilçe', coordinates: { latitude: 37.2000, longitude: 36.6333 } },
      { id: 'sumbas', name: 'Sumbas', type: 'ilçe', coordinates: { latitude: 37.4500, longitude: 36.0333 } },
      { id: 'toprakkale', name: 'Toprakkale', type: 'ilçe', coordinates: { latitude: 37.0667, longitude: 36.1500 } },
      { id: 'hasanbeyli', name: 'Hasanbeyli', type: 'ilçe', coordinates: { latitude: 37.1333, longitude: 36.5500 } }
    ]
  },
  {
    id: 'duzce',
    name: 'Düzce',
    plateNumber: 81,
    coordinates: { latitude: 40.8438, longitude: 31.1565 },
    municipalities: [
      { id: 'duzce-il', name: 'Düzce Belediyesi', type: 'ilçe', coordinates: { latitude: 40.8438, longitude: 31.1565 } },
      { id: 'akcakoca', name: 'Akçakoca', type: 'ilçe', coordinates: { latitude: 41.0833, longitude: 31.1167 } },
      { id: 'yigilca', name: 'Yığılca', type: 'ilçe', coordinates: { latitude: 40.9667, longitude: 31.4500 } },
      { id: 'cumayeri', name: 'Cumayeri', type: 'ilçe', coordinates: { latitude: 40.8667, longitude: 30.9500 } },
      { id: 'golyaka', name: 'Gölyaka', type: 'ilçe', coordinates: { latitude: 40.7833, longitude: 31.0000 } },
      { id: 'cile', name: 'Çilimli', type: 'ilçe', coordinates: { latitude: 40.9000, longitude: 31.0500 } },
      { id: 'kaynasli', name: 'Kaynaşlı', type: 'ilçe', coordinates: { latitude: 40.7667, longitude: 31.3167 } }
    ]
  }
];

// Konumdan şehir bulma fonksiyonu
export function findCityByLocation(latitude: number, longitude: number): City | null {
  let closestCity: City | null = null;
  let minDistance = Infinity;
  let candidates: { city: City; distance: number }[] = [];

  console.log(`🔍 Konum aranıyor: ${latitude}, ${longitude}`);

  for (const city of turkeyCities) {
    const distance = calculateDistance(
      latitude,
      longitude,
      city.coordinates.latitude,
      city.coordinates.longitude
    );

    console.log(`📍 ${city.name}: ${distance.toFixed(2)} km`);

    // 50 km içindeki tüm şehirleri aday olarak al
    if (distance <= 50) {
      candidates.push({ city, distance });
    }

    if (distance < minDistance) {
      minDistance = distance;
      closestCity = city;
    }
  }

  // Eğer birden fazla aday varsa ve mesafe farkı 10 km'den azsa
  if (candidates.length > 1) {
    candidates.sort((a, b) => a.distance - b.distance);
    const firstDistance = candidates[0].distance;
    const secondDistance = candidates[1].distance;
    
    if (secondDistance - firstDistance < 10) {
      console.log(`⚠️ Birden fazla yakın şehir bulundu:`);
      candidates.slice(0, 3).forEach(c => {
        console.log(`   - ${c.city.name}: ${c.distance.toFixed(2)} km`);
      });
      console.log(`✅ En yakın şehir seçildi: ${candidates[0].city.name}`);
      return candidates[0].city;
    }
  }

  console.log(`✅ En yakın şehir: ${closestCity?.name} (${minDistance.toFixed(2)} km)`);
  return closestCity;
}

// İki nokta arasındaki mesafeyi hesaplama (Haversine formülü)
function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Dünya'nın yarıçapı (km)
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Şehir ID'sine göre şehir bulma
export function findCityById(cityId: string): City | null {
  return turkeyCities.find(city => city.id === cityId) || null;
}

// Tüm şehirleri getirme
export function getAllCities(): City[] {
  return turkeyCities;
}

// Şehir ID'sine göre belediyeleri getirme fonksiyonu
export function getMunicipalitiesOfCity(cityId: string): Municipality[] {
  const city = turkeyCities.find(c => c.id === cityId);
  return city ? city.municipalities : [];
} 