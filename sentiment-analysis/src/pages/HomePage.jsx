import React from "react";
import BackgroundImage from "../assets/Background.png";
import Header from "../components/HeaderHome";
import HeaderContent from "../components/HeaderContent";
import UsageContent from "../components/UsageContent";
import About from "../components/About";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import "./home.css";
import Bot from "../components/bot";
const HomePage=()=> {
  return (
    <div>
   <div
  className="relative h-screen custom-bg containerimage"
  style={{
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
        <Header />
        <HeaderContent />
        <UsageContent />
        <About />
        <Feedback/>
        <Bot/>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
