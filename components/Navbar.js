import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { Link } from 'react-scroll'
const Navbar = () => {
  return (
    <header class="text-white font-thin  body-font bg-black">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src="/airslogo.png" width={50} height={50} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-white rounded-full" >
        
      </Image>
      <span class="ml-3 text-xl text-white font-thin">AIRS</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center  ">

      <Link to="Projects" spy={true} smooth={true} offset={20} duration={1000} className="mx-4 cursor-pointer hover:text-yellow-400">OUR PROJECTS</Link>
      <Link to="Team" spy={true} smooth={true} offset={20} duration={1000} className="mx-4 cursor-pointer hover:text-yellow-400">OUR TEAM</Link>
      <Link to="JoinUs" spy={true} smooth={true} offset={20} duration={1000} className="mx-4 cursor-pointer hover:text-yellow-400">JOIN US</Link>
     
    </nav>
   
  </div>
</header>
  )
}

export default Navbar