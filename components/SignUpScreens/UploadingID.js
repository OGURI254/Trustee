import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function UploadingID({ navigation }) {
  return (
    <SafeAreaView className="p-3 flex-1 justify-between">
      <View className="mt-2">
        <TouchableOpacity className="justify-end items-end " onPress={() => navigation.navigate('IntentionOfUseScreen')}><Text className="text-gray-400 mr-3 mt-2 font-bold text-[17px]">Skip</Text></TouchableOpacity>
        <Text className="mt-3 font-bold text-[18px] text-[#12636D]">Please upload your ID card photo </Text>
        <Text className="mt-2"> Upload a photo of your ID for verification purposes.</Text>
        <View className="mt-5 border p-3 rounded border-[#30A6B5]">
          <View>
            <Text>Front</Text>
            <View className="p-2 bg-gray-300 rounded">
              <View className="border-dashed border-2  border-[#2121FC] p-2">
                <TouchableOpacity className="mx-auto w-[120px] mt-3 items-center p-1 rounded bg-[#6FF940]"><Text className=" font-bold text-white">Upload</Text></TouchableOpacity>
                <Text className="text-center mt-2 font-semibold">or Drag and Drop a file</Text>
                <Text className="text-center mt-1 text-[10px]">supported formarts: JPEG,PNG,PDF</Text>
              </View>
            </View>
          </View>
          <View>
            <Text>Back</Text>
            <View className="p-2 bg-gray-300 rounded">
              <View className="border-dashed border-2  border-[#2121FC] p-2">
                <TouchableOpacity className="mx-auto w-[120px] mt-3 items-center p-1 rounded bg-[#6FF940]"><Text className=" font-bold text-white">Upload</Text></TouchableOpacity>
                <Text className="text-center mt-2 font-semibold">or Drag and Drop a file</Text>
                <Text className="text-center mt-1 text-[10px]">supported formarts: JPEG,PNG,PDF</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View className="flex-row mb-9 items-center justify-center">
          <View className="h-3 w-3 rounded-full bg-[#12636D]"></View>
          <View className="h-3 w-3 rounded-full bg-[#12636D] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#12636D] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#c0e7ec] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#c0e7ec] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#c0e7ec] ml-1"></View>
        </View>
        <TouchableOpacity className="mx-auto bg-[#2121FC] justify-center flex-row p-2 rounded-md w-[150px] items-center" onPress={() => navigation.navigate('IntentionOfUseScreen')}><Text className="text-white font-bold text-[17px] mr-2">Next</Text><AntDesign name="arrowright" size={20} color="white" /></TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}