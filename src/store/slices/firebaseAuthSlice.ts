import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../services/api';

const initialState: {
  isLoading: boolean;
  token: string | null;
  error: string | null;
  profile_updated: any;
  user_profile: any;
} = {
  isLoading: false,
  token: null,
  error: null,
  profile_updated: null,
  user_profile: null,
};

// Firebase login
export const firebaseLogin = createAsyncThunk(
  'auth/firebaseLogin',
  async (idToken: string, { rejectWithValue }) => {
    try {
      const response = await axiosApi.post('/api/firebase_login/firebase-login', {
        id_token: idToken,
      });

      // Removed localStorage storage
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Firebase login failed');
    }
  }
);

// Email/password login
export const loginWithEmailPassword = createAsyncThunk(
  'auth/loginWithEmailPassword',
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const formData = new URLSearchParams();
      formData.append('grant_type', 'password');
      formData.append('username', email);
      formData.append('password', password);

      const response = await axiosApi.post('/api/auth/login', formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.detail || 'Email/password login failed');
    }
  }
);

// Slice
const firebaseAuthSlice = createSlice({
  name: 'firebaseAuth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.profile_updated = null;
      state.user_profile = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(firebaseLogin.fulfilled, (state, action) => {
        const { access_token } = action.payload?.data || {};
        state.token = access_token || null;
        state.profile_updated = action.payload?.profile_updated ?? null;
        state.user_profile = action.payload?.data || null;
        state.error = null;
      })
      .addCase(firebaseLogin.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addCase(loginWithEmailPassword.fulfilled, (state, action) => {
        const { access_token } = action.payload;
        state.token = access_token || null;
        state.user_profile = null;
        state.profile_updated = null;
        state.error = null;
      })
      .addCase(loginWithEmailPassword.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { logout } = firebaseAuthSlice.actions;
export default firebaseAuthSlice.reducer;
