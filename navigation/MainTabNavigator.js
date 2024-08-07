import { View, Text,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HomeIcon from "../assets/home-icon.png"
import TransactionIcon from "../assets/transaction.png"
import AccountIcon from "../assets/account.png"
import MessageIcon from "../assets/message.png"
import AccountNavigator from './AccountNavigator';
import HomeNavigator from './HomeNavigator';
import MessageNavigator from './MessageNavigator';
import TransactionNavigator from './TransactionNavigator';



const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Transactions" component={TransactionNavigator} options={{ headerShown: false, tabBarIcon:({focused, color, size})=> (<Image className="w-7 h-7" source={TransactionIcon}/>) }} />
      <Tab.Screen name="Home" component={HomeNavigator} options={{ headerShown: false, tabBarIcon:({focused, color, size})=> (<Image className="w-7 h-7" source={HomeIcon}/>) }} />
      <Tab.Screen name="Messages" component={MessageNavigator} options={{ headerShown: false, tabBarIcon:({focused, color, size})=> (<Image className="w-7 h-7" source={MessageIcon}/>) }} />
      <Tab.Screen name="Account" component={AccountNavigator} options={{ headerShown: false, tabBarIcon:({focused, color, size})=> (<Image className="w-7 h-7" source={AccountIcon}/>) }} />
    </Tab.Navigator>
  )
}