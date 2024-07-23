import { View, StatusBar, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import WomanLaptopIMage from "../../../assets/Woman-Laptop.png"
import { AntDesign } from '@expo/vector-icons';
import Money from '../../../assets/Money.png'
import Mpesa from '../../../assets/Mpesa.png'

export default function HomeScreen({navigation}) {

  //Get details from the store
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  //Extract First name from the user result response
  const firstName = user?.result.name?.split(' ')[0] || '';

  // Function to get the greeting based on the current time
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  const greeting = getGreeting();

  console.log('user', user)
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#0000FF" />
      <ScrollView className="p-2">
        <View className="flex-row justify-between items-center mt-3">
          <Text className="font-bold text-[20px]">{greeting}, <Text className="text-[#2121FC]">{firstName}</Text></Text>
          <View className="flex-row items-center">
            <TouchableOpacity><Feather name="clock" size={24} color="black" /></TouchableOpacity>
            <TouchableOpacity className="ml-3"><Ionicons name="notifications" size={24} color="black" /></TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-between items-center">
          <View className="bg-[#bcdee2] border-[#30A6B5] border-[0.8px] items-end p-1 mt-3 h-[80px] rounded w-[220px]">
            <Image source={WomanLaptopIMage} />
          </View>
          <TouchableOpacity className="border border-gray-300 flex-row p-1 rounded-md justify-between w-[80px]"><Text className="text-[#12636D]">Today</Text><AntDesign name="caretdown" size={18} color="gray" /></TouchableOpacity>
        </View>
        <View className="mt-4 flex-row justify-between items-center">
          <TouchableOpacity className="bg-[#f1e3d8] flex-row justify-center items-center border-[#FF9A6C] border-[0.8px] rounded w-[48%] h-[140px] p-3">
            <Feather name="clock" size={40} color="black" />
            <View className="flex-1">
              <Text className="text-[18px] text-center flex-wrap">Recent activities</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#e7d9f3] p-2 flex-row items-center justify-center border-[0.8px] border-[#C8A0E8]  rounded w-[48%] h-[140px]" onPress={() => navigation.navigate('TrackProduct')}>
            <View className="border-[#B478E4] justify-center items-center border-[3px] rounded-2xl h-full w-[35px]"><Text>12</Text>
              <View className="bg-[#B478E4] w-full h-4 items-center justify-center mt-5"><Text className="text-[9px] text-white">Track</Text></View>
            </View>
            <Text className="ml-2 flex-wrap text-center text-[18px]">Track your Product</Text>
          </TouchableOpacity>
        </View>
        <View className="mt-4 flex-row items-center justify-between">
          <TouchableOpacity className="bg-[#e7d9f3] flex-row justify-center items-center border-[0.8px] border-[#C8A0E8]  rounded w-[48%] h-[140px]" onPress={() => navigation.navigate('TransactionNav')}>
            <Image source={Money} />
            <Text className="ml-2">Transactions</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#f1e3d8] p-3 border-[#FF9A6C] border-[0.8px] rounded w-[48%] h-[140px] flex-row justify-center items-center">
            <Ionicons  name="chatbubbles-outline" size={40} color="black" />
            <View className="flex-1">
              <Text className="flex-wrap text-center text-[18px]">Chat with Clients</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="mt-4 flex-row items-center justify-between">
        <TouchableOpacity className="bg-[#f1e3d8] p-3 border-[#FF9A6C] border-[0.8px] rounded w-[48%] h-[140px] flex-row justify-center items-center" onPress={() => navigation.navigate('WalletScreen')}>
            <Image source={Mpesa}/>
            <View className="flex-1">
              <Text className="flex-wrap text-center text-[18px]">My wallet</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#f1e3d8] p-3 border-[#FF9A6C] border-[0.8px] rounded w-[48%] h-[140px] flex-row justify-center items-center">
            <Ionicons  name="chatbubbles-outline" size={40} color="black" />
            <View className="flex-1">
              <Text className="flex-wrap text-center text-[18px]">All Products</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}