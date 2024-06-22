import { View, Text,StatusBar, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Handshake from '../../assets/Handshake.png'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function OnboardingScreen1({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-[#4141FF]">
      <StatusBar barStyle="light-content" backgroundColor="#2121FC" />
      <View className="items-center flex-1 flex flex-col justify-evenly">
        <View>
          <Text className="text-white text-[24px] text-center font-bold">Welcome to Trustee</Text>
          <Text className="text-white mt-4 text-center text-[18px]">Your trusted escrow service for secure transactions. Ensure peace of mind with every deal you make</Text>
        </View>
        <Image source={Handshake} />
        <View className="items-center gap-4">
          <View className="flex flex-row gap-1">
            <View className="h-3 w-3 bg-white rounded-full"></View>
            <View className="h-3 w-3 bg-black rounded-full"></View>
            <View className="h-3 w-3  bg-black  border-black rounded-full"></View>
            <View className="h-3 w-3 bg-black rounded-full"></View>
          </View>
          <TouchableOpacity className="bg-[#2121FC] items-center p-3 w-[130px] flex flex-row justify-center text-white" onPress={() => navigation.navigate('Onboarding2')}><Text className="text-white font-bold">Next</Text><Text className="text-white ml-2"><AntDesign  name="arrowright" size={24} /></Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}