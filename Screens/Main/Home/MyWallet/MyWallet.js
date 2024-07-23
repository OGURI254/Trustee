import { View, Text,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'

export default function MyWallet() {
  return (
    <SafeAreaView>
        <ScrollView className="p-2">
            <View className="mt-5 border justify-between items-center rounded p-2 flex-row">
                <View className="rounded-full h-14 w-14 bg-blue-300"></View>
                <View>
                    <Text  className="font-bold">Total Balance</Text>
                    <Text className="mt-2">KSHS 300000.00</Text>
                </View>
            </View>
            <View className="mt-10 flex-row justify-between">
                <TouchableOpacity className="bg-[#30A6B5] items-center p-2 w-[80px]"><Text>Deposit</Text></TouchableOpacity>
                <TouchableOpacity className="bg-[#4242FC] items-center p-2 w-[80px]"><Text className="text-white font-bold">Withdraw</Text></TouchableOpacity>
                <TouchableOpacity className="bg-[#FFE5B4] items-center p-2 w-[80px]"><Text>Transfer</Text></TouchableOpacity>
            </View>
            <View className="mt-10">
                <Text className="font-bold text-[17px]">Transactions</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}