import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-10 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              class="object-cover object-center h-full w-full"
              src="https://dummyimage.com/1200x500"
            />
          </div>
        </div>
      </div>

      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5  mx-auto">
          <div class="flex flex-wrap -m-12">
            <div class="p-12 md:w-1/2 flex flex-col items-start">
              <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                CATEGORY
              </span>
              <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                ABOUT US
              </h2>
              <p class="leading-relaxed mb-8">
                Live-edge letterpress cliche, salvia fanny pack humblebrag
                narwhal portland. VHS man braid palo santo hoodie brunch trust
                fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid
                fixie chambray 90's, slow-carb etsy tumeric.
              </p>
              <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"></span>
                <span class="text-gray-400 inline-flex items-center leading-none text-sm"></span>
              </div>
            </div>

            <div class="p-12 md:w-1/2 flex flex-col items-start">
              <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                CATEGORY
              </span>
              <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                OUR VISION
              </h2>
              <p class="leading-relaxed mb-8">
                Live-edge letterpress cliche, salvia fanny pack humblebrag
                narwhal portland. VHS man braid palo santo hoodie brunch trust
                fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid
                fixie chambray 90's, slow-carb etsy tumeric.
              </p>
              <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"></span>
                <span class="text-gray-400 inline-flex items-center leading-none text-sm"></span>
              </div>
            </div>  

          </div>
        </div>
      </section>
    </section>
    
  );
}
