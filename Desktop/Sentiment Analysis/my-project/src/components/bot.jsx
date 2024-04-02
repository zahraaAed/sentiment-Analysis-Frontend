
import React, { useState } from "react";
import axios from "axios";
import { FaComment } from 'react-icons/fa';

const Bot = () => {
 const [text, setText] = useState('');
 const [isOpen, setIsOpen] = useState(false);
 const [messages, setMessages] = useState([]);
 const [showQuestions, setShowQuestions] = useState(false);

 // Mapping of questions to predefined answers
 const sentimentAnalysisQuestions = {
    'What is sentiment analysis?': 'Sentiment analysis is the use of natural language processing to identify and extract subjective information from source materials. It is commonly used to determine the attitude, opinions, evaluations, appraisals, feelings, and emotions of a speaker/writer based on the computational treatment of primary text.',
    'How does sentiment analysis work?': 'Sentiment analysis works by using algorithms to analyze text and identify patterns that indicate positive, negative, or neutral sentiment. These algorithms can be based on machine learning, rule-based systems, or a combination of both.',
    'What are the applications of sentiment analysis?': 'Sentiment analysis has a wide range of applications, including social media monitoring, customer feedback analysis, brand monitoring, and market research. It can help businesses understand customer opinions and improve their products and services.',
    'How can I start?': 'To get started, you need to log in or sign up. After logging in, navigate to the analysis section.',
    'What is this website?': 'This website is a platform designed to help businesses understand and analyze customer sentiment through various tools and features. It can assist your business by providing insights into customer feedback, enabling you to make data-driven decisions to improve your products and services.',
 };

 const toggleChat = () => {
    setIsOpen(!isOpen);
 };

 const toggleQuestions = () => {
    setShowQuestions(!showQuestions);
 };

 const sendMessage = (question) => {
    setMessages([...messages, question]);
    const answer = sentimentAnalysisQuestions[question];
    if (answer) {
      setTimeout(() => {
        setMessages([...messages, answer]);
      }, 1000);
    } else {
      setTimeout(() => {
        setMessages([...messages, 'I\'m not sure about that. Can you provide more details or ask a different question?']);
      }, 1000);
    }
    setShowQuestions(false);
 };

  const handleSendMessage = () => {
    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/text/chat",
      headers: {
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYjEyYmIyYzktODIxNi00ZWY3LThiNzYtMWE2OTQyY2ZhNzdlIiwidHlwZSI6ImFwaV90b2tlbiJ9.jdPcgVAOu4mviAQpRysu0hfUSYLqDlmVojvgwjvscHQ",
      },
      data: {
        providers: "openai",
        text: text,   
        chatbot_global_action: "Act as an assistant",
        previous_history: [],
        temperature:   0.0,
        max_tokens:   150,
        fallback_providers: "",
      },
    };
   
    axios
      .request(options)
      .then((response) => {
        console.log("API Response:", response.data);
        // Access the generated_text correctly
        const generatedText = response.data.openai.generated_text;
        console.log("Generated Text:", generatedText);
        
        // Update the messages state with the new message
        setMessages([...messages, generatedText]);
        setText('');
      })
      .catch((error) => {
        console.error(error);
      });
  };
 return (
    <div>
     <button onClick={toggleChat} className="fixed bottom-0 right-0 m-4 flex items-center justify-center bg-content text-white rounded-full sm:w-16 sm:h-16 lg:w-20 lg:h-20">
  <FaComment size={24} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
</button>

      {isOpen && (
        <div className="fixed bottom-24 right-0 lg:w-96 sm:w-32 h-96 bg-gray-200 border border-gray-300 rounded-lg shadow-lg overflow-auto flex flex-col justify-between bot-container">
          <div className="flex justify-between items-center bg-white text-content font-bold p-4">
            <h2>Chat with Tonify</h2>
            <button onClick={toggleChat} className="text-content">X</button>
          </div>
          <div className="p-4">
            {messages.map((message, index) => (
              <p key={index} className="my-2 p-4 rounded-lg bg-white ">
                {message}
              </p>
            ))}
          </div>
          {showQuestions && (
            <div className="p-4">
              {Object.keys(sentimentAnalysisQuestions).map((question, index) => (
                <button key={index} onClick={() => sendMessage(question)} className="bg-content text-white rounded-lg p-2 m-2">
                 {question}
                </button>
              ))}
            </div>
          )}
       <div className="p-4 flex flex-col items-center space-y-4">
            <button onClick={toggleQuestions} className="ml-4 px-4 py-2 bg-content text-white rounded-lg">Ask a Question</button>
            <div className="p-4 flex items-center">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your message"
              className="border border-gray-300 p-2 rounded-lg mr-2"
              style={{ flex: '1' }}
            />
            <button onClick={handleSendMessage} className="bg-white text-content px-4 py-2 rounded-lg">Send</button>
          </div>
          </div>
        </div>
      )}
    </div>
 );
};

export default Bot;
