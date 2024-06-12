// src/Header.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactTyped } from "react-typed";
import profileImage from '../assets/profile.png';

const Header = () => {
    return (
        <div className="container-fluid bg-light my-6 mt-0" id="home">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 py-6 pb-0 pt-lg-0 ">
                        <h3 className="text-primary mb-3">I'm</h3>
                        <h1 className="display-3 mb-3">Zahraa Alaaeddine</h1>
                        <h2 className="typed-text-output d-inline">
                        <ReactTyped strings={[  'Web Designer',
                                    'Web Developer',
                                    'Front End Developer',
                                    'Apps Designer']} typeSpeed={100} loop />

                        </h2>
                      
                        <div className="d-flex align-items-center pt-5">
                            <a href="/cv.pdf" className="btn btn-primary py-3 px-4 me-5" download>Download CV</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid" src={profileImage} alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
