import React from "react";
import BackgroundImage from "../assets/Background.png";
import Header from "../components/HeaderHome";
import HeaderContent from "../components/HeaderContent";
import UsageContent from "../components/UsageContent";
import About from "../components/About";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import "./home.css";
const HomePage=()=> {
  return (
    <div>
      <div
        className="relative bg-center bg-no-repeat bg-cover h-screen custom-bg containerimage"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <Header />
        <HeaderContent />
        <UsageContent />
        <About />
        <Feedback/>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
