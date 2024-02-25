import React from "react";
import effeciencyIcon from "../assets/effeciency.png";
import flexibilityIcon from "../assets/flexibility.png";
import educationIcon from "../assets/education.png";

const UsageContent = () => {
  return (
    <>
      <div className="w-full bg-content p-10 px-6 mt-64 text-center text-2xl text-white ">
        <p>
          <b>Catalyze Your Brand's Growth with Tonify: </b>An Agile,
        </p>
        <p className="text-gray-200">
          Multi-Page Business Template Engineered to Accelerate Your Success.
        </p>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 space-x-16 md:space-y-8 mt-10">
      <div className="w-full md:w-1/4 p-4 text-center border border-content rounded-lg relative h-80 mx-4 mt-8 cursor-pointer transform hover:scale-105 transition duration-300 hover:bg-gray-200 hover:text-white">
  <div className="bg-purple-200 rounded-full w-20 h-20 flex items-center justify-center absolute -top-10 left-1/2 transform -translate-x-1/2">
    <img src={effeciencyIcon} alt="Efficiency" className="w-14 h-14" />
  </div>
  <h2 className="text-3xl font-bold my-4 p-6 text-content">
    Efficiency
  </h2>
  <p className="text-content text-2xl sm:text-lg">
    Save time and effort with our user-friendly interface.
  </p>
</div>


        <div className="w-full md:w-1/2 p-4 text-center border border-content rounded-lg relative h-80 mx-4 mt-4 sm:w-60 md:w-1/2 lg:w-1/4 lg:mx-0 transform hover:scale-105 transition duration-300 hover:bg-gray-200 ">
          <div className="bg-purple-200 rounded-full w-20 h-20 flex items-center justify-center absolute -top-10 left-1/2 transform -translate-x-1/2">
            <img
              src={flexibilityIcon}
              alt="Flexibility"
              className="w-12 h-12"
            />
          </div>
          <h2 className="text-3xl font-bold my-4 p-6 text-content">
            Flexibility
          </h2>
          <p className="text-content text-2xl sm:text-lg">
            Customize your online presence to reflect your brand.
          </p>
        </div>
        <div className="w-full md:w-1/4 p-4 text-center border border-content rounded-lg relative h-80 mx-4 mt-4 transform hover:scale-105 transition duration-300 hover:bg-gray-200 ">
          <div className="bg-purple-200 rounded-full w-20 h-20 flex items-center justify-center absolute -top-10 left-1/2 transform -translate-x-1/2">
            <img src={educationIcon} alt="Education" className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold my-4 p-6 text-content">
            Education
          </h2>
          <p className="text-content text-2xl sm:text-lg">
            Access educational resources to enhance your skills and knowledge.
          </p>
        </div>
      </div>
    </>
  );
};

export default UsageContent;
