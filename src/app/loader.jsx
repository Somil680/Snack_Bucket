import React from 'react'
import animationData from '@/Assets/Animation/Animation - 1707890850219 (1).json'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Lottie from 'lottie-react'
import Link from 'next/link'
import Image from 'next/image'
import cartoon from '@/Assets/Image/PAGE1/Cartoon.png'
import cartoonBucket from '@/Assets/Image/PAGE1/Bucket Blank.png'
import cartoonBucket2 from '@/Assets/Image/PAGE1/Bucket Blank - Copy.png'
import brandSvg from '@/Assets/Image/PAGE1/Bucket With Baccha.png'
import snack from '@/Assets/Image/PAGE1/Snack.png'
import bucket from '@/Assets/Image/PAGE1/Bucket.png'
import tm from '@/Assets/Image/PAGE1/TM Blink.png'
import chai from '@/Assets/Image/PAGE1/Cahi se khane tak.png'
import parachute from '@/Assets/Image/PAGE1/Parasute.png'
import full_logo from '@/Assets/Image/PAGE2/Logo Right Wala.png'
import Rocketee from '@/Assets/Image/PAGE2/Rocketee.png'
import bhuk from '@/Assets/Image/PAGE2/Bhukh.png'
import useWindowDimensions from '@/hooks/useWindowDimension'

