import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from "../../../reducers/auth/authSlice";

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
});

export default function SignUp({ navigation }) {
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [secureTextEntry2, setSecureTextEntry2] = useState(true);
    const dispatch = useDispatch();

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    const toggleSecureEntry2 = () => {
        setSecureTextEntry2(!secureTextEntry2);
    };

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            alert(message);
            dispatch(reset());
        }

        if (isSuccess || user) {
            alert('Successfully registered')
            navigation.navigate('SignUpScreens');
            dispatch(reset());
        }
    }, [user, isError, isSuccess, message, navigation, dispatch]);

    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="mx-3">
                <Text className="mt-5 font-bold text-[24px]">Sign Up</Text>
                <Text className="text-gray-500">Please enter your details to get started</Text>
                <Formik
                    initialValues={{ email: '', password: '', confirmPassword: '', phoneNumber: '', name: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        dispatch(register(values));
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

                        <View className="mt-7">
                            <TextInput className="border border-gray-200 p-2 rounded" placeholder='Name' onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name} />
                            {touched.name && errors.name ? (
                                <Text style={{ color: 'red' }}>{errors.name}</Text>
                            ) : null}
                            <TextInput className="border border-gray-200 mt-2 p-2 rounded" placeholder='Email' onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email} />
                            {touched.email && errors.email ? (
                                <Text style={{ color: 'red' }}>{errors.email}</Text>
                            ) : null}
                            <TextInput className="border border-gray-200 p-2 rounded mt-2" placeholder='Phone number' onChangeText={handleChange('phoneNumber')}
                                onBlur={handleBlur('phoneNumber')}
                                value={values.phoneNumber} />
                            {touched.phoneNumber && errors.phoneNumber ? (
                                <Text style={{ color: 'red' }}>{errors.phoneNumber}</Text>
                            ) : null}
                            <View className="border mt-2 rounded border-gray-200 items-center p-1  flex-row justify-between">
                                <TextInput className="p-1 rounded" placeholder='Password' secureTextEntry={secureTextEntry} onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password} />
                                <TouchableOpacity onPress={toggleSecureEntry}>
                                    <Entypo name={secureTextEntry ? 'eye' : 'eye-with-line'} size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                            {touched.password && errors.password ? (
                                <Text style={{ color: 'red' }}>{errors.password}</Text>
                            ) : null}
                            <View className="border mt-2 rounded border-gray-200 items-center p-1  flex-row justify-between">
                                <TextInput className="p-1 rounded" placeholder='Confirm Password' secureTextEntry={secureTextEntry2} onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    value={values.confirmPassword} />
                                <TouchableOpacity onPress={toggleSecureEntry2}>
                                    <Entypo name={secureTextEntry2 ? 'eye' : 'eye-with-line'} size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                            {touched.confirmPassword && errors.confirmPassword ? (
                                <Text style={{ color: 'red' }}>{errors.confirmPassword}</Text>
                            ) : null}
                            <TouchableOpacity onPress={handleSubmit} className="bg-[#2121FC]  rounded mx-auto mt-4 w-[250px] p-2 items-center">
                                {isLoading ? (
                                    <ActivityIndicator size="small" className="my-2" color="#FFF" />
                                ) : (
                                    <Text className="text-white font-bold text-[23px]">Create account</Text>
                                )}
                            </TouchableOpacity>

                            <View className="mt-6 flex-row items-center justify-center">
                                <View className="h-[2px] mr-3 w-[80px] bg-gray-300"></View>
                                <Text className="text-[19px]">OR</Text>
                                <View className="h-[2px] ml-3 w-[80px] bg-gray-300"></View>
                            </View>

                            <TouchableOpacity className="border flex-row w-[250px] mx-auto items-center justify-center p-2 border-[#2121FC] rounded mt-6">
                                <Text className="text-[#4CAF50]"><AntDesign name="google" size={24} /></Text>
                                <Text className="text-[#2121FC]">  Sign up with google</Text>
                            </TouchableOpacity>
                        </View>)}
                </Formik>
                <View className="flex-row mt-7 mx-auto">
                    <Text>Already have an account?</Text>
                    <TouchableOpacity className="ml-1" onPress={() => navigation.navigate('Login')}><Text className="text-[#FFA20D]">Log in</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
