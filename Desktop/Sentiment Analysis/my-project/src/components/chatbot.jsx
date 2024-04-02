import React, { useState } from 'react';
import { FaComment } from 'react-icons/fa';
const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
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
    setMessages([...messages, { text: question, sender: 'user' }]);
    const answer = sentimentAnalysisQuestions[question];
    if (answer) {
      setTimeout(() => {
        setMessages([...messages, { text: answer, sender: 'bot' }]);
      },   1000);
    } else {
      setTimeout(() => {
        setMessages([...messages, { text: 'I\'m not sure about that. Can you provide more details or ask a different question?', sender: 'bot' }]);
      },   1000);
    }
    setShowQuestions(false);
  };

  return (
    <div>
  
      <button onClick={toggleChat} className="fixed bottom-0 right-0 m-4 p-4 bg-content text-white rounded-full ">
      <FaComment size={48} /> 
      </button>

    
      {isOpen && (
        <div className="fixed bottom-0 right-0 w-64 h-96 bg-white border border-gray-300 rounded-lg shadow-lg overflow-auto">
          <div className="flex justify-between items-center bg-content text-white p-4">
            <h2>Chat with Tonify</h2>
            <button onClick={toggleChat} className="text-white">X</button>
          </div>
          <div className="p-4">
            {messages.map((message, index) => (
              <p key={index} className={`my-2 p-2 rounded-lg ${message.sender === 'user' ? 'bg-gray-200' : 'bg-content text-white'}`}>
                {message.text}
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
          <div className="flex items-center p-4">
            <button onClick={toggleQuestions} className="ml-4 px-4 py-2 bg-content text-white rounded-lg">Ask a Question</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
