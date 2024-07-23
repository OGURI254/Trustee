import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function PendingRequestScreen({navigation}) {
  return (
    <SafeAreaView className="p-2">
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('TransactionScreen')} className="mt-2">
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-[17px] text-center">Pending Requests</Text>
        <View className="mt-2">
          <View className="border w-[140px] items-center p-2 rounded">
            <View className="h-7 w-7 bg-[#30A6B5] rounded-full"></View>
            <Text className="mt-2 font-bold text-[18px]">2000 KSHS</Text>
            <Text className="mt-2">Kim Thrifts</Text>
            <TouchableOpacity className="bg-[#4242FC] mt-2 w-[130px] items-center p-2 rounded-3xl"><Text className="text-white">PAY</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}