import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Transaction({ navigation }) {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <TouchableOpacity className="bg-[#2D4CED] rounded mt-10 mx-auto w-[200px] items-center justify-center h-[70px]" onPress={() => navigation.navigate('TransactionScreen')}>
          <Text className="text-white font-bold text-[20px]">Transactions</Text>
        </TouchableOpacity>
        <View>
          <View className="h-[4px] bg-gray-300 mt-5"></View>
          <View className="flex-row justify-between px-2 mt-3">
            <View className="items-center">
              <Text className="font-bold text-[18px]">[Payment Code]</Text>
              <Text className="text-[18px]">[Amount]</Text>
            </View>
            <View className="items-center">
              <Text className="font-bold text-[18px]">[Item Ticket]</Text>
              <Text className="text-[18px]">[Time]</Text>
            </View>
          </View>
          <TouchableOpacity className="mt-4 mx-auto "><Text className="text-[18px]">View Details</Text></TouchableOpacity>
          <View className="h-[4px] bg-gray-300 mt-5"></View>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}