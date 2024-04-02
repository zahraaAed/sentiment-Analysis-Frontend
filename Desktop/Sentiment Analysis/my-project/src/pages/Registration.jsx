import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios';
import app from '../components/firebase.jsx';
import { FaEye, FaEyeSlash,FaGoogle } from 'react-icons/fa';
import Logo from "../assets/Logo.png";

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    username: "",
    password: "",
    email: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const auth = getAuth(app);
  const handleInputChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://sentiment-analysis-backend-2-jmtz.onrender.com/api/user/register",
        signUp
      );
      console.log(response.data);

      setSignUp({
        username: "",
        password: "",
        email: "",
        role: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
      console.log("failed to register", error.message);
    }
  };
  const registerWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User signed in with Google:', user);
      navigate("/login");
    } catch (error) {
      console.error('Error during Google Sign-In:', error.message);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center  h-full min-h-screen bg-gradient-to-r from-purple-300 to-pink-200 flex-col ">
    
     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pink-700 my-4 text-center">
 Welcome To Tonify
</h1>

      <p className="text-2xl text-gray-600 mb-6 text-center " >
        We're thrilled to have you here. Please take a moment to sign up and unlock a world of possibilities.
        <br/><b>Your journey begins now.</b> 
      </p>

      <div className="mt-12 sm:mt-0 w-full  md:w-1/2 lg:w-1/3 mx-8 bg-white shadow-lg rounded lg:p-8 h-full mb-8 loginForm">
        <div className="text-center mb-4">
        <Link to="/"> <img src={Logo} alt='logo' className="mx-auto w-32 h-auto sm:w-36 md:w-64 lg:w-48 " /></Link>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={signUp.username}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
          />
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <div className="password-field relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={signUp.password}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            />
            <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <button type="button" onClick={handleShowPassword} className="text-gray-400 focus:outline-none focus:text-gray-500">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </span>
          </div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={signUp.email}
            onChange={handleInputChange}
            required
            className=" mt-1 block w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
          />
          <div className="role-field">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <select
              id="role"
              name="role"
              value={signUp.role}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm  bg-white text-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            >
              <option value="" disabled>Select a role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <button type="submit" className="w-full mt-8 flex justify-center cursor-pointer py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-800 hover:from-pink-600 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            SIGN UP
          </button>
          <div className="flex flex-col items-center">
            <button onClick={registerWithGoogle} className=" w-full flex items-center justify-center mt-2 bg-transparent hover:bg-white cursor-pointer hover:text-pink-700 border border-pink-700 hover:border-content font-bold py-2 px-4 sm:py-1 sm:px-2 md:py-1.5 md:px-2.5 lg:py-2 lg:px-4 font-sans rounded-md">
              <FaGoogle className="mr-2" style={{ color: 'purple' }} /> Sign up with Google
            </button>
          </div>
          <a href="https://www.facebook.com/v19.0/dialog/oauth?client_id=1360513551323500&display=page&extras={'setup':{'channel':'IG_API_ONBOARDING'}}&redirect_uri=http://localhost:5173/&response_type=token&scope=instagram_basic,instagram_content_publish,instagram_manage_comments,instagram_manage_insights,pages_show_list,pages_read_engagement">Login to Facebook</a>

        </form>
      </div>
    </div>
  );
};

export default SignUp;
