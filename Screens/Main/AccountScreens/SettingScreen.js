import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function SettingScreen({ navigation }) {
    return (
        <SafeAreaView className="px-2">
            <View className="flex-row mt-3 items-center">
                <TouchableOpacity
                    className="justify-center h-7 w-7 bg-gray-400 rounded-full items-center"
                    onPress={() => navigation.navigate('AccountHome')}
                >
                    <AntDesign name="arrowleft" size={20} color="black" />
                </TouchableOpacity>
                <Text className="font-bold ml-20 text-center text-[20px]">Settings</Text>
            </View>
            <View className="mt-5">
                <TouchableOpacity
                    className="p-2 flex-row justify-between border rounded border-gray-300"
                    onPress={() => navigation.navigate('Notifications')}
                >
                    <Text className="text-[17px]">Notification Settings</Text>
                    <View className="justify-center h-6 w-6 bg-black rounded-full items-center">
                        <AntDesign name="arrowright" size={20} color="white" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    className="p-2 mt-3 flex-row justify-between border rounded border-gray-300"
                    onPress={() => navigation.navigate('Privacy')}
                >
                    <Text className="text-[17px]">Privacy Settings</Text>
                    <View className="justify-center h-6 w-6 bg-black rounded-full items-center">
                        <AntDesign name="arrowright" size={20} color="white" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    className="p-2 mt-3 flex-row justify-between border rounded border-gray-300"
                    onPress={() => navigation.navigate('ContactAndFAQ')}
                >
                    <Text className="text-[17px]">Contact & FAQ</Text>
                    <View className="justify-center h-6 w-6 bg-black rounded-full items-center">
                        <AntDesign name="arrowright" size={20} color="white" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    className="p-2 mt-3 flex-row justify-between border rounded border-gray-300"
                    onPress={() => navigation.navigate('TwoFactor')}
                >
                    <Text className="text-[17px]">Two-Factor Authentication</Text>
                    <View className="justify-center h-6 w-6 bg-black rounded-full items-center">
                        <AntDesign name="arrowright" size={20} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
