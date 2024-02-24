import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../assets/Logo.png";
const Footer = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="bg-content">
        <footer className="text-center lg:text-left text-lg-start text-white">
          <div className="container mx-auto flex justify-between items-center py-4">
            <img
              src={Logo}
              alt="logo"
              className="w-32 h-auto sm:w-36 md:w-64 lg:w-48"
            />
          </div>

          <section className="container mx-auto mt-4 text-center lg:text-left">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-8">
              <div className="mx-auto md:mx-0">
                <h6 className="text-lg text-white font-bold">TONIFY</h6>
                <hr className="mt-2 mb-4 border-2 border-white" />
                <div className="mx-auto md:mx-0">
                  <p className=" text-white">
                    <strong>
                      Sentiment analysis, also known as opinion mining,
                    </strong>
                    a powerful tool for deciphering opinions and emotions from
                    text data. By understanding sentiments, we offer invaluable
                    insights into customer preferences, public opinion, and
                    market trends.
                  </p>
                </div>
              </div>
              <div className="mx-auto md:mx-0">
                <h6 className="text-lg text-white font-bold">Useful links</h6>
                <hr className="mt-2 mb-4 border-2 border-white" />
                <p>
                  <Link to={"/aboutus"} className="text-white">
                    About
                  </Link>
                </p>
                <p>
                  <Link to={"/analysis"} className="text-white">
                    Analysis
                  </Link>
                </p>

                <p>
                  <Link to={"/contactus"} className="text-white">
                    Contact
                  </Link>
                </p>
              </div>
              <div className="mx-auto md:mx-0">
                <h6 className="text-lg text-white font-bold">Contact</h6>
                <hr className="mt-2 mb-4 border-2 border-white" />
               
                <p>
                  <i className="fas fa-envelope mr-3"></i>{" "}
                  Tonify@gmail.com
                </p>
             
              </div>
            </div>
          </section>
          <div className="text-center p-3 text-white">
            &copy; 2024 Copyright <span>@</span>Tonify
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
