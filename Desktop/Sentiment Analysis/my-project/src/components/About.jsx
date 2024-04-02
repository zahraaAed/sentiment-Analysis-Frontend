import React from 'react';
import sentiment from "../assets/sentiment.png";
import { Link } from 'react-router-dom';

const About=()=> {

  return (
    <div className="w-full p-10 px-6 mt-6 text-xl lg:text-3xl text-white flex flex-col lg:flex-row justify-center items-center">
      <img src={sentiment} className='w-full lg:w-1/2 px-8 mb-8 lg:mb-0' alt="Sentiment Analysis"data-aos="zoom-in" />
      <div className="w-full lg:w-1/2 p-10 px-6 text-xl lg:text-4xl text-white flex flex-col justify-center">
        <h1 className='text-pink-700 mb-4'data-aos="zoom-in">ABOUT TONIFY</h1>
        <p className="text-content mb-4" data-aos="zoom-in">Sentiment analysis empowers you to decipher the emotions and opinions expressed about your brand, products, and services across various channels.</p>
        {/* <p className="hover:bg-white text-content hover:text-pink-700 border border-white text-sm py-1 px-2 sm:py-1 sm:px-2 md:py-1 md:px-2 lg:py-1 lg:px-2 font-sans rounded-full">
          <Link to="/aboutus">MORE ABOUT US</Link>
        </p> */}
<p className="text-pink-700 border border-white text-sm py-1 px-2 sm:py-1 sm:px-2 md:py-1 md:px-2 lg:py-1 lg:px-2 font-sans rounded-full ">
  <Link to="/aboutus">MORE ABOUT US</Link>
</p>


      </div>
    </div>
  );
}

export default About;
