import { configureStore } from '@reduxjs/toolkit';
import firebaseAuthReducer from './slices/firebaseAuthSlice';
import registerReducer from "./slices/registerSlice"
import createDebateReducer from "./slices/createDebate"
export const store = configureStore({
  reducer: {
    firebaseAuth: firebaseAuthReducer,
    register:registerReducer ,
    createDebate:createDebateReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
