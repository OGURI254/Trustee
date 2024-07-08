import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URI = 'http://192.168.1.108:5000/user/';

// Register user
const signup = async (userData) => {
  console.log(userData)
  const response = await axios.post(BASE_URI + 'signup', userData)

  if (response.data) {
    AsyncStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const signin = async (userData) => {
  console.log(userData)
  const response = await axios.post(BASE_URI + 'signin', userData)
  if (response.data) {
    AsyncStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  AsyncStorage.removeItem('user')
}

// Request password reset
const requestPasswordReset = async (email) => {
  const response = await axios.post(BASE_URI + 'requestPasswordReset', { email });

  if (response.data) {
    // Store the token received from the response
    AsyncStorage.setItem('resetToken', response.data.token);
  }

  return response.data;
};

// Verify OTP
const verifyOTP = async (otp) => {
  const token = await AsyncStorage.getItem('resetToken');
  const response = await axios.post(BASE_URI + 'verifyOTP', { otp }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (response.data) {
    // Store the token received from the response (same as before if no change in token)
    AsyncStorage.setItem('resetToken', response.data.token);
  }

  return response.data;
};

// Reset password
const resetPassword = async (newPassword, confirmPassword) => {
  const token = await AsyncStorage.getItem('resetToken');
  const response = await axios.post(BASE_URI + 'resetPassword', { newPassword, confirmPassword }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (response.data) {
    // Clear the reset token from storage after successful password reset
    AsyncStorage.removeItem('resetToken');
  }

  return response.data;
};

const authService = {
  signup,
  logout,
  signin,
  requestPasswordReset,
  verifyOTP,
  resetPassword
}

export default authService