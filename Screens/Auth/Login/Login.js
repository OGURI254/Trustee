import { View, Text, SafeAreaView, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function Login() {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    return (
        <SafeAreaView className="flex-1">
            <View className="mx-3 mt-6">
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
                    <View className="mt-4 flex-row justify-between">
                        <View>
                            <Text>Remember Me</Text>
                        </View>
                        <TouchableOpacity><Text className="text-red-400">Forget Password</Text></TouchableOpacity>
                    </View>
                    <TouchableOpacity className="bg-[#2121FC] rounded mx-auto mt-6 w-[220px] p-2 items-center"><Text className="text-white font-bold text-[23px]">Log in</Text></TouchableOpacity>

                    <View className="mt-6 flex-row items-center justify-center">
                        <View className="h-[2px] mr-3 w-[80px] bg-gray-300"></View>
                        <Text className="text-[19px]">OR</Text>
                        <View className="h-[2px] ml-3 w-[80px] bg-gray-300"></View>
                    </View>

                    <TouchableOpacity className="border flex-row items-center justify-center p-2 border-[#2121FC] rounded mt-6">
                    <Text className="text-[#4CAF50]"><AntDesign  name="google" size={24}  /></Text>
                        <Text className="text-[#2121FC]">  Log in with Google</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-row mt-16 mx-auto">
                    <Text>Don't have and account?</Text>
                    <TouchableOpacity className="ml-1"><Text className="text-[#FFA20D]">Sign Up</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>


    )
}
