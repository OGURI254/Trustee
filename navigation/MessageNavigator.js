import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Message from '../Screens/Main/Message/Message';
import ContactUs from '../Screens/Main/Message/ContactUs';
import SystemMessages from '../Screens/Main/Message/SystemMessages';
import Promotions from '../Screens/Main/Message/Promotions';
import ProductUpdates from '../Screens/Main/Message/ProductUpdates';

const Stack = createStackNavigator();

export default function MessageNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Message" component={Message} options={{ headerShown: false }} />
        <Stack.Screen name="ContactUs" component={ContactUs} options={{ headerShown: false }} />
        <Stack.Screen name="SystemMessages" component={SystemMessages} options={{ headerShown: false }} />
        <Stack.Screen name="PromotionMessages" component={Promotions} options={{ headerShown: false }} />
        <Stack.Screen name="ProductMessages" component={ProductUpdates} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}