import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosApi from "../../services/api";

interface User {
  email: string;
  username: string;
  full_name: string;
  bio: string;
  profile_image: string;
  is_active: boolean;
  skill_level: string;
  interests: string | null;
  receive_product_updates: boolean;
  receive_new_features: boolean;
  receive_community_updates: boolean;
  receive_marketing_emails: boolean;
  timezone: string;
  has_completed_preferences: boolean;
  id: number;
  rating: number;
  win_count: number;
  loss_count: number;
  total_debates: number;
  created_at: string;
  updated_at: string | null;
}

interface RegisterState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: RegisterState = {
  user: null,
  loading: false,
  error: null,
};

interface RegisterResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export const registerUser = createAsyncThunk<
  RegisterResponse, // ✅ actual return type of the payload
  Partial<User>,
  { rejectValue: string }
>(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosApi.post<RegisterResponse>('/api/auth/register', userData);

      const { access_token, refresh_token } = response.data;

     

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.detail || 'Registration failed');
    }
  }
);

// Slice
const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = null; // ✅ No user data returned yet
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default registerSlice.reducer;
