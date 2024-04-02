// import { useState ,useEffect} from 'react';
// import './FAQs.css';
// import Header from './Header';

// import { useFeedback } from './feedbackContext';
// const FAQ = () => {
//   const { questions, fetchQuestions } = useFeedback();

//   useEffect(() => {
//    fetchQuestions('question');
//   }, []);
  


//   const [openQuestion, setOpenQuestion] = useState(null);

//   const handleQuestionClick = (id) => {
//     setOpenQuestion(openQuestion === id ? null : id);
//   };

//   return (
//     <>
// <Header/>
   
//       <div className=" mt-16 text-pink-700 accordion">
//         <h1 className="text-5xl mb-16 text-center">
//           <b>FAQs: Frequestly Asked Questions </b>
//         </h1>
//         {questions?.map((question, index) => (
//        <div key={index} className="p-4 border border-gray-300 rounded-md shadow-md mb-4 bg-purple-200 text-pink-700 w-full lg:w-2/3 mx-auto feedbacks" data-aos="fade-top">
//        <h3 className="text-lg font-semibold mb-2 flex items-center">
//          <FaUser className="mr-2" /> {question.userId.username}
//        </h3> 
//        <p className="text-pink-700">{question.message}</p>
//        {/* <p className="text-pink-700">{question.answer}</p> */}

//      </div>
     
//         ))}
//         </div>
   
   
//     </>
//   );
// };

// export default FAQ;

// import { useFeedback } from './feedbackContext';
// import { Link } from 'react-router-dom';

// import { FaUser } from 'react-icons/fa';

// const FAQ  = () => {

  
//   const { questions, fetchQuestions } = useFeedback();
 


//     useEffect(() => {
//       fetchQuestions ('question');
//       console.log(questions); 
//     }, []);
  

//   const [openQuestion, setOpenQuestion] = useState(null);

//   const handleQuestionClick = (id) => {
//     setOpenQuestion(openQuestion === id ? null : id);
//   };


//   return (
//         <>
// <Header/>
// <div className=" mt-16 text-pink-700 accordion">
//        <h1 className="text-5xl mb-16 text-center">
// <b>FAQs: Frequestly Asked Questions </b>
//   </h1>


//       <div className="flex-col h-100 mb-16 mt-16 overflow-hidden  ">
//       {questions?.map((question, index) => {
//  console.log(question); 
//  return (
//     <div key={index} className="p-4 border border-gray-300 rounded-md shadow-md mb-4 bg-purple-200 text-pink-700 w-full lg:w-2/3 mx-auto feedbacks">
    
//       <p className="text-pink-700">{question.message}</p>
//       <p className="text-pink-700">{question.answer}</p>
//     </div>
//  );
// })}

//       </div>


//     </div>
//     </>
//   );
// };

// export default FAQ;
import { useState, useEffect } from 'react';
import './FAQs.css'; // Ensure this is the correct path to your CSS file
import Header from './Header';
import { useFeedback } from './feedbackContext';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const FAQ = () => {
 const { questions, fetchQuestions } = useFeedback();

 useEffect(() => {
    fetchQuestions('question');
    console.log(questions);
 }, []);

 const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null);

 const handleQuestionClick = (index) => {
    setVisibleAnswerIndex(visibleAnswerIndex === index ? null : index);
 };

 return (
    <>
      <Header />
      <div className="accordion">
        <h1 className="text-5xl mb-16 text-center mt-16 text-pink-700">
          <b>FAQs: Frequently Asked Questions</b>
        </h1>

        <div className="flex-col h-1/4 mb-16 mt-16  overflow-hidden">
          {questions?.map((question, index) => (
            <div
              key={index}
              className={`accordion-item ${visibleAnswerIndex === index ? 'open' : ''}`}
              onClick={() => handleQuestionClick(index)}
            >
              <div className="question p-4">
                <p className="text-pink-700 text-2xl font-bold ">{question.question}</p>
                <span className="question-after">▼</span>
              </div>
              {visibleAnswerIndex === index && (
                 <div className="answer">
                 {/* Display the answer if it's available */}
                 <p className="text-2xl text-content">{question.answer || "No answer yet"}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
 );
};

export default FAQ;
