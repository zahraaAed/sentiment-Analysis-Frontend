import React from 'react';
import Logo from "../assets/Logo.png";
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="w-full p-3 px-6">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div>
          <img src={Logo} alt='logo' className="w-32 h-auto sm:w-36 md:w-64 lg:w-48" />
        </div>

        <ul className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-28 md:space-x-20 lg:space-x-28 xl:space-x-32'>
          <li className="text-white  font-bold text-lg hover:underline  cursor-pointer hover:text-pink-700 hover:font-bold transition-all duration-200 font-sans cursor-pointer"> <Link to="/aboutus" >About</Link></li>
          <li className="text-white font-bold  text-lg hover:underline cursor-pointer hover:text-pink-700 hover:font-bold transition-all duration-200 font-sans cursor-pointer">   <Link to="/analysis" >Analysis Section</Link></li>
          <li className="text-white  font-bold text-lg hover:underline cursor-pointer hover:text-pink-700 hover:font-bold transition-all duration-200 font-sans cursor-pointer"> <Link to="/contactus" >Contact </Link></li>
</ul>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
  <button className="bg-transparent hover:bg-white text-white cursor-pointer cursor-pointer hover:text-pink-700 border border-white hover:border-content font-bold py-2 px-4 sm:py-1 sm:px-2 md:py-1.5 md:px-2.5 lg:py-2 lg:px-4 font-sans rounded-full"> 
  <Link to="/login" >Sign in</Link>
  </button>
  <button className="bg-pink-700 hover:bg-white text-white cursor-pointer hover:text-pink-700 border border-white hover:border-fuchsia-800 cursor-pointer font-bold py-2 px-4 sm:py-1 sm:px-2 md:py-1.5 md:px-2.5 lg:py-2 lg:px-4 font-sans rounded-full">
  <Link to="/analysis" >Get Started</Link>
  </button>
</div>


      </div>
    </div>
  );
}

export default Header;





