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

          
        </div>
      </section>
    </>
  );
};

export default Projects;