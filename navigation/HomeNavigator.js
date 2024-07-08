import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/Main/Home/HomeScreen';
import TrackProduct from '../Screens/Main/Home/ProductTracking/TrackProduct';

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TrackProduct" component={TrackProduct} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}