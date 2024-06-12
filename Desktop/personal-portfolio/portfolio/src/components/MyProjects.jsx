import React, { useState } from 'react';
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";
import project6 from "../assets/project-6.png";

import 'lightbox2/dist/css/lightbox.min.css'; // Ensure Lightbox CSS is imported


const MyProjects = () => {
  const [currentFilter, setCurrentFilter] = useState('*'); 
  const projects = [
    { category: "first", image: project1, delay: "0.1s", link: "https://www.figma.com/design/OooKsZmhsDCjukmhbeYzt2/recipe-app?node-id=0-1&t=59QV97Z5wT0X1oMo-0", description: "recipe app" },
    { category: "second", image: project2, delay: "0.3s", link: "https://sentiment-analysis-frontend-sigma.vercel.app/", description: "sentiment analysis website" },
    { category: "second", image: project3, delay: "0.1s", link: "https://dizayne-agency.vercel.app/", description: "website for dizayne agency" },
    { category: "first", image: project4, delay: "0.3s", link: "https://www.figma.com/design/4zSdcPoH2CIVd0lIoJrGQW/Blooming?node-id=0-1&t=6GpXDGhIzPs2aEG5-0", description: "e-commerce website for desserts and patisseries" },
    { category: "second", image: project5, delay: "0.1s", link: "https://github.com/moussakaram/Frontend-Wallet-and-Payments-Application-/commits/main", description: "Fintech website" },
    { category: "second", image: project6, delay: "0.3s", link: "https://github.com/aliartach/real-client-project-front", description: "E-commerce website for selling pets food" }
  ];
 // Function to handle filter change
 const handleFilterChange = (filter) => {
  setCurrentFilter(filter);
};

  return (
    <div className="container-xxl py-6 pt-5" id="project">
      <div className="container">
        <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6">
            <h1 className="display-5 mb-0">My Projects</h1>
          </div>
          <div className="col-lg-6 text-lg-end">
          <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
              <li className={`mx-3 ${currentFilter === '*'? 'active' : ''}`} onClick={() => handleFilterChange('*')}>All Projects</li>
              <li className={`mx-3 ${currentFilter === 'first'? 'active' : ''}`} onClick={() => handleFilterChange('first')}>UI/UX Design</li>
              <li className={`mx-3 ${currentFilter === 'second'? 'active' : ''}`} onClick={() => handleFilterChange('second')}>Web Development</li>
            </ul>
          </div>
        </div>
        <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
          {projects.filter(project => currentFilter === '*' || project.category === currentFilter).map((project) => renderProject(project))}
        </div>
      </div>
    </div>
  );
};

const renderProject = ({ category, image, delay, link, description }) => (
  <div className={`col-lg-4 col-md-6 portfolio-item ${category} wow fadeInUp`} data-wow-delay={delay} key={image}>
    <div className="portfolio-img rounded overflow-hidden">
      <img className="img-fluid" src={image} alt="" />
      <div className="portfolio-btn">
        <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={image} data-lightbox="portfolio">
          <i className="fa fa-eye"></i>
        </a>
        <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={link}>
          <i className="fa fa-link"></i>
        </a>
      </div>
      <div className="portfolio-description">{description}</div>
      
    </div>
  </div>
);

export default MyProjects;

