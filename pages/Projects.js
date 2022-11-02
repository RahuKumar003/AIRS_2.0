import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {AiOutlineArrowUp,AiOutlineArrowDown} from 'react-icons/ai'
import Image from "next/image";
const data = [
  {
    img: "/projects/mcuBoard.jpg",
    heading: "MCU BOARD",
    p1: "Prototype for the MCU board is now been completed with the help of Atmega328P. It is having an on board motor controlling unit, LED segment, Buzzer as well as push button.",
    p2: "It also has some of the important communication protocols like SPI, I2C, USART as well as ADC for communicating with the real world. In addition, there is one thing more that is power supply unit. It can be used in the control and automation field. It is being programmed by means of USB to TTL logic.",
    backgroundColor: "bg-gray-200",
  },
  {
    img: "/projects/radar.jpg",
    heading: "RADAR",
    p1: "A prototype for the Radar is been completed powered by processing 3.0.",
    p2: "Now here radar can detect the objects and show their distance on simulation along with distance by means of HC-05 sensor. It can detect the presence of any object if its distance is less than 40 cm from the Radar. ",
    backgroundColor: "bg-gradient-to-r from-green-50 to-green-300",
  },
  {
    img: "/projects/meteorShower.jpg",
    heading: " METEOR SHOWER GAME",
    p1: "Prototype for meteor retro style game in which we have to save our ship from meteor",
    p2: "The project we made is having following components in it as matrix led 8x8, push button, resistor and Arduino Nano microcontroller. ",
    backgroundColor: "bg-gradient-to-r from-blue-100 via-blue-300 to-blue-300",
  },
  {
    img: "/projects/tribotversion.jpg",
    heading: "TRI-BOT Version 3.0",
    p1: "Tri-bot version 3.0 has now been completed that can be accessible anywhere in the world using DTMF and GSM concept.",
    p2: "It can decode the message by means of IC 8870 which is based on dual tone multiple frequency. In addition, the GSM module is already there in our mobile phones, which act as transmitter.",
    backgroundColor: "bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100",
  },
  {
    img: "/projects/smartDustbin.jpg",
    heading: "SMART DUSTBIN",
    p1: "Prototype for the smart dustbin.",
    p2: "It has feature of automatic opening and closing of lid whenever an individual comes in contact with it at distance of 30 cm and also provide an indicator if our dustbin becomes full. It is based on SONAR system .",
    backgroundColor: "bg-gradient-to-r from-red-200 to-red-400",
  },
  {
    img: "/projects/bidirectionalVisitorCounter.jpg",
    heading: "BIDIRECTIONAL VISITOR COUNTER",
    p1: "Prototype for the visitor counter.",
    p2: "It can be implemented in our house to check how many person are there in the house and it can also be used for home automation. It consists of IR sensor, Atmega16 IC and LCD 16x2.",
    backgroundColor: "bg-gradient-to-r from-red-200 to-red-400",
  },
  {
    img: "/projects/heartBeatDetector.jpg",
    heading: "HEART BEAT DETECTOR",
    p1: "It is used to provide heartbeat of the user. It also has a feature, which provides feedback to the user that whether he /she will having normal pulse, or not.",
    p2: "It can also send all its results to the smart phones as well as LCD 16x2. It consists of pulse sensor, multicolour LED and microcontroller.",
    backgroundColor: "bg-gradient-to-r from-red-200 to-red-400",
  },
  {
    img: "/projects/lpg_gas_leakage.jpg",
    heading: "LPG GAS LEAKAGE DETECTOR",
    p1: "In this project, we try to remove the problem of leakage of LPG that every home suffers. It is used to provide the real time data of flammable gases using MQ-2 sensor. ",
    p2: "Moreover, if the reading is above 2500 ppm then buzzer is on and led glows, which provides indicator to the user that it becomes dangerous here. It consists of MQ-2 sensor, LCD 16x2, Arduino Mega-2560 and multicolour LED.",
    backgroundColor: "bg-gradient-to-r from-red-200 to-red-400",
  },
  
  {
    img: "/projects/airQualityDetector.jpg",
    heading: "AIR QUALITY DETECTOR",
    p1: "In this project, we try to eliminate the problem of air pollution detection using MQ-135 sensor. ",
    p2: "We used the concept of ADC and try to get the input from the analog pins. If the reading is above 250 ppm then buzzer is on and LED glow. It is used in our house to detect the quality of air in nearby surrounding of it.",
    backgroundColor: "bg-gradient-to-r from-red-200 to-red-400",
  },
  {
    img: "/projects/homeAutomationUsingUsart.jpg",
    heading: " HOME AUTOMATION USING USART",
    p1: "In this project, we used the concept of relay & universal synchronous asynchronous receiver transmitter . ",
    p2: "We used to reduce the problem of light consumption by means of creating the circuit wholly automatic. It is also used to control the light & fans by means of your smart phones.",
    backgroundColor: "bg-gradient-to-r from-red-200 to-red-400",
  },
  {
    img: "/projects/IRspectrumBot.jpg",
    heading: "IR SPECTRUM BOT ",
    p1: "The prototype for the IR spectrum Bot has been completed. It is a self-driving bot, which works on the sending and receiving of the signal just like in case of television.",
    p2:"It is been functioning perfectly across sharp turns and irregular paths that comes in its way.",
    backgroundColor: "bg-gradient-to-r from-red-200 to-red-400",
  },
  
];

