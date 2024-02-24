import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaComments } from 'react-icons/fa';
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from 'axios';

const Contactus = () => {
  const [contact, setContact] = useState({
    username: '',
    email: '',
    message:'',
  });
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/feedback", contact,  {
        withCredentials: true,
      });
      setAlert(true);
      setAlertMessage('You have successfully submitted your feedback!');
      console.log("Feedback submitted successfully");
    } catch (error) {
      setAlert(true);
      setAlertMessage('Failed to submit feedback. Please try again.');
      console.error("Failed to submit feedback:", error.message);
    }
  };

  const closeAlert = () => {
    setAlert(false);
    setAlertMessage('');
  };

  return (
    <div>
      <Header />
      <div className="text-center mt-16 mx-auto max-w-full mb-32 ">
        <h1 className="text-5xl text-content">
          <b> Contact US </b>
        </h1>
        <h3 className="text-3xl text-content mt-16">"Have a question or feedback? We're here to help! Reach out to us and let us know how we can assist you."
</h3>
        <div className="flex justify-center items-center flex-wrap ">
        <form className="mt-24 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-8  shadow-lg rounded p-16">

            <div className="relative mb-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUser className="h-5 w-5 text-pink-700" />
              </span>
              <input
                type="text"
                id="username"
                name="username"
                placeholder='Username'
                value={contact.username}
                onChange={handleInputChange}
                required
                className="pl-10 w-full py-3 border border-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 text-lg"
              />
            </div>

            <div className="relative mb-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaEnvelope className="h-5 w-5 text-pink-700" />
              </span>
              <input
                type="text"
                id="email"
                name="email"
                placeholder='Email'
                value={contact.email}
                onChange={handleInputChange}
                required
                className="pl-10 w-full py-3 border border-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 text-lg"
              />
            </div>

            <div className="relative mb-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaComments className="h-5 w-5 text-pink-700" />
              </span>
              <input
                type="text"
                id="message"
                name="message"
                placeholder='Message'
                value={contact.message}
                onChange={handleInputChange}
                required
                className="pl-10 w-full py-3 border border-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 text-lg"
              />
            </div>

            <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gradient-to-r from-pink-500 to-purple-800 hover:from-pink-600 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      {alert && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-800">{alertMessage}</p>
            <button onClick={closeAlert} className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">Close</button>
          </div>
        </div>
      )}
     
    </div>
  )
}

export default Contactus;
