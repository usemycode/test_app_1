import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, Button, View, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginRegisterScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState(''); // New state for username
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleLoginRegister = () => {
    setIsLogin(!isLogin);
    setUsername(''); // Reset username state
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleLoginRegister = () => {
    // Implement your login or registration logic here
    if (isLogin) {
      // Handle login
    } else {
      // Handle registration
      if (!username || !email || !password || !confirmPassword) {
        Alert.alert('Error', 'Please fill in all fields.');
        return;
      }

      if (password !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match');
        return;
      }

      // Proceed with registration logic
    }
  };

  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
        <ThemedText type="title">{isLogin ? 'Login' : 'Register'}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.formContainer}>
        {!isLogin && (
          <>
            <ThemedText>Username</ThemedText>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </>
        )}

        <ThemedText>Email</ThemedText>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <ThemedText>Password</ThemedText>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {!isLogin && (
          <>
            <ThemedText>Confirm Password</ThemedText>
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </>
        )}

        <Button
          title={isLogin ? 'Login' : 'Register'}
          onPress={handleLoginRegister}
        />
        
        <View style={styles.toggleContainer}>
          <ThemedText>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
          </ThemedText>
          <Button
            title={isLogin ? 'Register' : 'Login'}
            onPress={toggleLoginRegister}
          />
        </View>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  formContainer: {
    paddingHorizontal: 20,
    width: '80%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
  },
  reactLogo: {
    height: 178,
    width: 290,
    marginBottom: 20,
  },
  toggleContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
