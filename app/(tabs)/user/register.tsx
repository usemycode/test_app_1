import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

const RegisterScreen = () => {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push('/user/login'); // Navigate back to the login screen
  };

  return (
    <View>
      <Text>Register Screen</Text>
      <Button title="Go to Login" onPress={navigateToLogin} /> {/* Add Login button */}
    </View>
  );
};

export default RegisterScreen;
