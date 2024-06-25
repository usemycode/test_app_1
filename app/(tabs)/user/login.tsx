import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const router = useRouter();

  const handleLogin = async () => {
    console.log('Login button pressed'); // Add this line
    // Perform login logic
    await AsyncStorage.setItem('isLoggedIn', 'true');
    router.replace('/user/setting'); // Ensure it navigates within the user stack
  };
  

  const navigateToRegister = () => {
    router.push('/user/register'); // Navigate to the registration screen
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={navigateToRegister} /> {/* Add Register button */}
    </View>
  );
};

export default LoginScreen;
