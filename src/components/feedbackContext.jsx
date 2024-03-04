import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const FeedbackContext = createContext();

export const useFeedback = () => useContext(FeedbackContext);

export const FeedbackProvider = ({ children }) => {
 const [feedbacks, setFeedbacks] = useState([]);

 const [questions, setQuestions] = useState([]);

 const fetchFeedbacks = async ({subject}) => {
    try {
      const response = await axios.get("http://localhost:4000/api/feedback", {
        withCredentials: true,
        params: {
          subject: 'feedback', // Pass the subject as a query parameter
        },
     
      });
      setFeedbacks(response.data);
      console.log("Feedbacks fetched successfully");
    } catch (error) {
      console.error("Error fetching feedbacks:", error.message);
    }
 };
 const fetchQuestions = async () => {
  try {
     const response = await axios.get("http://localhost:4000/api/feedback", {
       withCredentials: true,
       params: {
         subject: 'question', // Fetch only questions
       },
       headers: {
         'Cache-Control': 'no-cache',
       },
     });
     setQuestions(response.data);
     console.log("Response data:", response.data);

     console.log("Questions fetched successfully");
  } catch (error) {
     console.error("Error fetching questions:", error.message);
  }
 };
 
// const fetchFeedbacks = async (subject) => {
//   try {
//      const response = await axios.get("http://localhost:4000/api/feedback", {
//        withCredentials: true,
//        params: {
//          subject: subject, // Ensure subject is correctly passed
//        },
//        headers: {
//          'Cache-Control': 'no-cache',
//        },
//      });
//      // Assuming you want to set feedbacks based on the subject
//      if (subject === 'feedback') {
//        setFeedbacks(response.data);
//      } else if (subject === 'question') {
//        setQuestions(response.data);
//      }
//      console.log("Feedbacks fetched successfully");
//   } catch (error) {
//      console.error("Error fetching feedbacks:", error.message);
//   }
//  };
 
 const deleteFeedback = async (feedbackId) => {
    console.log("Deleting feedback with ID:", feedbackId); // Debugging line
    try {
      await axios.delete(`http://localhost:4000/api/feedback/${feedbackId}`, {
        withCredentials: true,
      });
      // Filter out the deleted feedback from the local state
      setFeedbacks(feedbacks.filter(feedback => feedback._id !== feedbackId));
      console.log("Feedback deleted successfully");
    } catch (error) {
      console.error("Error deleting feedback:", error.message);
    }
 };
 const deleteQuestion = async (questionId) => {
  console.log("Deleting question with ID:", questionId); // Debugging line
  try {
     await axios.delete(`http://localhost:4000/api/feedback/${questionId}`, {
       withCredentials: true,
     });
     // Filter out the deleted question from the local state
     setQuestions(questions.filter(question => question._id !== questionId));
     console.log("Question deleted successfully");
  } catch (error) {
     console.error("Error deleting question:", error.message);
  }
 };
 const addAnswer = async (questionId, answer) => {
  console.log(questionId, answer)
  const userId = sessionStorage.getItem('userId');

  try {
    const response = await axios.post('http://localhost:4000/api/feedback', {
      subject:"question",
      userId,
      answer,
      message: "answer"
     }, {
      withCredentials: true, // Include this if you're using cookies for authentication
    
      
    });
    console.log('Answer submitted successfully:', response.data);
    // Optionally, update the UI to reflect the new answer
  } catch (error) {
    console.error('Error submitting answer:', error);
  }
};
 return (
    <FeedbackContext.Provider value={{ feedbacks,questions, fetchFeedbacks, fetchQuestions,deleteFeedback,deleteQuestion,addAnswer }}>
      {children}
    </FeedbackContext.Provider>
 );
};
