import React from "react";

function HomePage() {
  return (
    <>
      <div class="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
        <div class="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
          <div class="w-80 sm:w-auto flex flex-col justify-start items-start">
            <div>
              <p class="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800 dark:text-black">
                Explore Our Trending Products
              </p>
            </div>
            <div class="mt-4 lg:w-4/5 xl:w-3/5">
              <p class="text-base leading-6 text-gray-600 dark:text-black">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div class="mt-16 m-auto lg:mt-16 lg:m-0  ">
              <button class="p-5 bg-gray-900 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-100  flex  items-center  h-14 text-white hover:bg-gray-700 focus:ring-2 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 dark:hover:bg-gray-100">
                <p class="text-xl font-medium leading-5 ">Explore</p>
                <svg
                  class="dark:text-gray-900"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66663 16H25.3333"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20 21.3333L25.3333 16"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20 10.6667L25.3333 16"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
            <div class="">
              <img
                class="hidden lg:block"
                src="https://m.media-amazon.com/images/I/41bCyEVLa-L._SX300_SY300_QL70_FMwebp_.jpg"
                alt="PC"
              />
              <img
                class="w-80 sm:w-auto lg:hidden"
                src="https://m.media-amazon.com/images/I/41bCyEVLa-L._SX300_SY300_QL70_FMwebp_.jpg"
                alt="PC"
              />
            </div>
            <div class="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
              <div>
                <img
                  class="hidden lg:block"
                  src="https://m.media-amazon.com/images/I/419ZuzsLBUL._AC_SR160,160_.jpg"
                  alt="Monitor"
                />
                <img
                  class="w-80 sm:w-auto lg:hidden"
                  src="https://m.media-amazon.com/images/I/419ZuzsLBUL._AC_SR160,160_.jpg"
                  alt="Monitor"
                />
              </div>
              <div>
                <img
                  class="hidden lg:block"
                  src="https://m.media-amazon.com/images/I/417IxqdTh2L._SX300_SY300_QL70_FMwebp_.jpg"
                  alt="Laptop"
                />
                <img
                  class="w-80 sm:w-auto lg:hidden"
                  src="https://m.media-amazon.com/images/I/417IxqdTh2L._SX300_SY300_QL70_FMwebp_.jpg"
                  alt="Laptop"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
