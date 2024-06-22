import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Dispute from '../../assets/Dispute.png'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function OnboardingScreen4({navigation}) {
  return (
    <SafeAreaView className="flex-1 bg-[#4141FF]">
      <View className=" items-center flex-1 flex flex-col justify-evenly">
        <View>
          <Text className="text-white text-[24px] text-center font-bold">Easy Dispute Resolution</Text>
          <Text className="text-white mt-4 text-center text-[18px]">Encounter an issue? Our dedicated support team is here to mediate and resolve disputes quickly and fairly</Text>
        </View>
        <Image source={Dispute} />
        <View className="items-center gap-4">
          <View className="flex flex-row gap-1">
            <View className="h-3 w-3 bg-white rounded-full"></View>
            <View className="h-3 w-3 bg-white rounded-full"></View>
            <View className="h-3 w-3  bg-white  border-black rounded-full"></View>
            <View className="h-3 w-3 bg-white rounded-full"></View>
          </View>
          <TouchableOpacity className="bg-[#2121FC] items-center p-3 w-[130px] flex flex-row justify-center text-white" onPress={() => navigation.navigate('Auth', { screen: 'Login' })}><Text className="text-white font-bold">Next</Text><Text className="text-white ml-2"><AntDesign  name="arrowright" size={24} /></Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}