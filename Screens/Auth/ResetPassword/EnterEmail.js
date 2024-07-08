import { View, SafeAreaView, TextInput, TouchableOpacity, Text } from 'react-native'
import React,{useEffect} from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { requestPasswordReset } from "../../../reducers/auth/authSlice";

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

export default function EnterEmail({ navigation }) {
  const dispatch = useDispatch()

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
);

useEffect(() => {
  if (isError) {
      alert(message);
      dispatch(reset());
  }

  if (isSuccess) {
      navigation.navigate('EnterOtp');
      dispatch(reset());
  }
}, [isError, isSuccess, message, navigation, dispatch]);

  return (
    <SafeAreaView className="flex-1">
      <View className="mx-2 mt-4">
        <Text className="font-bold text-[24px] mt-5">Forgot Password?</Text>
        <Text>Please enter the email address linked with your account</Text>
        <Formik 
          initialValues={{email: ''}}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            dispatch(requestPasswordReset(values))
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
          <View>
            <TextInput className="border mt-5 p-2 rounded border-gray-200" placeholder='Email' onChangeText={handleChange('email')} value={values.email} onBlur={handleBlur('email')} />
            <TouchableOpacity className="bg-[#2121FC] w-[170px] items-center mx-auto mt-5 p-2" onPress={handleSubmit}
                disabled={isSubmitting}><Text className="text-white font-bold text-[19px]">{isSubmitting ? 'Sending...' : 'Send Code'}</Text></TouchableOpacity>
          </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  )
}