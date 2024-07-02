import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../Screens/Main/AccountScreens/Account';
import PersonalInfoScreen from '../Screens/Main/AccountScreens/PersonalInfoScreen';

const Stack = createStackNavigator();

export default function AccountNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="AccountHome" component={Account} options={{ headerShown: false }} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}