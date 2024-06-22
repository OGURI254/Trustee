import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'
import RealTracking from '../../assets/RealTracking.png'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function OnboardingScreen3({navigation}) {
  return (
    <SafeAreaView className="flex-1 bg-[#4141FF]">
      <View className=" items-center flex-1 flex flex-col justify-evenly mx-2">
        <View>
          <Text className="text-white text-[24px] text-center font-bold">Real-Time Tracking</Text>
          <Text className="text-white mt-4 text-center text-[18px]">Track your shipments in real-time from the moment they leave the seller until they arrive at your doorstep.</Text>
        </View>
        <Image source={RealTracking} />
        <View className="items-center gap-4">
          <View className="flex flex-row gap-1">
            <View className="h-3 w-3 bg-white rounded-full"></View>
            <View className="h-3 w-3 bg-white rounded-full"></View>
            <View className="h-3 w-3  bg-white  border-black rounded-full"></View>
            <View className="h-3 w-3 bg-black rounded-full"></View>
          </View>
          <TouchableOpacity className="bg-[#2121FC] items-center p-3 w-[130px] flex flex-row justify-center text-white" onPress={() => navigation.navigate('Onboarding4')}><Text className="text-white font-bold">Next</Text><Text className="text-white ml-2"><AntDesign  name="arrowright" size={24} /></Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}