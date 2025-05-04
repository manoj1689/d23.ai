// slices/debateSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DebatePayload } from '../../types/debate';

interface DebateState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: DebateState = {
  loading: false,
  error: null,
  success: false,
};

export const createDebate = createAsyncThunk(
  'debates/createDebate',
  async (debateData: DebatePayload, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/debates/', debateData);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || 'Unknown error');
    }
  }
);

const debateSlice = createSlice({
  name: 'debates',
  initialState,
  reducers: {
    resetDebateStatus: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createDebate.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createDebate.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createDebate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.success = false;
      });
  },
});

export const { resetDebateStatus } = debateSlice.actions;
export default debateSlice.reducer;
