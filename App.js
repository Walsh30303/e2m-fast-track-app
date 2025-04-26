// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import SiteListScreen from './src/screens/SiteListScreen';
import SiteHealthScreen from './src/screens/SiteHealthScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#B67AE0',       // E2M purple for back button/title
          contentStyle: { backgroundColor: '#121212' },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={SiteListScreen}
          options={{ title: 'Your Sites' }}
        />

        <Stack.Screen
          name="Health"
          component={SiteHealthScreen}
          options={{ title: 'Site Health Overview' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