const secondarydata = [
  {
    img: "/projects/mcuBoard.jpg",
    heading: "MCU BOARD",
    p1: "Prototype for the MCU board is now been completed with the help of Atmega328P. It is having an on board motor controlling unit, LED segment, Buzzer as well as push button.",
    p2: "It also has some of the important communication protocols like SPI, I2C, USART as well as ADC for communicating with the real world. In addition, there is one thing more that is power supply unit. It can be used in the control and automation field. It is being programmed by means of USB to TTL logic.",
    backgroundColor: "bg-gray-200",
  },
  {
    img: "/projects/radar.jpg",
    heading: "RADAR",
    p1: "A prototype for the Radar is been completed powered by processing 3.0.",
    p2: "Now here radar can detect the objects and show their distance on simulation along with distance by means of HC-05 sensor. It can detect the presence of any object if its distance is less than 40 cm from the Radar. ",
    backgroundColor: "bg-gradient-to-r from-green-50 to-green-300",
  },
  {
    img: "/projects/meteorShower.jpg",
    heading: " METEOR SHOWER GAME",
    p1: "Prototype for meteor retro style game in which we have to save our ship from meteor",
    p2: "The project we made is having following components in it as matrix led 8x8, push button, resistor and Arduino Nano microcontroller. ",
    backgroundColor: "bg-gradient-to-r from-blue-100 via-blue-300 to-blue-300",
  },
  {
    img: "/projects/tribotversion.jpg",
    heading: "TRI-BOT Version 3.0",
    p1: "Tri-bot version 3.0 has now been completed that can be accessible anywhere in the world using DTMF and GSM concept.",
    p2: "It can decode the message by means of IC 8870 which is based on dual tone multiple frequency. In addition, the GSM module is already there in our mobile phones, which act as transmitter.",
    backgroundColor: "bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100",
  },
]

