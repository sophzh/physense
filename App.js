import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SliderContext, { SliderProvider } from './components/Slidercontext';
import Login from './pages/Login';
import Tabs from './components/Tabs';
import { UsernameContext } from './components/UsernameContext';



const Stack = createStackNavigator();

export default function App() {
  const [username, setUsername] = useState('');


  return (
    <UsernameContext.Provider value={[username, setUsername]}>

    <SliderProvider>
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ 
            headerShown: false 
          }}
        />
        <Stack.Screen
          name="MainApp" // Name for your main application screen (e.g., Tabs)
          component={Tabs}
          options={{  
            headerShown: false
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </SliderProvider>
    </UsernameContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
