import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Asynchronous function to fetch user data from AsyncStorage
const getUserFromStorage = async () => {
  try {
    const user = await AsyncStorage.getItem('user');
    return JSON.parse(user); // Parse the retrieved JSON string
  } catch (error) {
    console.error('Error fetching user from AsyncStorage:', error);
    return null;
  }
};

// Async thunk to initialize user state from AsyncStorage
export const initializeUser = createAsyncThunk(
  'auth/initializeUser',
  async (_, thunkAPI) => {
    try {
      const user = await getUserFromStorage();
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch user data');
    }
  }
);

// Register user
export const register = createAsyncThunk(
  'auth/signup',
  async (user, thunkAPI) => {
    try {
      return await authService.signup(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login user
export const login = createAsyncThunk(
  'auth/signin',
  async (user, thunkAPI) => {
    try {
      return await authService.signin(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

// Request password reset
export const requestPasswordReset = createAsyncThunk(
  'auth/requestPasswordReset',
  async (email, thunkAPI) => {
    try {
      return await authService.requestPasswordReset(email);
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Verify OTP
export const verifyOTP = createAsyncThunk(
  'auth/verifyOTP',
  async (otp, thunkAPI) => {
    try {
      return await authService.verifyOTP(otp);
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Reset password
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ newPassword, confirmPassword }, thunkAPI) => {
    try {
      return await authService.resetPassword(newPassword, confirmPassword);
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Multi-step signup actions
export const acceptTerms = createAsyncThunk(
  'auth/acceptTerms',
  async (_, thunkAPI) => {
    try {
      return await authService.acceptTerms();
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const setDate = createAsyncThunk(
  'auth/setDate',
  async (date, thunkAPI) => {
    try {
      return await authService.setDate(date);
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const uploadIdImages = createAsyncThunk(
  'auth/uploadIdImages',
  async ({ frontIdImage, backIdImage }, thunkAPI) => {
    try {
      return await authService.uploadIdImages(frontIdImage, backIdImage);
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const selectPlans = createAsyncThunk(
  'auth/selectPlans',
  async (plans, thunkAPI) => {
    try {
      return await authService.selectPlans(plans);
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const setBusinessDetails = createAsyncThunk(
  'auth/setBusinessDetails',
  async (businessDetails, thunkAPI) => {
    try {
      return await authService.setBusinessDetails(businessDetails);
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const finalizeSignup = createAsyncThunk(
  'auth/finalizeSignup',
  async (_, thunkAPI) => {
    try {
      return await authService.finalizeSignup();
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(initializeUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(initializeUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(requestPasswordReset.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(requestPasswordReset.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(requestPasswordReset.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(verifyOTP.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(acceptTerms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(acceptTerms.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Terms accepted successfully';
      })
      .addCase(acceptTerms.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(setDate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setDate.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Date set successfully';
      })
      .addCase(setDate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(uploadIdImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadIdImages.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'ID images uploaded successfully';
      })
      .addCase(uploadIdImages.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(selectPlans.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(selectPlans.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Plans selected successfully';
      })
      .addCase(selectPlans.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(setBusinessDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setBusinessDetails.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Business details set successfully';
      })
      .addCase(setBusinessDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(finalizeSignup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(finalizeSignup.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Signup finalized successfully';
      })
      .addCase(finalizeSignup.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