const desc =[
  {
    content:"The far reaching technical advancements and career options in the industry always need knowledgeable, technically sound, creative and amazingly quick problem solving skilled engineers. Therefore, focusing of this aspects we are trying everyday to make innovative projects in different domains. By this we aim to make transformation of Theoretical Knowledge into its applications.",
    className:"lg:w-2/3 mx-auto leading-relaxed text-xl text-left mb-10 bg-gray-200 rounded p-2"
  },
  { content:"Project work gives engineering solutions to the outcome of existing systems.We are trying to select projects that are related to the society oriented applications like heartbeat detector, LPG gas leakage detector and many more.",
  className : "lg:w-2/3 mx-auto leading-relaxed text-xl text-left mb-10"
  },
  {
    content : "Project work enables one to conduct oneself in a professionalmanner by analyzing, managing, evaluating the project relatedmatters. Project implementation always makes use of the latest andmore advanced technologies for controlling equipments and devices.Therefore, we believe in learning as well as teaching our fellowcolleague.",
    className : "lg:w-2/3 mx-auto leading-relaxed text-xl text-left bg-gray-200 rounded p-2"
  }

]
const Projects = () => {
  const [showDetails, setShowDetails] = useState(true);
  const [switchView , setSwitchView]  = useState(secondarydata)
  const [switchText , setSwitchText] = useState("View More Projects")
  const [showingLess , setShowingLess] = useState(true)
  const show = () => {
    if (showDetails == true) {
      setShowDetails(false);
    }
    if (showDetails == false) {
      setShowDetails(true);
    }
  };
  const onLinkClick=(e)=>{
    if(showingLess==true){
      setSwitchView(data)
      setSwitchText("View Less Projects")
      setShowingLess(false)
      e.preventDefault()
    }
    if(showingLess==false){
      setSwitchView(secondarydata)
      setSwitchText("View More Projects")
      setShowingLess(true)
      e.preventDefault()
    }
    
  }
  return (
    <>
      <div class="container px-5 py-2 mx-auto bg-gradient-to-r from- to-blue-500">
        <div class="flex flex-wrap w-full mb-5">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class=" sm:text-3xl text-2xl font-sans title-font mb-2 text-gray-900 mx-5 mt-10  ">
              OUR PROJECTS
            </h1>
            <div class="h-1 w-20 bg-black rounded mx-5"></div>
          </div>
        </div>
      </div>

      <section class="text-gray-600 body-font">
        <div class="container px-5  mx-auto">
          <div class="p-12 flex flex-col text-center w-full mb-10">

          <div>
            {desc.map((item)=>{
              return(
                <>
                  <p className={item.className}>{item.content}</p>
                </>
              )
            })}
          </div>
            
           
          </div>
        </div>
      </section>

      <div>
        {showDetails ? (
          <>
            <section class="text-gray-600 body-font mx-5" >
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-2">
                  {switchView.map((item, keys) => {
                    return (
                      <div onClick={show} class="lg:w-1/5 md:w-1/3 lg:mx-8 p-4 w-full cursor-pointer shadow-lg mx-8 mb-5 bg-gray-200 rounded-lg">
                        <a class="block relative rounded overflow-hidden">
                          <img
                            alt="ecommerce"
                            class="inset-0 w-full h-full object-cover object-center"
                            src={item.img}
                          />
                        </a>
                        <div class="mt-4 text-center md:text-left">
                          <h3 class="text-red-500 text-md  title-font mb-1">
                            PROJECTS {keys + 1}
                          </h3>
                          <h2 class="text-gray-900 title-font text-lg font-sans mt-2">
                            {item.heading}
                          </h2>
                          <h2 class=" text-gray-900 title-font text-lg mt-4 font-sans">
                            {item.p1}
                          </h2>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
          <section class="text-gray-600 body-font mx-5" onClick={show}>
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                  {switchView.map((item, keys) => {
                    return (
                      <div class={`lg:w-1/5 md:w-1/3 lg:mx-5 p-4 w-full cursor-pointer shadow-lg rounded-lg mx-8 mb-5 ${item.backgroundColor}`}  >
                        <a class="block relative rounded overflow-hidden">
                          
                        </a>
                        <div class="mt-4 text-center md:text-left">
                          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                            PROJECTS {keys + 1}
                          </h3>
                          <h2 class="text-gray-900 title-font text-lg font-sans mt-2">
                            {item.heading}
                          </h2>
                          <h2 class="text-gray-900 title-font text-lg mt-4 font-sans text-left">
                            {item.p2}
                          </h2>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        )}
      </div>

      <a onClick={onLinkClick} class="text-white inline-flex items-center mt-2 mx-10 bg-red-500 p-4 rounded-lg cursor-pointer">{switchText}
        {showingLess?(
          <><AiOutlineArrowDown className="mx-2 "/>
          <Image src="/airs.png" height={50} width={50} className="animate-spin"/>
          </>
        ):(
          <><AiOutlineArrowUp className="mx-2 cursor-pointer"/>
          <Image src="/airs.png" height={50} width={50} className="animate-spin"/>
          </>
        )}
      </a>
      
    </>
  );
};

export default Projects;
