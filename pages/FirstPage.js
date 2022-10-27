import React from 'react'
import Image from 'next/image'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
const FirstPage = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
  <div class="rounded-lg h-64 overflow-hidden mb-10 ">
        <img alt="content" className="object-center" src="/projects/tribotversion.jpg"/>
      </div>
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 class="title-font sm:text-4xl text-4xl font-thin mb-4  text-gray-900">WELCOME TO AIRS</h1>
      <p class="mb-8 font-thin text-lg">Artificial And Robotics Society</p>
      
      
      <div class="flex justify-center">
      <div className='flex right-0 top-2 object-center'>
      <button class="flex top-2 right-0  text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-md text-lg">Join Us<BsFacebook className='mx-5 text-3xl'/></button>
      </div>
      <div className='flex right-0 top-2 object-center mx-5'>
      <button class="flex top-2 right-0  text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-md text-lg">Join Us<FaInstagram className='mx-5 text-3xl'/></button>
      </div>
      
       
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default FirstPage