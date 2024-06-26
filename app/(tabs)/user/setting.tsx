import React from 'react'; // Ensure React is imported
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { supabase } from '../../../supabase/supabase';

const SettingScreen = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await AsyncStorage.setItem('isLoggedIn', 'false');
    router.replace('/user/login'); // Ensure it navigates within the user stack
  };

  return (
    <View>
      <Text>Setting Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default SettingScreen;
