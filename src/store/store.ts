import { configureStore } from '@reduxjs/toolkit';
import firebaseAuthReducer from './slices/firebaseAuthSlice';
import registerReducer from "./slices/registerSlice"

export const store = configureStore({
  reducer: {
    firebaseAuth: firebaseAuthReducer,
    register:registerReducer 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
