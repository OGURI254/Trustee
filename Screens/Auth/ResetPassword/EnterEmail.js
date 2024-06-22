import { View,SafeAreaView,TextInput,TouchableOpacity, Text } from 'react-native'
import React from 'react'

export default function EnterEmail({navigation}) {
  return (
    <SafeAreaView className="flex-1">
      <View className="mx-2 mt-4">
        <Text className="font-bold text-[24px]">Forgot Password?</Text>
        <Text>Please enter the email address linked with your account</Text>
        <TextInput className="border mt-5 p-2 rounded border-gray-200" placeholder='Email'/>
        <TouchableOpacity className="bg-[#2121FC] w-[170px] items-center mx-auto mt-5 p-2" onPress={() => navigation.navigate('EnterOtp')}><Text className="text-white font-bold text-[19px]">Send Code</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}