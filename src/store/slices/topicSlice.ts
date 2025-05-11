import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosApi from "../../services/api";

export interface Topic {
  id: number;
  title: string;
  description?: string;
  category?: string;
  tags?: string[];
  popularity: number;
  created_at: string;
}

export interface TopicState {
  topics: Topic[];
  selectedTopic?: Topic;
  loading: boolean;
  error: string | null;
}

const initialState: TopicState = {
  topics: [],
  selectedTopic: undefined,
  loading: false,
  error: null,
};

const API_BASE = '/api/topics/topic';

// 🔄 Async thunks
export const fetchTopics = createAsyncThunk('topics/fetchTopics', async () => {
  const response = await axiosApi.get<Topic[]>(API_BASE);
  return response.data;
});

export const fetchTopicById = createAsyncThunk('topics/fetchTopicById', async (id: number) => {
  const response = await axiosApi.get<Topic>(`${API_BASE}/${id}`);
  return response.data;
});

export const createTopic = createAsyncThunk('topics/createTopic', async (topic: Partial<Topic>) => {
  const response = await axiosApi.post(API_BASE, topic);
  return response.data.data.topic as Topic;
});

export const updateTopic = createAsyncThunk(
  'topics/updateTopic',
  async ({ id, topic }: { id: number; topic: Partial<Topic> }) => {
    const response = await axiosApi.put<Topic>(`${API_BASE}/${id}`, topic);
    return response.data;
  }
);

export const deleteTopic = createAsyncThunk('topics/deleteTopic', async (id: number) => {
  await axiosApi.delete(`${API_BASE}/${id}`);
  return id;
});

// 🧠 Slice
const topicSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    clearSelectedTopic(state) {
      state.selectedTopic = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopics.fulfilled, (state, action) => {
        state.loading = false;
        state.topics = action.payload;
      })
      .addCase(fetchTopics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch topics';
      })

      .addCase(fetchTopicById.fulfilled, (state, action) => {
        state.selectedTopic = action.payload;
      })

      .addCase(createTopic.fulfilled, (state, action: PayloadAction<Topic>) => {
        state.topics.push(action.payload);
      })

      .addCase(updateTopic.fulfilled, (state, action: PayloadAction<Topic>) => {
        const index = state.topics.findIndex(t => t.id === action.payload.id);
        if (index !== -1) state.topics[index] = action.payload;
        if (state.selectedTopic?.id === action.payload.id) {
          state.selectedTopic = action.payload;
        }
      })

      .addCase(deleteTopic.fulfilled, (state, action: PayloadAction<number>) => {
        state.topics = state.topics.filter(topic => topic.id !== action.payload);
        if (state.selectedTopic?.id === action.payload) {
          state.selectedTopic = undefined;
        }
      });
  },
});

export const { clearSelectedTopic } = topicSlice.actions;
export default topicSlice.reducer;
