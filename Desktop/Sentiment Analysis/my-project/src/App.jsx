// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Login from './pages/Login';
// import HomePage from './pages/HomePage';
// import SignUp from './pages/Registration';
// import AnalysisPage from './pages/AnalysisPage';
// import Aboutus from './pages/Aboutus';
// import Contactus from './pages/Contactus';
// import Articles from './components/Articles';
// import { FeedbackProvider } from './components/feedbackContext'; // Ensure this path is correct
// import Feedback from './components/Feedback';
// import Admin from './pages/Admin';
// import Bot from './components/bot';
// import Navbar from './components/Head';

// import { AuthProvider } from './components/AuthContext'; // Ensure this path is correct
// import ProtectedRoute from './components/protectedRoute'; // Ensure this path is correct

// function App() {
//  return (
//     <AuthProvider> {/* Wrap the entire app with AuthProvider */}
//       <FeedbackProvider>
//         <Router>
//           <Bot/>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<SignUp/>} />
//             <Route path="/aboutus" element={<Aboutus/>} />
//             <Route path="/feedback" element={<Feedback />} />
//             <Route path="/analysis" element={<AnalysisPage />} />
//             <Route path="/contactus" element={<Contactus />} />
//             <Route path="/admin" element={<Admin />} />
          
     
//           </Routes>
//         </Router>
//       </FeedbackProvider>
//     </AuthProvider>
//  );
// }

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/Registration';
import AnalysisPage from './pages/AnalysisPage';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Feedback from './components/Feedback';
import Admin from './pages/Admin';
import { FeedbackProvider } from './components/feedbackContext';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/protectedRoute';
import FAQ from './components/FAQ';
import Oauth from './components/instagramOauth';
// import FacebookLogin from './components/fb';
// import InstagramCommentAnalyzer from './components/AnalyzeFb';
import Appi from './components/parentFb';
import AuthFbLayout from './components/AuthFbLayout';
import FacebookLogin from './components/FacebookLogin';
import InstagramCommentAnalyzer from './components/AnalyzeComments';
function App() {
 return (
    <AuthProvider>
      <FeedbackProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/FAQs" element={<FAQ />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/oauth" element={<Oauth />} />
            {/* <Route path="/fb" element={<FacebookLogin/>} /> */}
            <Route path="/facebook" element={<FacebookLogin/>} />
            <Route path="/analyze" element={<InstagramCommentAnalyzer/>} />
            {/* <Route path="/FB" element={<AuthFbLayout><FacebookLogin /></AuthFbLayout>} /> */}
            {/* <Route path="/analyze" element={<AuthFbLayout><InstagramCommentAnalyzer /></AuthFbLayout>} /> */}
            <Route path="/App" element={<Appi />} />
            <Route path="/admin" element={
              <ProtectedRoute requiredRole="admin">
                <Admin />
              </ProtectedRoute>
            } />
            <Route path="/analysis" element={
              <ProtectedRoute>
                <AnalysisPage />
              </ProtectedRoute>
            } />
            <Route path="/contactus" element={
              <ProtectedRoute>
                <Contactus />
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </FeedbackProvider>
    </AuthProvider>
 );
}

export default App;



