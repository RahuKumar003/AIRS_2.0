import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import styles from "../styles/Home.module.css";
const data = [
  {
    img: "/projects/mcuBoard.jpg",
    heading: "MCU BOARD",
    p1: "Prototype for the MCU board is now been completed with the help of Atmega328P. It is having an on board motor controlling unit, LED segment, Buzzer as well as push button.",
    p2: "It also has some of the important communication protocols like SPI, I2C, USART as well as ADC for communicating with the real world. In addition, there is one thing more that is power supply unit. It can be used in the control and automation field. It is being programmed by means of USB to TTL logic.",
    backgroundColor: "bg-blue-50",
  },
  {
    img: "/projects/radar.jpg",
    heading: "RADAR",
    p1: "A prototype for the Radar is been completed powered by processing 3.0.",
    p2: "Now here radar can detect the objects and show their distance on simulation along with distance by means of HC-05 sensor. It can detect the presence of any object if its distance is less than 40 cm from the Radar. ",
    backgroundColor: "bg-green-100",
  },
  {
    img: "/projects/meteorShower.jpg",
    heading: " METEOR SHOWER GAME",
    p1: "Prototype for meteor retro style game in which we have to save our ship from meteor",
    p2: "The project we made is having following components in it as matrix led 8x8, push button, resistor and Arduino Nano microcontroller. ",
    backgroundColor: "bg-yellow-100",
  },
  {
    img: "/projects/tribotversion.jpg",
    heading: "TRI-BOT Version 3.0",
    p1: "Tri-bot version 3.0 has now been completed that can be accessible anywhere in the world using DTMF and GSM concept.",
    p2: "It can decode the message by means of IC 8870 which is based on dual tone multiple frequency. In addition, the GSM module is already there in our mobile phones, which act as transmitter.",
    backgroundColor: "bg-pink-100",
  },
  {
    img: "/projects/tribotversion.jpg",
    heading: "TRI-BOT Version 3.0",
    p1: "Tri-bot version 3.0 has now been completed that can be accessible anywhere in the world using DTMF and GSM concept.",
    p2: "It zcan decode the message by means of IC 8870 which is based on dual tone multiple frequency. In addition, the GSM module is already there in our mobile phones, which act as transmitter.",
    backgroundColor: "bg-blue-50",
  },
];
const Projects = () => {
  const [showDetails, setShowDetails] = useState(true);
  const show = () => {
    if (showDetails == true) {
      setShowDetails(false);
    }
    if (showDetails == false) {
      setShowDetails(true);
    }
  };
  return (
    <>
      <div class="container px-5 py-2 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 mx-5">
              OUR PROJECTS
            </h1>
            <div class="h-1 w-20 bg-black rounded mx-5"></div>
          </div>
        </div>
      </div>

      <section class="text-gray-600 body-font">
        <div class="container px-5  mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <p class="lg:w-2/3 mx-auto leading-relaxed text-xl text-left mb-10">
              The far reaching technical advancements and career options in the
              industry always need knowledgeable, technically sound, creative
              and amazingly quick problem solving skilled engineers. Therefore,
              focusing of this aspects we are trying everyday to make innovative
              projects in different domains. By this we aim to make
              transformation of Theoretical Knowledge into its applications.
            </p>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-xl text-left mb-10">
              Project work gives engineering solutions to the outcome of
              existing systems.We are trying to select projects that are related
              to the society oriented applications like heartbeat detector, LPG
              gas leakage detector and many more.
            </p>

            <p class="lg:w-2/3 mx-auto leading-relaxed text-xl text-left">
              Project work enables one to conduct oneself in a professional
              manner by analyzing, managing, evaluating the project related
              matters. Project implementation always makes use of the latest and
              more advanced technologies for controlling equipments and devices.
              Therefore, we believe in learning as well as teaching our fellow
              colleague.
            </p>
          </div>

          <div>
            {showDetails ? (
              
              <>
              {data.map((item)=>{
                return(
                  <section class="text-gray-600 body-font">
                  <div class=" px-5 py-24 ">
                    <div class="flex-row   -m-4">
                      <div class="p-4 md:w-1/3">
                      
                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                          <img
                            class="lg:h-48 md:h-36 w-full object-cover object-center"
                            src="https://dummyimage.com/720x400"
                            alt="blog"
                          />
                          <div class="p-6">
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                              CATEGORY
                            </h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                              The Catalyzer
                            </h1>
                            <p class="leading-relaxed mb-3">
                              Photo booth fam kinfolk cold-pressed sriracha
                              leggings jianbing microdosing tousled waistcoat.
                            </p>
                            <div class="flex items-center flex-wrap ">
                              <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                Learn More
                                <svg
                                  class="w-4 h-4 ml-2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </a>
                              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg
                                  class="w-4 h-4 mr-1"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                1.2K
                              </span>
                              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg
                                  class="w-4 h-4 mr-1"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>
                                6
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
          
                    </div>
                  </div>
                </section>
                )
              })}
                
              </>
            ) : (
              <>
                <section class="text-gray-600 body-font" onClick={show}>
                  <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap  -m-4">
                      {data.map((item, key) => {
                        return (
                          <div
                            class={`lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-2 ${item.backgroundColor} `}
                          >
                            <div class="mt-4 text-center md:text-left">
                              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                                PROJECT {key + 1}
                              </h3>
                              <h2 class="text-gray-900 title-font text-lg font-medium">
                                {item.heading}
                              </h2>
                              <p className="title-font text-lg ">{item.p1}</p>

                              <p className="title-font text-lg mt-10">
                                {item.p2}
                              </p>
                              <a className="font-light mb-10 text-blue-500">
                                Back
                              </a>
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
        </div>
      </section>
    </>
  );
};

export default Projects;
