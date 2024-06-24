import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URI = 'localhost:5000/user/'

// Register user
const signup = async (userData) => {
  const response = await axios.post(BASE_URI + 'signup', userData)

  if (response.data) {
    AsyncStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const signin = async (userData) => {
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

const authService = {
    signup,
  logout,
  signin,
}

export default authService