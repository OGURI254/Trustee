import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {logout} from '../../../reducers/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux';



export default function Account({navigation}) {
  const dispatch = useDispatch();

  //Get details from the store
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
);

  const handleLogout = async () => {
    await dispatch(logout());
    navigation.navigate('Auth', { screen: 'Login' })
  };
  return (
    <SafeAreaView>
      <ScrollView >
        <Text className="font-bold text-[22px] ml-2 mt-4">My Profile</Text>
        <View>
          <View className="h-[110px] mt-3 bg-gray-200 z-0 relative">
            <View className="bg-gray-600 h-[100px] w-[100px] rounded-full relative z-10 -bottom-14 border -right-5"></View>
          </View>
        </View>
        <Text className="mt-12 font-bold ml-5 text-[20px]">{user.result.name}</Text>
        <View className="mx-2 mb-5">
          <TouchableOpacity className="flex-row justify-between mt-3 rounded-md p-2 border-gray-300 border-b-2" onPress={() => navigation.navigate('PersonalInfo')}>
            <View className="flex-row items-center">
              <Ionicons name="person-circle-outline" size={24} color="black" />
              <Text className="text-[16px] ml-2">Personal info</Text>
            </View>
            <FontAwesome6 name="circle-arrow-right" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between mt-3 rounded-md p-2 border-gray-300 border-b-2">
            <View className="flex-row items-center">
            <AntDesign name="calendar" size={24} color="black" />
              <Text className="text-[16px] ml-2">Age</Text>
            </View>
            <Text>28 years</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between mt-3 rounded-md p-2 border-gray-300 border-b-2">
            <View className="flex-row items-center">
              <Ionicons name="person-circle-outline" size={24} color="black" />
              <Text className="text-[16px] ml-2">Address</Text>
            </View>
            <Text>62 kg</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between mt-3 rounded-md p-2 border-gray-300 border-b-2">
            <View className="flex-row items-center">
            <SimpleLineIcons name="drop" size={24} color="black" />
              <Text className="text-[16px] ml-2">Points</Text>
            </View>
            <Text>View</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between mt-3 rounded-md p-2 border-gray-300 border-b-2">
            <View className="flex-row items-center">
              <Ionicons name="person-circle-outline" size={24} color="black" />
              <Text className="text-[16px] ml-2">support</Text>
            </View>
            <FontAwesome6 name="circle-arrow-right" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between mt-3 rounded-md p-2 border-gray-300 border-b-2">
            <View className="flex-row items-center">
            <Octicons name="history" size={24} color="black" />
              <Text className="text-[16px] ml-2">History</Text>
            </View>
            <FontAwesome6 name="circle-arrow-right" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between mt-3 rounded-md p-2 border-gray-300 border-b-2">
            <View className="flex-row items-center">
            <SimpleLineIcons name="settings" size={24} color="black" />
              <Text className="text-[16px] ml-2">Settings</Text>
            </View>
            <FontAwesome6 name="circle-arrow-right" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row justify-between mt-3 rounded-md p-2 border-gray-300 border-b-2" onPress={handleLogout}>
            <View className="flex-row items-center">
            <MaterialIcons name="logout" size={24} color="black" />
              <Text className="text-[16px] ml-2">Logout</Text>
            </View>
            <FontAwesome6 name="circle-arrow-right" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}