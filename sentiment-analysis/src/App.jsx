import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import SignUp from './pages/Registration'
import AnalysisPage from './pages/AnalysisPage'
function App() {
  

  return (
    <>
       <Router>

      <Routes>
      
      <Route path="/" element={<HomePage />} /> 
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<SignUp/>} /> 
      <Route path="/analysis" element={<AnalysisPage/>} /> 
      </Routes>
    </Router>
    </>
  )
}

export default App
