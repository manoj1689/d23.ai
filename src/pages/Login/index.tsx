"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { auth, googleprovider, facebookProvider} from "../../firebase/firebase"; // Adjust the path
import {
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { firebaseLogin,loginWithEmailPassword } from '../../store/slices/firebaseAuthSlice'; // Adjust path as needed
import { AppDispatch } from "../../store/store";

const LoginPage = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ✅ Google Login
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleprovider);
      const idToken = await result.user.getIdToken();
      dispatch(firebaseLogin(idToken));
      router.push("/Dashboard");
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  // ✅ Facebook Login
  const signInWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const idToken = await result.user.getIdToken();
      dispatch(firebaseLogin(idToken));
      router.push("/Dashboard");
    } catch (error) {
      console.error("Facebook login failed:", error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      // Dispatch the login action and wait for the result
      const result = await dispatch(
        loginWithEmailPassword({ email, password })
      ).unwrap(); // Unwrap the result to handle rejection directly

      console.log("Login successful:", result);
      // After successful login, redirect to the dashboard
      router.push('/Dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      // Optionally, show an error message to the user
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-xl lg:text-3xl font-semibold italic text-center mb-2">Log In to Your Account</h2>
        <p className="text-center text-md font-light text-gray-500 mb-6">Welcome back! Please enter your details</p>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="text-md block text-gray-600  mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-md block text-gray-600  mb-1">Password</label>
              <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
            </div>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-40"
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white font-semibold rounded-md bg-gradient-to-r from-blue-400 to-pink-400 hover:opacity-90"
          >
            Log In
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-3 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <div className="space-y-3">
          <button
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center border border-gray-300 text-gray-600 rounded-md py-2 gap-4 bg-gray-50 hover:bg-gray-100"
          >
            <span><img src="./images/social/google.png" alt="google" className="w-8" /></span>
            <span>Continue with Google</span>
          </button>

          <button
            onClick={signInWithFacebook}
            className="w-full flex items-center justify-center border border-gray-300 text-gray-600 rounded-md py-2 gap-4 bg-sky-100 hover:bg-sky-200"
          >
            <span><img src="./images/social/facebook.png" alt="facebook" className="w-8" /></span>
            <span>Continue with Facebook</span>
          </button>
        </div>

        <p className="text-center text-lg text-gray-600 font-light mt-6">
          Don't have an account?
          <button
            onClick={() => router.push('/SignUp')}
            className="text-blue-500 hover:underline ml-1 cursor-pointer"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;


