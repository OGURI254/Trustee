import { View,ScrollView, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { CheckBox } from 'react-native-elements';



export default function Login({ navigation }) {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="mx-3 ">
                <Text className="mt-5 font-bold text-[24px]">Log In</Text>
                <Text className="text-gray-500">Welcome back!</Text>

                <View className="mt-7">
                    <TextInput className="border border-gray-200 p-2 rounded" placeholder='Email' />
                    <View className="border mt-3 rounded border-gray-200 items-center p-1  flex-row justify-between">
                        <TextInput className="p-1 rounded" placeholder='Password' secureTextEntry={secureTextEntry} />
                        <TouchableOpacity onPress={toggleSecureEntry}>
                            <Entypo name={secureTextEntry ? 'eye' : 'eye-with-line'} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View className="mt-3 flex-row justify-between">
                        <View className="flex-row items-center">
                        <CheckBox className="-ml-2" checked={isChecked} onPress={() => setIsChecked(!isChecked)} containerStyle={{
                            backgroundColor: 'transparent',
                            borderWidth: 0,
                            padding: 0,
                            marginLeft: 0
                        }} />
                            <Text className="-ml-2">Remember Me</Text>
                        </View>
                        <TouchableOpacity><Text className="text-red-400" onPress={() => navigation.navigate('EnterEmail')}>Forget Password</Text></TouchableOpacity>
                    </View>
                    <TouchableOpacity className="bg-[#2121FC] rounded mx-auto mt-7 w-[250px] p-2 items-center" onPress={() => navigation.navigate('Main', { screen: 'Home' })}><Text className="text-white font-bold text-[23px]">Log in</Text></TouchableOpacity>

                    <View className="mt-6 flex-row items-center justify-center">
                        <View className="h-[2px] mr-3 w-[80px] bg-gray-300"></View>
                        <Text className="text-[19px]">OR</Text>
                        <View className="h-[2px] ml-3 w-[80px] bg-gray-300"></View>
                    </View>

                    <TouchableOpacity className="border flex-row w-[250px] mx-auto items-center justify-center p-2 border-[#2121FC] rounded mt-6">
                        <Text className="text-[#4CAF50]"><AntDesign name="google" size={24} /></Text>
                        <Text className="text-[#2121FC]">  Log in with Google</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-row mt-16 mx-auto">
                    <Text>Don't have and account?</Text>
                    <TouchableOpacity className="ml-1" onPress={() => navigation.navigate('SignUp')}><Text className="text-[#FFA20D]">Sign Up</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>


    )
}
