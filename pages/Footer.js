import React from "react";
import Image from "next/image";
import {BsFacebook,BsTwitter,BsInstagram,BsLinkedin} from 'react-icons/bs'
import Link from "next/link";
const Footer = () => {
  return (
    <div >
      <footer class="text-gray-600 body-font bg-black">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image src="/airslogo.png" width={50} height={50} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-white rounded-full" >
        
        </Image>
        <span class="ml-3 text-xl text-white font-thin">AIRS</span>
            
          </a>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2022 AIRS 
           
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start p-2">
            <Link href="https://www.facebook.com/profile.php?id=100086272766693"><a><BsFacebook href="" className="mx-2 text-white cursor-pointer"/></a></Link>
            <Link href="https://www.instagram.com/airs.jh/"><a><BsInstagram className="mx-2 text-white cursor-pointer"/></a></Link>
            <Link href="https://twitter.com/AIRSJH"><a><BsTwitter className="mx-2 text-white cursor-pointer"  /></a></Link>
            <Link href="https://www.linkedin.com/in/airsjh/"><a><BsLinkedin className="mx-2 text-white cursor-pointer" /></a></Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
