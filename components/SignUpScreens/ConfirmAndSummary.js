import { View, Text,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'


export default function ConfirmAndSummary({navigation}) {
  return (
    <SafeAreaView className="p-3 flex-1 justify-between">
      <View className="mt-2">
        <TouchableOpacity className="justify-end items-end " onPress={() => navigation.navigate('Main', { screen: 'Home' })}><Text className="text-gray-400 mr-3 mt-2 font-bold text-[17px]">Skip</Text></TouchableOpacity>
        <Text className="mt-3 font-bold text-[18px] text-[#12636D]">Review Your Information</Text>
        <Text className="mt-2">Please review the information you provided to confirm its correct.</Text>
      </View>
      <View>
        <View className="flex-row mb-9 items-center justify-center">
          <View className="h-3 w-3 rounded-full bg-[#12636D]"></View>
          <View className="h-3 w-3 rounded-full bg-[#12636D] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#12636D] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#12636D] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#12636D] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#12636D] ml-1"></View>
        </View>
        <TouchableOpacity className="mx-auto bg-[#2121FC] justify-center flex-row p-2 rounded-md w-[200px] items-center" onPress={() => navigation.navigate('Main', { screen: 'Home' })}><Text className="text-white font-bold text-[17px] mr-2">Confirm and Finish</Text></TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}