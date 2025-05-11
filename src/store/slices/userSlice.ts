// store/userSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosApi from '@/services/api';

interface User {
  email: string;
  username: string;
  full_name: string;
  bio: string;
  profile_image: string;
  is_active: boolean;
  skill_level: string;
  interests: string[];
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
  updated_at: string;
}

interface UserState {
  data: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

// READ user from /api/users/me
export const fetchUser = createAsyncThunk('user/fetchUser', async (_, { rejectWithValue }) => {
  try {
    const res = await axiosApi.get('/api/users/me');
    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.detail || 'Failed to fetch user');
  }
});

// UPDATE user
export const updateUser = createAsyncThunk('user/updateUser', async (updatedUser: Partial<User>, { rejectWithValue }) => {
  try {
    const res = await axiosApi.put('/api/users/me', updatedUser);
    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.detail || 'Failed to update user');
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser(state) {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(updateUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
