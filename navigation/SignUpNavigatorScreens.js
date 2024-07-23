import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FirstTimerScreen from '../components/SignUpScreens/FirstTimerScreen';
import YearOfBirth from '../components/SignUpScreens/YearOfBirth';
import UploadingID from '../components/SignUpScreens/UploadingID';
import IntentionOfUse from '../components/SignUpScreens/IntentionOfUse';
import BusinessRelatedQuestion from '../components/SignUpScreens/BusinessRelatedQuestion';
import ConfirmAndSummary from '../components/SignUpScreens/ConfirmAndSummary';

const Stack = createStackNavigator();

export default function SignUpNavigatorScreens() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="FirstTimerScreen" component={FirstTimerScreen} options={{ headerShown: false }} />
        <Stack.Screen name="YearOfBirthScreen" component={YearOfBirth} options={{ headerShown: false }} />
        <Stack.Screen name="UploadingIDScreen" component={UploadingID} options={{ headerShown: false }} />
        <Stack.Screen name="IntentionOfUseScreen" component={IntentionOfUse} options={{ headerShown: false }} />
        <Stack.Screen name="BusinessRelatedQS" component={BusinessRelatedQuestion} options={{ headerShown: false }} />
        <Stack.Screen name="ConfirmAndSummary" component={ConfirmAndSummary} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}