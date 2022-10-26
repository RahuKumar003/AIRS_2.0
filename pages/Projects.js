import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from '../styles/Home.module.css'
const data = [
  {
    img:"/projects/mcuBoard.jpg",
    heading : "MCU BOARD",
    p1: "Prototype for the MCU board is now been completed with the help of Atmega328P. It is having an on board motor controlling unit, LED segment, Buzzer as well as push button."

  },
  {
    img:"/projects/radar.jpg",
    heading : "RADAR",
    p1 : "A prototype for the Radar is been completed powered by processing 3.0."
  }
]
const Projects = () => {
  const [showDetails , setShowDetails] = useState(false)
  
  return (
    <>
    <div class="container px-5 py-2 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              OUR PROJECTS
            </h1>
            <div class="h-1 w-20 bg-black rounded"></div>
          </div>
        </div>
      </div>

    <section class="text-gray-600 body-font">
    <div class="container px-5  mx-auto">
      <div class="flex flex-col text-center w-full mb-10">
        <p class="lg:w-2/3 mx-auto leading-relaxed text-lg text-left mb-10">The far reaching technical advancements and career options in the industry always need knowledgeable, technically sound, creative and amazingly quick problem solving skilled engineers. Therefore, focusing of this aspects we are trying everyday to make innovative projects in different domains. By this we aim to make transformation of Theoretical Knowledge into its applications.
        </p>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-lg text-left mb-10">Project work gives engineering solutions to the outcome of existing systems.We are trying to select projects that are related to the society oriented applications like heartbeat detector, LPG gas leakage detector and many more.</p>

        <p class="lg:w-2/3 mx-auto leading-relaxed text-lg text-left">Project work enables one to conduct oneself in a professional manner by analyzing, managing, evaluating the project related matters. Project implementation always makes use of the latest and more advanced technologies for controlling equipments and devices. Therefore, we believe in learning as well as teaching our fellow colleague.</p>
      </div>


      
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img alt="gallery" class="absolute inset-0  object-cover" src="/projects/mcuBoard.jpg"/>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
              <p class="leading-relaxed">Prototype for the MCU board is now been completed with the help of Atmega328P. It is having an on board motor controlling unit, LED segment, Buzzer as well as push button.</p>
              <p class="leading-relaxed">
              It also has some of the important communication protocols like SPI, I2C, USART as well as ADC for communicating with the real world. In addition, there is one thing more that is power supply unit. It can be used in the control and automation field. It is being programmed by means of USB to TTL logic.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </section>
  </>
    
  )
}

export default Projects