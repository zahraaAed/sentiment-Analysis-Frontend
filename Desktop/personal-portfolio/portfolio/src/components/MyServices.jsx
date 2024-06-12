import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MyServices = () => {
  return (
    <div className="container-fluid bg-light my-5 py-6" id="service">
      <div className="container">
        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6">
            <h1 className="display-5 mb-0">My Services</h1>
          </div>
          <div className="col-lg-6 text-lg-end">
            <a className="btn btn-primary py-3 px-5" href="">Hire Me</a>
          </div>
        </div>
        <div className="row g-4">
          {renderService("fa-crop-alt", "Graphic Design", "$69", "Our creative design services are crafted to deliver compelling visual solutions that resonate with your audience. We prioritize quality and innovation to ensure your brand stands out in today's competitive market.", "0.1s")}
          {renderService("fa-code-branch", "App Design", "$399", "Our app design services are focused on creating intuitive and visually appealing mobile experiences. We prioritize user-centric design to ensure your app stands out and engages users effectively.", "0.3s")}
          {renderService("fa-code", "Web Design", "$399", "Our web design services focus on creating stunning and user-friendly websites that enhance your online presence. We blend creativity with functionality to deliver websites that meet your business objectives.", "0.1s")}
          {renderService("fa-laptop-code", "Web Development", "$399", "Our web development services encompass building robust and scalable web solutions. From front-end to back-end, we deliver websites that are efficient, secure, and tailored to your specific business needs.", "0.3s")}
        </div>
      </div>
    </div>
  );
};

const renderService = (icon, title, price, description, delay) => (
  <div className={`col-lg-6 wow fadeInUp`} data-wow-delay={delay}>
    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
      <div className="bg-icon flex-shrink-0 mb-3">
        <i className={`fa ${icon} fa-2x text-dark`}></i>
      </div>
      <div className="ms-sm-4">
        <h4 className="mb-3">{title}</h4>
        <h6 className="mb-3">Starting at <span className="text-primary">{price}</span></h6>
        <span>{description}</span>
      </div>
    </div>
  </div>
);

export default MyServices;
