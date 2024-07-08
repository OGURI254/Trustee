import { View, SafeAreaView, TextInput, TouchableOpacity, Text } from 'react-native'
import React from 'react'

export default function EnterOTP({navigation}) {
  return (
    <SafeAreaView className="flex-1">
      <View className="mx-2 mt-4">
        <Text className="font-bold text-[24px] mt-5">OTP Verification</Text>
        <Text>Enter the verification code we just sent to your email address</Text>
        <View className="flex-row gap-3 mt-4 items-center justify-center">
          <TextInput className="border text-center font-bold text-[20px] w-12 h-12 p-1 rounded border-gray-200" />
          <TextInput className="border text-center font-bold text-[20px] w-12 h-12 p-1 rounded border-gray-200" />
          <TextInput className="border text-center font-bold text-[20px] w-12 h-12 p-1 rounded border-gray-200" />
          <TextInput className="border text-center font-bold text-[20px] w-12 h-12 p-1 rounded border-gray-200" />
        </View>
        <TouchableOpacity className="bg-[#2121FC] w-[170px] items-center mx-auto mt-5 p-2" onPress={() => navigation.navigate('CreateNewPassword')}><Text className="text-white font-bold text-[19px]">Verify</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}