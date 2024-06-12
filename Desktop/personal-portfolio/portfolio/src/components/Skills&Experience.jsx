import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SkillsAndExperience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderSkill = (skill, percentage, color) => (
    <div className="skill mb-4">
      <div className="d-flex justify-content-between">
        <h6 className="font-weight-bold">{skill}</h6>
        <h6 className="font-weight-bold">{percentage}%</h6>
      </div>
      <div className="progress">
        <div
          className={`progress-bar ${color}`}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );

  const renderExperience = (title, company, duration) => (
    <div className="col-sm-6">
      <h5>{title}</h5>
      <hr className="text-primary my-2" />
      <p className="text-primary mb-1">{duration}</p>
      <h6 className="mb-0">{company}</h6>
    </div>
  );

  const renderEducation = (title, institution, duration) => (
    <div className="col-sm-6">
      <h5>{title}</h5>
      <hr className="text-primary my-2" />
      <p className="text-primary mb-1">{duration}</p>
      <h6 className="mb-0">{institution}</h6>
    </div>
  );

  return (
    <div className="container-xxl py-6 pb-5" id="skill">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="display-5 mb-5">Skills & Experience</h1>
            <p className="mb-4">
              As a skilled web designer and developer, I excel in creating user-friendly and visually compelling websites.
              My expertise includes HTML, CSS, JavaScript, and various modern web development frameworks. I am dedicated to
              delivering high-quality digital solutions that meet client needs and exceed expectations.
            </p>
            <h3 className="mb-4">My Skills</h3>
            <div className="row align-items-center">
              <div className="col-md-6">
                {renderSkill("HTML", 95, "bg-primary")}
                {renderSkill("CSS", 80, "bg-warning")}
                {renderSkill("Express Js", 80, "bg-danger")}
              </div>
              <div className="col-md-6">
                {renderSkill("Javascript", 75, "bg-danger")}
                {renderSkill("React JS", 80, "bg-dark")}
                {renderSkill("Figma", 85, "bg-info")}
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
              <li className="nav-item w-50">
                <button
                  className={`nav-link w-100 py-3 fs-5 ${activeTab === 'experience' ? 'active' : ''}`}
                  onClick={() => handleTabChange('experience')}
                >
                  Experience
                </button>
              </li>
              <li className="nav-item w-50">
                <button
                  className={`nav-link w-100 py-3 fs-5 ${activeTab === 'education' ? 'active' : ''}`}
                  onClick={() => handleTabChange('education')}
                >
                  Education
                </button>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className={`tab-pane fade show ${activeTab === 'experience' ? 'active' : ''}`}>
                <div className="row gy-5 gx-4">
                  {activeTab === 'experience' && (
                    <>
                      {renderExperience("Web Designer", "Codi-Tech", "2023-2024")}
                      {renderExperience("Web Developer", "Codi-Tech", "2023 - 2024")}
                    
                      {renderExperience("Content Creation", "Self-employed", "2022 - present")}
                    </>
                  )}
                </div>
              </div>
              <div id="tab-2" className={`tab-pane fade show ${activeTab === 'education' ? 'active' : ''}`}>
                <div className="row gy-5 gx-4">
                  {activeTab === 'education' && (
                    <>
                      {renderEducation("Computational Linguistics", "Lebanese University", "2020 - 2023")}
                      {renderEducation("UI Design Course", "Codi Samurai", "February 2024 - April 2024")}
                      {renderEducation("Web Development", "Codi-Tech", "2023-2024")}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndExperience;
