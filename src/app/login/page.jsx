import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import brand_1 from '@/Assets/Image/PAGE4/Brand2.svg'
import Rocketee from '@/Assets/Image/PAGE2/Rocketee.png'
import Durbeen1 from '@/Assets/Image/PAGE4/Durbeen1.png'
import Durbeen2 from '@/Assets/Image/PAGE4/Durbeen2.png'
import Durbeen3 from '@/Assets/Image/PAGE4/Durbeen3.png'
import Lock from '@/Assets/Image/PAGE4/Lock.png'
import hand from '@/Assets/Image/PAGE4/hand.png'

export default function Login() {
  return (
    <div className=" flex flex-col justify-center items-center ">
      <style>
        {`.bg{
                    background-image: url("/images/WhatsApp Image 2024-02-14 at 11.18.40 AM.jpeg");
                   background-repeat: no-repeat;
                  background-size: cover;
                  }`}
        {`.bg1{
                    background-image: url("/images/Pinterest.jpg");
                   background-repeat: no-repeat;
                  background-size: cover;
                  }`}
      </style>
      <div className=" w-full lg:h-20 h-36 flex  lg:flex-row flex-col  justify-between px-8 bg-[url(../Assets/Image/PAGE4/background.jpeg)]  ">
        <div className=" flex flex-col justify-center items-center">
          <h1 className=" text-white font-normal text-xs">
            For ORDER Visit Our Website
          </h1>
          <a
            href="/home"
            className=" px-3 py-1 rounded  bg-[#FF6200]  text-black font-semibold"
          >
            www.snackbucket.co.in
          </a>
        </div>
        <div className="flex  justify-center items-center">
          <Image src={brand_1} alt="" className=" w-60 h-16" />
        </div>
        <div className=" flex flex-col  justify-center items-center">
          <h1 className=" text-white font-normal text-xs">
            Speak to Our Franchise Counsellor
          </h1>
          <a
            href="/home"
            className=" px-6 py-1 rounded flex justify-center items-center   bg-[#FF6200]  text-black font-semibold"
          >
            <svg
              className=" h-8 w-8 mr-2"
              width="44"
              height="43"
              viewBox="0 0 44 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="22" cy="21.5" rx="22" ry="21.5" fill="#580608" />
              <path
                d="M16.62 20.79C18.06 23.62 20.38 25.94 23.21 27.38L25.41 25.18C25.69 24.9 26.08 24.82 26.43 24.93C27.55 25.3 28.75 25.5 30 25.5C30.2652 25.5 30.5196 25.6054 30.7071 25.7929C30.8946 25.9804 31 26.2348 31 26.5V30C31 30.2652 30.8946 30.5196 30.7071 30.7071C30.5196 30.8946 30.2652 31 30 31C25.4913 31 21.1673 29.2089 17.9792 26.0208C14.7911 22.8327 13 18.5087 13 14C13 13.7348 13.1054 13.4804 13.2929 13.2929C13.4804 13.1054 13.7348 13 14 13H17.5C17.7652 13 18.0196 13.1054 18.2071 13.2929C18.3946 13.4804 18.5 13.7348 18.5 14C18.5 15.25 18.7 16.45 19.07 17.57C19.18 17.92 19.1 18.31 18.82 18.59L16.62 20.79Z"
                fill="#FFF212"
              />
            </svg>
            +91-7400-730-730
          </a>
        </div>
      </div>
      <div className=" w-full lg:px-32 lg:py-20 flex flex-col justify-center items-center bg-[url(../Assets/Image/PAGE4/Pinterest.jpg)] ">
        <h1 className=" text-black font-semibold text-xl mb-5 cursor-pointer">
          New USER? Create an Account
        </h1>
        <form className=" lg:w-1/2 w-full flex flex-col justify-center items-center space-y-5">
          <div className=" flex w-full justify-center items-center">
            <Image
              alt=""
              src={Rocketee}
              className="w-5 h-12 translate-x-4 rotate-12 -translate-y-5"
            />
            <button className=" px-3 py-1 rounded border-[#677BBC] border-[3.5px] bg-[#67A9D5] text-3xl text-white font-semibold">
              Franchiser Login
            </button>
          </div>

          <div className="flex w-full justify-center items-center">
            <Image
              alt=""
              src={Durbeen1}
              width={56}
              height={40}
              className="w-14 h-10 translate-x-2 translate-y-1"
            />
            <input
              type="text"
              className=" w-full placeholder:text-white placeholder:font-semibold placeholder:text-lg px-4 py-1 rounded border-[#7F86C1] border-2 bg-[#E6D2E9] outline-none text-white text-lg font-semibold"
              placeholder="USER ID"
            />
          </div>
          <div className="flex w-full justify-center items-center">
            <Image
              alt=""
              src={Durbeen2}
              className="w-14 h-10 translate-x-2 translate-y-1"
            />
            <input
              type="text"
              className="w-full placeholder:text-white placeholder:font-semibold placeholder:text-lg px-4 py-1 rounded border-[#7F86C1] border-2 bg-[#E6D2E9] outline-none text-white text-lg font-semibold"
              placeholder="PASS CODE"
            />
          </div>
          <div className="flex w-full justify-center space-x-20 items-center">
            <div className=" w-1/2 flex">
              <Image
                alt=""
                src={Durbeen3}
                className="w-14 h-10 translate-x-2 translate-y-2"
              />
              <input
                type="text"
                className=" placeholder:text-white  placeholder:font-semibold placeholder:text-lg px-4 py-1 rounded border-[#7F86C1] border-2 bg-[#E6D2E9] outline-none text-white text-lg font-semibold"
                placeholder="SECURE CODE"
              />
            </div>
            <div className=" w-1/2 ">
              <h1 className=" text-[#838096] text-3xl  font-bold italic font-times-new-roman">
                2FADR#
              </h1>
            </div>
          </div>

          <div className="flex w-full justify-start items-center ml-32">
            <Image alt="" src={hand} className="w-4 h-5 mr-2" />
            <h1 className="text-[#5463AB] font-medium text-sm ">
              Remember me for 30 days
            </h1>
          </div>
        </form>

        <div className=" lg:mt-[9.6rem]  w-full flex lg:flex-row flex-col justify-between px-32">
          <div className=" flex justify-center items-center cursor-pointer">
            <Image alt="" src={Lock} className="w-12 h-14 mr-2" />

            <div className=" flex flex-col ">
              <h1 className=" text-2xl font-medium text-[#580608]">
                Forget your password?
              </h1>
              <h1 className=" text-2xl font-medium text-[#580608]">
                Get it Back !
              </h1>
            </div>
          </div>

          <Link href={'/home'}>
            <div className="flex hover:scale-90">
              <button className=" px-6 py-2 text-white text-3xl rounded font-bold border-[#DAD5ED] bg-[#00CF82] border-2 text-[]">
                Login
              </button>
              <Image
                alt=""
                src={Rocketee}
                className=" w-8 h-12  rotate-12 -translate-x-5 -translate-y-5"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
