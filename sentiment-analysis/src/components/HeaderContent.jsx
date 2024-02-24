import React from "react";
import { Link } from "react-router-dom";
function HeaderContent() {
  return (
    <div className="containerppp">
      <div className="flex justify-start">
        <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-content mt-10 font-bold mt-64 p-7">
          Sentiment Analysis
        </h1>
      </div>
      <div className="flex flex-col ijustify-start mt-4 p-7">
        <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl text-content">
          At the intersection where algorithms meet empathy, <br /> and analytics meet
          emotions,
        
          here sentiment analysis   <br />unveils its captivating narrative.
        </p>

        <button className="bg-pink-700 text-white w-full sm:w-48 h-10 rounded cursor-pointer font-bold hover:bg-content mt-4 mt-9 rounded-full " >
        <Link to="/analysis" >Get Started</Link>
        </button>
      </div>
      <div>
        
      </div>
      
    </div>
  );
}

export default HeaderContent;
