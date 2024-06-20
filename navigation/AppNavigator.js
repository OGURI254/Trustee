import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import OnboardingNavigator from './OnboardingNavigator';
import MainTabNavigator from './MainTabNavigator';

const Stack = createStackNavigator();

export default function AppNavigator() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={OnboardingNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }}/>
      <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}