import React from 'react'

export default function HeroSection() {
  return (
    <div className="w-full lg:px-32 px-4 pt-2">
      <div className="px-4 rounded-3xl  mx-auto sm:max-w-xl md:max-w-full lg:w-full h-1/2  bg-orange-400 justify-center items-center md:px-24 lg:px-4 lg:py-2">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:w-4/6 lg:px-16 lg:mb-0">
            <div className="w-full mb-6">
              <div className="">
                <p className="inline-block px-3 py-1 my-4 text-xs font-semibold tracking-wider  text-white  bg-studentplus-bgDark uppercase rounded-full bg-teal-accent-400">
                  Local Favorites Just a Click Away
                </p>
              </div>
              <h2 className="mb-3 font-sans text-3xl font-bold tracking-tight  text-white sm:text-4xl sm:leading-none">
                Discover Culinary Delights Near You
              </h2>
              <p className="text-base mb-2 text-gray-100 md:text-lg hidden md:block">
                Explore a world of flavors right in your neighborhood. From cozy
                cafes to upscale restaurants, find the perfect spot for every
                craving.
              </p>
              <p className="text-lg font-bold text-gray-100 md:text-lg">
                #BuildWhatYouLove
              </p>
            </div>
            <div className=" pt-3 md:flex-row md:inline-flex w-full hidden  justify-start bg-white h-12 pr-4 mb-3 text-black font-medium tracking-wide transition duration-200 rounded shadow-md  md:mr-4 md:mb-0  focus:shadow-outline focus:outline-none ">
              <input
                href="/"
                placeholder="Serach for Food"
                className=" px-6 mb-3 w-full text-gray-800 text-lg placeholder-studentplus-placeholder focus:shadow-outline focus:outline-none"
              ></input>
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 1H16V3.5H6V1ZM3.5 6V3.5H6V6H3.5ZM3.5 16H1V6H3.5V16ZM6 18.5H3.5V16H6V18.5ZM16 18.5V21H6V18.5H16ZM18.5 16H16V18.5H18.5V21H21V23.5H23.5V26H26V23.5H23.5V21H21V18.5H18.5V16ZM18.5 6H21V16H18.5V6ZM18.5 6V3.5H16V6H18.5Z"
                  fill="#EE2E24"
                />
                <path
                  d="M16 3.5V1H6V3.5M16 3.5H6M16 3.5H18.5V6M16 3.5V6H18.5M6 3.5H3.5V6M6 3.5V6H3.5M3.5 6H1V16H3.5M3.5 6V16M3.5 16V18.5H6M3.5 16H6V18.5M6 18.5V21H16V18.5M6 18.5H16M16 18.5V16H18.5M16 18.5H18.5M18.5 16V18.5M18.5 16H21V6H18.5M18.5 16V6M18.5 18.5V21H21M18.5 18.5H21V21M21 21V23.5H23.5M21 21H23.5V23.5M23.5 23.5V26H26V23.5H23.5Z"
                  stroke="#EE2E24"
                />
              </svg>
            </div>
          </div>
          <div className="relative  lg:w-3/6">
            <img
              className=" scale-150 md:scale-100"
              src="images/istockphoto-585602032-612x612-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
