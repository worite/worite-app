import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { LocationProvider } from '../context/LocationContext';

export default function RootLayout() {
  return (
    <LocationProvider>
      <PaperProvider>
        <StatusBar style="auto" />
        <Stack>
          <Stack.Screen 
            name="index" 
            options={{ 
              title: 'Belediye Seçimi',
              headerStyle: {
                backgroundColor: '#6366f1',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} 
          />
          <Stack.Screen 
            name="submit" 
            options={{ 
              title: 'Gönderi Oluştur',
              headerStyle: {
                backgroundColor: '#6366f1',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} 
          />
          <Stack.Screen 
            name="reports" 
            options={{ 
              title: 'Raporlar',
              headerStyle: {
                backgroundColor: '#6366f1',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} 
          />
        </Stack>
      </PaperProvider>
    </LocationProvider>
  );
}
