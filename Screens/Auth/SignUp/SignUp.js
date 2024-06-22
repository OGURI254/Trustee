import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';

export default function SignUp({ navigation }) {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [secureTextEntry2, setSecureTextEntry2] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    const toggleSecureEntry2 = () => {
        setSecureTextEntry2(!secureTextEntry2);
    };

    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="mx-3">
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
                        <TextInput className="p-1 rounded" placeholder='Confirm Password' secureTextEntry={secureTextEntry2} />
                        <TouchableOpacity onPress={toggleSecureEntry2}>
                            <Entypo name={secureTextEntry2 ? 'eye' : 'eye-with-line'} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View className="items-center flex-row mt-2">
                        <CheckBox className="-ml-2" checked={isChecked} onPress={() => setIsChecked(!isChecked)} containerStyle={{
                            backgroundColor: 'transparent',
                            borderWidth: 0,
                            padding: 0,
                            marginLeft: 0
                        }} />
                        <Text className="text-[12px] -ml-2">I agree to Trustee <Link className="ml-2" to="/Terms"><Text className="text-[#FFA20D]">terms of service</Text></Link> and <Link className="ml-2" to="/privacy"><Text className="text-[#FFA20D]">privacy policy</Text></Link></Text>
                    </View>
                    <TouchableOpacity className="bg-[#2121FC]  rounded mx-auto mt-4 w-[250px] p-2 items-center"><Text className="text-white font-bold text-[23px]">Create account</Text></TouchableOpacity>

                    <View className="mt-6 flex-row items-center justify-center">
                        <View className="h-[2px] mr-3 w-[80px] bg-gray-300"></View>
                        <Text className="text-[19px]">OR</Text>
                        <View className="h-[2px] ml-3 w-[80px] bg-gray-300"></View>
                    </View>

                    <TouchableOpacity className="border flex-row w-[250px] mx-auto items-center justify-center p-2 border-[#2121FC] rounded mt-6">
                        <Text className="text-[#4CAF50]"><AntDesign name="google" size={24} /></Text>
                        <Text className="text-[#2121FC]">  Sign up with google</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex-row mt-7 mx-auto">
                    <Text>Already have an account?</Text>
                    <TouchableOpacity className="ml-1" onPress={() => navigation.navigate('Login')}><Text className="text-[#FFA20D]">Log in</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}