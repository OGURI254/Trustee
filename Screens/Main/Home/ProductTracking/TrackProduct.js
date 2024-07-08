import { View, Text, ScrollView, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Maps from '../../../../components/Maps';

export default function TrackProduct({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View className="mt-7 items-center">
                    <MaterialCommunityIcons name="account-circle-outline" size={24} color="black" />
                    <Text className="mt-1 font-bold text-[17px]">Person X</Text>
                </View>
                <View className="h-[90px] rounded-2xl justify-center mx-auto mt-4 items-center w-[200px] bg-[#2D4CED]">
                    <Text className="text-white">Track your package</Text>
                    <View className="flex-row items-center mt-2 bg-gray-300 px-1 w-[150px] rounded-full">
                        <Feather name="search" size={18} color="black" />
                        <TextInput className="ml-2" placeholder='tracking number' />
                    </View>
                </View>
                <View className="mt-6">
                    <Text className="text-center">Current Shipment Track Order</Text>
                    <View className="h-[300px] w-full bg-gray-200">
                        <Maps/>
                    </View>
                </View>
                <View className="mt-6 flex-row justify-center">
                    <View className="p-2 border w-[120px]"><Text className="text-gray-600">2 Items</Text></View>
                    <View className="p-2 border flex-row items-center w-[120px] ml-7"><AntDesign name="clockcircleo" size={18} color="black" /><Text className="text-gray-600 ml-1">4hrs (112km)</Text></View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}