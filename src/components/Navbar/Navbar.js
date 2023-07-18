import React from 'react';
import gauravlogo from '../../Images/gauravlogo.png'

export default function Navbar() {
  return (
    <>
        <div className='navbar flex justify-between p-7 md:p-10'>
            <div>
                <img src={gauravlogo} alt="gauravlogo" className='w-28 md:w-32 lg:w-48'/>
            </div>
            <ul className='flex md:gap-5 lg:gap-10'>
                <li className='navlist text-white md:text-xl lg:text-2xl font-medium hover:text-cyan-500  cursor-pointer'>Home</li>
                <li className='navlist text-white md:text-xl lg:text-2xl font-medium hover:text-cyan-500  cursor-pointer'>About Me</li>
                <li className='navlist text-white md:text-xl lg:text-2xl font-medium hover:text-cyan-500  cursor-pointer'>Experience</li>
                <li className='navlist text-white md:text-xl lg:text-2xl font-medium hover:text-cyan-500  cursor-pointer'>Contact</li>
            </ul>
        </div>
      
    </>
  )
}
