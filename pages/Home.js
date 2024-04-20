import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomePage = () => {
  const handleButtonPress = () => {
    alert('Button pressed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to My Homepage</Text>
      <Text style={styles.content}>
        This is a basic homepage built using React Native and Expo.
      </Text>
      <Button title="Press Me" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomePage;