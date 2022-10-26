import React from "react";
import Image from "next/image";
const Aim = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-2 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 mx-5">
              OUR AIM
            </h1>
            <div class="h-1 w-20 bg-black rounded mx-5"></div>
          </div>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/3  md:w-1/2 p-4">
            <div class="bg-gray-50 p-6 rounded-lg">
              <img
                class="h-20 object-contain rounded w-full   mb-3"
                src="/brain.jpg"
                alt="content"
              />

              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                IMAGINATION
              </h2>
              <p class="leading-relaxed text-base">
                Lets animate and be the change to see the world.
              </p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="bg-gray-50 p-6 rounded-lg">
              <img
                class="h-20 object-contain rounded w-full   mb-3"
                src="/imagination.jpg"
                alt="content"
              />

              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                IDEAS
              </h2>
              <p class="leading-relaxed text-base">
                Knowledge is power. Information is liberating. Education is the
                premise of progress, in every society, in every family.
              </p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="bg-gray-50 p-6 rounded-lg">
              <img
                class="h-20 object-contain rounded w-full   mb-3"
                src="/application.png"
                alt="content"
              />

              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                APPLICATION
              </h2>
              <p class="leading-relaxed text-base">
                Apply the thing, and be yourself to develop the project in your
                real life.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Aim;
