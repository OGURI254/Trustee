import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function TransactionScreen({navigation}) {
    return (
        <SafeAreaView>
            <View className="w-[70%] h-full p-4 bg-black mt-20 rounded-tr-3xl">
                <Text className="text-white text-[23px]">Transactions</Text>
                <View className="mt-5">
                    <TouchableOpacity className="flex-row items-center" onPress={() => navigation.navigate('PendingPayments')} >
                        <MaterialIcons name="pending-actions" size={20} color="white" />
                        <Text className="text-white text-[18px] ml-2">Pending payment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="mt-6 flex-row items-center " onPress={() => navigation.navigate('PendingRequests')}>
                        <Ionicons name="notifications" size={20} color="white" />
                        <Text className="text-white text-[18px] ml-2">Pending Requests</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="mt-6 flex-row items-center" onPress={() => navigation.navigate('PendingHistory')}>
                        <AntDesign name="clockcircleo" size={20} color="white" />
                        <Text className="text-white ml-2 text-[18px] flex-row">Pending History</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}