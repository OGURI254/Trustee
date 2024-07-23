import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';

export default function YearOfBirth({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <SafeAreaView className="p-3 flex-1 justify-between">
      <View className="mt-2">
        <TouchableOpacity className="justify-end items-end " onPress={() => navigation.navigate('UploadingIDScreen')}>
          <Text className="text-gray-400 mr-3 mt-2 font-bold text-[17px]">Skip</Text>
        </TouchableOpacity>
        <Text className="mt-3 font-bold text-[18px] text-[#12636D]">What Year were you born?</Text>
        <Text className="mt-2">Please provide your date of birth to continue.</Text>
        <View className="mt-5 p-3 border-[#30A6B5] border rounded">
          <Text className="text-center font-bold text-[#12636D]">
            {date.toLocaleDateString()}
          </Text>
          <View className="border rounded bg-gray-300 border-gray-300 mt-3">
            <View className="flex-row justify-between mx-2">
              <TouchableOpacity className="flex-row items-center" onPress={showDatepicker}>
                <Text className="mr-2">Select Date</Text>
                <AntDesign className="" name="caretdown" size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View className="flex-row mb-9 items-center justify-center">
          <View className="h-3 w-3 rounded-full bg-[#12636D]"></View>
          <View className="h-3 w-3 rounded-full bg-[#12636D] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#c0e7ec] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#c0e7ec] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#c0e7ec] ml-1"></View>
          <View className="h-3 w-3 rounded-full bg-[#c0e7ec] ml-1"></View>
        </View>
        <TouchableOpacity className="mx-auto bg-[#2121FC] justify-center flex-row p-2 rounded-md w-[150px] items-center" onPress={() => navigation.navigate('UploadingIDScreen')}>
          <Text className="text-white font-bold text-[17px] mr-2">Next</Text>
          <AntDesign name="arrowright" size={20} color="white" />
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </SafeAreaView>
  );
}
