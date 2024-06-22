import { View, SafeAreaView, TextInput, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { CheckBox } from 'react-native-elements';

export default function CreateNewPassword({navigation}) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntry2, setSecureTextEntry2] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const toggleSecureEntry2 = () => {
    setSecureTextEntry2(!secureTextEntry2);
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="mx-2 mt-4">
        <Text className="font-bold text-[24px]">Create new password</Text>
        <Text>Your new password must be unique from those previously used</Text>
        <View className="border mt-2 rounded border-gray-200 items-center p-1  flex-row justify-between">
          <TextInput className="p-1 rounded" placeholder='New Password' secureTextEntry={secureTextEntry} />
          <TouchableOpacity onPress={toggleSecureEntry}>
            <Entypo name={secureTextEntry ? 'eye' : 'eye-with-line'} size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="border mt-2 rounded border-gray-200 items-center p-1  flex-row justify-between">
          <TextInput className="p-1 rounded" placeholder='Confirm new password' secureTextEntry={secureTextEntry2} />
          <TouchableOpacity onPress={toggleSecureEntry2}>
            <Entypo name={secureTextEntry2 ? 'eye' : 'eye-with-line'} size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="bg-[#2121FC] w-[170px] items-center mx-auto mt-5 p-2" onPress={() => navigation.navigate('PasswordChanged')}><Text className="text-white font-bold text-[19px]">Send Code</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}