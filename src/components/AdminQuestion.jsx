// import React, { useState, useEffect } from "react";
// import { FaUser } from "react-icons/fa";
// import { useFeedback } from "../components/feedbackContext";
// import { Link } from "react-router-dom";
// import './FAQs.css'; // Ensure this is the correct path to your CSS file
// const AdminQuestion = () => {
//   const { questions, fetchQuestions,deleteQuestion } = useFeedback();


//   useEffect(() => {
//     fetchQuestions('question');
//   }, []);



//   return (
//     <div className="relative h-full">
   
//       <div className="flex-col h-100 mb-16 mt-8 overflow-hidden">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-about relative mb-8">
//             Questions
//             <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-1 mt-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded animate-pulse"></span>
//           </h1>
//         </div>

//         {questions
          
//           .map((question, index) => (
//             <div
//               key={index}
//               className="p-4 border border-gray-300 rounded-md shadow-md mb-4 bg-gray-200 text-pink-700 w-full lg:w-2/3 mx-auto"
//             >
//               <h3 className="text-lg font-semibold mb-2 flex items-center">
//                 <FaUser className="mr-2" /> {question.userId.username}
//               </h3>
//               <div className="p-4 rounded-md mb-4 bg-gray-200 text-pink-700 w-full  question">
              
//               <p  className="text-content font-bold">{question.message}</p>
           
//             </div>
//             <div className="flex">
//               {question._id && (
//                 <button
//                   onClick={() => deleteQuestion(question._id)}
//                   className="text-xl mx-auto w-32 flex justify-center cursor-pointer py-2 px-4 border border-transparent rounded-full shadow-sm font-medium text-white bg-pink-700 hover:from-pink-600 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                   Delete
//                 </button>
//               )}
//                   {question._id && (
//                 <button
//                   onClick={() => deleteFeedback(question._id)}
//                   className="text-xl mx-auto w-32 flex justify-center cursor-pointer py-2 px-4 border border-transparent rounded-full shadow-sm font-medium text-white bg-content hover:from-pink-600 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                Answer
//                 </button>
//               )}
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default AdminQuestion;
import React, { useContext, useState,useEffect } from 'react';
import { useFeedback } from "./feedbackContext";
import AnswerModal from "./AnswerModal";
import { FaUser } from "react-icons/fa";
import './FAQs.css';
const AdminQuestion = () => {
 const { questions, deleteQuestion,fetchQuestions, addAnswer } =  useFeedback();
 const [showModal, setShowModal] = useState(false);
 const [currentQuestion, setCurrentQuestion] = useState(null);


   useEffect(() => {
    fetchQuestions('question');
  }, []);

  const handleAnswerClick = (question) => {
    console.log("Opening modal for question:", question._id); // Debugging line
    setCurrentQuestion(question);
    setShowModal(true);
   };
   
 const handleCloseModal = () => {
    setShowModal(false);
 };


 return (
    <div className="relative h-full">
      <div className="flex-col h-100 mb-16 mt-8 overflow-hidden">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-about relative mb-8">
            Questions
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-1 mt-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded animate-pulse"></span>
          </h1>
        </div>

        {questions.map((question, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-md shadow-md mb-4 bg-gray-200 text-pink-700 w-full lg:w-2/3 mx-auto">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <FaUser className="mr-2" /> {question.userId.username}
            </h3>
            <div className="p-4 rounded-md mb-4 bg-gray-200 text-pink-700 w-full question">
              <p className="text-content font-bold">{question.message}</p>
            </div>
            <div className="flex">
              {question._id && (
                <button onClick={() => deleteQuestion(question._id)} className="text-xl mx-auto w-32 flex justify-center cursor-pointer py-2 px-4 border border-transparent rounded-full shadow-sm font-medium text-white bg-pink-700 hover:from-pink-600 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 Delete
                </button>
              )}
              {question._id && (
                <button onClick={() => handleAnswerClick(question)} className="text-xl mx-auto w-32 flex justify-center cursor-pointer py-2 px-4 border border-transparent rounded-full shadow-sm font-medium text-white bg-content hover:from-pink-600 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 Answer
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <AnswerModal
        show={showModal}
        handleClose={handleCloseModal}
        question={currentQuestion}
        onSubmit={addAnswer}
      />
    </div>
 );
};

export default AdminQuestion;
