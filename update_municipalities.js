const fs = require('fs');

let content = fs.readFileSync('utils/turkeyData.ts', 'utf8');

// 30 büyükşehir ili
const buyuksehirler = [
  'Adana', 'Ankara', 'Antalya', 'Aydın', 'Balıkesir', 'Bursa', 'Denizli', 'Diyarbakır', 'Erzurum', 'Eskişehir',
  'Gaziantep', 'Hatay', 'İstanbul', 'İzmir', 'Kahramanmaraş', 'Kayseri', 'Kocaeli', 'Konya', 'Malatya', 'Manisa',
  'Mardin', 'Mersin', 'Muğla', 'Ordu', 'Sakarya', 'Samsun', 'Şanlıurfa', 'Tekirdağ', 'Trabzon', 'Van'
];

// Tüm illeri bul
const cityRegex = /{\s*id: '([^']+)',\s*name: '([^']+)',\s*plateNumber: (\d+),[\s\S]*?municipalities: \[((?:.|\n)*?)\]\s*}/g;
let match;
let newContent = content;

while ((match = cityRegex.exec(content)) !== null) {
  const cityId = match[1];
  const cityName = match[2];
  const municipalitiesBlock = match[4];
  if (!buyuksehirler.includes(cityName)) {
    // Büyükşehir olmayan ilde "Büyükşehir" geçen belediyeleri sil
    const fixedBlock = municipalitiesBlock.replace(/\{[^}]*name: '[^']*Büyükşehir'[^}]*},?/g, '');
    newContent = newContent.replace(municipalitiesBlock, fixedBlock);
  }
}

fs.writeFileSync('utils/turkeyData.ts', newContent);
console.log('Büyükşehir olmayan illerdeki yanlış Büyükşehir belediyeleri silindi!'); 