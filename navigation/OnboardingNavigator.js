import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import OnboardingScreen1 from '../Screens/Onboarding/OnboardingScreen1'
import OnboardingScreen4 from '../Screens/Onboarding/OnboardingScreen4'
import OnboardingScreen3 from '../Screens/Onboarding/OnboardingScreen3'
import OnboardingScreen2 from '../Screens/Onboarding/OnboardingScreen2'

const Stack = createStackNavigator();

export default function OnboardingNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding1" component={OnboardingScreen1} options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding2" component={OnboardingScreen2} options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding3" component={OnboardingScreen3} options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding4" component={OnboardingScreen4} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}