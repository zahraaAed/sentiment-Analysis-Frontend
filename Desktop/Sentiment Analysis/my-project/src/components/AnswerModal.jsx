import React from 'react';
import "./AnswerModal.css"
const AnswerModal = ({ show, handleClose, question, onSubmit }) => {
    console.log("Modal show prop:", show);
 const [answer, setAnswer] = React.useState('');

 const handleSubmit = async (e) => {
  e.preventDefault();
  onSubmit(answer);
  console.log('Answer submitted:', answer); 
  setAnswer('');
  handleClose();
};


 return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <h2>Answer Question</h2>
        <form className='flex flex-col mt-4' onSubmit={handleSubmit}>
          <label className='flex flex-col font-bold text-content '>
             Answer:
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
              className='border-2 border-content'
            />
          </label>
          <div className='flex space-x-16 mt-8 justify-center items-center buttons p-4'>
 <button type="submit" className='bg-content text-white p-2 w-32 rounded-full'>Submit</button>
 <button onClick={handleClose} className='bg-pink-700 text-white p-2 w-32 rounded-full '>Close</button>
</div>

        </form>
      </div>
    </div>
 );
};

export default AnswerModal;

