import { View, Text,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';

export default function IntentionOfUse({navigation}) {
  return (
    <SafeAreaView className="p-3 flex-1 justify-between">
      <View className="mt-2">
        <TouchableOpacity className="justify-end items-end " onPress={() => navigation.navigate('BusinessRelatedQS')}><Text className="text-gray-400 mr-3 mt-2 font-bold text-[17px]">Skip</Text></TouchableOpacity>
        <Text className="mt-3 font-bold text-[18px] text-[#12636D]">How Do You Plan to Use Trustee? </Text>
        <Text className="mt-2"> Let us know your primary use for the app to tailor your experience.</Text>
        <View className="mt-5">
          <View className="border flex-row justify-between items-center mt-2 border-gray-400 p-1">
            <Text>Business Transactions</Text>
            <CheckBox containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                padding: 0,
                marginRight:0
              }} />
          </View>
          <View className="border flex-row justify-between items-center mt-2 border-gray-400 p-1">
            <Text>Personal Purchases</Text>
            <CheckBox containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                padding: 0,
                marginRight:0
              }} />
          </View>
          <View className="border flex-row justify-between items-center mt-2 border-gray-400 p-1">
            <Text>Track Products</Text>
            <CheckBox containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                padding: 0,
                marginRight:0
              }} />
          </View>
          <View className="border flex-row justify-between items-center mt-2 border-gray-400 p-1">
            <Text>Others</Text>
            <CheckBox containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                padding: 0,
                marginRight:0
              }} />
          </View>
        </View>
      </View>
      <View>
        <View className="flex-row mb-9 items-center justify-center">
          <View className="h-3 w-3 rounded-full bg-[#12636D]"></View>
          <View className="h-3 w-3 rounded-full bg-[#12636D] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#12636D] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#12636D] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#c0e7ec] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#c0e7ec] ml-1"></View>
        </View>
        <TouchableOpacity className="mx-auto bg-[#2121FC] justify-center flex-row p-2 rounded-md w-[150px] items-center" onPress={() => navigation.navigate('BusinessRelatedQS')}><Text className="text-white font-bold text-[17px] mr-2">Next</Text><AntDesign name="arrowright" size={20} color="white" /></TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}