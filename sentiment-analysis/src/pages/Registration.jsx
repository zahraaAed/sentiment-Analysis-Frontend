import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
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
  const handleInputChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/register",
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
      }, 3000);
    } catch (error) {
      console.log("failed to register", error.message);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center  min-h-screen bg-gradient-to-r from-purple-300 to-pink-200 flex-col">
      <img src={Logo} alt='logo' className="mx-auto w-32 h-auto sm:w-36 md:w-64 lg:w-48 mt-8" />
    <h1 className="text-5xl font-bold text-pink-700 mb-4">WELCOME TO TONIFY</h1>
          <p className="text-2xl text-content mb-6 mt-4" >
            We're thrilled to have you here. Please take a moment to sign up <br/>and unlock a world of possibilities.
       
           <b>Your journey begins now.</b> 
          </p>
       
        <div className="bg-white p-8 shadow-lg w-full md:w-1/2  border border-gray-300 mt-8 ">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-pink-700 mb-4">Sign Up</h1>
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
              className="mt-1 block w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            />
            <div className="role-field">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
              <select
                id="role"
                name="role"
                value={signUp.role}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              >
                <option value="" disabled>Select a role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            <button type="submit" className="w-full mt-8 flex justify-center cursor-pointer py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-800 hover:from-pink-600 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              SIGN UP
            </button>
          </form>
        </div>
        </div>
  );
};

export default SignUp;
