import React from 'react'
import styles from '../styles/Home.module.css'

const Join = () => {
  return (
   <>
   <div class="container px-5 py-2 mx-auto bg-gradient-to-r from- to-blue-400">
        <div class="flex flex-wrap w-full mb-5">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class=" sm:text-3xl text-2xl font-sans title-font mb-2 text-gray-900 mx-5 mt-10  ">
              JOIN US
            </h1>
            <div class="h-1 w-20 bg-black rounded mx-5"></div>
          </div>
        </div>
      </div>
   <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">
    
  <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 ">
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-400 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
            <p class="leading-relaxed">Enter Your Name and Email.</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-400 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
            <p class="leading-relaxed">Enter Why Do You Want To Join Us</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-400 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
            <p class="leading-relaxed">Click On Submit Button.</p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-400 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
            <p class="leading-relaxed">Thats It , We Wil Get Right Back To You.</p>
          </div>
        </div>
        <div class="flex relative">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-400 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
          </div>
        </div>
      </div>



    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-3 md:mt-0">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font ">Join Us Form</h2>
    
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600 ">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-5"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-5"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Why Would You Want To Join Us</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out mt-5"></textarea>
      </div>
      <button class="text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Submit</button>
      
    </div>
  </div>
</section>
   </>
  )
}

export default Join