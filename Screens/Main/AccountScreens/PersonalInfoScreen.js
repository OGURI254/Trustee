import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function PersonalInfoScreen() {
  //Get details from the store
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // State to track edited email
  const [editedEmail, setEditedEmail] = useState(user.result.email);
  const [isEditing, setIsEditing] = useState(false);

  //state to track phone number
  const [editedPhoneNUmber, setEditedPhoneNumber] = useState(user.result.phoneNumber)

  const handleEditPress = () => {
    setIsEditing(true);
  };

  const handleChangeText = (text) => {
    setEditedEmail(text);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Text className="font-bold text-[22px] ml-2 mt-4">My Profile</Text>
        <View>
          <View className="h-[110px] mt-3 bg-gray-200 z-0 relative">
            <View className="absolute items-center justify-center h-8 w-8 bg-gray-400 rounded-full right-4 bottom-4 "><Entypo name="camera" size={18} color="black" /></View>
            <View className="bg-gray-600 h-[100px] w-[100px] rounded-full absolute z-10 -bottom-12 border left-5">
              <View className="absolute bg-gray-400 w-8 h-8 rounded-full p-1 bottom-2 justify-center items-center right-0 "><Entypo  name="camera" size={18} color="black" /></View>
            </View>
          </View>
        </View>
        <Text className="mt-12 font-bold ml-5 text-[20px] text-[#2121FC]">{user.result.name}</Text>
        <View className="mx-2 mt-3">
          <Text className="font-bold">Personal Info</Text>
          <TouchableOpacity className="justify-end flex-row"><Text className="text-[#12636D] text-[17px]">Edit</Text></TouchableOpacity>
        </View>
        <View className="mx-2 my-3">
          <View className="border flex-row items-center border-gray-300 p-1 rounded">
            <Feather name="mail" size={20} color="gray" />
            <TextInput className="ml-2" value={editedEmail} editable={isEditing} onChangeText={handleChangeText} />
          </View>
          <View className="border mt-2 flex-row items-center border-gray-300 p-1 rounded">
            <Entypo name="phone" size={20} color="gray" />
            <TextInput className="ml-2" value={editedPhoneNUmber} editable={isEditing} onChangeText={handleChangeText} />
          </View>
          <View className="mt-2">
            <Text>Bio</Text>
            <View className="border rounded p-2 border-gray-300">
              <TextInput placeholder='Describe yourself...' />
            </View>
          </View>
          <View className="mt-3">
            <Text className="font-bold">Business</Text>
            <View className="bg-[#9193ff] mt-1 h-[50px] rounded-tr-md rounded-tl-md"></View>
            <View className="bg-white border-gray-300 border-b border-r border-l h-[50px] rounded-br-md rounded-bl-md flex-row justify-between items-center px-3">
              <Text className="text-[17px]">Add Interest badges</Text>
              <TouchableOpacity><AntDesign name="plus" size={24} color="black" /></TouchableOpacity>
            </View>
          </View>
          <View className="mt-3 ">
            <Text className="font-bold">Social Media</Text>
            <View className="mt-2 flex-row items-center">
              <View className="border border-gray-400 p-1 flex-row justify-center rounded-md w-[100px] items-center">
                <AntDesign name="instagram" size={18} color="maroon" />
                <Text className="ml-1">Instagram</Text>
              </View>
              <TouchableOpacity><Text className="font-bold ml-2 text-[17px] text-red-600">Connect</Text></TouchableOpacity>
            </View>
            <View className="mt-2 flex-row items-center">
              <View className="border border-gray-400 p-1 flex-row justify-center rounded-md w-[100px] items-center">
              <FontAwesome5 name="facebook" size={18} color="blue" />
                <Text className="ml-1">Facebook</Text>
              </View>
              <TouchableOpacity><Text className="font-bold ml-2 text-[17px] text-red-600">Connect</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}