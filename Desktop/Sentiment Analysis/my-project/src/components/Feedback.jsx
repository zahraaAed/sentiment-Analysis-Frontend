import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { useFeedback } from './feedbackContext';
import { Link } from 'react-router-dom';
import "./header.css"


const Feedback = () => {

  
  const { feedbacks, fetchFeedbacks } = useFeedback();
  const [currentSlide, setCurrentSlide] = useState(0);


    useEffect(() => {
      fetchFeedbacks('feedback');
    }, []);
  


  const nextSlide = () => {
    setCurrentSlide(currentSlide === Math.ceil(feedbacks.length / 3) - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? Math.ceil(feedbacks.length / 3) - 1 : currentSlide - 1);
  };

  return (
    <div className="relative ">
        
      <h1 className="w-full bg-contentBackground p-10 px-6 text-center text-4xl text-white">
        <b>Feedbacks</b>
        <span className="block text-xl font-normal mt-2">Explore what our users are saying</span>
      </h1>
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-purple-200 rounded-full mt-12 mx-16 md:mx-6 sm:mx-2 sm:block button-feedback">
  &lt;
</button>
<button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-purple-200 rounded-full mt-12 mx-16 sm:mx-2  sm:block button-feedback-right">
  &gt;
</button>

      <div className="flex-col h-100 mb-16 mt-16 overflow-hidden  ">
        {feedbacks.slice(currentSlide * 3, (currentSlide + 1) * 3).map((feedback, index) => (
       <div key={index} className="p-4 border border-gray-300 rounded-md shadow-md mb-4 bg-purple-200 text-pink-700 w-full lg:w-2/3 mx-auto feedbacks" >
       <h3 className="text-lg font-semibold mb-2 flex items-center">
         <FaUser className="mr-2" /> {feedback.userId.username}
       </h3> 
       <p className="text-pink-700">{feedback.message}</p>
     </div>
     
        ))}
      </div>
      <div className="flex justify-center">
  <p className="text-pink-700 border-2 border-pink-700 shadow-2xl p-2 text-2xl mb-8 font-bold py-1 px-2 sm:py-1 sm:px-2 md:py-1 md:px-2 lg:py-1 lg:px-2 font-sans rounded-full animate-bounce">
    <Link to="/contactus">Send A Feedback</Link>
  </p>
</div>

    </div>
  );
};

export default Feedback;
