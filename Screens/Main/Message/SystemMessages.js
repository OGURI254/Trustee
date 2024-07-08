import { View, Text,SafeAreaView,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

export default function SystemMessages({navigation}) {
  return (
    <SafeAreaView>
        <ScrollView className="mx-2">
            <View className="mt-3 flex-row items-center justify-between">
                <TouchableOpacity onPress={() => navigation.navigate('Message')}><Feather name="arrow-left" size={24} color="black" /></TouchableOpacity>
                <TouchableOpacity><Text>Clear</Text></TouchableOpacity>
            </View>
            <Text className="text-center text-[17px]">System Messages</Text>
            <View className="mt-5">
                <View className="flex-row items-center">
                    <View className="rounded-full h-9 w-9 bg-gray-300 border-2"></View>
                    <View className="ml-2 items-center justify-center border rounded-xl p-2 bg-[#FEBBBA]">
                        <Text>System Update Required</Text>
                        <View className="flex-row mt-2">
                            <Text className="text-gray-700 text-[13px]">23/05/2024</Text>
                            <Text className="ml-3 text-gray-700 text-[13px]">10:40am</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}