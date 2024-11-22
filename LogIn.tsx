import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';

const LoginPage = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle login logic
  const handleLogin = () => {
    // Example validation, replace with actual authentication logic
    if (username === 'admin' && password === 'password123') {
      Alert.alert("Login Successful!", "Welcome to the dashboard.");
      // Navigate to the dashboard screen
      navigation.navigate('Dashboard'); // Example redirect to a "Dashboard" screen
    } else {
      Alert.alert("Invalid Credentials", "Please check your username and password.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/schoolbuilding.png')} style={styles.logo} />
        <Text style={styles.headerText}>Empowering the Nation School</Text>
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Username:</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Enter your username"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>

        <Button title="Login" onPress={handleLogin} color="#0095ff" />
      </View>

      <View style={styles.footer}>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
        <Button title="About Us" onPress={() => navigation.navigate('AboutUs')} />
        <Button title="Contact Us" onPress={() => navigation.navigate('ContactUs')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 100,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  loginContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  formGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    fontSize: 16,
  },
  footer: {
    marginTop: 20,
    width: '80%',
    justifyContent: 'space-between',
  },
});

export default LoginPage;
