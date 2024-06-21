import { View, Text, SafeAreaView, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from '@react-navigation/native';

export default function SignUp() {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    
  return (
    <SafeAreaView className="flex-1">
            <View className="mx-3 mt-6">
                <Text className="mt-5 font-bold text-[24px]">Sign Up</Text>
                <Text className="text-gray-500">Please enter your details to get started</Text>
                
                <View className="mt-7">
                    <TextInput className="border border-gray-200 p-2 rounded" placeholder='Full name' />
                    <TextInput className="border border-gray-200 mt-2 p-2 rounded" placeholder='Email' />
                    <TextInput className="border border-gray-200 p-2 rounded mt-2" placeholder='Phone number' />
                    <View className="border mt-2 rounded border-gray-200 items-center p-1  flex-row justify-between">
                        <TextInput className="p-1 rounded" placeholder='Password' secureTextEntry={secureTextEntry} />
                        <TouchableOpacity onPress={toggleSecureEntry}>
                            <Entypo name={secureTextEntry ? 'eye' : 'eye-with-line'} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View className="border mt-2 rounded border-gray-200 items-center p-1  flex-row justify-between">
                        <TextInput className="p-1 rounded" placeholder='Confirm Password' secureTextEntry={secureTextEntry} />
                        <TouchableOpacity onPress={toggleSecureEntry}>
                            <Entypo name={secureTextEntry ? 'eye' : 'eye-with-line'} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View className="mt-3 flex-row">
                        <Text className="mr-1 text-[12px]">I agree to Trustee</Text>
                        <Link className="ml-2" to="/Terms"><Text className="text-[#FFA20D] text-[12px]">terms of service</Text></Link>
                        <Text className="mx-1 text-[12px]">and</Text>
                        <Link className="ml-2" to="/privacy"><Text className="text-[#FFA20D] text-[12px]">privacy policy</Text></Link>
                    </View>
                    <TouchableOpacity className="bg-[#2121FC] rounded mx-auto mt-7 w-[250px] p-2 items-center"><Text className="text-white font-bold text-[23px]">Create account</Text></TouchableOpacity>

                    <View className="mt-6 flex-row items-center justify-center">
                        <View className="h-[2px] mr-3 w-[80px] bg-gray-300"></View>
                        <Text className="text-[19px]">OR</Text>
                        <View className="h-[2px] ml-3 w-[80px] bg-gray-300"></View>
                    </View>

                    <TouchableOpacity className="border flex-row w-[250px] mx-auto items-center justify-center p-2 border-[#2121FC] rounded mt-6">
                    <Text className="text-[#4CAF50]"><AntDesign  name="google" size={24}  /></Text>
                        <Text className="text-[#2121FC]">  Sign up with google</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-row mt-7 mx-auto">
                    <Text>Already have an account?</Text>
                    <TouchableOpacity className="ml-1" onPress={() => navigation.navigate('SignUp')}><Text className="text-[#FFA20D]">Log in</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
  )
}