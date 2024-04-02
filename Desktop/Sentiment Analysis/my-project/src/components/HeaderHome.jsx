import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-6 mx-6" >
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          src={Logo}
          alt="logo"
          className="w-32 h-auto sm:w-36 md:w-64 lg:w-40 max-w-full"
        />
      </div>
      {/* Nav links for small to medium screens */}
      <div className="hidden sm:flex ">
        {/* <ul className="flex flex-row space-x-32 m-auto">
          <li>
            <Link to="/aboutus" className="text-white font-bold hover:text-pink-700 transition-all duration-200 font-sans">About</Link>
          </li>
          <li>
            <Link to="/analysis" className="text-white font-bold hover:text-pink-700 transition-all duration-200 font-sans">Analysis Section</Link>
          </li>
          <li>
            <Link to="/contactus" className="text-white font-bold hover:text-pink-700 transition-all duration-200 font-sans">Contact</Link>
          </li>
        </ul> */}
                <ul className="flex flex-row space-x-32 m-auto">
 <li>
    <NavLink to="/aboutus" className="text-white font-bold hover:text-pink-700 transition-all duration-200 font-sans" activeClassName="active">About</NavLink>
 </li>
 <li>
    <NavLink to="/analysis" className="text-white font-bold hover:text-pink-700 transition-all duration-200 font-sans" activeClassName="active">Analysis Section</NavLink>
 </li>
 <li>
    <NavLink to="/contactus" className="text-white font-bold hover:text-pink-700 transition-all duration-200 font-sans" activeClassName="active">Contact</NavLink>
 </li>
</ul>
      </div>
      {/* Buttons for large screens */}
      <div className="hidden lg:flex items-center space-x-5">
      <button className="bg-transparent hover:bg-white text-white cursor-pointer hover:text-pink-700 border border-white hover:border-content font-bold py-2 px-4 sm:py-1 sm:px-2 md:py-1.5 md:px-2.5 lg:py-2 lg:px-4 font-sans sm:rounded-md lg:rounded-full ">
          <Link to="/login">Sign in</Link>
        </button>
        <button className="bg-pink-700 hover:bg-white text-white cursor-pointer hover:text-pink-700 border border-white hover:border-fuchsia-800 font-bold py-2 px-4 sm:py-1 sm:px-2 md:py-1.5 md:px-2.5 lg:py-2 lg:px-4 font-sans sm:rounded-md lg:rounded-full">
          <Link to="/analysis">Get Started</Link>
        </button>
      </div>
      {/* Burger button for small screens */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-white border-content hover:text-pink hover:border-pink"
        >
          {isOpen ? (
            <XIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
      {/* Transition for burger menu */}
      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition duration-200 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
      <div
      ref={ref}
      className="w-full flex flex-col items-center justify-center mt-4 md:hidden"
    >
<div className="text-lg lg:flex-grow text-center mx-16">
  {/* Nav links for burger menu */}
  <NavLink
 to="/aboutus"
 className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
 activeClassName="active"
>
 About
</NavLink>
<NavLink
 to="/analysis"
 className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
 activeClassName="active"
>
 Analysis Section
</NavLink>
<NavLink
 to="/contactus"
 className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
 activeClassName="active"
>
 Contact us
</NavLink>
</div>

      {/* Buttons in burger menu */}
      <div className="lg:hidden items-center justify-center space-x-5 mb-8 mx-2 mt-4">
      <button className="bg-transparent hover:bg-white text-white sm:text-black cursor-pointer hover:text-pink-700 border border-white hover:border-content font-bold py-2 px-4 sm:py-1 sm:px-2 md:py-1.5 md:px-2.5 lg:py-2 lg:px-4 font-sans sm:rounded-md lg:rounded-full">
  <Link to="/login">Sign in</Link>
</button>


        <button className="bg-pink-700 hover:bg-white text-white cursor-pointer hover:text-pink-700 border border-white hover:border-fuchsia-800 font-bold py-2 px-4 sm:py-1 sm:px-2 md:py-1.5 md:px-2.5 lg:py-2 lg:px-4 font-sans sm:rounded-md lg:rounded-full">
          <Link to="/analysis">Get Started</Link>
        </button>
      </div>
    </div>
    
        )}
      </Transition>
    </nav>
  );
};

export default Nav;
