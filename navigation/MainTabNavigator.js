import { View, Text,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Main/HomeScreen'
import Account from '../Screens/Main/AccountScreens/Account';
import Message from '../Screens/Main/Message';
import Transaction from '../Screens/Main/Transaction';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HomeIcon from "../assets/home-icon.png"
import TransactionIcon from "../assets/transaction.png"
import AccountIcon from "../assets/account.png"
import MessageIcon from "../assets/message.png"
import AccountNavigator from './AccountNavigator';



const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Transactions" component={Transaction} options={{ headerShown: false, tabBarIcon:({focused, color, size})=> (<Image className="w-7 h-7" source={TransactionIcon}/>) }} />
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false, tabBarIcon:({focused, color, size})=> (<Image className="w-7 h-7" source={HomeIcon}/>) }} />
      <Tab.Screen name="Messages" component={Message} options={{ headerShown: false, tabBarIcon:({focused, color, size})=> (<Image className="w-7 h-7" source={MessageIcon}/>) }} />
      <Tab.Screen name="Account" component={AccountNavigator} options={{ headerShown: false, tabBarIcon:({focused, color, size})=> (<Image className="w-7 h-7" source={AccountIcon}/>) }} />
    </Tab.Navigator>
  )
}