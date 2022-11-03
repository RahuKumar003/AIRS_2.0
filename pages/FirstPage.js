import React from "react";
import Image from "next/image";
import {BsFacebook,BsTwitter,BsInstagram,BsLinkedin} from 'react-icons/bs'
import { FaInstagram } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
const data = [
  {
    img:"/python.jpg",
    heading : "Learn Python"
  },
  {
    img:"/java.png",
    heading : "Learn Java"
  },
  {
    img:"/cfinal.jpg",
    heading : "Learn C"
  },
  {
    img:"/webfinal.jpg",
    heading : "Learn Web Dev"
  },
  {
    img:"/androidfinal.jpg",
    heading : "Learn App Dev"
  },
  {
    img:"/yoo.png",
    heading : "Learn AI/ML"
  }
]
const FirstPage = () => {
  const showToast = () => {
    toast.success("Welcome TO AIRS", {
      toastId: "abx",
    
      position: "bottom-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  showToast();

  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section class="text-gray-600 body-font bg-black ">
        <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div class="rounded-lg h-60   ">
            <h1 class="title-font sm:text-6xl text-4xl font-thin mb-4  text-white font-ubuntu capitalize">
              welcome To
            </h1>
            <h1 class="title-font sm:text-6xl text-4xl mx-5 p-8 mt-10  bg-blue-400 rounded-lg font-thin mb-4  text-white font-ubuntu capitalize">
              artificial intelligence and robotics society
            </h1>
             
          </div>
          
        </div>
        
      </section>

      <section class="text-gray-600 body-font bg-black">
  <div class="container px-5 py-10 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <Image src="/python.jpg" height={60} width={100} />
        <p class="text-white">Learn Python</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
      <Image src="/javafinal.jpg" height={60} width={80} />
        <p class="text-white">Lear Java</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
      <Image src="/cfinal.jpg" height={70} width={70} />
        <p class="text-white">Learn C</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
      <Image src="/webfinal.jpg" height={60} width={70} />
        <p class="text-white">Learn Web Dev</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <Image src="/androidfinal.jpg" height={80} width={150} />
        <p class="text-white">Learn App Dev</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <Image src="/yoo.png" height={80} width={80} />
        <p class="text-white">Learn AI/ML</p>
      </div>
    </div>
  </div>
</section>
      
      <div class="text-gray-600 body-font bg-black text-xl ">
        <div class="container px-5 py-8  mx-auto flex items-center sm:flex-row flex-col">
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start p-2">
            <Link href="https://www.facebook.com/profile.php?id=100086272766693">
              <a>
                <BsFacebook
                  href=""
                  className="mx-2 text-white cursor-pointer hover:text-blue-400"
                />
              </a>
            </Link>
            <Link href="https://www.instagram.com/airs.jh/">
              <a>
                <BsInstagram className="mx-2 text-white cursor-pointer  hover:text-blue-400" />
              </a>
            </Link>
            <Link href="https://twitter.com/AIRSJH">
              <a>
                <BsTwitter className="mx-2 text-white cursor-pointer  hover:text-blue-400" />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/airsjh/">
              <a>
                <BsLinkedin className="mx-2 text-white cursor-pointer  hover:text-blue-400" />
              </a>
            </Link>
          </span>
        </div>
      </div>

      
    </div>
  );
};

export default FirstPage;
