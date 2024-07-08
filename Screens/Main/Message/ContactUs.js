import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function ContactUs({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView className="mx-2">
                <View className="mt-3 flex-row items-center justify-between">
                    <TouchableOpacity onPress={() => navigation.navigate('Message')}><Feather name="arrow-left" size={24} color="black" /></TouchableOpacity>
                    <TouchableOpacity><Text>Clear</Text></TouchableOpacity>
                </View>
                <View className="border p-1 flex-row items-center justify-between rounded">
                    <TextInput className="flex-wrap" placeholder='Say something' />
                    <Entypo name="emoji-happy" size={20} color="black" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}