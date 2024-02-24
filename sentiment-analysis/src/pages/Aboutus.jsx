import React, { useState } from "react";
import Header from "../components/Header";
import AboutImage from "../assets/AboutusImage.png";
import Footer from "../components/Footer";

function Aboutus() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div>
      <Header />
      <div className="text-center mt-16 text-content">
        <h1 className="text-5xl">
          <b> ABOUT US </b>
        </h1>
        <p className="text-2xl p-8 mx-32 ">
          Welcome to our sentiment analysis platform! Sentiment analysis, also
          known as opinion mining, is a powerful technique used to determine the
          sentiment expressed in text data. It involves analyzing textual
          content to identify and categorize opinions, emotions, and attitudes
          conveyed within the text. By understanding the sentiment behind the
          words, businesses and individuals can gain valuable insights into
          customer preferences, public opinion, and market trends.
        </p>
        <img
          src={AboutImage}
          className="w-1/2 h-auto mx-auto px-4 align-middle rounded-lg"
        />
      </div>
      <div className="w-full bg-about p-10 mt-8 text-center text-2xl text-white flex justify-evenly">
        <p
          className={`text-white cursor-pointer ${activeSection === 0 ? 'font-bold underline shadow' : ''} hover:text-content`}
          onClick={() => setActiveSection(0)}
        >
          How Sentiment Analysis Works
        </p>
        <p
          className={`text-white cursor-pointer ${activeSection === 1 ? 'font-bold underline shadow' : ''} hover:text-content`}
          onClick={() => setActiveSection(1)}
        >
          Applications of Sentiment Analysis
        </p>
        <p
          className={`text-white cursor-pointer ${activeSection === 2 ? 'font-bold underline shadow' : ''} hover:text-content`}
          onClick={() => setActiveSection(2)}
        >
          Our Mission
        </p>
      </div>
      <div className={`mt-16 mx-8 text-content ${activeSection !== 0 ? 'hidden' : ''}`}>
        <h1 className="text-3xl mt-8 font-bold">How Sentiment Analysis Works?</h1>
        <p className="text-2xl mt-8 mb-16">
          Sentiment analysis employs natural language processing (NLP) and
          machine learning algorithms to analyze text and identify sentiment.
          These algorithms categorize text into different sentiment categories
          such as positive, negative, or neutral, based on the language used and
          the context of the text. Advanced sentiment analysis techniques can
          also identify specific emotions such as joy, anger, sadness, etc.,
          providing deeper insights into the underlying sentiment.
        </p>
      </div>
      <div className={`mt-16 mx-8 text-content ${activeSection !== 1 ? 'hidden' : ''}`}>
        <h1 className="text-3xl mt-8 font-bold">Applications of Sentiment Analysis</h1>
        <div className="mt-16 mx-8 text-content">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-3xl bg-content text-white p-8"> 
              <h1 className="text-3xl mb-4">
                <b>Monitor Brand Reputation</b>
              </h1>
              <p className="text-lg ">
                Keep track of online mentions and sentiment to gauge public perception of your brand, helping businesses maintain a positive image and address any negative feedback promptly.
              </p>
            </div>
            <div className="text-3xl bg-white border-2 border-content text-content p-8">
              <h1 className="text-3xl mb-4">
                <b>Understand Customer Feedback</b>
              </h1>
              <p className="text-lg">
                Keep track of online mentions and sentiment to gauge public perception of your brand, helping businesses maintain a positive image and address any negative feedback promptly.
              </p>
            </div>
            <div className="text-3xl bg-content text-white p-8"> 
              <h1 className="text-3xl mb-4">
                <b>Market Research</b>
              </h1>
              <p className="text-lg">
                Utilize sentiment analysis to analyze social media conversations and online forums, identifying emerging trends, consumer preferences, and market sentiments to inform marketing strategies and product development.
              </p>
            </div>
            <div className="text-3xl bg-white border-2 border-content text-content p-8">
              <h1 className="text-3xl mb-4">
                <b>Risk Management</b>
              </h1>
              <p className="text-lg">
                Monitor sentiment in financial news and social media to assess market sentiment and potential risks, helping investors and businesses make informed decisions and mitigate potential losses.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`mt-16 mx-8 text-content ${activeSection !== 2 ? 'hidden' : ''}`}>
        <h1 className="text-3xl mt-8 font-bold">Our Mission</h1>
        <p className="text-2xl mt-8 mb-16">
          At Tonify, our mission is to provide you with a comprehensive tool for
          sentiment analysis in English. We aim to empower users to analyze text
          from various sources, including their own input and social media
          posts, to understand the underlying sentiment and make informed
          decisions.
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default Aboutus;


