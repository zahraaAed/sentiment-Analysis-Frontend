import React from 'react'
import Logo from "../assets/Logo.png";
function Footer() {
  return (
     <div className="w-full bg-content  px-6 flex flex-col items-center justify-center ">
<img src={Logo} className='w-64'/>

<ul className='flex flex-col items-center justify-center p-8 sm:flex-row space-y-2 sm:space-y-0 sm:space-x-28 md:space-x-20 lg:space-x-28 xl:space-x-32'>
          <li className="text-white  font-bold text-lg hover:underline  hover:text-pink-700 hover:font-bold transition-all duration-200 font-sans">About</li>
          <li className="text-white font-bold  text-lg hover:underline hover:text-pink-700 hover:font-bold transition-all duration-200 font-sans">Analysis Section</li>
          <li className="text-white  font-bold text-lg hover:underline  hover:text-pink-700 hover:font-bold transition-all duration-200 font-sans">Contact Us</li>
        </ul>
     </div>
  
  )
}

export default Footer
