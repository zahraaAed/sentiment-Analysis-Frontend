import React from "react";
import { Link } from "react-router-dom";
// Change this line to use named import
import { ReactTyped } from "react-typed";

const HeaderContent = () => {
  return (
    <div className="h-5/3">
      <div className="flex justify-start">
        <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl lg:text-content font-bold mt-80 p-7 sm:text-white">
        <ReactTyped strings={["Sentiment Analysis", "Opinion Mining"]} typeSpeed={100} loop />
        </h1>
        {/* <h1> <ReactTyped strings={["Sentiment Analysis"]} typeSpeed={100} loop /></h1> */}
      </div>
      <div className="flex flex-col ijustify-start mt-4 p-7">
        <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl lg:text-content sm:text-white">
          At the intersection where algorithms meet empathy, <br /> and analytics meet
          emotions,
        
          here sentiment analysis   <br />unveils its captivating narrative.
        </p>
        <button className="bg-pink-700 w-48 mt-4 hover:bg-white text-white cursor-pointer hover:text-pink-700 border border-white hover:border-fuchsia-800 font-bold py-2 px-4 sm:py-1 sm:px-2 md:py-1.5 md:px-2.5 lg:py-2 lg:px-4 font-sans rounded-full">
          <Link to="/analysis">Get Started</Link>
        </button>
      </div>
      <div>
        
      </div>
      
    </div>
  );
}

export default HeaderContent;
