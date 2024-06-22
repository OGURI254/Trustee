import { View,SafeAreaView,Image,TouchableOpacity, Text } from 'react-native'
import React from 'react'
import PassSuccessIMage from '../../../assets/passSuccess.png'

export default function PasswordChanged({navigation}) {
  return (
    <SafeAreaView className="flex-1">
      <View className="mx-2 mt-10 items-center">
        <Image source={PassSuccessIMage}/>
        <Text className="font-bold text-[24px]">Password changed</Text>
        <Text className="text-center">Your password has been changed successfully</Text>
        <TouchableOpacity className="bg-[#2121FC] w-[170px] items-center mx-auto mt-5 p-2 rounded" onPress={() => navigation.navigate('Login')}><Text className="text-white font-bold text-[19px]">Back to Login</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}