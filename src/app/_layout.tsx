import '@/styles/globals.css';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import {
  Nunito_400Regular,
  Nunito_800ExtraBold,
  Nunito_600SemiBold
} from '@expo-google-fonts/nunito'
import { StatusBar } from 'react-native';


export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '/(auth)/sign-up',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Nunito_400Regular,
    Nunito_800ExtraBold,
    Nunito_600SemiBold
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {


  return (
    <>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <Stack screenOptions={{ headerShown: false }} />
    </>  
  );
}
