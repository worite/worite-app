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

// Türkiye'nin tüm şehirleri ve ilçeleri
export const turkeyCities: City[] = [
  {
    "id": "adana",
    "name": "Adana",
    "plateNumber": 1,
    "coordinates": {
      "latitude": 37,
      "longitude": 35.3213
    },
    "municipalities": [
      {
        "id": "adana-buyuksehir",
        "name": "Adana Büyükşehir",
        "type": "büyükşehir",
        "coordinates": {
          "latitude": 37,
          "longitude": 35.3213
        }
      },
      {
        "id": "1104",
        "name": "SEYHAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37,
          "longitude": 35.3213
        }
      },
      {
        "id": "1219",
        "name": "CEYHAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37,
          "longitude": 35.3213
        }
      },
      {
        "id": "1329",
        "name": "FEKE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37,
          "longitude": 35.3213
        }
      },
      {
        "id": "1437",
        "name": "KARAİSALI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37,
          "longitude": 35.3213
        }
      },
      {
        "id": "1443",
        "name": "KARATAŞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37,
          "longitude": 35.3213
        }
      },
      {
        "id": "1486",
        "name": "KOZAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37,
          "longitude": 35.3213
        }
      },
      {
        "id": "1580",
        "name": "POZANTI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37,
          "longitude": 35.3213
        }
      },
      {
        "id": "1588",
        "name": "SAİMBEYLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37,
          "longitude": 35.3213
        }
      },
      {
        "id": "1687",
        "name": "TUFANBEYLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37,
          "longitude": 35.3213
        }
      },
      {
        "id": "1734",
        "name": "YUMURTALIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37,
          "longitude": 35.3213
        }
      },
      {
        "id": "1748",
        "name": "YÜREĞİR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37,
          "longitude": 35.3213
        }
      },
      {
        "id": "1757",
        "name": "ALADAĞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37,
          "longitude": 35.3213
        }
      },
      {
        "id": "1806",
        "name": "İMAMOĞLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37,
          "longitude": 35.3213
        }
      },
      {
        "id": "2032",
        "name": "SARIÇAM",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37,
          "longitude": 35.3213
        }
      },
      {
        "id": "2033",
        "name": "ÇUKUROVA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37,
          "longitude": 35.3213
        }
      }
    ]
  },
  {
    "id": "adiyaman",
    "name": "Adıyaman",
    "plateNumber": 2,
    "coordinates": {
      "latitude": 37.7648,
      "longitude": 38.2786
    },
    "municipalities": [
      {
        "id": "1105",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 38.2786
        }
      },
      {
        "id": "1182",
        "name": "BESNİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 38.2786
        }
      },
      {
        "id": "1246",
        "name": "ÇELİKHAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 38.2786
        }
      },
      {
        "id": "1347",
        "name": "GERGER",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 38.2786
        }
      },
      {
        "id": "1354",
        "name": "GÖLBAŞI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 38.2786
        }
      },
      {
        "id": "1425",
        "name": "KAHTA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 38.2786
        }
      },
      {
        "id": "1592",
        "name": "SAMSAT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 38.2786
        }
      },
      {
        "id": "1985",
        "name": "SİNCİK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 38.2786
        }
      },
      {
        "id": "1989",
        "name": "TUT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 38.2786
        }
      }
    ]
  },
  {
    "id": "afyonkarahisar",
    "name": "Afyonkarahisar",
    "plateNumber": 3,
    "coordinates": {
      "latitude": 38.7507,
      "longitude": 30.5567
    },
    "municipalities": [
      {
        "id": "1108",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7507,
          "longitude": 30.5567
        }
      },
      {
        "id": "1200",
        "name": "BOLVADİN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7507,
          "longitude": 30.5567
        }
      },
      {
        "id": "1239",
        "name": "ÇAY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7507,
          "longitude": 30.5567
        }
      },
      {
        "id": "1267",
        "name": "DAZKIRI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7507,
          "longitude": 30.5567
        }
      },
      {
        "id": "1281",
        "name": "DİNAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7507,
          "longitude": 30.5567
        }
      },
      {
        "id": "1306",
        "name": "EMİRDAĞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7507,
          "longitude": 30.5567
        }
      },
      {
        "id": "1404",
        "name": "İHSANİYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7507,
          "longitude": 30.5567
        }
      },
      {
        "id": "1594",
        "name": "SANDIKLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7507,
          "longitude": 30.5567
        }
      },
      {
        "id": "1626",
        "name": "SİNANPAŞA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7507,
          "longitude": 30.5567
        }
      },
      {
        "id": "1639",
        "name": "SULTANDAĞI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7507,
          "longitude": 30.5567
        }
      },
      {
        "id": "1664",
        "name": "ŞUHUT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7507,
          "longitude": 30.5567
        }
      },
      {
        "id": "1771",
        "name": "BAŞMAKÇI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7507,
          "longitude": 30.5567
        }
      },
      {
        "id": "1773",
        "name": "BAYAT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7507,
          "longitude": 30.5567
        }
      },
      {
        "id": "1809",
        "name": "İSCEHİSAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7507,
          "longitude": 30.5567
        }
      },
      {
        "id": "1906",
        "name": "ÇOBANLAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7507,
          "longitude": 30.5567
        }
      },
      {
        "id": "1923",
        "name": "EVCİLER",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7507,
          "longitude": 30.5567
        }
      },
      {
        "id": "1944",
        "name": "HOCALAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7507,
          "longitude": 30.5567
        }
      },
      {
        "id": "1961",
        "name": "KIZILÖREN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7507,
          "longitude": 30.5567
        }
      }
    ]
  },
  {
    "id": "agri",
    "name": "Ağrı",
    "plateNumber": 4,
    "coordinates": {
      "latitude": 39.7191,
      "longitude": 43.0503
    },
    "municipalities": [
      {
        "id": "1111",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7191,
          "longitude": 43.0503
        }
      },
      {
        "id": "1283",
        "name": "DİYADİN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7191,
          "longitude": 43.0503
        }
      },
      {
        "id": "1287",
        "name": "DOĞUBAYAZIT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7191,
          "longitude": 43.0503
        }
      },
      {
        "id": "1301",
        "name": "ELEŞKİRT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7191,
          "longitude": 43.0503
        }
      },
      {
        "id": "1379",
        "name": "HAMUR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7191,
          "longitude": 43.0503
        }
      },
      {
        "id": "1568",
        "name": "PATNOS",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7191,
          "longitude": 43.0503
        }
      },
      {
        "id": "1667",
        "name": "TAŞLIÇAY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7191,
          "longitude": 43.0503
        }
      },
      {
        "id": "1691",
        "name": "TUTAK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7191,
          "longitude": 43.0503
        }
      }
    ]
  },
  {
    "id": "amasya",
    "name": "Amasya",
    "plateNumber": 5,
    "coordinates": {
      "latitude": 40.6499,
      "longitude": 35.8353
    },
    "municipalities": [
      {
        "id": "1134",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6499,
          "longitude": 35.8353
        }
      },
      {
        "id": "1363",
        "name": "GÖYNÜCEK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6499,
          "longitude": 35.8353
        }
      },
      {
        "id": "1368",
        "name": "GÜMÜŞHACIKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6499,
          "longitude": 35.8353
        }
      },
      {
        "id": "1524",
        "name": "MERZİFON",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6499,
          "longitude": 35.8353
        }
      },
      {
        "id": "1641",
        "name": "SULUOVA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6499,
          "longitude": 35.8353
        }
      },
      {
        "id": "1668",
        "name": "TAŞOVA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6499,
          "longitude": 35.8353
        }
      },
      {
        "id": "1938",
        "name": "HAMAMÖZÜ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6499,
          "longitude": 35.8353
        }
      }
    ]
  },
  {
    "id": "ankara",
    "name": "Ankara",
    "plateNumber": 6,
    "coordinates": {
      "latitude": 39.9334,
      "longitude": 32.8597
    },
    "municipalities": [
      {
        "id": "ankara-buyuksehir",
        "name": "Ankara Büyükşehir",
        "type": "büyükşehir",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1130",
        "name": "ALTINDAĞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1157",
        "name": "AYAŞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1167",
        "name": "BALA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1187",
        "name": "BEYPAZARI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1227",
        "name": "ÇAMLIDERE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1231",
        "name": "ÇANKAYA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1260",
        "name": "ÇUBUK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1302",
        "name": "ELMADAĞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1365",
        "name": "GÜDÜL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1387",
        "name": "HAYMANA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1427",
        "name": "KALECİK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1473",
        "name": "KIZILCAHAMAM",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1539",
        "name": "NALLIHAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1578",
        "name": "POLATLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1658",
        "name": "ŞEREFLİKOÇHİSAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1723",
        "name": "YENİMAHALLE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1744",
        "name": "GÖLBAŞI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1745",
        "name": "KEÇİÖREN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1746",
        "name": "MAMAK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1747",
        "name": "SİNCAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1815",
        "name": "KAHRAMANKAZAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1872",
        "name": "AKYURT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1922",
        "name": "ETİMESGUT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "1924",
        "name": "EVREN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      },
      {
        "id": "2034",
        "name": "PURSAKLAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9334,
          "longitude": 32.8597
        }
      }
    ]
  },
  {
    "id": "antalya",
    "name": "Antalya",
    "plateNumber": 7,
    "coordinates": {
      "latitude": 36.8969,
      "longitude": 30.7133
    },
    "municipalities": [
      {
        "id": "antalya-buyuksehir",
        "name": "Antalya Büyükşehir",
        "type": "büyükşehir",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      },
      {
        "id": "1121",
        "name": "AKSEKİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      },
      {
        "id": "1126",
        "name": "ALANYA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      },
      {
        "id": "1303",
        "name": "ELMALI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      },
      {
        "id": "1333",
        "name": "FİNİKE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      },
      {
        "id": "1337",
        "name": "GAZİPAŞA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      },
      {
        "id": "1370",
        "name": "GÜNDOĞMUŞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      },
      {
        "id": "1451",
        "name": "KAŞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      },
      {
        "id": "1483",
        "name": "KORKUTELİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      },
      {
        "id": "1492",
        "name": "KUMLUCA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      },
      {
        "id": "1512",
        "name": "MANAVGAT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      },
      {
        "id": "1616",
        "name": "SERİK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      },
      {
        "id": "1811",
        "name": "DEMRE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      },
      {
        "id": "1946",
        "name": "İBRADI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      },
      {
        "id": "1959",
        "name": "KEMER",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      },
      {
        "id": "2035",
        "name": "AKSU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      },
      {
        "id": "2036",
        "name": "DÖŞEMEALTI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      },
      {
        "id": "2037",
        "name": "KEPEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      },
      {
        "id": "2038",
        "name": "KONYAALTI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      },
      {
        "id": "2039",
        "name": "MURATPAŞA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8969,
          "longitude": 30.7133
        }
      }
    ]
  },
  {
    "id": "artvin",
    "name": "Artvin",
    "plateNumber": 8,
    "coordinates": {
      "latitude": 41.1828,
      "longitude": 41.8183
    },
    "municipalities": [
      {
        "id": "1145",
        "name": "ARDANUÇ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.1828,
          "longitude": 41.8183
        }
      },
      {
        "id": "1147",
        "name": "ARHAVİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.1828,
          "longitude": 41.8183
        }
      },
      {
        "id": "1152",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.1828,
          "longitude": 41.8183
        }
      },
      {
        "id": "1202",
        "name": "BORÇKA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.1828,
          "longitude": 41.8183
        }
      },
      {
        "id": "1395",
        "name": "HOPA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.1828,
          "longitude": 41.8183
        }
      },
      {
        "id": "1653",
        "name": "ŞAVŞAT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.1828,
          "longitude": 41.8183
        }
      },
      {
        "id": "1736",
        "name": "YUSUFELİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.1828,
          "longitude": 41.8183
        }
      },
      {
        "id": "1828",
        "name": "MURGUL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.1828,
          "longitude": 41.8183
        }
      }
    ]
  },
  {
    "id": "aydin",
    "name": "Aydın",
    "plateNumber": 9,
    "coordinates": {
      "latitude": 37.856,
      "longitude": 27.8416
    },
    "municipalities": [
      {
        "id": "1206",
        "name": "BOZDOĞAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.856,
          "longitude": 27.8416
        }
      },
      {
        "id": "1256",
        "name": "ÇİNE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.856,
          "longitude": 27.8416
        }
      },
      {
        "id": "1348",
        "name": "GERMENCİK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.856,
          "longitude": 27.8416
        }
      },
      {
        "id": "1435",
        "name": "KARACASU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.856,
          "longitude": 27.8416
        }
      },
      {
        "id": "1479",
        "name": "KOÇARLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.856,
          "longitude": 27.8416
        }
      },
      {
        "id": "1497",
        "name": "KUŞADASI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.856,
          "longitude": 27.8416
        }
      },
      {
        "id": "1498",
        "name": "KUYUCAK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.856,
          "longitude": 27.8416
        }
      },
      {
        "id": "1542",
        "name": "NAZİLLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.856,
          "longitude": 27.8416
        }
      },
      {
        "id": "1637",
        "name": "SÖKE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.856,
          "longitude": 27.8416
        }
      },
      {
        "id": "1640",
        "name": "SULTANHİSAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.856,
          "longitude": 27.8416
        }
      },
      {
        "id": "1724",
        "name": "YENİPAZAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.856,
          "longitude": 27.8416
        }
      },
      {
        "id": "1781",
        "name": "BUHARKENT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.856,
          "longitude": 27.8416
        }
      },
      {
        "id": "1807",
        "name": "İNCİRLİOVA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.856,
          "longitude": 27.8416
        }
      },
      {
        "id": "1957",
        "name": "KARPUZLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.856,
          "longitude": 27.8416
        }
      },
      {
        "id": "1968",
        "name": "KÖŞK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.856,
          "longitude": 27.8416
        }
      },
      {
        "id": "2000",
        "name": "DİDİM",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.856,
          "longitude": 27.8416
        }
      },
      {
        "id": "2076",
        "name": "EFELER",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.856,
          "longitude": 27.8416
        }
      }
    ]
  },
  {
    "id": "balikesir",
    "name": "Balıkesir",
    "plateNumber": 10,
    "coordinates": {
      "latitude": 39.6484,
      "longitude": 27.8826
    },
    "municipalities": [
      {
        "id": "1161",
        "name": "AYVALIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      },
      {
        "id": "1169",
        "name": "BALYA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      },
      {
        "id": "1171",
        "name": "BANDIRMA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      },
      {
        "id": "1191",
        "name": "BİGADİÇ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      },
      {
        "id": "1216",
        "name": "BURHANİYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      },
      {
        "id": "1291",
        "name": "DURSUNBEY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      },
      {
        "id": "1294",
        "name": "EDREMİT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      },
      {
        "id": "1310",
        "name": "ERDEK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      },
      {
        "id": "1360",
        "name": "GÖNEN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      },
      {
        "id": "1384",
        "name": "HAVRAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      },
      {
        "id": "1418",
        "name": "İVRİNDİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      },
      {
        "id": "1462",
        "name": "KEPSUT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      },
      {
        "id": "1514",
        "name": "MANYAS",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      },
      {
        "id": "1608",
        "name": "SAVAŞTEPE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      },
      {
        "id": "1619",
        "name": "SINDIRGI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      },
      {
        "id": "1644",
        "name": "SUSURLUK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      },
      {
        "id": "1824",
        "name": "MARMARA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      },
      {
        "id": "1928",
        "name": "GÖMEÇ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      },
      {
        "id": "2077",
        "name": "ALTIEYLÜL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      },
      {
        "id": "2078",
        "name": "KARESİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.6484,
          "longitude": 27.8826
        }
      }
    ]
  },
  {
    "id": "bilecik",
    "name": "Bilecik",
    "plateNumber": 11,
    "coordinates": {
      "latitude": 40.1506,
      "longitude": 29.9794
    },
    "municipalities": [
      {
        "id": "1192",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1506,
          "longitude": 29.9794
        }
      },
      {
        "id": "1210",
        "name": "BOZÜYÜK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1506,
          "longitude": 29.9794
        }
      },
      {
        "id": "1359",
        "name": "GÖLPAZARI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1506,
          "longitude": 29.9794
        }
      },
      {
        "id": "1559",
        "name": "OSMANELİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1506,
          "longitude": 29.9794
        }
      },
      {
        "id": "1571",
        "name": "PAZARYERİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1506,
          "longitude": 29.9794
        }
      },
      {
        "id": "1636",
        "name": "SÖĞÜT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1506,
          "longitude": 29.9794
        }
      },
      {
        "id": "1857",
        "name": "YENİPAZAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1506,
          "longitude": 29.9794
        }
      },
      {
        "id": "1948",
        "name": "İNHİSAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1506,
          "longitude": 29.9794
        }
      }
    ]
  },
  {
    "id": "bingol",
    "name": "Bingöl",
    "plateNumber": 12,
    "coordinates": {
      "latitude": 38.8855,
      "longitude": 40.4966
    },
    "municipalities": [
      {
        "id": "1193",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.8855,
          "longitude": 40.4966
        }
      },
      {
        "id": "1344",
        "name": "GENÇ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.8855,
          "longitude": 40.4966
        }
      },
      {
        "id": "1446",
        "name": "KARLIOVA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.8855,
          "longitude": 40.4966
        }
      },
      {
        "id": "1475",
        "name": "KİĞI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.8855,
          "longitude": 40.4966
        }
      },
      {
        "id": "1633",
        "name": "SOLHAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.8855,
          "longitude": 40.4966
        }
      },
      {
        "id": "1750",
        "name": "ADAKLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.8855,
          "longitude": 40.4966
        }
      },
      {
        "id": "1855",
        "name": "YAYLADERE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.8855,
          "longitude": 40.4966
        }
      },
      {
        "id": "1996",
        "name": "YEDİSU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.8855,
          "longitude": 40.4966
        }
      }
    ]
  },
  {
    "id": "bitlis",
    "name": "Bitlis",
    "plateNumber": 13,
    "coordinates": {
      "latitude": 38.4006,
      "longitude": 42.1095
    },
    "municipalities": [
      {
        "id": "1106",
        "name": "ADİLCEVAZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4006,
          "longitude": 42.1095
        }
      },
      {
        "id": "1112",
        "name": "AHLAT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4006,
          "longitude": 42.1095
        }
      },
      {
        "id": "1196",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4006,
          "longitude": 42.1095
        }
      },
      {
        "id": "1394",
        "name": "HİZAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4006,
          "longitude": 42.1095
        }
      },
      {
        "id": "1537",
        "name": "MUTKİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4006,
          "longitude": 42.1095
        }
      },
      {
        "id": "1669",
        "name": "TATVAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4006,
          "longitude": 42.1095
        }
      },
      {
        "id": "1798",
        "name": "GÜROYMAK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4006,
          "longitude": 42.1095
        }
      }
    ]
  },
  {
    "id": "bolu",
    "name": "Bolu",
    "plateNumber": 14,
    "coordinates": {
      "latitude": 40.7392,
      "longitude": 31.6086
    },
    "municipalities": [
      {
        "id": "1199",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7392,
          "longitude": 31.6086
        }
      },
      {
        "id": "1346",
        "name": "GEREDE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7392,
          "longitude": 31.6086
        }
      },
      {
        "id": "1364",
        "name": "GÖYNÜK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7392,
          "longitude": 31.6086
        }
      },
      {
        "id": "1466",
        "name": "KIBRISCIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7392,
          "longitude": 31.6086
        }
      },
      {
        "id": "1522",
        "name": "MENGEN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7392,
          "longitude": 31.6086
        }
      },
      {
        "id": "1531",
        "name": "MUDURNU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7392,
          "longitude": 31.6086
        }
      },
      {
        "id": "1610",
        "name": "SEBEN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7392,
          "longitude": 31.6086
        }
      },
      {
        "id": "1916",
        "name": "DÖRTDİVAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7392,
          "longitude": 31.6086
        }
      },
      {
        "id": "1997",
        "name": "YENİÇAĞA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7392,
          "longitude": 31.6086
        }
      }
    ]
  },
  {
    "id": "burdur",
    "name": "Burdur",
    "plateNumber": 15,
    "coordinates": {
      "latitude": 37.7205,
      "longitude": 30.2906
    },
    "municipalities": [
      {
        "id": "1109",
        "name": "AĞLASUN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7205,
          "longitude": 30.2906
        }
      },
      {
        "id": "1211",
        "name": "BUCAK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7205,
          "longitude": 30.2906
        }
      },
      {
        "id": "1215",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7205,
          "longitude": 30.2906
        }
      },
      {
        "id": "1357",
        "name": "GÖLHİSAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7205,
          "longitude": 30.2906
        }
      },
      {
        "id": "1672",
        "name": "TEFENNİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7205,
          "longitude": 30.2906
        }
      },
      {
        "id": "1728",
        "name": "YEŞİLOVA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7205,
          "longitude": 30.2906
        }
      },
      {
        "id": "1813",
        "name": "KARAMANLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7205,
          "longitude": 30.2906
        }
      },
      {
        "id": "1816",
        "name": "KEMER",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7205,
          "longitude": 30.2906
        }
      },
      {
        "id": "1874",
        "name": "ALTINYAYLA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7205,
          "longitude": 30.2906
        }
      },
      {
        "id": "1899",
        "name": "ÇAVDIR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7205,
          "longitude": 30.2906
        }
      },
      {
        "id": "1903",
        "name": "ÇELTİKÇİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7205,
          "longitude": 30.2906
        }
      }
    ]
  },
  {
    "id": "bursa",
    "name": "Bursa",
    "plateNumber": 16,
    "coordinates": {
      "latitude": 40.1885,
      "longitude": 29.061
    },
    "municipalities": [
      {
        "id": "bursa-buyuksehir",
        "name": "Bursa Büyükşehir",
        "type": "büyükşehir",
        "coordinates": {
          "latitude": 40.1885,
          "longitude": 29.061
        }
      },
      {
        "id": "1343",
        "name": "GEMLİK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1885,
          "longitude": 29.061
        }
      },
      {
        "id": "1411",
        "name": "İNEGÖL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1885,
          "longitude": 29.061
        }
      },
      {
        "id": "1420",
        "name": "İZNİK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1885,
          "longitude": 29.061
        }
      },
      {
        "id": "1434",
        "name": "KARACABEY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1885,
          "longitude": 29.061
        }
      },
      {
        "id": "1457",
        "name": "KELES",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1885,
          "longitude": 29.061
        }
      },
      {
        "id": "1530",
        "name": "MUDANYA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1885,
          "longitude": 29.061
        }
      },
      {
        "id": "1535",
        "name": "MUSTAFAKEMALPAŞA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1885,
          "longitude": 29.061
        }
      },
      {
        "id": "1553",
        "name": "ORHANELİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1885,
          "longitude": 29.061
        }
      },
      {
        "id": "1554",
        "name": "ORHANGAZİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1885,
          "longitude": 29.061
        }
      },
      {
        "id": "1725",
        "name": "YENİŞEHİR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1885,
          "longitude": 29.061
        }
      },
      {
        "id": "1783",
        "name": "BÜYÜKORHAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1885,
          "longitude": 29.061
        }
      },
      {
        "id": "1799",
        "name": "HARMANCIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1885,
          "longitude": 29.061
        }
      },
      {
        "id": "1829",
        "name": "NİLÜFER",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1885,
          "longitude": 29.061
        }
      },
      {
        "id": "1832",
        "name": "OSMANGAZİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1885,
          "longitude": 29.061
        }
      },
      {
        "id": "1859",
        "name": "YILDIRIM",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1885,
          "longitude": 29.061
        }
      },
      {
        "id": "1935",
        "name": "GÜRSU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1885,
          "longitude": 29.061
        }
      },
      {
        "id": "1960",
        "name": "KESTEL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1885,
          "longitude": 29.061
        }
      }
    ]
  },
  {
    "id": "canakkale",
    "name": "Çanakkale",
    "plateNumber": 17,
    "coordinates": {
      "latitude": 40.1553,
      "longitude": 26.4142
    },
    "municipalities": [
      {
        "id": "1160",
        "name": "AYVACIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1553,
          "longitude": 26.4142
        }
      },
      {
        "id": "1180",
        "name": "BAYRAMİÇ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1553,
          "longitude": 26.4142
        }
      },
      {
        "id": "1190",
        "name": "BİGA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1553,
          "longitude": 26.4142
        }
      },
      {
        "id": "1205",
        "name": "BOZCAADA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1553,
          "longitude": 26.4142
        }
      },
      {
        "id": "1229",
        "name": "ÇAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1553,
          "longitude": 26.4142
        }
      },
      {
        "id": "1230",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1553,
          "longitude": 26.4142
        }
      },
      {
        "id": "1293",
        "name": "ECEABAT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1553,
          "longitude": 26.4142
        }
      },
      {
        "id": "1326",
        "name": "EZİNE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1553,
          "longitude": 26.4142
        }
      },
      {
        "id": "1340",
        "name": "GELİBOLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1553,
          "longitude": 26.4142
        }
      },
      {
        "id": "1408",
        "name": "GÖKÇEADA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1553,
          "longitude": 26.4142
        }
      },
      {
        "id": "1503",
        "name": "LAPSEKİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1553,
          "longitude": 26.4142
        }
      },
      {
        "id": "1722",
        "name": "YENİCE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.1553,
          "longitude": 26.4142
        }
      }
    ]
  },
  {
    "id": "cankiri",
    "name": "Çankırı",
    "plateNumber": 18,
    "coordinates": {
      "latitude": 40.6013,
      "longitude": 33.6134
    },
    "municipalities": [
      {
        "id": "1232",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6013,
          "longitude": 33.6134
        }
      },
      {
        "id": "1248",
        "name": "ÇERKEŞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6013,
          "longitude": 33.6134
        }
      },
      {
        "id": "1300",
        "name": "ELDİVAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6013,
          "longitude": 33.6134
        }
      },
      {
        "id": "1399",
        "name": "ILGAZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6013,
          "longitude": 33.6134
        }
      },
      {
        "id": "1494",
        "name": "KURŞUNLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6013,
          "longitude": 33.6134
        }
      },
      {
        "id": "1555",
        "name": "ORTA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6013,
          "longitude": 33.6134
        }
      },
      {
        "id": "1649",
        "name": "ŞABANÖZÜ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6013,
          "longitude": 33.6134
        }
      },
      {
        "id": "1718",
        "name": "YAPRAKLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6013,
          "longitude": 33.6134
        }
      },
      {
        "id": "1765",
        "name": "ATKARACALAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6013,
          "longitude": 33.6134
        }
      },
      {
        "id": "1817",
        "name": "KIZILIRMAK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6013,
          "longitude": 33.6134
        }
      },
      {
        "id": "1885",
        "name": "BAYRAMÖREN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6013,
          "longitude": 33.6134
        }
      },
      {
        "id": "1963",
        "name": "KORGUN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6013,
          "longitude": 33.6134
        }
      }
    ]
  },
  {
    "id": "corum",
    "name": "Çorum",
    "plateNumber": 19,
    "coordinates": {
      "latitude": 40.5499,
      "longitude": 34.9537
    },
    "municipalities": [
      {
        "id": "1124",
        "name": "ALACA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.5499,
          "longitude": 34.9537
        }
      },
      {
        "id": "1177",
        "name": "BAYAT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.5499,
          "longitude": 34.9537
        }
      },
      {
        "id": "1259",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.5499,
          "longitude": 34.9537
        }
      },
      {
        "id": "1414",
        "name": "İSKİLİP",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.5499,
          "longitude": 34.9537
        }
      },
      {
        "id": "1445",
        "name": "KARGI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.5499,
          "longitude": 34.9537
        }
      },
      {
        "id": "1520",
        "name": "MECİTÖZÜ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.5499,
          "longitude": 34.9537
        }
      },
      {
        "id": "1556",
        "name": "ORTAKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.5499,
          "longitude": 34.9537
        }
      },
      {
        "id": "1558",
        "name": "OSMANCIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.5499,
          "longitude": 34.9537
        }
      },
      {
        "id": "1642",
        "name": "SUNGURLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.5499,
          "longitude": 34.9537
        }
      },
      {
        "id": "1778",
        "name": "BOĞAZKALE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.5499,
          "longitude": 34.9537
        }
      },
      {
        "id": "1850",
        "name": "UĞURLUDAĞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.5499,
          "longitude": 34.9537
        }
      },
      {
        "id": "1911",
        "name": "DODURGA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.5499,
          "longitude": 34.9537
        }
      },
      {
        "id": "1972",
        "name": "LAÇİN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.5499,
          "longitude": 34.9537
        }
      },
      {
        "id": "1976",
        "name": "OĞUZLAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.5499,
          "longitude": 34.9537
        }
      }
    ]
  },
  {
    "id": "denizli",
    "name": "Denizli",
    "plateNumber": 20,
    "coordinates": {
      "latitude": 37.7765,
      "longitude": 29.0864
    },
    "municipalities": [
      {
        "id": "1102",
        "name": "ACIPAYAM",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7765,
          "longitude": 29.0864
        }
      },
      {
        "id": "1214",
        "name": "BULDAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7765,
          "longitude": 29.0864
        }
      },
      {
        "id": "1224",
        "name": "ÇAL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7765,
          "longitude": 29.0864
        }
      },
      {
        "id": "1226",
        "name": "ÇAMELİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7765,
          "longitude": 29.0864
        }
      },
      {
        "id": "1233",
        "name": "ÇARDAK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7765,
          "longitude": 29.0864
        }
      },
      {
        "id": "1257",
        "name": "ÇİVRİL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7765,
          "longitude": 29.0864
        }
      },
      {
        "id": "1371",
        "name": "GÜNEY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7765,
          "longitude": 29.0864
        }
      },
      {
        "id": "1426",
        "name": "KALE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7765,
          "longitude": 29.0864
        }
      },
      {
        "id": "1597",
        "name": "SARAYKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7765,
          "longitude": 29.0864
        }
      },
      {
        "id": "1670",
        "name": "TAVAS",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7765,
          "longitude": 29.0864
        }
      },
      {
        "id": "1769",
        "name": "BABADAĞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7765,
          "longitude": 29.0864
        }
      },
      {
        "id": "1774",
        "name": "BEKİLLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7765,
          "longitude": 29.0864
        }
      },
      {
        "id": "1803",
        "name": "HONAZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7765,
          "longitude": 29.0864
        }
      },
      {
        "id": "1840",
        "name": "SERİNHİSAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7765,
          "longitude": 29.0864
        }
      },
      {
        "id": "1871",
        "name": "PAMUKKALE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7765,
          "longitude": 29.0864
        }
      },
      {
        "id": "1881",
        "name": "BAKLAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7765,
          "longitude": 29.0864
        }
      },
      {
        "id": "1888",
        "name": "BEYAĞAÇ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7765,
          "longitude": 29.0864
        }
      },
      {
        "id": "1889",
        "name": "BOZKURT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7765,
          "longitude": 29.0864
        }
      },
      {
        "id": "2079",
        "name": "MERKEZEFENDİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7765,
          "longitude": 29.0864
        }
      }
    ]
  },
  {
    "id": "diyarbakir",
    "name": "Diyarbakır",
    "plateNumber": 21,
    "coordinates": {
      "latitude": 37.9144,
      "longitude": 40.2306
    },
    "municipalities": [
      {
        "id": "1195",
        "name": "BİSMİL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.9144,
          "longitude": 40.2306
        }
      },
      {
        "id": "1249",
        "name": "ÇERMİK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.9144,
          "longitude": 40.2306
        }
      },
      {
        "id": "1253",
        "name": "ÇINAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.9144,
          "longitude": 40.2306
        }
      },
      {
        "id": "1263",
        "name": "ÇÜNGÜŞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.9144,
          "longitude": 40.2306
        }
      },
      {
        "id": "1278",
        "name": "DİCLE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.9144,
          "longitude": 40.2306
        }
      },
      {
        "id": "1315",
        "name": "ERGANİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.9144,
          "longitude": 40.2306
        }
      },
      {
        "id": "1381",
        "name": "HANİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.9144,
          "longitude": 40.2306
        }
      },
      {
        "id": "1389",
        "name": "HAZRO",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.9144,
          "longitude": 40.2306
        }
      },
      {
        "id": "1490",
        "name": "KULP",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.9144,
          "longitude": 40.2306
        }
      },
      {
        "id": "1504",
        "name": "LİCE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.9144,
          "longitude": 40.2306
        }
      },
      {
        "id": "1624",
        "name": "SİLVAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.9144,
          "longitude": 40.2306
        }
      },
      {
        "id": "1791",
        "name": "EĞİL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.9144,
          "longitude": 40.2306
        }
      },
      {
        "id": "1962",
        "name": "KOCAKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.9144,
          "longitude": 40.2306
        }
      },
      {
        "id": "2040",
        "name": "BAĞLAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.9144,
          "longitude": 40.2306
        }
      },
      {
        "id": "2041",
        "name": "KAYAPINAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.9144,
          "longitude": 40.2306
        }
      },
      {
        "id": "2042",
        "name": "SUR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.9144,
          "longitude": 40.2306
        }
      },
      {
        "id": "2043",
        "name": "YENİŞEHİR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.9144,
          "longitude": 40.2306
        }
      }
    ]
  },
  {
    "id": "edirne",
    "name": "Edirne",
    "plateNumber": 22,
    "coordinates": {
      "latitude": 41.6771,
      "longitude": 26.5557
    },
    "municipalities": [
      {
        "id": "1295",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.6771,
          "longitude": 26.5557
        }
      },
      {
        "id": "1307",
        "name": "ENEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.6771,
          "longitude": 26.5557
        }
      },
      {
        "id": "1385",
        "name": "HAVSA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.6771,
          "longitude": 26.5557
        }
      },
      {
        "id": "1412",
        "name": "İPSALA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.6771,
          "longitude": 26.5557
        }
      },
      {
        "id": "1464",
        "name": "KEŞAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.6771,
          "longitude": 26.5557
        }
      },
      {
        "id": "1502",
        "name": "LALAPAŞA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.6771,
          "longitude": 26.5557
        }
      },
      {
        "id": "1523",
        "name": "MERİÇ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.6771,
          "longitude": 26.5557
        }
      },
      {
        "id": "1705",
        "name": "UZUNKÖPRÜ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.6771,
          "longitude": 26.5557
        }
      },
      {
        "id": "1988",
        "name": "SÜLOĞLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.6771,
          "longitude": 26.5557
        }
      }
    ]
  },
  {
    "id": "elazig",
    "name": "Elazığ",
    "plateNumber": 23,
    "coordinates": {
      "latitude": 38.681,
      "longitude": 39.2264
    },
    "municipalities": [
      {
        "id": "1110",
        "name": "AĞIN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1173",
        "name": "BASKİL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1298",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1438",
        "name": "KARAKOÇAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1455",
        "name": "KEBAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1506",
        "name": "MADEN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1566",
        "name": "PALU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1631",
        "name": "SİVRİCE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1762",
        "name": "ARICAK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1820",
        "name": "KOVANCILAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1873",
        "name": "ALACAKAYA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      }
    ]
  },
  {
    "id": "erzincan",
    "name": "Erzincan",
    "plateNumber": 24,
    "coordinates": {
      "latitude": 39.75,
      "longitude": 39.5
    },
    "municipalities": [
      {
        "id": "1243",
        "name": "ÇAYIRLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.75,
          "longitude": 39.5
        }
      },
      {
        "id": "1318",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.75,
          "longitude": 39.5
        }
      },
      {
        "id": "1406",
        "name": "İLİÇ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.75,
          "longitude": 39.5
        }
      },
      {
        "id": "1459",
        "name": "KEMAH",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.75,
          "longitude": 39.5
        }
      },
      {
        "id": "1460",
        "name": "KEMALİYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.75,
          "longitude": 39.5
        }
      },
      {
        "id": "1583",
        "name": "REFAHİYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.75,
          "longitude": 39.5
        }
      },
      {
        "id": "1675",
        "name": "TERCAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.75,
          "longitude": 39.5
        }
      },
      {
        "id": "1853",
        "name": "ÜZÜMLÜ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.75,
          "longitude": 39.5
        }
      },
      {
        "id": "1977",
        "name": "OTLUKBELİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.75,
          "longitude": 39.5
        }
      }
    ]
  },
  {
    "id": "erzurum",
    "name": "Erzurum",
    "plateNumber": 25,
    "coordinates": {
      "latitude": 39.9,
      "longitude": 41.27
    },
    "municipalities": [
      {
        "id": "1153",
        "name": "AŞKALE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      },
      {
        "id": "1235",
        "name": "ÇAT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      },
      {
        "id": "1392",
        "name": "HINIS",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      },
      {
        "id": "1396",
        "name": "HORASAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      },
      {
        "id": "1416",
        "name": "İSPİR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      },
      {
        "id": "1444",
        "name": "KARAYAZI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      },
      {
        "id": "1540",
        "name": "NARMAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      },
      {
        "id": "1550",
        "name": "OLTU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      },
      {
        "id": "1551",
        "name": "OLUR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      },
      {
        "id": "1567",
        "name": "PASİNLER",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      },
      {
        "id": "1657",
        "name": "ŞENKAYA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      },
      {
        "id": "1674",
        "name": "TEKMAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      },
      {
        "id": "1683",
        "name": "TORTUM",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      },
      {
        "id": "1812",
        "name": "KARAÇOBAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      },
      {
        "id": "1851",
        "name": "UZUNDERE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      },
      {
        "id": "1865",
        "name": "PAZARYOLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      },
      {
        "id": "1945",
        "name": "AZİZİYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      },
      {
        "id": "1967",
        "name": "KÖPRÜKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      },
      {
        "id": "2044",
        "name": "PALANDÖKEN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      },
      {
        "id": "2045",
        "name": "YAKUTİYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.9,
          "longitude": 41.27
        }
      }
    ]
  },
  {
    "id": "eskisehir",
    "name": "Eskişehir",
    "plateNumber": 26,
    "coordinates": {
      "latitude": 39.7767,
      "longitude": 30.5206
    },
    "municipalities": [
      {
        "id": "eskisehir-buyuksehir",
        "name": "Eskişehir Büyükşehir",
        "type": "büyükşehir",
        "coordinates": {
          "latitude": 39.7767,
          "longitude": 30.5206
        }
      },
      {
        "id": "1255",
        "name": "ÇİFTELER",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7767,
          "longitude": 30.5206
        }
      },
      {
        "id": "1508",
        "name": "MAHMUDİYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7767,
          "longitude": 30.5206
        }
      },
      {
        "id": "1527",
        "name": "MİHALIÇÇIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7767,
          "longitude": 30.5206
        }
      },
      {
        "id": "1599",
        "name": "SARICAKAYA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7767,
          "longitude": 30.5206
        }
      },
      {
        "id": "1618",
        "name": "SEYİTGAZİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7767,
          "longitude": 30.5206
        }
      },
      {
        "id": "1632",
        "name": "SİVRİHİSAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7767,
          "longitude": 30.5206
        }
      },
      {
        "id": "1759",
        "name": "ALPU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7767,
          "longitude": 30.5206
        }
      },
      {
        "id": "1777",
        "name": "BEYLİKOVA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7767,
          "longitude": 30.5206
        }
      },
      {
        "id": "1808",
        "name": "İNÖNÜ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7767,
          "longitude": 30.5206
        }
      },
      {
        "id": "1934",
        "name": "GÜNYÜZÜ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7767,
          "longitude": 30.5206
        }
      },
      {
        "id": "1939",
        "name": "HAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7767,
          "longitude": 30.5206
        }
      },
      {
        "id": "1973",
        "name": "MİHALGAZİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7767,
          "longitude": 30.5206
        }
      },
      {
        "id": "2046",
        "name": "ODUNPAZARI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7767,
          "longitude": 30.5206
        }
      },
      {
        "id": "2047",
        "name": "TEPEBAŞI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7767,
          "longitude": 30.5206
        }
      }
    ]
  },
  {
    "id": "gaziantep",
    "name": "Gaziantep",
    "plateNumber": 27,
    "coordinates": {
      "latitude": 37.0662,
      "longitude": 37.3833
    },
    "municipalities": [
      {
        "id": "gaziantep-buyuksehir",
        "name": "Gaziantep Büyükşehir",
        "type": "büyükşehir",
        "coordinates": {
          "latitude": 37.0662,
          "longitude": 37.3833
        }
      },
      {
        "id": "1139",
        "name": "ARABAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0662,
          "longitude": 37.3833
        }
      },
      {
        "id": "1415",
        "name": "İSLAHİYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0662,
          "longitude": 37.3833
        }
      },
      {
        "id": "1546",
        "name": "NİZİP",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0662,
          "longitude": 37.3833
        }
      },
      {
        "id": "1549",
        "name": "OĞUZELİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0662,
          "longitude": 37.3833
        }
      },
      {
        "id": "1720",
        "name": "YAVUZELİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0662,
          "longitude": 37.3833
        }
      },
      {
        "id": "1841",
        "name": "ŞAHİNBEY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0662,
          "longitude": 37.3833
        }
      },
      {
        "id": "1844",
        "name": "ŞEHİTKAMİL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0662,
          "longitude": 37.3833
        }
      },
      {
        "id": "1956",
        "name": "KARKAMIŞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0662,
          "longitude": 37.3833
        }
      },
      {
        "id": "1974",
        "name": "NURDAĞI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0662,
          "longitude": 37.3833
        }
      }
    ]
  },
  {
    "id": "giresun",
    "name": "Giresun",
    "plateNumber": 28,
    "coordinates": {
      "latitude": 40.9128,
      "longitude": 38.3895
    },
    "municipalities": [
      {
        "id": "1133",
        "name": "ALUCRA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9128,
          "longitude": 38.3895
        }
      },
      {
        "id": "1212",
        "name": "BULANCAK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9128,
          "longitude": 38.3895
        }
      },
      {
        "id": "1272",
        "name": "DERELİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9128,
          "longitude": 38.3895
        }
      },
      {
        "id": "1320",
        "name": "ESPİYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9128,
          "longitude": 38.3895
        }
      },
      {
        "id": "1324",
        "name": "EYNESİL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9128,
          "longitude": 38.3895
        }
      },
      {
        "id": "1352",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9128,
          "longitude": 38.3895
        }
      },
      {
        "id": "1361",
        "name": "GÖRELE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9128,
          "longitude": 38.3895
        }
      },
      {
        "id": "1465",
        "name": "KEŞAP",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9128,
          "longitude": 38.3895
        }
      },
      {
        "id": "1654",
        "name": "ŞEBİNKARAHİSAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9128,
          "longitude": 38.3895
        }
      },
      {
        "id": "1678",
        "name": "TİREBOLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9128,
          "longitude": 38.3895
        }
      },
      {
        "id": "1837",
        "name": "PİRAZİZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9128,
          "longitude": 38.3895
        }
      },
      {
        "id": "1854",
        "name": "YAĞLIDERE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9128,
          "longitude": 38.3895
        }
      },
      {
        "id": "1893",
        "name": "ÇAMOLUK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9128,
          "longitude": 38.3895
        }
      },
      {
        "id": "1894",
        "name": "ÇANAKÇI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9128,
          "longitude": 38.3895
        }
      },
      {
        "id": "1912",
        "name": "DOĞANKENT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9128,
          "longitude": 38.3895
        }
      },
      {
        "id": "1930",
        "name": "GÜCE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9128,
          "longitude": 38.3895
        }
      }
    ]
  },
  {
    "id": "gumushane",
    "name": "Gümüşhane",
    "plateNumber": 29,
    "coordinates": {
      "latitude": 40.4603,
      "longitude": 39.4814
    },
    "municipalities": [
      {
        "id": "1369",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.4603,
          "longitude": 39.4814
        }
      },
      {
        "id": "1458",
        "name": "KELKİT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.4603,
          "longitude": 39.4814
        }
      },
      {
        "id": "1660",
        "name": "ŞİRAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.4603,
          "longitude": 39.4814
        }
      },
      {
        "id": "1684",
        "name": "TORUL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.4603,
          "longitude": 39.4814
        }
      },
      {
        "id": "1822",
        "name": "KÖSE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.4603,
          "longitude": 39.4814
        }
      },
      {
        "id": "1971",
        "name": "KÜRTÜN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.4603,
          "longitude": 39.4814
        }
      }
    ]
  },
  {
    "id": "hakkari",
    "name": "Hakkari",
    "plateNumber": 30,
    "coordinates": {
      "latitude": 37.5833,
      "longitude": 43.7333
    },
    "municipalities": [
      {
        "id": "1261",
        "name": "ÇUKURCA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.5833,
          "longitude": 43.7333
        }
      },
      {
        "id": "1377",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.5833,
          "longitude": 43.7333
        }
      },
      {
        "id": "1656",
        "name": "ŞEMDİNLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.5833,
          "longitude": 43.7333
        }
      },
      {
        "id": "1737",
        "name": "YÜKSEKOVA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.5833,
          "longitude": 43.7333
        }
      }
    ]
  },
  {
    "id": "hatay",
    "name": "Hatay",
    "plateNumber": 31,
    "coordinates": {
      "latitude": 36.2023,
      "longitude": 36.1613
    },
    "municipalities": [
      {
        "id": "1131",
        "name": "ALTINÖZÜ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.2023,
          "longitude": 36.1613
        }
      },
      {
        "id": "1289",
        "name": "DÖRTYOL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.2023,
          "longitude": 36.1613
        }
      },
      {
        "id": "1382",
        "name": "HASSA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.2023,
          "longitude": 36.1613
        }
      },
      {
        "id": "1413",
        "name": "İSKENDERUN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.2023,
          "longitude": 36.1613
        }
      },
      {
        "id": "1468",
        "name": "KIRIKHAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.2023,
          "longitude": 36.1613
        }
      },
      {
        "id": "1585",
        "name": "REYHANLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.2023,
          "longitude": 36.1613
        }
      },
      {
        "id": "1591",
        "name": "SAMANDAĞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.2023,
          "longitude": 36.1613
        }
      },
      {
        "id": "1721",
        "name": "YAYLADAĞI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.2023,
          "longitude": 36.1613
        }
      },
      {
        "id": "1792",
        "name": "ERZİN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.2023,
          "longitude": 36.1613
        }
      },
      {
        "id": "1887",
        "name": "BELEN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.2023,
          "longitude": 36.1613
        }
      },
      {
        "id": "1970",
        "name": "KUMLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.2023,
          "longitude": 36.1613
        }
      },
      {
        "id": "2080",
        "name": "ANTAKYA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.2023,
          "longitude": 36.1613
        }
      },
      {
        "id": "2081",
        "name": "ARSUZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.2023,
          "longitude": 36.1613
        }
      },
      {
        "id": "2082",
        "name": "DEFNE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.2023,
          "longitude": 36.1613
        }
      },
      {
        "id": "2083",
        "name": "PAYAS",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.2023,
          "longitude": 36.1613
        }
      }
    ]
  },
  {
    "id": "isparta",
    "name": "Isparta",
    "plateNumber": 32,
    "coordinates": {
      "latitude": 37.7648,
      "longitude": 30.5566
    },
    "municipalities": [
      {
        "id": "1154",
        "name": "ATABEY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 30.5566
        }
      },
      {
        "id": "1297",
        "name": "EĞİRDİR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 30.5566
        }
      },
      {
        "id": "1341",
        "name": "GELENDOST",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 30.5566
        }
      },
      {
        "id": "1401",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 30.5566
        }
      },
      {
        "id": "1456",
        "name": "KEÇİBORLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 30.5566
        }
      },
      {
        "id": "1615",
        "name": "SENİRKENT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 30.5566
        }
      },
      {
        "id": "1648",
        "name": "SÜTÇÜLER",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 30.5566
        }
      },
      {
        "id": "1651",
        "name": "ŞARKİKARAAĞAÇ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 30.5566
        }
      },
      {
        "id": "1699",
        "name": "ULUBORLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 30.5566
        }
      },
      {
        "id": "1717",
        "name": "YALVAÇ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 30.5566
        }
      },
      {
        "id": "1755",
        "name": "AKSU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 30.5566
        }
      },
      {
        "id": "1929",
        "name": "GÖNEN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 30.5566
        }
      },
      {
        "id": "2001",
        "name": "YENİŞARBADEMLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.7648,
          "longitude": 30.5566
        }
      }
    ]
  },
  {
    "id": "mersin",
    "name": "Mersin",
    "plateNumber": 33,
    "coordinates": {
      "latitude": 36.8,
      "longitude": 34.6333
    },
    "municipalities": [
      {
        "id": "1135",
        "name": "ANAMUR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8,
          "longitude": 34.6333
        }
      },
      {
        "id": "1311",
        "name": "ERDEMLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8,
          "longitude": 34.6333
        }
      },
      {
        "id": "1366",
        "name": "GÜLNAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8,
          "longitude": 34.6333
        }
      },
      {
        "id": "1536",
        "name": "MUT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8,
          "longitude": 34.6333
        }
      },
      {
        "id": "1621",
        "name": "SİLİFKE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8,
          "longitude": 34.6333
        }
      },
      {
        "id": "1665",
        "name": "TARSUS",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8,
          "longitude": 34.6333
        }
      },
      {
        "id": "1766",
        "name": "AYDINCIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8,
          "longitude": 34.6333
        }
      },
      {
        "id": "1779",
        "name": "BOZYAZI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8,
          "longitude": 34.6333
        }
      },
      {
        "id": "1892",
        "name": "ÇAMLIYAYLA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8,
          "longitude": 34.6333
        }
      },
      {
        "id": "2064",
        "name": "AKDENİZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8,
          "longitude": 34.6333
        }
      },
      {
        "id": "2065",
        "name": "MEZİTLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8,
          "longitude": 34.6333
        }
      },
      {
        "id": "2066",
        "name": "TOROSLAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8,
          "longitude": 34.6333
        }
      },
      {
        "id": "2067",
        "name": "YENİŞEHİR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 36.8,
          "longitude": 34.6333
        }
      }
    ]
  },
  {
    "id": "i̇stanbul",
    "name": "İstanbul",
    "plateNumber": 34,
    "coordinates": {
      "latitude": 41.0082,
      "longitude": 28.9784
    },
    "municipalities": [
      {
        "id": "i̇stanbul-buyuksehir",
        "name": "İstanbul Büyükşehir",
        "type": "büyükşehir",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1103",
        "name": "ADALAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1166",
        "name": "BAKIRKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1183",
        "name": "BEŞİKTAŞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1185",
        "name": "BEYKOZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1186",
        "name": "BEYOĞLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1237",
        "name": "ÇATALCA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1325",
        "name": "EYÜP",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1327",
        "name": "FATİH",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1336",
        "name": "GAZİOSMANPAŞA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1421",
        "name": "KADIKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1449",
        "name": "KARTAL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1604",
        "name": "SARIYER",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1622",
        "name": "SİLİVRİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1659",
        "name": "ŞİLE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1663",
        "name": "ŞİŞLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1708",
        "name": "ÜSKÜDAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1739",
        "name": "ZEYTİNBURNU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1782",
        "name": "BÜYÜKÇEKMECE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1810",
        "name": "KAĞITHANE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1823",
        "name": "KÜÇÜKÇEKMECE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1835",
        "name": "PENDİK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1852",
        "name": "ÜMRANİYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "1886",
        "name": "BAYRAMPAŞA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "2003",
        "name": "AVCILAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "2004",
        "name": "BAĞCILAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "2005",
        "name": "BAHÇELİEVLER",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "2010",
        "name": "GÜNGÖREN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "2012",
        "name": "MALTEPE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "2014",
        "name": "SULTANBEYLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "2015",
        "name": "TUZLA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "2016",
        "name": "ESENLER",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "2048",
        "name": "ARNAVUTKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "2049",
        "name": "ATAŞEHİR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "2050",
        "name": "BAŞAKŞEHİR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "2051",
        "name": "BEYLİKDÜZÜ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "2052",
        "name": "ÇEKMEKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "2053",
        "name": "ESENYURT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "2054",
        "name": "SANCAKTEPE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      },
      {
        "id": "2055",
        "name": "SULTANGAZİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0082,
          "longitude": 28.9784
        }
      }
    ]
  },
  {
    "id": "i̇zmir",
    "name": "İzmir",
    "plateNumber": 35,
    "coordinates": {
      "latitude": 38.4192,
      "longitude": 27.1287
    },
    "municipalities": [
      {
        "id": "i̇zmir-buyuksehir",
        "name": "İzmir Büyükşehir",
        "type": "büyükşehir",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1128",
        "name": "ALİAĞA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1178",
        "name": "BAYINDIR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1181",
        "name": "BERGAMA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1203",
        "name": "BORNOVA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1251",
        "name": "ÇEŞME",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1280",
        "name": "DİKİLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1334",
        "name": "FOÇA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1432",
        "name": "KARABURUN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1448",
        "name": "KARŞIYAKA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1461",
        "name": "KEMALPAŞA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1467",
        "name": "KINIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1477",
        "name": "KİRAZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1521",
        "name": "MENEMEN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1563",
        "name": "ÖDEMİŞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1611",
        "name": "SEFERİHİSAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1612",
        "name": "SELÇUK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1677",
        "name": "TİRE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1682",
        "name": "TORBALI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1703",
        "name": "URLA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1776",
        "name": "BEYDAĞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1780",
        "name": "BUCA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1819",
        "name": "KONAK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "1826",
        "name": "MENDERES",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "2006",
        "name": "BALÇOVA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "2007",
        "name": "ÇİĞLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "2009",
        "name": "GAZİEMİR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "2013",
        "name": "NARLIDERE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "2018",
        "name": "GÜZELBAHÇE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "2056",
        "name": "BAYRAKLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      },
      {
        "id": "2057",
        "name": "KARABAĞLAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.4192,
          "longitude": 27.1287
        }
      }
    ]
  },
  {
    "id": "kars",
    "name": "Kars",
    "plateNumber": 36,
    "coordinates": {
      "latitude": 40.6167,
      "longitude": 43.1
    },
    "municipalities": [
      {
        "id": "1149",
        "name": "ARPAÇAY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6167,
          "longitude": 43.1
        }
      },
      {
        "id": "1279",
        "name": "DİGOR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6167,
          "longitude": 43.1
        }
      },
      {
        "id": "1424",
        "name": "KAĞIZMAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6167,
          "longitude": 43.1
        }
      },
      {
        "id": "1447",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6167,
          "longitude": 43.1
        }
      },
      {
        "id": "1601",
        "name": "SARIKAMIŞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6167,
          "longitude": 43.1
        }
      },
      {
        "id": "1614",
        "name": "SELİM",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6167,
          "longitude": 43.1
        }
      },
      {
        "id": "1645",
        "name": "SUSUZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6167,
          "longitude": 43.1
        }
      },
      {
        "id": "1756",
        "name": "AKYAKA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.6167,
          "longitude": 43.1
        }
      }
    ]
  },
  {
    "id": "kastamonu",
    "name": "Kastamonu",
    "plateNumber": 37,
    "coordinates": {
      "latitude": 41.3887,
      "longitude": 33.7827
    },
    "municipalities": [
      {
        "id": "1101",
        "name": "ABANA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      },
      {
        "id": "1140",
        "name": "ARAÇ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      },
      {
        "id": "1162",
        "name": "AZDAVAY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      },
      {
        "id": "1208",
        "name": "BOZKURT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      },
      {
        "id": "1221",
        "name": "CİDE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      },
      {
        "id": "1238",
        "name": "ÇATALZEYTİN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      },
      {
        "id": "1264",
        "name": "DADAY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      },
      {
        "id": "1277",
        "name": "DEVREKANİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      },
      {
        "id": "1410",
        "name": "İNEBOLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      },
      {
        "id": "1450",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      },
      {
        "id": "1499",
        "name": "KÜRE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      },
      {
        "id": "1666",
        "name": "TAŞKÖPRÜ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      },
      {
        "id": "1685",
        "name": "TOSYA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      },
      {
        "id": "1805",
        "name": "İHSANGAZİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      },
      {
        "id": "1836",
        "name": "PINARBAŞI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      },
      {
        "id": "1845",
        "name": "ŞENPAZAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      },
      {
        "id": "1867",
        "name": "AĞLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      },
      {
        "id": "1915",
        "name": "DOĞANYURT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      },
      {
        "id": "1940",
        "name": "HANÖNÜ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      },
      {
        "id": "1984",
        "name": "SEYDİLER",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.3887,
          "longitude": 33.7827
        }
      }
    ]
  },
  {
    "id": "kayseri",
    "name": "Kayseri",
    "plateNumber": 38,
    "coordinates": {
      "latitude": 38.7205,
      "longitude": 35.4826
    },
    "municipalities": [
      {
        "id": "1218",
        "name": "BÜNYAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7205,
          "longitude": 35.4826
        }
      },
      {
        "id": "1275",
        "name": "DEVELİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7205,
          "longitude": 35.4826
        }
      },
      {
        "id": "1330",
        "name": "FELAHİYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7205,
          "longitude": 35.4826
        }
      },
      {
        "id": "1409",
        "name": "İNCESU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7205,
          "longitude": 35.4826
        }
      },
      {
        "id": "1576",
        "name": "PINARBAŞI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7205,
          "longitude": 35.4826
        }
      },
      {
        "id": "1603",
        "name": "SARIOĞLAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7205,
          "longitude": 35.4826
        }
      },
      {
        "id": "1605",
        "name": "SARIZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7205,
          "longitude": 35.4826
        }
      },
      {
        "id": "1680",
        "name": "TOMARZA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7205,
          "longitude": 35.4826
        }
      },
      {
        "id": "1715",
        "name": "YAHYALI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7205,
          "longitude": 35.4826
        }
      },
      {
        "id": "1727",
        "name": "YEŞİLHİSAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7205,
          "longitude": 35.4826
        }
      },
      {
        "id": "1752",
        "name": "AKKIŞLA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7205,
          "longitude": 35.4826
        }
      },
      {
        "id": "1846",
        "name": "TALAS",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7205,
          "longitude": 35.4826
        }
      },
      {
        "id": "1863",
        "name": "KOCASİNAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7205,
          "longitude": 35.4826
        }
      },
      {
        "id": "1864",
        "name": "MELİKGAZİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7205,
          "longitude": 35.4826
        }
      },
      {
        "id": "1936",
        "name": "HACILAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7205,
          "longitude": 35.4826
        }
      },
      {
        "id": "1978",
        "name": "ÖZVATAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7205,
          "longitude": 35.4826
        }
      }
    ]
  },
  {
    "id": "kirklareli",
    "name": "Kırklareli",
    "plateNumber": 39,
    "coordinates": {
      "latitude": 41.7333,
      "longitude": 27.2167
    },
    "municipalities": [
      {
        "id": "1163",
        "name": "BABAESKİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.7333,
          "longitude": 27.2167
        }
      },
      {
        "id": "1270",
        "name": "DEMİRKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.7333,
          "longitude": 27.2167
        }
      },
      {
        "id": "1471",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.7333,
          "longitude": 27.2167
        }
      },
      {
        "id": "1480",
        "name": "KOFÇAZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.7333,
          "longitude": 27.2167
        }
      },
      {
        "id": "1505",
        "name": "LÜLEBURGAZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.7333,
          "longitude": 27.2167
        }
      },
      {
        "id": "1572",
        "name": "PEHLİVANKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.7333,
          "longitude": 27.2167
        }
      },
      {
        "id": "1577",
        "name": "PINARHİSAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.7333,
          "longitude": 27.2167
        }
      },
      {
        "id": "1714",
        "name": "VİZE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.7333,
          "longitude": 27.2167
        }
      }
    ]
  },
  {
    "id": "kirsehir",
    "name": "Kırşehir",
    "plateNumber": 40,
    "coordinates": {
      "latitude": 39.1425,
      "longitude": 34.1709
    },
    "municipalities": [
      {
        "id": "1254",
        "name": "ÇİÇEKDAĞI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.1425,
          "longitude": 34.1709
        }
      },
      {
        "id": "1429",
        "name": "KAMAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.1425,
          "longitude": 34.1709
        }
      },
      {
        "id": "1472",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.1425,
          "longitude": 34.1709
        }
      },
      {
        "id": "1529",
        "name": "MUCUR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.1425,
          "longitude": 34.1709
        }
      },
      {
        "id": "1754",
        "name": "AKPINAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.1425,
          "longitude": 34.1709
        }
      },
      {
        "id": "1869",
        "name": "AKÇAKENT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.1425,
          "longitude": 34.1709
        }
      },
      {
        "id": "1890",
        "name": "BOZTEPE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.1425,
          "longitude": 34.1709
        }
      }
    ]
  },
  {
    "id": "kocaeli",
    "name": "Kocaeli",
    "plateNumber": 41,
    "coordinates": {
      "latitude": 40.8533,
      "longitude": 29.8815
    },
    "municipalities": [
      {
        "id": "1338",
        "name": "GEBZE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.8533,
          "longitude": 29.8815
        }
      },
      {
        "id": "1355",
        "name": "GÖLCÜK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.8533,
          "longitude": 29.8815
        }
      },
      {
        "id": "1430",
        "name": "KANDIRA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.8533,
          "longitude": 29.8815
        }
      },
      {
        "id": "1440",
        "name": "KARAMÜRSEL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.8533,
          "longitude": 29.8815
        }
      },
      {
        "id": "1821",
        "name": "KÖRFEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.8533,
          "longitude": 29.8815
        }
      },
      {
        "id": "2030",
        "name": "DERİNCE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.8533,
          "longitude": 29.8815
        }
      },
      {
        "id": "2058",
        "name": "BAŞİSKELE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.8533,
          "longitude": 29.8815
        }
      },
      {
        "id": "2059",
        "name": "ÇAYIROVA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.8533,
          "longitude": 29.8815
        }
      },
      {
        "id": "2060",
        "name": "DARICA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.8533,
          "longitude": 29.8815
        }
      },
      {
        "id": "2061",
        "name": "DİLOVASI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.8533,
          "longitude": 29.8815
        }
      },
      {
        "id": "2062",
        "name": "İZMİT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.8533,
          "longitude": 29.8815
        }
      },
      {
        "id": "2063",
        "name": "KARTEPE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.8533,
          "longitude": 29.8815
        }
      }
    ]
  },
  {
    "id": "konya",
    "name": "Konya",
    "plateNumber": 42,
    "coordinates": {
      "latitude": 37.8667,
      "longitude": 32.4833
    },
    "municipalities": [
      {
        "id": "konya-buyuksehir",
        "name": "Konya Büyükşehir",
        "type": "büyükşehir",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1122",
        "name": "AKŞEHİR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1188",
        "name": "BEYŞEHİR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1207",
        "name": "BOZKIR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1222",
        "name": "CİHANBEYLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1262",
        "name": "ÇUMRA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1285",
        "name": "DOĞANHİSAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1312",
        "name": "EREĞLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1375",
        "name": "HADİM",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1400",
        "name": "ILGIN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1422",
        "name": "KADINHANI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1441",
        "name": "KARAPINAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1491",
        "name": "KULU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1598",
        "name": "SARAYÖNÜ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1617",
        "name": "SEYDİŞEHİR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1735",
        "name": "YUNAK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1753",
        "name": "AKÖREN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1760",
        "name": "ALTINEKİN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1789",
        "name": "DEREBUCAK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1804",
        "name": "HÜYÜK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1814",
        "name": "KARATAY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1827",
        "name": "MERAM",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1839",
        "name": "SELÇUKLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1848",
        "name": "TAŞKENT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1868",
        "name": "AHIRLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1902",
        "name": "ÇELTİK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1907",
        "name": "DERBENT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1920",
        "name": "EMİRGAZİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1933",
        "name": "GÜNEYSINIR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1937",
        "name": "HALKAPINAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1990",
        "name": "TUZLUKÇU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      },
      {
        "id": "1994",
        "name": "YALIHÜYÜK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.8667,
          "longitude": 32.4833
        }
      }
    ]
  },
  {
    "id": "kutahya",
    "name": "Kütahya",
    "plateNumber": 43,
    "coordinates": {
      "latitude": 39.4167,
      "longitude": 29.9833
    },
    "municipalities": [
      {
        "id": "1132",
        "name": "ALTINTAŞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.4167,
          "longitude": 29.9833
        }
      },
      {
        "id": "1288",
        "name": "DOMANİÇ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.4167,
          "longitude": 29.9833
        }
      },
      {
        "id": "1304",
        "name": "EMET",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.4167,
          "longitude": 29.9833
        }
      },
      {
        "id": "1339",
        "name": "GEDİZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.4167,
          "longitude": 29.9833
        }
      },
      {
        "id": "1500",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.4167,
          "longitude": 29.9833
        }
      },
      {
        "id": "1625",
        "name": "SİMAV",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.4167,
          "longitude": 29.9833
        }
      },
      {
        "id": "1671",
        "name": "TAVŞANLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.4167,
          "longitude": 29.9833
        }
      },
      {
        "id": "1764",
        "name": "ASLANAPA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.4167,
          "longitude": 29.9833
        }
      },
      {
        "id": "1790",
        "name": "DUMLUPINAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.4167,
          "longitude": 29.9833
        }
      },
      {
        "id": "1802",
        "name": "HİSARCIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.4167,
          "longitude": 29.9833
        }
      },
      {
        "id": "1843",
        "name": "ŞAPHANE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.4167,
          "longitude": 29.9833
        }
      },
      {
        "id": "1898",
        "name": "ÇAVDARHİSAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.4167,
          "longitude": 29.9833
        }
      },
      {
        "id": "1979",
        "name": "PAZARLAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.4167,
          "longitude": 29.9833
        }
      }
    ]
  },
  {
    "id": "malatya",
    "name": "Malatya",
    "plateNumber": 44,
    "coordinates": {
      "latitude": 38.3552,
      "longitude": 38.3095
    },
    "municipalities": [
      {
        "id": "1114",
        "name": "AKÇADAĞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.3552,
          "longitude": 38.3095
        }
      },
      {
        "id": "1143",
        "name": "ARAPGİR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.3552,
          "longitude": 38.3095
        }
      },
      {
        "id": "1148",
        "name": "ARGUVAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.3552,
          "longitude": 38.3095
        }
      },
      {
        "id": "1265",
        "name": "DARENDE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.3552,
          "longitude": 38.3095
        }
      },
      {
        "id": "1286",
        "name": "DOĞANŞEHİR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.3552,
          "longitude": 38.3095
        }
      },
      {
        "id": "1390",
        "name": "HEKİMHAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.3552,
          "longitude": 38.3095
        }
      },
      {
        "id": "1582",
        "name": "PÜTÜRGE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.3552,
          "longitude": 38.3095
        }
      },
      {
        "id": "1729",
        "name": "YEŞİLYURT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.3552,
          "longitude": 38.3095
        }
      },
      {
        "id": "1772",
        "name": "BATTALGAZİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.3552,
          "longitude": 38.3095
        }
      },
      {
        "id": "1914",
        "name": "DOĞANYOL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.3552,
          "longitude": 38.3095
        }
      },
      {
        "id": "1953",
        "name": "KALE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.3552,
          "longitude": 38.3095
        }
      },
      {
        "id": "1969",
        "name": "KULUNCAK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.3552,
          "longitude": 38.3095
        }
      },
      {
        "id": "1995",
        "name": "YAZIHAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.3552,
          "longitude": 38.3095
        }
      }
    ]
  },
  {
    "id": "manisa",
    "name": "Manisa",
    "plateNumber": 45,
    "coordinates": {
      "latitude": 38.6191,
      "longitude": 27.4289
    },
    "municipalities": [
      {
        "id": "1118",
        "name": "AKHİSAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6191,
          "longitude": 27.4289
        }
      },
      {
        "id": "1127",
        "name": "ALAŞEHİR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6191,
          "longitude": 27.4289
        }
      },
      {
        "id": "1269",
        "name": "DEMİRCİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6191,
          "longitude": 27.4289
        }
      },
      {
        "id": "1362",
        "name": "GÖRDES",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6191,
          "longitude": 27.4289
        }
      },
      {
        "id": "1470",
        "name": "KIRKAĞAÇ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6191,
          "longitude": 27.4289
        }
      },
      {
        "id": "1489",
        "name": "KULA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6191,
          "longitude": 27.4289
        }
      },
      {
        "id": "1590",
        "name": "SALİHLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6191,
          "longitude": 27.4289
        }
      },
      {
        "id": "1600",
        "name": "SARIGÖL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6191,
          "longitude": 27.4289
        }
      },
      {
        "id": "1606",
        "name": "SARUHANLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6191,
          "longitude": 27.4289
        }
      },
      {
        "id": "1613",
        "name": "SELENDİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6191,
          "longitude": 27.4289
        }
      },
      {
        "id": "1634",
        "name": "SOMA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6191,
          "longitude": 27.4289
        }
      },
      {
        "id": "1689",
        "name": "TURGUTLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6191,
          "longitude": 27.4289
        }
      },
      {
        "id": "1751",
        "name": "AHMETLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6191,
          "longitude": 27.4289
        }
      },
      {
        "id": "1793",
        "name": "GÖLMARMARA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6191,
          "longitude": 27.4289
        }
      },
      {
        "id": "1965",
        "name": "KÖPRÜBAŞI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6191,
          "longitude": 27.4289
        }
      },
      {
        "id": "2086",
        "name": "ŞEHZADELER",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6191,
          "longitude": 27.4289
        }
      },
      {
        "id": "2087",
        "name": "YUNUSEMRE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6191,
          "longitude": 27.4289
        }
      }
    ]
  },
  {
    "id": "kahramanmaras",
    "name": "Kahramanmaraş",
    "plateNumber": 46,
    "coordinates": {
      "latitude": 37.5858,
      "longitude": 36.9371
    },
    "municipalities": [
      {
        "id": "kahramanmaras-buyuksehir",
        "name": "Kahramanmaraş Büyükşehir",
        "type": "büyükşehir",
        "coordinates": {
          "latitude": 37.5858,
          "longitude": 36.9371
        }
      },
      {
        "id": "1107",
        "name": "AFŞİN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.5858,
          "longitude": 36.9371
        }
      },
      {
        "id": "1136",
        "name": "ANDIRIN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.5858,
          "longitude": 36.9371
        }
      },
      {
        "id": "1299",
        "name": "ELBİSTAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.5858,
          "longitude": 36.9371
        }
      },
      {
        "id": "1353",
        "name": "GÖKSUN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.5858,
          "longitude": 36.9371
        }
      },
      {
        "id": "1570",
        "name": "PAZARCIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.5858,
          "longitude": 36.9371
        }
      },
      {
        "id": "1694",
        "name": "TÜRKOĞLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.5858,
          "longitude": 36.9371
        }
      },
      {
        "id": "1785",
        "name": "ÇAĞLAYANCERİT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.5858,
          "longitude": 36.9371
        }
      },
      {
        "id": "1919",
        "name": "EKİNÖZÜ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.5858,
          "longitude": 36.9371
        }
      },
      {
        "id": "1975",
        "name": "NURHAK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.5858,
          "longitude": 36.9371
        }
      },
      {
        "id": "2084",
        "name": "DULKADİROĞLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.5858,
          "longitude": 36.9371
        }
      },
      {
        "id": "2085",
        "name": "ONİKİŞUBAT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.5858,
          "longitude": 36.9371
        }
      }
    ]
  },
  {
    "id": "mardin",
    "name": "Mardin",
    "plateNumber": 47,
    "coordinates": {
      "latitude": 37.3212,
      "longitude": 40.7245
    },
    "municipalities": [
      {
        "id": "1273",
        "name": "DERİK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.3212,
          "longitude": 40.7245
        }
      },
      {
        "id": "1474",
        "name": "KIZILTEPE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.3212,
          "longitude": 40.7245
        }
      },
      {
        "id": "1519",
        "name": "MAZIDAĞI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.3212,
          "longitude": 40.7245
        }
      },
      {
        "id": "1526",
        "name": "MİDYAT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.3212,
          "longitude": 40.7245
        }
      },
      {
        "id": "1547",
        "name": "NUSAYBİN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.3212,
          "longitude": 40.7245
        }
      },
      {
        "id": "1564",
        "name": "ÖMERLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.3212,
          "longitude": 40.7245
        }
      },
      {
        "id": "1609",
        "name": "SAVUR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.3212,
          "longitude": 40.7245
        }
      },
      {
        "id": "1787",
        "name": "DARGEÇİT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.3212,
          "longitude": 40.7245
        }
      },
      {
        "id": "2002",
        "name": "YEŞİLLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.3212,
          "longitude": 40.7245
        }
      },
      {
        "id": "2088",
        "name": "ARTUKLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.3212,
          "longitude": 40.7245
        }
      }
    ]
  },
  {
    "id": "mugla",
    "name": "Muğla",
    "plateNumber": 48,
    "coordinates": {
      "latitude": 37.2154,
      "longitude": 28.3636
    },
    "municipalities": [
      {
        "id": "1197",
        "name": "BODRUM",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.2154,
          "longitude": 28.3636
        }
      },
      {
        "id": "1266",
        "name": "DATÇA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.2154,
          "longitude": 28.3636
        }
      },
      {
        "id": "1331",
        "name": "FETHİYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.2154,
          "longitude": 28.3636
        }
      },
      {
        "id": "1488",
        "name": "KÖYCEĞİZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.2154,
          "longitude": 28.3636
        }
      },
      {
        "id": "1517",
        "name": "MARMARİS",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.2154,
          "longitude": 28.3636
        }
      },
      {
        "id": "1528",
        "name": "MİLAS",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.2154,
          "longitude": 28.3636
        }
      },
      {
        "id": "1695",
        "name": "ULA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.2154,
          "longitude": 28.3636
        }
      },
      {
        "id": "1719",
        "name": "YATAĞAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.2154,
          "longitude": 28.3636
        }
      },
      {
        "id": "1742",
        "name": "DALAMAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.2154,
          "longitude": 28.3636
        }
      },
      {
        "id": "1831",
        "name": "ORTACA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.2154,
          "longitude": 28.3636
        }
      },
      {
        "id": "1958",
        "name": "KAVAKLIDERE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.2154,
          "longitude": 28.3636
        }
      },
      {
        "id": "2089",
        "name": "MENTEŞE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.2154,
          "longitude": 28.3636
        }
      },
      {
        "id": "2090",
        "name": "SEYDİKEMER",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.2154,
          "longitude": 28.3636
        }
      }
    ]
  },
  {
    "id": "mus",
    "name": "Muş",
    "plateNumber": 49,
    "coordinates": {
      "latitude": 38.7432,
      "longitude": 41.5065
    },
    "municipalities": [
      {
        "id": "1213",
        "name": "BULANIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7432,
          "longitude": 41.5065
        }
      },
      {
        "id": "1510",
        "name": "MALAZGİRT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7432,
          "longitude": 41.5065
        }
      },
      {
        "id": "1534",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7432,
          "longitude": 41.5065
        }
      },
      {
        "id": "1711",
        "name": "VARTO",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7432,
          "longitude": 41.5065
        }
      },
      {
        "id": "1801",
        "name": "HASKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7432,
          "longitude": 41.5065
        }
      },
      {
        "id": "1964",
        "name": "KORKUT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.7432,
          "longitude": 41.5065
        }
      }
    ]
  },
  {
    "id": "nevsehir",
    "name": "Nevşehir",
    "plateNumber": 50,
    "coordinates": {
      "latitude": 38.6244,
      "longitude": 34.7144
    },
    "municipalities": [
      {
        "id": "1155",
        "name": "AVANOS",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6244,
          "longitude": 34.7144
        }
      },
      {
        "id": "1274",
        "name": "DERİNKUYU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6244,
          "longitude": 34.7144
        }
      },
      {
        "id": "1367",
        "name": "GÜLŞEHİR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6244,
          "longitude": 34.7144
        }
      },
      {
        "id": "1374",
        "name": "HACIBEKTAŞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6244,
          "longitude": 34.7144
        }
      },
      {
        "id": "1485",
        "name": "KOZAKLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6244,
          "longitude": 34.7144
        }
      },
      {
        "id": "1543",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6244,
          "longitude": 34.7144
        }
      },
      {
        "id": "1707",
        "name": "ÜRGÜP",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6244,
          "longitude": 34.7144
        }
      },
      {
        "id": "1749",
        "name": "ACIGÖL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.6244,
          "longitude": 34.7144
        }
      }
    ]
  },
  {
    "id": "nigde",
    "name": "Niğde",
    "plateNumber": 51,
    "coordinates": {
      "latitude": 37.0667,
      "longitude": 37.3833
    },
    "municipalities": [
      {
        "id": "1201",
        "name": "BOR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1225",
        "name": "ÇAMARDI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1544",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1700",
        "name": "ULUKIŞLA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1876",
        "name": "ALTUNHİSAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1904",
        "name": "ÇİFTLİK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      }
    ]
  },
  {
    "id": "ordu",
    "name": "Ordu",
    "plateNumber": 52,
    "coordinates": {
      "latitude": 40.9839,
      "longitude": 37.8764
    },
    "municipalities": [
      {
        "id": "1119",
        "name": "AKKUŞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9839,
          "longitude": 37.8764
        }
      },
      {
        "id": "1158",
        "name": "AYBASTI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9839,
          "longitude": 37.8764
        }
      },
      {
        "id": "1328",
        "name": "FATSA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9839,
          "longitude": 37.8764
        }
      },
      {
        "id": "1358",
        "name": "GÖLKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9839,
          "longitude": 37.8764
        }
      },
      {
        "id": "1482",
        "name": "KORGAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9839,
          "longitude": 37.8764
        }
      },
      {
        "id": "1493",
        "name": "KUMRU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9839,
          "longitude": 37.8764
        }
      },
      {
        "id": "1525",
        "name": "MESUDİYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9839,
          "longitude": 37.8764
        }
      },
      {
        "id": "1573",
        "name": "PERŞEMBE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9839,
          "longitude": 37.8764
        }
      },
      {
        "id": "1696",
        "name": "ULUBEY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9839,
          "longitude": 37.8764
        }
      },
      {
        "id": "1706",
        "name": "ÜNYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9839,
          "longitude": 37.8764
        }
      },
      {
        "id": "1795",
        "name": "GÜLYALI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9839,
          "longitude": 37.8764
        }
      },
      {
        "id": "1797",
        "name": "GÜRGENTEPE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9839,
          "longitude": 37.8764
        }
      },
      {
        "id": "1891",
        "name": "ÇAMAŞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9839,
          "longitude": 37.8764
        }
      },
      {
        "id": "1897",
        "name": "ÇATALPINAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9839,
          "longitude": 37.8764
        }
      },
      {
        "id": "1900",
        "name": "ÇAYBAŞI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9839,
          "longitude": 37.8764
        }
      },
      {
        "id": "1947",
        "name": "İKİZCE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9839,
          "longitude": 37.8764
        }
      },
      {
        "id": "1950",
        "name": "KABADÜZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9839,
          "longitude": 37.8764
        }
      },
      {
        "id": "1951",
        "name": "KABATAŞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9839,
          "longitude": 37.8764
        }
      },
      {
        "id": "2103",
        "name": "ALTINORDU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9839,
          "longitude": 37.8764
        }
      }
    ]
  },
  {
    "id": "rize",
    "name": "Rize",
    "plateNumber": 53,
    "coordinates": {
      "latitude": 41.2867,
      "longitude": 36.33
    },
    "municipalities": [
      {
        "id": "1146",
        "name": "ARDEŞEN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1228",
        "name": "ÇAMLIHEMŞİN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1241",
        "name": "ÇAYELİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1332",
        "name": "FINDIKLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1405",
        "name": "İKİZDERE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1428",
        "name": "KALKANDERE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1569",
        "name": "PAZAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1586",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1796",
        "name": "GÜNEYSU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1908",
        "name": "DEREPAZARI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1943",
        "name": "HEMŞİN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1949",
        "name": "İYİDERE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      }
    ]
  },
  {
    "id": "sakarya",
    "name": "Sakarya",
    "plateNumber": 54,
    "coordinates": {
      "latitude": 40.7833,
      "longitude": 30.4
    },
    "municipalities": [
      {
        "id": "1123",
        "name": "AKYAZI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7833,
          "longitude": 30.4
        }
      },
      {
        "id": "1351",
        "name": "GEYVE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7833,
          "longitude": 30.4
        }
      },
      {
        "id": "1391",
        "name": "HENDEK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7833,
          "longitude": 30.4
        }
      },
      {
        "id": "1442",
        "name": "KARASU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7833,
          "longitude": 30.4
        }
      },
      {
        "id": "1453",
        "name": "KAYNARCA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7833,
          "longitude": 30.4
        }
      },
      {
        "id": "1595",
        "name": "SAPANCA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7833,
          "longitude": 30.4
        }
      },
      {
        "id": "1818",
        "name": "KOCAALİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7833,
          "longitude": 30.4
        }
      },
      {
        "id": "1833",
        "name": "PAMUKOVA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7833,
          "longitude": 30.4
        }
      },
      {
        "id": "1847",
        "name": "TARAKLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7833,
          "longitude": 30.4
        }
      },
      {
        "id": "1925",
        "name": "FERİZLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7833,
          "longitude": 30.4
        }
      },
      {
        "id": "1955",
        "name": "KARAPÜRÇEK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7833,
          "longitude": 30.4
        }
      },
      {
        "id": "1986",
        "name": "SÖĞÜTLÜ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7833,
          "longitude": 30.4
        }
      },
      {
        "id": "2068",
        "name": "ADAPAZARI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7833,
          "longitude": 30.4
        }
      },
      {
        "id": "2069",
        "name": "ARİFİYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7833,
          "longitude": 30.4
        }
      },
      {
        "id": "2070",
        "name": "ERENLER",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7833,
          "longitude": 30.4
        }
      },
      {
        "id": "2071",
        "name": "SERDİVAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.7833,
          "longitude": 30.4
        }
      }
    ]
  },
  {
    "id": "samsun",
    "name": "Samsun",
    "plateNumber": 55,
    "coordinates": {
      "latitude": 41.2867,
      "longitude": 36.33
    },
    "municipalities": [
      {
        "id": "1125",
        "name": "ALAÇAM",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1164",
        "name": "BAFRA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1234",
        "name": "ÇARŞAMBA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1386",
        "name": "HAVZA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1452",
        "name": "KAVAK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1501",
        "name": "LADİK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1676",
        "name": "TERME",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1712",
        "name": "VEZİRKÖPRÜ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1763",
        "name": "ASARCIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1830",
        "name": "19 MAYIS",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1838",
        "name": "SALIPAZARI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1849",
        "name": "TEKKEKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1879",
        "name": "AYVACIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "1993",
        "name": "YAKAKENT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "2072",
        "name": "ATAKUM",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "2073",
        "name": "CANİK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      },
      {
        "id": "2074",
        "name": "İLKADIM",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.2867,
          "longitude": 36.33
        }
      }
    ]
  },
  {
    "id": "siirt",
    "name": "Siirt",
    "plateNumber": 56,
    "coordinates": {
      "latitude": 37.0667,
      "longitude": 37.3833
    },
    "municipalities": [
      {
        "id": "1179",
        "name": "BAYKAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1317",
        "name": "ERUH",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1495",
        "name": "KURTALAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1575",
        "name": "PERVARİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1620",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1662",
        "name": "ŞİRVAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1878",
        "name": "TİLLO",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      }
    ]
  },
  {
    "id": "sinop",
    "name": "Sinop",
    "plateNumber": 57,
    "coordinates": {
      "latitude": 42.0283,
      "longitude": 35.15
    },
    "municipalities": [
      {
        "id": "1156",
        "name": "AYANCIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 42.0283,
          "longitude": 35.15
        }
      },
      {
        "id": "1204",
        "name": "BOYABAT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 42.0283,
          "longitude": 35.15
        }
      },
      {
        "id": "1290",
        "name": "DURAĞAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 42.0283,
          "longitude": 35.15
        }
      },
      {
        "id": "1314",
        "name": "ERFELEK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 42.0283,
          "longitude": 35.15
        }
      },
      {
        "id": "1349",
        "name": "GERZE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 42.0283,
          "longitude": 35.15
        }
      },
      {
        "id": "1627",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 42.0283,
          "longitude": 35.15
        }
      },
      {
        "id": "1693",
        "name": "TÜRKELİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 42.0283,
          "longitude": 35.15
        }
      },
      {
        "id": "1910",
        "name": "DİKMEN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 42.0283,
          "longitude": 35.15
        }
      },
      {
        "id": "1981",
        "name": "SARAYDÜZÜ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 42.0283,
          "longitude": 35.15
        }
      }
    ]
  },
  {
    "id": "sivas",
    "name": "Sivas",
    "plateNumber": 58,
    "coordinates": {
      "latitude": 39.7477,
      "longitude": 37.0179
    },
    "municipalities": [
      {
        "id": "1282",
        "name": "DİVRİĞİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7477,
          "longitude": 37.0179
        }
      },
      {
        "id": "1342",
        "name": "GEMEREK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7477,
          "longitude": 37.0179
        }
      },
      {
        "id": "1373",
        "name": "GÜRÜN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7477,
          "longitude": 37.0179
        }
      },
      {
        "id": "1376",
        "name": "HAFİK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7477,
          "longitude": 37.0179
        }
      },
      {
        "id": "1407",
        "name": "İMRANLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7477,
          "longitude": 37.0179
        }
      },
      {
        "id": "1431",
        "name": "KANGAL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7477,
          "longitude": 37.0179
        }
      },
      {
        "id": "1484",
        "name": "KOYULHİSAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7477,
          "longitude": 37.0179
        }
      },
      {
        "id": "1628",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7477,
          "longitude": 37.0179
        }
      },
      {
        "id": "1646",
        "name": "SUŞEHRİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7477,
          "longitude": 37.0179
        }
      },
      {
        "id": "1650",
        "name": "ŞARKIŞLA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7477,
          "longitude": 37.0179
        }
      },
      {
        "id": "1731",
        "name": "YILDIZELİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7477,
          "longitude": 37.0179
        }
      },
      {
        "id": "1738",
        "name": "ZARA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7477,
          "longitude": 37.0179
        }
      },
      {
        "id": "1870",
        "name": "AKINCILAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7477,
          "longitude": 37.0179
        }
      },
      {
        "id": "1875",
        "name": "ALTINYAYLA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7477,
          "longitude": 37.0179
        }
      },
      {
        "id": "1913",
        "name": "DOĞANŞAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7477,
          "longitude": 37.0179
        }
      },
      {
        "id": "1927",
        "name": "GÖLOVA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7477,
          "longitude": 37.0179
        }
      },
      {
        "id": "1991",
        "name": "ULAŞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.7477,
          "longitude": 37.0179
        }
      }
    ]
  },
  {
    "id": "tekirdag",
    "name": "Tekirdağ",
    "plateNumber": 59,
    "coordinates": {
      "latitude": 40.9833,
      "longitude": 29.1167
    },
    "municipalities": [
      {
        "id": "1250",
        "name": "ÇERKEZKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9833,
          "longitude": 29.1167
        }
      },
      {
        "id": "1258",
        "name": "ÇORLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9833,
          "longitude": 29.1167
        }
      },
      {
        "id": "1388",
        "name": "HAYRABOLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9833,
          "longitude": 29.1167
        }
      },
      {
        "id": "1511",
        "name": "MALKARA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9833,
          "longitude": 29.1167
        }
      },
      {
        "id": "1538",
        "name": "MURATLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9833,
          "longitude": 29.1167
        }
      },
      {
        "id": "1596",
        "name": "SARAY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9833,
          "longitude": 29.1167
        }
      },
      {
        "id": "1652",
        "name": "ŞARKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9833,
          "longitude": 29.1167
        }
      },
      {
        "id": "1825",
        "name": "MARMARAEREĞLİSİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9833,
          "longitude": 29.1167
        }
      },
      {
        "id": "2094",
        "name": "ERGENE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9833,
          "longitude": 29.1167
        }
      },
      {
        "id": "2095",
        "name": "KAPAKLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9833,
          "longitude": 29.1167
        }
      },
      {
        "id": "2096",
        "name": "SÜLEYMANPAŞA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9833,
          "longitude": 29.1167
        }
      }
    ]
  },
  {
    "id": "tokat",
    "name": "Tokat",
    "plateNumber": 60,
    "coordinates": {
      "latitude": 40.3167,
      "longitude": 36.55
    },
    "municipalities": [
      {
        "id": "1129",
        "name": "ALMUS",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.3167,
          "longitude": 36.55
        }
      },
      {
        "id": "1151",
        "name": "ARTOVA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.3167,
          "longitude": 36.55
        }
      },
      {
        "id": "1308",
        "name": "ERBAA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.3167,
          "longitude": 36.55
        }
      },
      {
        "id": "1545",
        "name": "NİKSAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.3167,
          "longitude": 36.55
        }
      },
      {
        "id": "1584",
        "name": "REŞADİYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.3167,
          "longitude": 36.55
        }
      },
      {
        "id": "1679",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.3167,
          "longitude": 36.55
        }
      },
      {
        "id": "1690",
        "name": "TURHAL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.3167,
          "longitude": 36.55
        }
      },
      {
        "id": "1740",
        "name": "ZİLE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.3167,
          "longitude": 36.55
        }
      },
      {
        "id": "1834",
        "name": "PAZAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.3167,
          "longitude": 36.55
        }
      },
      {
        "id": "1858",
        "name": "YEŞİLYURT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.3167,
          "longitude": 36.55
        }
      },
      {
        "id": "1883",
        "name": "BAŞÇİFTLİK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.3167,
          "longitude": 36.55
        }
      },
      {
        "id": "1987",
        "name": "SULUSARAY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.3167,
          "longitude": 36.55
        }
      }
    ]
  },
  {
    "id": "trabzon",
    "name": "Trabzon",
    "plateNumber": 61,
    "coordinates": {
      "latitude": 41.0015,
      "longitude": 39.7178
    },
    "municipalities": [
      {
        "id": "1113",
        "name": "AKÇAABAT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0015,
          "longitude": 39.7178
        }
      },
      {
        "id": "1141",
        "name": "ARAKLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0015,
          "longitude": 39.7178
        }
      },
      {
        "id": "1150",
        "name": "ARSİN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0015,
          "longitude": 39.7178
        }
      },
      {
        "id": "1244",
        "name": "ÇAYKARA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0015,
          "longitude": 39.7178
        }
      },
      {
        "id": "1507",
        "name": "MAÇKA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0015,
          "longitude": 39.7178
        }
      },
      {
        "id": "1548",
        "name": "OF",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0015,
          "longitude": 39.7178
        }
      },
      {
        "id": "1647",
        "name": "SÜRMENE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0015,
          "longitude": 39.7178
        }
      },
      {
        "id": "1681",
        "name": "TONYA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0015,
          "longitude": 39.7178
        }
      },
      {
        "id": "1709",
        "name": "VAKFIKEBİR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0015,
          "longitude": 39.7178
        }
      },
      {
        "id": "1732",
        "name": "YOMRA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0015,
          "longitude": 39.7178
        }
      },
      {
        "id": "1775",
        "name": "BEŞİKDÜZÜ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0015,
          "longitude": 39.7178
        }
      },
      {
        "id": "1842",
        "name": "ŞALPAZARI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0015,
          "longitude": 39.7178
        }
      },
      {
        "id": "1896",
        "name": "ÇARŞIBAŞI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0015,
          "longitude": 39.7178
        }
      },
      {
        "id": "1909",
        "name": "DERNEKPAZARI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0015,
          "longitude": 39.7178
        }
      },
      {
        "id": "1917",
        "name": "DÜZKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0015,
          "longitude": 39.7178
        }
      },
      {
        "id": "1942",
        "name": "HAYRAT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0015,
          "longitude": 39.7178
        }
      },
      {
        "id": "1966",
        "name": "KÖPRÜBAŞI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0015,
          "longitude": 39.7178
        }
      },
      {
        "id": "2097",
        "name": "ORTAHİSAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.0015,
          "longitude": 39.7178
        }
      }
    ]
  },
  {
    "id": "tunceli",
    "name": "Tunceli",
    "plateNumber": 62,
    "coordinates": {
      "latitude": 38.681,
      "longitude": 39.2264
    },
    "municipalities": [
      {
        "id": "1247",
        "name": "ÇEMİŞGEZEK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1397",
        "name": "HOZAT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1518",
        "name": "MAZGİRT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1541",
        "name": "NAZIMİYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1562",
        "name": "OVACIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1574",
        "name": "PERTEK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1581",
        "name": "PÜLÜMÜR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1688",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      }
    ]
  },
  {
    "id": "sanliurfa",
    "name": "Şanlıurfa",
    "plateNumber": 63,
    "coordinates": {
      "latitude": 37.1591,
      "longitude": 38.7969
    },
    "municipalities": [
      {
        "id": "1115",
        "name": "AKÇAKALE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.1591,
          "longitude": 38.7969
        }
      },
      {
        "id": "1194",
        "name": "BİRECİK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.1591,
          "longitude": 38.7969
        }
      },
      {
        "id": "1209",
        "name": "BOZOVA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.1591,
          "longitude": 38.7969
        }
      },
      {
        "id": "1220",
        "name": "CEYLANPINAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.1591,
          "longitude": 38.7969
        }
      },
      {
        "id": "1378",
        "name": "HALFETİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.1591,
          "longitude": 38.7969
        }
      },
      {
        "id": "1393",
        "name": "HİLVAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.1591,
          "longitude": 38.7969
        }
      },
      {
        "id": "1630",
        "name": "SİVEREK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.1591,
          "longitude": 38.7969
        }
      },
      {
        "id": "1643",
        "name": "SURUÇ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.1591,
          "longitude": 38.7969
        }
      },
      {
        "id": "1713",
        "name": "VİRANŞEHİR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.1591,
          "longitude": 38.7969
        }
      },
      {
        "id": "1800",
        "name": "HARRAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.1591,
          "longitude": 38.7969
        }
      },
      {
        "id": "2091",
        "name": "EYYÜBİYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.1591,
          "longitude": 38.7969
        }
      },
      {
        "id": "2092",
        "name": "HALİLİYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.1591,
          "longitude": 38.7969
        }
      },
      {
        "id": "2093",
        "name": "KARAKÖPRÜ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.1591,
          "longitude": 38.7969
        }
      }
    ]
  },
  {
    "id": "usak",
    "name": "Uşak",
    "plateNumber": 64,
    "coordinates": {
      "latitude": 38.681,
      "longitude": 39.2264
    },
    "municipalities": [
      {
        "id": "1170",
        "name": "BANAZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1323",
        "name": "EŞME",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1436",
        "name": "KARAHALLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1629",
        "name": "SİVASLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1697",
        "name": "ULUBEY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1704",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      }
    ]
  },
  {
    "id": "van",
    "name": "Van",
    "plateNumber": 65,
    "coordinates": {
      "latitude": 38.681,
      "longitude": 39.2264
    },
    "municipalities": [
      {
        "id": "1175",
        "name": "BAŞKALE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1236",
        "name": "ÇATAK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1309",
        "name": "ERCİŞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1350",
        "name": "GEVAŞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1372",
        "name": "GÜRPINAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1533",
        "name": "MURADİYE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1565",
        "name": "ÖZALP",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1770",
        "name": "BAHÇESARAY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1786",
        "name": "ÇALDIRAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1918",
        "name": "EDREMİT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "1980",
        "name": "SARAY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "2098",
        "name": "İPEKYOLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      },
      {
        "id": "2099",
        "name": "TUŞBA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 38.681,
          "longitude": 39.2264
        }
      }
    ]
  },
  {
    "id": "yozgat",
    "name": "Yozgat",
    "plateNumber": 66,
    "coordinates": {
      "latitude": 39.8167,
      "longitude": 34.8167
    },
    "municipalities": [
      {
        "id": "1117",
        "name": "AKDAĞMADENİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1198",
        "name": "BOĞAZLIYAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1242",
        "name": "ÇAYIRALAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1245",
        "name": "ÇEKEREK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1602",
        "name": "SARIKAYA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1635",
        "name": "SORGUN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1655",
        "name": "ŞEFAATLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1726",
        "name": "YERKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1733",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1877",
        "name": "AYDINCIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1895",
        "name": "ÇANDIR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1952",
        "name": "KADIŞEHRİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1982",
        "name": "SARAYKENT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1998",
        "name": "YENİFAKILI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      }
    ]
  },
  {
    "id": "zonguldak",
    "name": "Zonguldak",
    "plateNumber": 67,
    "coordinates": {
      "latitude": 41.25,
      "longitude": 31.8333
    },
    "municipalities": [
      {
        "id": "1240",
        "name": "ÇAYCUMA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.25,
          "longitude": 31.8333
        }
      },
      {
        "id": "1276",
        "name": "DEVREK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.25,
          "longitude": 31.8333
        }
      },
      {
        "id": "1313",
        "name": "EREĞLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.25,
          "longitude": 31.8333
        }
      },
      {
        "id": "1741",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.25,
          "longitude": 31.8333
        }
      },
      {
        "id": "1758",
        "name": "ALAPLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.25,
          "longitude": 31.8333
        }
      },
      {
        "id": "1926",
        "name": "GÖKÇEBEY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.25,
          "longitude": 31.8333
        }
      },
      {
        "id": "2100",
        "name": "KİLİMLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.25,
          "longitude": 31.8333
        }
      },
      {
        "id": "2101",
        "name": "KOZLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 41.25,
          "longitude": 31.8333
        }
      }
    ]
  },
  {
    "id": "aksaray",
    "name": "Aksaray",
    "plateNumber": 68,
    "coordinates": {
      "latitude": 39.8167,
      "longitude": 34.8167
    },
    "municipalities": [
      {
        "id": "1120",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1557",
        "name": "ORTAKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1860",
        "name": "AĞAÇÖREN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1861",
        "name": "GÜZELYURT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1866",
        "name": "SARIYAHŞİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1921",
        "name": "ESKİL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1932",
        "name": "GÜLAĞAÇ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      }
    ]
  },
  {
    "id": "bayburt",
    "name": "Bayburt",
    "plateNumber": 69,
    "coordinates": {
      "latitude": 39.8167,
      "longitude": 34.8167
    },
    "municipalities": [
      {
        "id": "1176",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1767",
        "name": "AYDINTEPE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1788",
        "name": "DEMİRÖZÜ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      }
    ]
  },
  {
    "id": "karaman",
    "name": "Karaman",
    "plateNumber": 70,
    "coordinates": {
      "latitude": 39.8167,
      "longitude": 34.8167
    },
    "municipalities": [
      {
        "id": "1316",
        "name": "ERMENEK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1439",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1768",
        "name": "AYRANCI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1862",
        "name": "KAZIMKARABEKİR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1884",
        "name": "BAŞYAYLA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1983",
        "name": "SARIVELİLER",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      }
    ]
  },
  {
    "id": "kirikkale",
    "name": "Kırıkkale",
    "plateNumber": 71,
    "coordinates": {
      "latitude": 39.8167,
      "longitude": 34.8167
    },
    "municipalities": [
      {
        "id": "1268",
        "name": "DELİCE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1463",
        "name": "KESKİN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1469",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1638",
        "name": "SULAKYURT",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1880",
        "name": "BAHŞİLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1882",
        "name": "BALIŞEYH",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1901",
        "name": "ÇELEBİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1954",
        "name": "KARAKEÇİLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1992",
        "name": "YAHŞİHAN",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      }
    ]
  },
  {
    "id": "batman",
    "name": "Batman",
    "plateNumber": 72,
    "coordinates": {
      "latitude": 37.0667,
      "longitude": 37.3833
    },
    "municipalities": [
      {
        "id": "1174",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1184",
        "name": "BEŞİRİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1345",
        "name": "GERCÜŞ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1487",
        "name": "KOZLUK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1607",
        "name": "SASON",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1941",
        "name": "HASANKEYF",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      }
    ]
  },
  {
    "id": "sirnak",
    "name": "Şırnak",
    "plateNumber": 73,
    "coordinates": {
      "latitude": 37.0667,
      "longitude": 37.3833
    },
    "municipalities": [
      {
        "id": "1189",
        "name": "BEYTÜŞŞEBAP",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1223",
        "name": "CİZRE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1403",
        "name": "İDİL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1623",
        "name": "SİLOPİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1661",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1698",
        "name": "ULUDERE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1931",
        "name": "GÜÇLÜKONAK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      }
    ]
  },
  {
    "id": "bartin",
    "name": "Bartın",
    "plateNumber": 74,
    "coordinates": {
      "latitude": 37.0667,
      "longitude": 37.3833
    },
    "municipalities": [
      {
        "id": "1172",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1496",
        "name": "KURUCAŞİLE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1701",
        "name": "ULUS",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1761",
        "name": "AMASRA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      }
    ]
  },
  {
    "id": "ardahan",
    "name": "Ardahan",
    "plateNumber": 75,
    "coordinates": {
      "latitude": 37.0667,
      "longitude": 37.3833
    },
    "municipalities": [
      {
        "id": "1144",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1252",
        "name": "ÇILDIR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1356",
        "name": "GÖLE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1380",
        "name": "HANAK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1579",
        "name": "POSOF",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "2008",
        "name": "DAMAL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      }
    ]
  },
  {
    "id": "igdir",
    "name": "Iğdır",
    "plateNumber": 76,
    "coordinates": {
      "latitude": 39.8167,
      "longitude": 34.8167
    },
    "municipalities": [
      {
        "id": "1142",
        "name": "ARALIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1398",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1692",
        "name": "TUZLUCA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "2011",
        "name": "KARAKOYUNLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      }
    ]
  },
  {
    "id": "yalova",
    "name": "Yalova",
    "plateNumber": 77,
    "coordinates": {
      "latitude": 39.8167,
      "longitude": 34.8167
    },
    "municipalities": [
      {
        "id": "1716",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "2019",
        "name": "ALTINOVA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "2020",
        "name": "ARMUTLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "2021",
        "name": "ÇINARCIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "2022",
        "name": "ÇİFTLİKKÖY",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "2026",
        "name": "TERMAL",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      }
    ]
  },
  {
    "id": "karabuk",
    "name": "Karabük",
    "plateNumber": 78,
    "coordinates": {
      "latitude": 39.8167,
      "longitude": 34.8167
    },
    "municipalities": [
      {
        "id": "1296",
        "name": "EFLANİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1321",
        "name": "ESKİPAZAR",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1433",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1561",
        "name": "OVACIK",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1587",
        "name": "SAFRANBOLU",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      },
      {
        "id": "1856",
        "name": "YENİCE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 39.8167,
          "longitude": 34.8167
        }
      }
    ]
  },
  {
    "id": "kilis",
    "name": "Kilis",
    "plateNumber": 79,
    "coordinates": {
      "latitude": 37.0667,
      "longitude": 37.3833
    },
    "municipalities": [
      {
        "id": "1476",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "2023",
        "name": "ELBEYLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "2024",
        "name": "MUSABEYLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "2025",
        "name": "POLATELİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      }
    ]
  },
  {
    "id": "osmaniye",
    "name": "Osmaniye",
    "plateNumber": 80,
    "coordinates": {
      "latitude": 37.0667,
      "longitude": 37.3833
    },
    "municipalities": [
      {
        "id": "1165",
        "name": "BAHÇE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1423",
        "name": "KADİRLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1560",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "1743",
        "name": "DÜZİÇİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "2027",
        "name": "HASANBEYLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "2028",
        "name": "SUMBAS",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      },
      {
        "id": "2029",
        "name": "TOPRAKKALE",
        "type": "ilçe",
        "coordinates": {
          "latitude": 37.0667,
          "longitude": 37.3833
        }
      }
    ]
  },
  {
    "id": "duzce",
    "name": "Düzce",
    "plateNumber": 81,
    "coordinates": {
      "latitude": 40.9833,
      "longitude": 31.6167
    },
    "municipalities": [
      {
        "id": "1116",
        "name": "AKÇAKOCA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9833,
          "longitude": 31.6167
        }
      },
      {
        "id": "1292",
        "name": "MERKEZ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9833,
          "longitude": 31.6167
        }
      },
      {
        "id": "1730",
        "name": "YIĞILCA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9833,
          "longitude": 31.6167
        }
      },
      {
        "id": "1784",
        "name": "CUMAYERİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9833,
          "longitude": 31.6167
        }
      },
      {
        "id": "1794",
        "name": "GÖLYAKA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9833,
          "longitude": 31.6167
        }
      },
      {
        "id": "1905",
        "name": "ÇİLİMLİ",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9833,
          "longitude": 31.6167
        }
      },
      {
        "id": "2017",
        "name": "GÜMÜŞOVA",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9833,
          "longitude": 31.6167
        }
      },
      {
        "id": "2031",
        "name": "KAYNAŞLI",
        "type": "ilçe",
        "coordinates": {
          "latitude": 40.9833,
          "longitude": 31.6167
        }
      }
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
