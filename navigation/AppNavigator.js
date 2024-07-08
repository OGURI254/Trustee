import { View, Text,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import OnboardingNavigator from './OnboardingNavigator';
import MainTabNavigator from './MainTabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function AppNavigator() {
  

  return (
    <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}