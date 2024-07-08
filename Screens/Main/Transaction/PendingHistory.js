import { View, Text,TouchableOpacity,ScrollView,SafeAreaView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function PendingHistory({navigation}) {
  return (
    <SafeAreaView className="p-2">
      <ScrollView>
        <View className="flex-row justify-between items-center mt-2">
        <TouchableOpacity onPress={() => navigation.navigate('TransactionsHome')} >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
        <Ionicons name="notifications" size={24} color="black" />
        </TouchableOpacity>
        </View>
        <Text className="text-[17px] text-center">Recent Transactions</Text>
        <View className="mt-2">
          <View className="border justify-between flex-row items-center p-2 rounded">
            <View className="h-7 w-7 bg-[#30A6B5] rounded-full"></View>
            <Text>Kim Thrifts</Text>
            <Text className="">-2000 KSHS</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}