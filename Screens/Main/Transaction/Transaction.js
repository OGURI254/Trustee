import { View, Text, SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Transaction({navigation}) {
  return (
    <SafeAreaView className="flex-1">
      <View className="h-full mt-14 w-[60%] rounded-tr-3xl bg-black p-2">
        <Text className="text-white mt-2 font-bold text-[17px]">Transactions</Text>
        <View className="mt-3">
          <TouchableOpacity className="flex-row items-center mt-5" onPress={() => navigation.navigate('PendingPayments')}><MaterialIcons name="pending-actions" size={20} color="white" /><Text className="text-white ml-2">Pending payments</Text></TouchableOpacity>
          <TouchableOpacity className="flex-row items-center mt-5" onPress={() => navigation.navigate('PendingRequests')}><Ionicons name="notifications" size={20} color="white" /><Text className="text-white ml-2">Pending Requests</Text></TouchableOpacity>
          <TouchableOpacity className="flex-row items-center mt-5" onPress={() => navigation.navigate('PendingHistory')}><AntDesign name="clockcircleo" size={20} color="white" /><Text className="text-white ml-2">Pending history</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}