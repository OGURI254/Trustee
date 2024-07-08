import { View, ScrollView, Text, SafeAreaView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { CheckBox } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from "../../../reducers/auth/authSlice";

// Validation schema for Formik
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function Login({ navigation }) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      alert(message);
      dispatch(reset());
    }

    if (isSuccess || user) {
      // alert('Login success')
      navigation.navigate('Main', { screen: 'Home' });
      dispatch(reset());
      // Clear form fields after successful login
      setFormValues({ email: '', password: '' });
    }
  }, [user, isError, isSuccess, message, navigation, dispatch]);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="mx-3">
        <Text className="mt-5 font-bold text-[24px]">Log In</Text>
        <Text className="text-gray-500">Welcome back!</Text>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            dispatch(login(values));
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View className="mt-7">
              <TextInput
                className="border border-gray-200 p-2 rounded"
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {touched.email && errors.email ? (
                <Text style={{ color: 'red' }}>{errors.email}</Text>
              ) : null}

              <View className="border mt-3 rounded border-gray-200 items-center p-1  flex-row justify-between">
                <TextInput
                  className="p-1 rounded "
                  placeholder="Password"
                  secureTextEntry={secureTextEntry}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <TouchableOpacity onPress={toggleSecureEntry}>
                  <Entypo name={secureTextEntry ? 'eye' : 'eye-with-line'} size={24} color="black" />
                </TouchableOpacity>
              </View>
              {touched.password && errors.password ? (
                <Text style={{ color: 'red' }}>{errors.password}</Text>
              ) : null}

              <View className="mt-3 flex-row justify-between">
                <View className="flex-row items-center">
                  <CheckBox
                    className="-ml-2"
                    checked={isChecked}
                    onPress={() => setIsChecked(!isChecked)}
                    containerStyle={{
                      backgroundColor: 'transparent',
                      borderWidth: 0,
                      padding: 0,
                      marginLeft: 0
                    }}
                  />
                  <Text className="-ml-2">Remember Me</Text>
                </View>
                <TouchableOpacity>
                  <Text className="text-red-400" onPress={() => navigation.navigate('EnterEmail')}>Forget Password</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                className="bg-[#2121FC] rounded mx-auto mt-7 w-[250px] p-2 items-center"
                onPress={handleSubmit}
              >
                {isLoading ? (
                  <ActivityIndicator size="small" className="my-2" color="#FFF" />
                ) : (
                  <Text className="text-white font-bold text-[23px]">Log in</Text>
                )}
              </TouchableOpacity>

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
          )}
        </Formik>
        <View className="flex-row mt-16 mx-auto">
          <Text>Don't have an account?</Text>
          <TouchableOpacity className="ml-1" onPress={() => navigation.navigate('SignUp')}>
            <Text className="text-[#FFA20D]">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
