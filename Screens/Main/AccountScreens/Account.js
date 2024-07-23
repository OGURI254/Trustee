import React, { useState,useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { logout,initializeUser  } from '../../../reducers/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Account({ navigation }) {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(initializeUser());
  }, [dispatch]);


  // Get details from the store
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await dispatch(logout());
    navigation.navigate('Auth', { screen: 'Login' });
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <Text className="font-bold text-[22px] ml-2 mt-4">My Profile</Text>
        <View>
          <View className="h-[110px] mt-3 bg-gray-200 z-0 relative">
            <View className="absolute items-center justify-center h-8 w-8 bg-gray-400 rounded-full right-4 bottom-4 ">
              <Entypo name="camera" size={18} color="black" />
            </View>
            <View className="bg-gray-600 h-[100px] w-[100px] rounded-full absolute z-10 -bottom-12 border left-5">
              <View className="absolute bg-gray-400 w-8 h-8 rounded-full p-1 bottom-2 justify-center items-center right-0 ">
                <Entypo name="camera" size={18} color="black" />
              </View>
            </View>
          </View>
        </View>
        {user && (
          <>
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
              <TouchableOpacity className="flex-row justify-between mt-3 rounded-md p-2 border-gray-300 border-b-2" onPress={() => navigation.navigate('Setting')}>
                <View className="flex-row items-center">
                  <SimpleLineIcons name="settings" size={24} color="black" />
                  <Text className="text-[16px] ml-2">Settings</Text>
                </View>
                <FontAwesome6 name="circle-arrow-right" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity className="flex-row justify-between mt-3 rounded-md p-2 border-gray-300 border-b-2" onPress={() => setModalVisible(true)}>
                <View className="flex-row items-center">
                  <MaterialIcons name="logout" size={24} color="black" />
                  <Text className="text-[16px] ml-2">Logout</Text>
                </View>
                <FontAwesome6 name="circle-arrow-right" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>

      {modalVisible && (
        <View style={styles.overlay}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View className="absolute bottom-0 w-full bg-[#80B2FF] p-5 rounded-t-lg">
              <Text className="text-center text-lg mb-4 text-white">Are you sure you want to logout?</Text>
              <Text className="text-[#D5D1D1] text-center">You can use any of your linked login methods to come back anytime</Text>
              <View className="bg-white p-2 rounded items-center mt-4 w-[220px] mx-auto">
                <View className="flex-row items-center"><AntDesign name="mail" size={20} color="black" /><Text className="text-[#2121FC] ml-2">john@gmail.com</Text></View>
                <View className="flex-row items-center mt-3"><Feather name="phone" size={20} color="black" /><Text className="text-[#2121FC] ml-2">john@gmail.com</Text></View>
              </View>
              <TouchableOpacity className="bg-blue-500 mt-4 p-3 rounded-lg mb-2" onPress={handleLogout}>
                <Text className="text-center text-[18px] text-white font-bold">Log Out</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-500  mt-2 p-3 rounded-lg" onPress={() => setModalVisible(false)}>
                <Text className="text-center  text-[18px] text-white font-bold">Cancel</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(18, 99, 109, 0.7)',
    justifyContent: 'flex-end',
  }
});