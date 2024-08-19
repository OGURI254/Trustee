import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/Main/Home/HomeScreen';
import TrackProduct from '../Screens/Main/Home/ProductTracking/TrackProduct';
import MyWalletNaviagtor from './MyWalletNaviagtor';
import TransactionNavigator from './TransactionNavigator';
import Products from '../Screens/Main/Home/Products/Products';

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TrackProduct" component={TrackProduct} options={{ headerShown: false }} />
        <Stack.Screen name="TransactionNav" component={TransactionNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="WalletScreen" component={MyWalletNaviagtor} options={{ headerShown: false }} />
        <Stack.Screen name="Products" component={Products} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}