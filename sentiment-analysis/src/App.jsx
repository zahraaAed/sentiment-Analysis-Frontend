import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import SignUp from './pages/Registration';
import AnalysisPage from './pages/AnalysisPage';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Articles from './components/Articles';
import ChatbotComponent from './components/chatbot';
import Chat from './components/liveChat';
import { FeedbackProvider } from './components/feedbackContext'; // Ensure this path is correct
import Feedback from './components/Feedback';
import Admin from './pages/Admin';
function App() {
  return (
    <FeedbackProvider>
      <Router>
        <ChatbotComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />   
          <Route path="/login" element={<Login />} />   
          <Route path="/signup" element={<SignUp/>} />   
          <Route path="/analysis" element={<AnalysisPage/>} />   
          <Route path="/aboutus" element={<Aboutus/>} />   
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/articles" element={<Articles/>} />   
          <Route path="/admin" element={<Admin/>} />   
        </Routes>
      </Router>
      
    </FeedbackProvider>
  );
}

export default App;
