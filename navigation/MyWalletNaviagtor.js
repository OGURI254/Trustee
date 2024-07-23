import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native'
import React from 'react'
import MyWallet from '../Screens/Main/Home/MyWallet/MyWallet';
const Stack = createStackNavigator();


export default function MyWalletNaviagtor() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="MyWallet" component={MyWallet} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}