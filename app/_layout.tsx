import { DarkTheme, DefaultTheme, ThemeProvider as RNThemeProvider } from '@react-navigation/native';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { theme } from '@/config/Theme';
import store from '@/redux/store';
import { Provider } from 'react-redux';
import { LoadingProvider } from '@/config/context/LoadingContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <RNThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StyledThemeProvider theme={theme}>
        <LoadingProvider>
          <Provider store={store}>
            <Stack>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
          </Provider>
        </LoadingProvider>
      </StyledThemeProvider>
    </RNThemeProvider>
  );
}
