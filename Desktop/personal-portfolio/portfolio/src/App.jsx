// src/App.js

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'animate.css/animate.min.css';
// import 'lightbox2/dist/css/lightbox.min.css';
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './scss/bootstrap.scss';
import './style.css';
import './bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import SkillsAndExperience from './components/Skills&Experience';
import MyServices from './components/MyServices';
import MyProjects from './components/MyProjects';
import Contact from './components/contact';
import Footer from './components/Footer';


const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <div
                    id="spinner"
                    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
                >
                    <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            ) : (
                <div>
                    <NavbarComponent />
                    <Header />
               <About/>
               <SkillsAndExperience/>
               <MyServices/>
               <MyProjects/>
               <Contact/>
               <Footer/>
                </div>
            )}
        </>
    );
};

export default App;
