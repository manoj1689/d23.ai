import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '@/services/api';

const API_URL = '/api/debates/';

interface Debate {
  title: string;
  description: string;
  category: string;
  format: string;
  scheduled_start: string;
  scheduled_end: string;
  topic_id: number;
  participant_ids: number[];
}

interface DebateState {
  debates: Debate[];
  loading: boolean;
  error: string | null;
}

const initialState: DebateState = {
  debates: [],
  loading: false,
  error: null,
};

// ✅ Async thunk to create a new debate
export const createDebate = createAsyncThunk(
  'debates/createDebate',
  async (debateData: Debate, { rejectWithValue }) => {
    try {
      console.log("debate data", debateData);
      const response = await axiosApi.post(API_URL, debateData);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || 'Error creating debate');
    }
  }
);

// ✅ Async thunk to fetch debates with status, skip, limit
export const fetchMyScheduledDebates = createAsyncThunk(
  'debates/fetchMyScheduledDebates',
  async (
    { status, skip = 0, limit = 100 }: { status: string; skip?: number; limit?: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosApi.get('/api/debates/my', {
        params: { status, skip, limit },
      });
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data || 'Error fetching debates');
    }
  }
);

// ✅ Debate slice
const debateSlice = createSlice({
  name: 'debates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create Debate
      .addCase(createDebate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createDebate.fulfilled, (state, action) => {
        state.loading = false;
        state.debates.push(action.payload);
      })
      .addCase(createDebate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Fetch Scheduled Debates
      .addCase(fetchMyScheduledDebates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyScheduledDebates.fulfilled, (state, action) => {
        state.loading = false;
        state.debates = action.payload;
      })
      .addCase(fetchMyScheduledDebates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default debateSlice.reducer;
