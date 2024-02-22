import React from 'react';
import BackgroundImage from '../assets/Background.png';
import Header from '../components/HeaderHome';
import HeaderContent from '../components/HeaderContent';
import UsageContent from '../components/UsageContent';
import About from '../components/About';
import Footer from '../components/Footer';
function HomePage() {
  return (
    <div>
    <div className="relative bg-cover bg-no-repeat h-screen" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <Header />
      <HeaderContent/>
      <UsageContent/>
      <About/>
      <Footer/>
    </div>
    
    </div>
  );
}

export default HomePage;
