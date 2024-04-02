import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useFeedback } from "./feedbackContext";
import { Link } from "react-router-dom";
import "./header.css"
const AdminFeedback = () => {
  const { feedbacks, fetchFeedbacks, deleteFeedback } = useFeedback();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetchFeedbacks('feedback');
  }, []);

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === Math.ceil(feedbacks.length / 3) - 1 ? 0 : currentSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? Math.ceil(feedbacks.length / 3) - 1 : currentSlide - 1
    );
  };

  return (
    <div className="relative h-full">
   
      <div className="flex-col h-100 mb-16 mt-8 overflow-hidden">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-about relative mb-8">
            Feedbacks
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-1 mt-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded animate-pulse"></span>
          </h1>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-300 rounded-full mt-12 mx-16 button-feedback"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-300 rounded-full mt-12 mx-16 button-feedback-right"
        >
          &gt;
        </button>
        {feedbacks
          .slice(currentSlide * 3, (currentSlide + 1) * 3)
          .map((feedback, index) => (
            <div
              key={index}
              className="p-4 border border-gray-300 rounded-md shadow-md mb-4 bg-gray-200 text-pink-700 w-full lg:w-2/3 mx-auto feedbacks"
            >
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <FaUser className="mr-2" /> {feedback.userId.username}
              </h3>
              <p className="text-pink-700">{feedback.message}</p>
              {feedback._id && (
                <button
                  onClick={() => deleteFeedback(feedback._id)}
                  className="text-xl mt-8 mx-auto w-32 flex justify-center cursor-pointer py-2 px-4 border border-transparent rounded-full shadow-sm font-medium text-white bg-gradient-to-r from-pink-500 to-content hover:from-pink-600 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminFeedback;
