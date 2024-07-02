import { View, StatusBar, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';


export default function HomeScreen() {

  //Get details from the store
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
);

//Extract First name from the user result response
const firstName = user?.result.name?.split(' ')[0] || '';

console.log('user', user)
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#0000FF" />
      <ScrollView className="p-2">
        <View className="flex-row justify-between items-center mt-3">
          <Text className="font-bold text-[20px]">Good Morning, <Text className="text-[#2121FC]">{firstName}</Text></Text>
          <View className="flex-row items-center">
            <TouchableOpacity><Feather name="clock" size={24} color="black" /></TouchableOpacity>
            <TouchableOpacity className="ml-3"><Ionicons name="notifications" size={24} color="black" /></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}