export default function Loader() {
  const { height } = useWindowDimensions()
  const [active, setActive] = useState(true)
  const codeRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  const [isAnimationPlaying, setAnimationPlaying] = useState(false)

  // useEffect(() => {
  //   function handleScroll() {
  //     // Check if the animation should be restarted
  //     if (!isAnimationPlaying) {
  //       if (codeRef && codeRef.current && codeRef.current) {
  //         codeRef?.current?.play()
  //         setAnimationPlaying(true)
  //       }
  //     }
  //   }

  //   // Add a scroll event listener
  //   window.addEventListener('scroll', handleScroll)

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [isAnimationPlaying])
  // useEffect(() => {
  //   const jumpTimeline = gsap.timeline({ repeat: -1 })
  //   jumpTimeline
  //     .to(
  //       '.logo-cartoon',
  //       {
  //         y: '-50px',
  //         duration: 0.5,
  //         ease: 'Bounce.easeOut',
  //       },
  //       'parachute'
  //     )
  //     .to(
  //       '.logo-cartoon',
  //       {
  //         y: '0px',
  //         duration: 0.5,
  //         ease: 'Bounce.easeIn',
  //       },
  //       'parachute'
  //     )
  //   const timeline = gsap.timeline()
  //   timeline.fromTo(
  //     '.wel',
  //     {
  //       opacity: 0,
  //       scale: 0,
  //     },
  //     {
  //       duration: 1,
  //       opacity: 1,
  //       scale: 1,
  //     }
  //   )

  //   timeline.fromTo(
  //     '.logo-bucket',
  //     {
  //       // display: 'none',
  //       opacity: 0,
  //     },
  //     {
  //       display: 'flex',
  //       opacity: 1,
  //     }
  //   )
  //   // timeline.fromTo(
  //   //   '.logo-cartoon',
  //   //   {
  //   //     // display: 'none',
  //   //     top: '60px',
  //   //     opacity: 0,
  //   //   },
  //   //   {
  //   //     // height: '3rem',
  //   //     top: '2px',
  //   //     display: 'flex',
  //   //     opacity: 1,
  //   //     ease: 'bounce',
  //   //     duration: 6,
  //   //   },
  //   //   'parachute'
  //   // )

  //   timeline.fromTo(
  //     '.snack',
  //     {
  //       // display: 'none',
  //       opacity: 0,
  //     },
  //     {
  //       // display: 'flex',
  //       opacity: 1,
  //       // delay: 1,
  //     }
  //   )
  //   timeline.fromTo(
  //     '.bucket',
  //     {
  //       // display: 'none',
  //       opacity: 0,
  //     },
  //     {
  //       // display: 'flex',
  //       opacity: 1,
  //     }
  //   )
  //   timeline.fromTo(
  //     '.chai',
  //     {
  //       // display: 'none',
  //       opacity: 0,
  //     },
  //     {
  //       // display: 'flex',
  //       opacity: 1,
  //     }
  //   )
  //   timeline.fromTo(
  //     '.below',
  //     {
  //       // display: 'none',
  //       opacity: 0,
  //     },
  //     {
  //       display: 'flex',
  //       opacity: 1,
  //     }
  //   )
  //   timeline.fromTo(
  //     '.parachute',
  //     {
  //       y: -200,

  //       display: 'none',
  //     },
  //     {
  //       display: 'flex',
  //       y: height - 150,
  //       duration: 4,
  //       opacity: 0,
  //     },
  //     'parachute'
  //   )
  //   timeline.fromTo(
  //     '.parachute-2',
  //     {
  //       // y: -200,
  //       opacity: 0,

  //       // display: 'none',
  //     },
  //     {
  //       // display: 'flex',
  //       // y: height - 150,
  //       // duration: 4,
  //       opacity: 1,
  //     }
  //   )

  //   // setTimeout(() => {
  //   //   setActive(false) // Set active to false after 5 seconds
  //   // }, 8000)

  //   // return () => clearTimeout(timeout) // Clean up the timeout when the component unmounts
  // }, [])
  // useEffect(() => {
  //   // Jump animation timeline

  //   const jumpTimeline = gsap.timeline({ repeat: -1 })
  //   jumpTimeline
  //     .to('.logo-cartoon', {
  //       y: '-50px',
  //       duration: 0.5,
  //       ease: 'Bounce.easeOut',
  //     })
  //     .to('.logo-cartoon', {
  //       y: '0px',
  //       duration: 0.5,
  //       ease: 'Bounce.easeIn',
  //     })
  //   console.log('🚀 ~ useEffect ~ jumpTimel ine:', jumpTimeline)

  //   // Move forward animation timeline
  //   // const moveTimeline = gsap.timeline({ repeat: -1 })
  //   // moveTimeline.to(characterRef.current, {
  //   //   x: '100vw',
  //   //   duration: 5,
  //   //   ease: 'Linear.easeNone',
  //   // })

  //   // Trigger jump animation on scroll
  //   // window.addEventListener('scroll', () => {
  //   //   const scrollPosition = window.scrollY
  //   //   if (scrollPosition > 100) {
  //   //     jumpTimeline.restart()
  //   //   } else {
  //   //     jumpTimeline.pause()
  //   //   }
  //   // })

  //   // Start move animation after jump completes
  //   // jumpTimeline.play().then(() => moveTimeline.play())

  //   // return () => {
  //   //   jumpTimeline.kill()
  //   //   moveTimeline.kill()
  //   // }
  // }, [])

  return (
    <div>
      {' '}
      {active && (
        <div className="bg   lg:h-screen w-screen lg:px-32 lg:py-32 px-4 py-4 flex flex-col justify-center items-center gap-[35px] lg:gap-[90px] relative">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={parachute}
              className="parachute w-32 h-36 z-50 absolute top-0"
              alt=""
            />
            <Image
              src={parachute}
              className="parachute-2 w-32 h-36 z-50 "
              alt=""
            />
            <h1 className="wel   text-[#FFED00] lg:text-6xl text-2xl font-extrabold ">
              {' '}
              Welcome to the Galaxy!
            </h1>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="relative">
              <Image
                src={cartoonBucket}
                className=" hidden logo-bucket  w-32 h-36"
                alt=""
              />
              <Image
                src={cartoonBucket2}
                className=" hidden logo-bucket  w-32 h-20 absolute top-[67px] z-40 "
                alt=""
              />

              <Image
                src={cartoon}
                className=" hidden logo-cartoon w-[5rem] h-[3rem] absolute top-[18px] left-[21px]"
                alt=""
              />
            </div>
            <div className="flex">
              <Image src={snack} className="snack w-64" alt="" />
              <span className="">
                <Image src={tm} className="w-7 snack" alt="" />
              </span>
            </div>
            <Image src={bucket} className="bucket w-[32rem]" alt="" />

            <div className="chai flex   justify-end items-end w-full ">
              <Image src={chai} className=" chai w-[15rem]" alt="" />
            </div>
          </div>

          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          <div className=" below  lg:flex-row justify-center items-center flex-col">
            <a className=" cursor-pointer underline wel3 text-[#FECC00] text-center font-bold lg:text-2xl text-xl my-8">
              Venture Group of Paveetaram Foundation India
            </a>
            <div className=" lg:w-16 lg:h-16 h-28 w-28 my-4 lg:my-0">
              <Lottie
                // lottieRef={codeRef}
                animationData={animationData}
                onComplete={() => {
                  setAnimationPlaying(false)
                }}
              />
            </div>
          </div>
        </div>
      )}
      {!active && (
        <>
          <div className="bg lg:h-screen w-screen  px-4 py-4 flex lg:flex-row flex-col   justify-center items-center gap-3">
            <div className=" flex flex-col lg:w-1/2 lg:h-full h-1/2 w-full justify-center space-y-10 items-center">
              <Image src={full_logo} className=" w-52 h-52" alt="" />
              <div className=" flex flex-col wel5 text-6xl text-center text-[#ED3237] font-mono">
                <Image src={bhuk} className=" w-[26rem] h-[8rem]" alt="" />
                {/* Bhuk lagi hai ?<span>khoob khao...</span> */}
              </div>
              <Link href={'/home'}>
                <div className=" flex  hover:scale-125 transition-all">
                  <button className=" border-[#00A859] border-[3.5px] text-[#2B2A2A]  flex flex-col font-extrabold text-2xl px-4 py-2 rounded bg-[#00CF82] justify-center items-center">
                    <span>ORDER</span> <span className=" underline">NOW</span>
                  </button>
                  <Image
                    alt=""
                    src={Rocketee}
                    className=" w-8 h-10 -translate-y-5 -translate-x-5"
                  />
                </div>
              </Link>
            </div>

            <div className=" flex flex-col lg:w-1/2 w-full lg:h-full h-1/2 justify-center lg:border-l-2 border-white items-center gap-[34px] lg:gap-[100px]">
              <Link href={'/login'}>
                <div className=" hover:scale-125 transition-all flex">
                  <button className=" border-[#414B9B] border-[3.5px] text-[#2B2A2A]  flex flex-col font-extrabold text-2xl px-4 py-2 rounded bg-[#5AA4D0] justify-center items-center">
                    Franchiser Login
                  </button>
                  <Image
                    alt=""
                    src={Rocketee}
                    className=" w-8 h-10 -translate-y-5 -translate-x-5"
                  />
                </div>
              </Link>
              <Image src={full_logo} className=" w-52 h-52" alt="" />

              <Link href={'/login'}>
                {' '}
                <div className=" hover:scale-125 transition-all flex ">
                  <button className=" border-[#00A859] border-[3.5px] text-[#2B2A2A]  flex flex-col font-extrabold text-2xl px-4 py-2 rounded bg-[#00CF82] justify-center items-center">
                    <span>Become a</span> <span className=" ">Franchiser?</span>
                  </button>
                  <Image
                    alt=""
                    src={Rocketee}
                    className=" w-8 h-10 -translate-y-5 -translate-x-5"
                  />{' '}
                </div>
              </Link>
            </div>
          </div>
          <button className=" hover:scale-125 rotate-90 fixed right-[-34px] top-1/2 rounded-b-lg text-[#2B2A2A] font-bold px-4 py-1 bg-[#ED3237] flex justify-center items-center">
            Call Now
          </button>
        </>
      )}
    </div>
  )
}

// <style>
//   {`.bg{
//               background-image: url("/images/WhatsApp Image 2024-02-14 at 11.18.40 AM.jpeg");
//              background-repeat: no-repeat;
//             background-size: cover;
//             }
//             @font-face {
//               font-family: 'CustomFont1';
//               src: url('/images/herald.ttf') format('truetype'); /* Adjust the path and format as needed */
//           }

//           @font-face {
//               font-family: 'CustomFont2';
//               src: url('/images/Stainy_PersonalUseOnly.ttf') format('truetype'); /* Adjust the path and format as needed */
//           }
//           @font-face {
//               font-family: 'CustomFont3';
//               src: url('/images/BudmoJiggler.ttf') format('truetype'); /* Adjust the path and format as needed */
//           }
//           @font-face {
//               font-family: 'CustomFont4';
//               src: url('/images/KhmerUI.ttf') format('truetype'); /* Adjust the path and format as needed */
//           }
//           @font-face {
//               font-family: 'CustomFont5';
//               src: url('/images/NoyhAHand-MenuScript.ttf') format('truetype'); /* Adjust the path and format as needed */
//           }
//           .wel{
//               font-family: "CustomFont1";
//               letter-spacing: .3rem;
//             }

//             `}
// </style>
