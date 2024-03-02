import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const FeedbackContext = createContext();

export const useFeedback = () => useContext(FeedbackContext);

export const FeedbackProvider = ({ children }) => {
 const [feedbacks, setFeedbacks] = useState([]);

 const fetchFeedbacks = async (subject) => {
    try {
      const response = await axios.get("http://localhost:4000/api/feedback", {
        withCredentials: true,
        params: {
          subject: subject, // Pass the subject as a query parameter
        },
      });
      setFeedbacks(response.data);
      console.log("Feedbacks fetched successfully");
    } catch (error) {
      console.error("Error fetching feedbacks:", error.message);
    }
 };

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
  
 return (
    <FeedbackContext.Provider value={{ feedbacks, fetchFeedbacks, deleteFeedback }}>
      {children}
    </FeedbackContext.Provider>
 );
};
