import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loginStatus = await AsyncStorage.getItem('isLoggedIn');
      setIsLoggedIn(loginStatus === 'true');
      setAppIsReady(true);
      SplashScreen.hideAsync();
    };
    checkLoginStatus();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <Stack initialRouteName={isLoggedIn ? '/user/setting' : '/user/login'}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="user/login" options={{ headerShown: false }} />
      <Stack.Screen name="user/setting" options={{ headerShown: false }} />
      <Stack.Screen name="user/register" options={{ headerShown: false }} />
    </Stack>
  );
}
