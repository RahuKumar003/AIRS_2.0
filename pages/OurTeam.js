import React from "react";
const data = [
  {
    name: "PROF M AFSAR ALAM",
    position: "Head And Dean Of Department Of Engineering",
    img: "http://www.jamiahamdard.ac.in/airs/img/team/afsar.jpg",
  },
  {
    name: "PROF RANJIT BISWAS",
    position: "CHIEF ADVISOR",
    img: "http://www.jamiahamdard.ac.in/airs/img/team/ranjit.jpg",
  },
  {
    name: "MD OMAIR AHMAD",
    position: "Assistant Professor",
    img: "http://www.jamiahamdard.ac.in/airs/img/team/omair.jpg",
  },
  {
    name: "NAVED ALAM",
    position: "Assistant Professor",
    img: "http://www.jamiahamdard.ac.in/airs/img/team/naved1.jpg",
  },
];
const OurTeam = () => {
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
      <div>
        <section class="text-gray-600 body-font mx-10">
          <div class="container px-5 mt-10 mx-auto">
            <div class="flex flex-wrap -m-4">
              {data.map((item, keys) => {
                return (
                  <div class="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-2 mx-8 bg-gray-100">
                    <img
                      alt="team"
                      class="flex-shrink-0 rounded-lg  object-cover object-center sm:mb-0 mb-4"
                      src={item.img}
                    />
                    <div class="flex-grow sm:pl-8">
                      <h2 class="title-font font-medium text-lg text-gray-900">
                        {item.name}
                      </h2>
                      <h3 class="text-gray-500 mb-3">{item.position}</h3>

                      <span class="inline-flex">
                        <a class="text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurTeam;
