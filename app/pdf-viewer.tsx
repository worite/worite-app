import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { ActivityIndicator, Paragraph } from 'react-native-paper';
import { useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';

const { width, height } = Dimensions.get('window');

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

export default function PDFViewerScreen() {
  const { evaluationId, municipalityName } = useLocalSearchParams();
  const [pdfHtml, setPdfHtml] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    generatePDF();
  }, []);

  const generatePDF = async () => {
    try {
      // AsyncStorage'dan gerçek değerlendirme verisini yükle
      const storedEvaluations = await AsyncStorage.getItem('evaluations');
      let evaluationData: any = null;
      
      if (storedEvaluations) {
        const allEvaluations: Evaluation[] = JSON.parse(storedEvaluations);
        evaluationData = allEvaluations.find(
          (evaluation: Evaluation) => evaluation.id === evaluationId
        );
      }
      
      // Eğer değerlendirme bulunamazsa varsayılan veri
      if (!evaluationData) {
        evaluationData = {
          id: evaluationId,
          municipalityName: municipalityName,
          date: 'Bilinmiyor',
          time: 'Bilinmiyor',
          type: 'Bilinmiyor',
          description: 'Değerlendirme bulunamadı.',
          location: 'Bilinmiyor',
          coordinates: '0, 0',
          hasImage: false,
          imageUrl: ''
        };
      }

      // Fotoğrafı base64'e çevir
      let imageBase64 = '';
      if (evaluationData.image) {
        try {
          const base64 = await FileSystem.readAsStringAsync(evaluationData.image, {
            encoding: FileSystem.EncodingType.Base64,
          });
          imageBase64 = base64;
        } catch (error) {
          console.log('Fotoğraf base64\'e çevrilemedi:', error);
        }
      }

      // HTML formatında PDF benzeri görünüm
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Değerlendirme Raporu</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              margin: 0;
              padding: 20px;
              background: #f8fafc;
              color: #1e293b;
            }
            .container {
              max-width: 800px;
              margin: 0 auto;
              background: white;
              border-radius: 12px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              overflow: hidden;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: bold;
            }
            .header p {
              margin: 10px 0 0 0;
              opacity: 0.9;
              font-size: 16px;
            }
            .content {
              padding: 30px;
            }
            .section {
              margin-bottom: 25px;
            }
            .section h2 {
              color: #6366f1;
              font-size: 18px;
              margin-bottom: 10px;
              border-bottom: 2px solid #e2e8f0;
              padding-bottom: 5px;
            }
            .info-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 15px;
              margin-bottom: 20px;
            }
            .info-item {
              background: #f8fafc;
              padding: 15px;
              border-radius: 8px;
              border-left: 4px solid #6366f1;
            }
            .info-label {
              font-weight: bold;
              color: #64748b;
              font-size: 12px;
              text-transform: uppercase;
              margin-bottom: 5px;
            }
            .info-value {
              font-size: 14px;
              color: #1e293b;
            }
            .description {
              background: #f8fafc;
              padding: 20px;
              border-radius: 8px;
              border-left: 4px solid #10b981;
              margin-bottom: 20px;
            }
            .description h3 {
              margin: 0 0 10px 0;
              color: #10b981;
              font-size: 16px;
            }
            .description p {
              margin: 0;
              line-height: 1.6;
              font-size: 14px;
            }
            .location {
              background: #f8fafc;
              padding: 15px;
              border-radius: 8px;
              border-left: 4px solid #f59e0b;
            }
            .location h3 {
              margin: 0 0 10px 0;
              color: #f59e0b;
              font-size: 16px;
            }
            .location p {
              margin: 0;
              font-size: 14px;
            }
            .footer {
              background: #f1f5f9;
              padding: 20px;
              text-align: center;
              color: #64748b;
              font-size: 12px;
            }
            .type-badge {
              display: inline-block;
              padding: 8px 16px;
              border-radius: 20px;
              font-weight: bold;
              font-size: 14px;
              text-transform: uppercase;
            }
            .type-positive {
              background: #dcfce7;
              color: #166534;
            }
            .type-negative {
              background: #fef3f2;
              color: #dc2626;
            }
            .image-note {
              background: #e0e7ff;
              color: #3730a3;
              padding: 10px;
              border-radius: 6px;
              font-size: 12px;
              text-align: center;
              margin-top: 15px;
            }
            .media-container img {
              width: 100%;
              height: 300px;
              object-fit: cover;
              border-radius: 12px;
              margin-bottom: 16px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏛️ ${evaluationData.municipalityName}</h1>
              <p>Değerlendirme Raporu</p>
            </div>
            
            <div class="content">
              <div class="section">
                <h2>📋 Değerlendirme Bilgileri</h2>
                <div class="info-grid">
                  <div class="info-item">
                    <div class="info-label">Değerlendirme ID</div>
                    <div class="info-value">#${evaluationData.id}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Tarih</div>
                    <div class="info-value">${evaluationData.date}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Saat</div>
                    <div class="info-value">${evaluationData.time}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Tip</div>
                    <div class="info-value">
                      <span class="type-badge type-${evaluationData.type === 'positive' ? 'positive' : 'negative'}">
                        ${evaluationData.type === 'positive' ? 'Pozitif' : 'Negatif'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="section">
                <h2>💬 Değerlendirme Açıklaması</h2>
                <div class="description">
                  <h3>📝 Kullanıcı Yorumu</h3>
                  <p>${evaluationData.description}</p>
                </div>
              </div>
              
              <div class="section">
                <h2>📍 Konum Bilgileri</h2>
                <div class="location">
                  <h3>🌍 Adres</h3>
                  <p>${evaluationData.location?.address || evaluationData.location}</p>
                  <p style="margin-top: 10px; font-size: 12px; color: #64748b;">
                    Koordinatlar: ${evaluationData.location?.latitude || 0}, ${evaluationData.location?.longitude || 0}
                  </p>
                </div>
              </div>
              
              ${imageBase64 ? `
              <div class="section">
                <h2>📷 Medya</h2>
                <div class="media-container">
                  <img src="data:image/jpeg;base64,${imageBase64}" alt="Değerlendirme Fotoğrafı">
                  <div class="image-note">
                    📸 Bu değerlendirmeye fotoğraf eklenmiştir
                  </div>
                </div>
              </div>
              ` : ''}
            </div>
            
            <div class="footer">
              <p>📱 Bu rapor Worite! uygulaması tarafından oluşturulmuştur</p>
              <p>🕐 Oluşturulma Tarihi: ${new Date().toLocaleString('tr-TR')}</p>
            </div>
          </div>
        </body>
        </html>
      `;

      setPdfHtml(htmlContent);
    } catch (error) {
      console.log('PDF oluşturulurken hata:', error);
      setPdfHtml('<html><body><h1>Hata oluştu</h1></body></html>');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6366f1" />
        <Paragraph style={styles.loadingText}>PDF oluşturuluyor...</Paragraph>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WebView
        source={{ html: pdfHtml }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scalesPageToFit={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
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
  webview: {
    flex: 1,
  },
}); 