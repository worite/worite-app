import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Alert,
  Animated,
  BackHandler,
  Dimensions,
  Image,
  Modal,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(50));
  const [textAnim] = useState(new Animated.Value(0));
  const [buttonAnim] = useState(new Animated.Value(0));
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // Konum izni iste
    requestLocationPermission();
    
    // Animasyonları sırayla başlat
    const startAnimations = async () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      setTimeout(() => {
        Animated.timing(textAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }).start();
      }, 1000);
      setTimeout(() => {
        Animated.timing(buttonAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }).start();
      }, 2500);
    };
    startAnimations();
  }, []);



  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        console.log('Konum izni verildi');
        // İsteğe bağlı: Konumu al ve sakla
        const location = await Location.getCurrentPositionAsync({});
        console.log('Konum alındı:', location.coords);
      } else {
        console.log('Konum izni reddedildi');
        Alert.alert(
          'Konum İzni Gerekli',
          'Uygulamayı kullanabilmek için konum izni gereklidir. İzin verilmediği takdirde uygulama kapatılacaktır.',
          [
            { 
              text: 'İptal', 
              style: 'cancel',
              onPress: () => {
                // Uygulamayı kapat
                if (Platform.OS === 'ios') {
                  // iOS için uygulamayı kapat
                  Alert.alert(
                    'Uygulama Kapatılıyor',
                    'Konum izni verilmediği için uygulama kapatılıyor.',
                    [{ text: 'Tamam', style: 'default' }]
                  );
                } else {
                  // Android için uygulamayı kapat
                  BackHandler.exitApp();
                }
              }
            },
            { 
              text: 'Tekrar Dene', 
              onPress: () => {
                // Tekrar konum izni iste
                requestLocationPermission();
              }
            }
          ]
        );
      }
    } catch (error) {
      console.log('Konum izni alınırken hata:', error);
      Alert.alert(
        'Hata',
        'Konum izni alınırken bir hata oluştu. Uygulama kapatılacak.',
        [
          { 
            text: 'Tamam', 
            style: 'default',
            onPress: () => {
              if (Platform.OS === 'ios') {
                Alert.alert('Uygulama Kapatılıyor', 'Hata nedeniyle uygulama kapatılıyor.');
              } else {
                BackHandler.exitApp();
              }
            }
          }
        ]
      );
    }
  };

  const handleGetStarted = () => {
    setModalVisible(true);
  };

  const handleAcceptAndContinue = () => {
    setModalVisible(false);
    router.push('/municipality');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <LinearGradient
        colors={['#667eea', '#764ba2', '#f093fb']}
        style={styles.gradient}
      >
        <Animated.View 
          style={[
            styles.content,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }]
            }
          ]}
        >
          {/* Logo Alanı */}
          <View style={styles.logoContainer}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../assets/images/logo.png')} style={{ width: 220, height: 220, marginBottom: 12 }} resizeMode="contain" />
            </View>
            <Text style={styles.appSubtitle}>Sosyal Belediyecilik Platformu</Text>
          </View>

          {/* Ana Mesaj */}
          <Animated.View 
            style={[
              styles.messageContainer,
              {
                opacity: textAnim,
                transform: [{ scale: textAnim }]
              }
            ]}
          >
            <Text style={styles.welcomeText}>
              Hoş Geldiniz!
            </Text>
            <Text style={styles.mainMessage}>
              Hadi şehrimize katkıda bulunalım!
            </Text>
            <Text style={styles.subMessage}>
              Belediye hizmetlerini fotoğraflayın, değerlendirin ve şehrinizi daha iyi hale getirin.
            </Text>
          </Animated.View>

          {/* Başla Butonu */}
          <Animated.View 
            style={[
              styles.buttonContainer,
              {
                opacity: buttonAnim,
                transform: [{ translateY: buttonAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [30, 0]
                })}]
              }
            ]}
          >
            <TouchableOpacity 
              style={styles.getStartedButton}
              onPress={handleGetStarted}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#ffffff', '#f8fafc']}
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonText}>Başlayalım</Text>
                <Text style={styles.buttonIcon}>🚀</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>

          {/* Onay Modalı */}
          <Modal
            visible={modalVisible}
            transparent
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ backgroundColor: 'white', borderRadius: 16, padding: 24, width: '85%', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16, color: '#1e293b', textAlign: 'center' }}>
                  Kullanıcı Sorumluluk Onayı
                </Text>
                <Text style={{ fontSize: 16, color: '#000000', marginBottom: 20, textAlign: 'center', fontWeight: '600', lineHeight: 22 }}>
                  Paylaşımımda müstehcenlik, şiddet, küfür ve tehdit içeren içerik bulunmadığını, aksi durumda tüm sorumluluğun bana ait olduğunu kabul ediyorum.
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                  <TouchableOpacity 
                    style={{ 
                      borderWidth: 3, 
                      borderColor: '#000000', 
                      borderRadius: 4, 
                      width: 28, 
                      height: 28, 
                      justifyContent: 'center', 
                      alignItems: 'center',
                      backgroundColor: checked ? '#f0f9ff' : 'white'
                    }}
                    onPress={() => setChecked(!checked)}
                  >
                    {checked && <Text style={{ fontSize: 18 }}>✅</Text>}
                  </TouchableOpacity>
                  <Text style={{ marginLeft: 8, color: '#000000', fontSize: 16, fontWeight: '600' }}>
                    Okudum, anladım ve kabul ediyorum
                  </Text>
                </View>
                <Pressable
                  style={{
                    backgroundColor: checked ? '#6366f1' : '#cbd5e1',
                    borderRadius: 8,
                    paddingVertical: 12,
                    paddingHorizontal: 32,
                    opacity: checked ? 1 : 0.7
                  }}
                  disabled={!checked}
                  onPress={handleAcceptAndContinue}
                >
                  <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Devam Et</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          {/* Alt Bilgi */}
        </Animated.View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  wordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  pinIcon: {
    marginHorizontal: -2,
  },
  appSubtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginTop: 8,
  },
  anonymousText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    marginTop: 10,
  },
  kvkkLink: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
  },
  kvkkLinkText: {
    fontSize: 14,
    color: 'white',
    textDecorationLine: 'underline',
  },
  messageContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  welcomeText: {
    fontSize: 24,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 16,
    textAlign: 'center',
  },
  mainMessage: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 36,
  },
  subMessage: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 300,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 40,
  },
  getStartedButton: {
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 32,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#667eea',
    marginRight: 8,
  },
  buttonIcon: {
    fontSize: 20,
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
  oContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinOnO: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  iContainer: {
    position: 'relative',
    marginHorizontal: 4,
  },
  pinOnI: {
    position: 'absolute',
    top: -6,
    left: -4,
    right: 0,
    bottom: 0,
  },
}); 