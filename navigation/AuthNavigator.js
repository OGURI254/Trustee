import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Screens/Auth/Login/Login';
import SignUp from '../Screens/Auth/SignUp/SignUp';
import EnterEmail from '../Screens/Auth/ResetPassword/EnterEmail';
import EnterOTP from '../Screens/Auth/ResetPassword/EnterOTP';
import CreateNewPassword from '../Screens/Auth/ResetPassword/CreateNewPassword';
import PasswordChanged from '../Screens/Auth/ResetPassword/PasswordChanged';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="EnterEmail" component={EnterEmail} options={{ headerShown: false }} />
      <Stack.Screen name="EnterOtp" component={EnterOTP} options={{ headerShown: false }} />
      <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} options={{ headerShown: false }} />
      <Stack.Screen name="PasswordChanged" component={PasswordChanged} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}