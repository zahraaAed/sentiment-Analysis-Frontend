import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/feedback");
        setFeedbacks(response.data);
        console.log("Feedbacks fetched successfully");
      } catch (error) {
        console.error("Error fetching feedbacks:", error.message);
      }
    };

    fetchFeedbacks();
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === Math.ceil(feedbacks.length / 4) - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? Math.ceil(feedbacks.length / 4) - 1 : currentSlide - 1);
  };

  return (
    <div className="relative">
        <h1 className="w-full bg-contentBackground p-10 px-6 text-center text-4xl text-white"><b>     Feedbacks</b>

    <span className="block text-xl font-normal mt-2">Explore what our users are saying</span>
  </h1>
  <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-300 rounded-full mt-16 mx-16">
        &lt;
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-300 rounded-full mt-16 mx-16">
        &gt;
      </button>
      <div className="flex-col h-80 mb-16 mt-16 overflow-hidden">
        {feedbacks.slice(currentSlide * 4, (currentSlide + 1) * 4).map((feedback, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-md shadow-md mb-4 bg-gray-200 text-pink-700 w-full lg:w-2/3 mx-auto">
            <h3 className="text-lg font-semibold mb-2">{feedback.userId.username}</h3> 
            <p className="text-pink-700">{feedback.message}</p>
          </div>
        ))}


    </div>
    </div>
  );
};

export default Feedback;

