import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.png";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios';
import app from '../components/firebase.jsx';
import { FaEye, FaEyeSlash,FaGoogle } from 'react-icons/fa';

const Login = () => {
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });
  const [googleLogin, setGoogleLogin] = useState(false); //  state to track Google login
  const [loginSuccess, setLoginSuccess] = useState(false); // state to track login success
  const auth = getAuth(app);
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to analysis page if both login attempts are successful
    if (loginSuccess && googleLogin) {
      navigate('/analysis');
    }
  }, [loginSuccess, googleLogin, navigate]);

  const handleInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/user/login', login, { withCredentials: true });
      console.log("You were successfully logged in");
      setLoginSuccess(true); // Set login success flag
    } catch (error) {
      const errorMessage = error.response.data.error || 'Login failed. Please try again.';
      console.error(errorMessage);
    }
  };

  const registerWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User signed in with Google:', user);
      setGoogleLogin(true); // Set Google login state to true
    } catch (error) {
      console.error('Error during Google Sign-In:', error.message);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-purple-200 flex-col">
      <h1 className="text-5xl font-bold text-pink-700 mb-4">Welcome Back!</h1>
      <p className="text-lg text-gray-600 mb-6">Log in to continue accessing your account.</p>
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 md:w-1/2 lg:w-1/3">
        <img src={Logo} alt='logo' className="mx-auto w-32 h-auto sm:w-36 md:w-64 lg:w-48" />
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input 
              type="text" 
              id="username"
              name="username"
              value={login.username}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={login.password}
                onChange={handleInputChange}
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button type="button" onClick={handleShowPassword} className="text-gray-400 focus:outline-none focus:text-gray-500">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </span>
            </div>
          </div>
          <button type="submit" className="w-full flex justify-center cursor-pointer py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-800 hover:from-pink-600 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            LOG IN
          </button>
          <button onClick={registerWithGoogle} className="w-full flex items-center justify-center mt-2 bg-transparent hover:bg-white cursor-pointer hover:text-pink-700 border border-pink-700 hover:border-content font-bold py-2 px-4 sm:py-1 sm:px-2 md:py-1.5 md:px-2.5 lg:py-2 lg:px-4 font-sans rounded-md">
            <FaGoogle className="mr-2" style={{ color: 'purple' }} /> Sign in with Google
          </button>
          <p className="mt-4 text-sm text-center">
            Don't have an account? <Link to="/signup" className="font-medium text-pink-600 cursor-pointer hover:text-pink-500">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
