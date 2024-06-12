import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Copyright Start */}
      <div className="container-fluid bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; 2024 Zahraa Alaaeddine, All Rights Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              {/* This portfolio is a showcase of my work. Feel free to contact me for inquiries or collaborations. */}
              Done By <a className="border-bottom text-secondary" href="#">Zahraa Alaaeddine</a>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
};

export default Footer;
