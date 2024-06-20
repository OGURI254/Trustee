import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'

export default function OnboardingScreen1({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-[#2121FC]">
      <View className="mt-6">
        <Text className="text-white text-[24px] text-center mt-5 font-bold">Welcome to Trustee</Text>
        <Text className="text-white mt-4 text-center">Your trusted escrow service for secure transactions. Ensure peace of mind with every deal you make</Text>
        <TouchableOpacity className="bg-[#2121FC] text-white" onPress={() => navigation.navigate('Onboarding2')}><Text className="text-white font-bold">Next</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}