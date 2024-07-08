import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../Screens/Main/AccountScreens/Account';
import PersonalInfoScreen from '../Screens/Main/AccountScreens/PersonalInfoScreen';
import SettingScreen from '../Screens/Main/AccountScreens/SettingScreen';
import NotificationScreen from '../Screens/Main/AccountScreens/NotificationScreen';
import PrivacySettingScreen from '../Screens/Main/AccountScreens/PrivacySettingScreen';
import ContactAndFAQScreen from '../Screens/Main/AccountScreens/ContactAndFAQScreen';
import TwoFactorAuthentication from '../Screens/Main/AccountScreens/TwoFactorAuthentication';

const Stack = createStackNavigator();

export default function AccountNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="AccountHome" component={Account} options={{ headerShown: false }} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Notifications" component={NotificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Privacy" component={PrivacySettingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ContactAndFAQ" component={ContactAndFAQScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TwoFactor" component={TwoFactorAuthentication} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}