// store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import firebaseAuthReducer from './slices/firebaseAuthSlice';
import registerReducer from "./slices/registerSlice";
import debateReducer from "./slices/debateSlice";
import topicReducer from "./slices/topicSlice";
import userReducer from "./slices/userSlice"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

// Combine your reducers
const rootReducer = combineReducers({
  firebaseAuth: firebaseAuthReducer,
  register: registerReducer,
  user:userReducer,
  debate: debateReducer,
  topics: topicReducer,
  
});

// Configure persistence
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['firebaseAuth'], // only persist this slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
