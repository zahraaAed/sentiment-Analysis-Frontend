import { useState ,useEffect} from 'react';
import './FAQs.css';
import Header from './Header';

import { useFeedback } from './feedbackContext';
const FAQ = () => {
  const {questions, fetchFeedbacks } = useFeedback();
  useEffect(() => {
    fetchFeedbacks('question');
  }, []);


  const [openQuestion, setOpenQuestion] = useState(null);

  const handleQuestionClick = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <>
<Header/>
   
      <div className=" mt-16 text-pink-700 accordion">
        <h1 className="text-5xl mb-16 text-center">
          <b>FAQs: Frequestly Asked Questions </b>
        </h1>
        {questions.map((question,answer, index) => (
       <div key={index} className="p-4 border border-gray-300 rounded-md shadow-md mb-4 bg-purple-200 text-pink-700 w-full lg:w-2/3 mx-auto feedbacks" data-aos="fade-top">
       <h3 className="text-lg font-semibold mb-2 flex items-center">
         <FaUser className="mr-2" /> {question.userId.username}
       </h3> 
       <p className="text-pink-700">{question.message}</p>
       <p className="text-pink-700">{question.answer}</p>

     </div>
     
        ))}
        </div>
   
   
    </>
  );
};

export default FAQ;