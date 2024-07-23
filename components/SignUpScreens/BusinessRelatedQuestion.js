import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function BusinessRelatedQuestion({ navigation }) {
  return (
    <SafeAreaView className="p-3 flex-1 justify-between">
      <View className="mt-2">
        <TouchableOpacity className="justify-end items-end " onPress={() => navigation.navigate('ConfirmAndSummary')}><Text className="text-gray-400 mr-3 mt-2 font-bold text-[17px]">Skip</Text></TouchableOpacity>
        <Text className="mt-3 font-bold text-[18px] text-[#12636D]">Business Information </Text>
        <Text className="mt-2">Please provide additional details about your business.</Text>
        <View className="mt-5">
          <View>
            <View className="flex-row">
              <Text>Business Name</Text>
              <Text className="ml-2 text-red-500">*</Text>
            </View>
            <TextInput className="border mt-1 p-1 rounded border-gray-400" />
          </View>
          <View className="mt-2">
            <View className="flex-row">
              <Text>Business Information number</Text>
              <Text className="ml-2 text-red-500">*</Text>
            </View>
            <TextInput className="border mt-1 p-1 rounded border-gray-400" />
          </View>
          <View>
            <View className="flex-row">
              <Text>Contact Information</Text>
              <Text className="ml-2 text-red-500">*</Text>
            </View>
            <TextInput className="border mt-1 p-1 rounded border-gray-400" />
          </View>
          <View>
            <View className="flex-row">
              <Text>Business Description</Text>
              <Text className="ml-2 text-red-500">*</Text>
            </View>
            <TextInput className="border mt-1 p-1 rounded border-gray-400" multiline={true} numberOfLines={5} />
          </View>
        </View>
      </View>
      <View>
        <View className="flex-row mb-9 items-center justify-center">
          <View className="h-3 w-3 rounded-full bg-[#12636D]"></View>
          <View className="h-3 w-3 rounded-full bg-[#12636D] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#12636D] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#12636D] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#12636D] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#c0e7ec] ml-1"></View>
        </View>
        <TouchableOpacity className="mx-auto bg-[#2121FC] justify-center flex-row p-2 rounded-md w-[150px] items-center" onPress={() => navigation.navigate('ConfirmAndSummary')}><Text className="text-white font-bold text-[17px] mr-2">Next</Text><AntDesign name="arrowright" size={20} color="white" /></TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}