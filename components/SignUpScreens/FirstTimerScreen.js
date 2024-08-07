import { View, Text, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { acceptTerms } from '../../reducers/auth/authSlice'; // Adjust the path as necessary

export default function FirstTimerScreen({ navigation }) {
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // State to handle checkbox
  const [isChecked, setIsChecked] = useState(false);

  // Extract First name from the user result response
  const firstName = user?.result.name?.split(' ')[0] || '';

  // Handle checkbox press
  const handleAcceptTerms = async () => {
    if (isChecked) {
      try {
        await dispatch(acceptTerms()).unwrap();
        // Navigate to the next screen after successful acceptance
        navigation.navigate('YearOfBirthScreen');
      } catch (error) {
        console.error('Error accepting terms:', error);
      }
    } else {
      // Optionally handle case where checkbox is not checked
      console.log('Please accept the terms and conditions');
    }
  };

  return (
    <SafeAreaView className="p-3 flex-1 justify-between">
      <View className="mt-2">
        <TouchableOpacity
          className="justify-end items-end"
          onPress={() => navigation.navigate('YearOfBirthScreen')}
        >
          <Text className="text-gray-400 mr-3 mt-2 font-bold text-[17px]">Skip</Text>
        </TouchableOpacity>
        <Text className="text-[17px] text-gray-600 mt-6">Hello, {firstName}!</Text>
        <Text className="mt-3 font-bold text-[18px] text-[#12636D]">Welcome to Trustee</Text>
        <Text className="mt-2">Let's get started with setting up your account for secure and reliable transactions.</Text>
        <View className="mt-5 ml-4">
          <View className="flex-row items-center justify-center">
            <CheckBox
              checked={isChecked}
              onPress={() => setIsChecked(!isChecked)}
              containerStyle={{
                backgroundColor: 'transparent',
                borderWidth: 0,
                padding: 0,
                marginLeft: -14,
                marginRight: 2
              }}
            />
            <Text className="text-[]">I have read and agree to the terms and conditions of the Trustee app</Text>
          </View>

          <View className="flex-row mt-4">
            <Text>See more in</Text>
            <TouchableOpacity className="ml-2">
              <Text className="text-[#2121FC]">policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <View className="flex-row mb-9 items-center justify-center">
          <View className="h-3 w-3 rounded-full bg-[#12636D]"></View>
          <View className="h-3 w-3 rounded-full bg-[#c0e7ec] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#c0e7ec] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#c0e7ec] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#c0e7ec] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#c0e7ec] ml-1"></View>
        </View>
        <TouchableOpacity
          className="mx-auto bg-[#2121FC] justify-center flex-row p-2 rounded-md w-[150px] items-center"
          onPress={handleAcceptTerms}
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <>
              <Text className="text-white font-bold text-[17px] mr-2">Next</Text>
              <AntDesign name="arrowright" size={20} color="white" />
            </>
          )}
        </TouchableOpacity>
        {isError && <Text className="text-red-500 text-center mt-4">{message}</Text>}
      </View>
    </SafeAreaView>
  );
}
