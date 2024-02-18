'use client'
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
import localFont from '@next/font/local'
import CustomEase from 'gsap/CustomEase'
// const greatVibes = localFont({ src: 'image/herald.ttf' })

// import { BezierPlugin } from 'gsap/BezierPlugin'

export default function Home() {
  const { height, width } = useWindowDimensions()
  const [active, setActive] = useState(false)
  const codeRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  const [isAnimationPlaying, setAnimationPlaying] = useState(false)

  useEffect(() => {
    function handleScroll() {
      // Check if the animation should be restarted
      if (!isAnimationPlaying) {
        if (codeRef && codeRef.current && codeRef.current) {
          codeRef?.current?.play()
          setAnimationPlaying(true)
        }
      }
    }

    // Add a scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isAnimationPlaying])

  useEffect(() => {
    var bezier = {
      type: 'soft',
      values: [
        { x: 0, y: 0 },
        { x: 100, y: -100 },
        { x: 200, y: 0 },
      ],
    }
    const jumpTimeline = gsap
      .timeline({ repeat: -1 })
      .to(
        '.logo-cartoon',
        {
          y: '-5px',
          duration: 0.2,
          ease: 'bounce',
        }
        // 'parachute'
      )
      .to(
        '.logo-cartoon',
        {
          y: '0px',
          duration: 0.2,
          ease: 'bounce',
        }
        // 'parachute'
      )

    const cartoonTimeline = gsap
      .timeline({})

      .to(
        '.logo-cartoon',
        {
          left: '-900px',
          opacity: 0,
          top: '300px',
        },
        'parachute'
      )
      .to(
        '.logo-cartoon',
        {
          left: '-206px',
          ease: 'Linear.easeNone',

          // top: '15px',
          top: '189px',
          // left: '15',
          // height: '3rem',
          // top: '15px',
          // display: 'flex',
          // ease: 'bounce',
          // duration: 3,
        },
        'parachute'
      )
      .to(
        '.logo-cartoon',
        {
          opacity: 1,
          duration: 5,
          top: '100px',
          left: '-150px',
          ease: 'Linear.easeNone',
        },
        'parachute'
      )

    const timeline = gsap.timeline()
    timeline.fromTo(
      '.wel',
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 1,
        opacity: 1,
        scale: 1,
      }
    )

    timeline.fromTo(
      '.logo-bucket',
      {
        opacity: 0,
        display: 'none',
      },
      {
        display: 'flex',
        opacity: 1,
      }
    )

    timeline.fromTo(
      '.snack',
      {
        display: 'none',
        opacity: 0,
      },
      {
        display: 'flex',
        opacity: 1,
      }
    )
    timeline.fromTo(
      '.bucket',
      {
        display: 'none',
        opacity: 0,
      },
      {
        display: 'flex',
        opacity: 1,
      }
    )
    timeline.fromTo(
      '.chai',
      {
        display: 'none',
        opacity: 0,
      },
      {
        display: 'flex',
        opacity: 1,
      }
    )
    timeline.fromTo(
      '.below',
      {
        display: 'none',
        opacity: 0,
      },
      {
        display: 'flex',
        opacity: 1,
      }
    )
    timeline.fromTo(
      '.parachute',
      {
        y: -200,
        display: 'none',
        opacity: 0,
      },
      {
        display: 'flex',
        y: 0,
        duration: 3,
        opacity: 1,
      }
    )
    timeline.fromTo(
      '.logo-cartoon',
      {
        left: '-900px',
        opacity: 0,
        top: '300px',
      },
      {
        left: '-206px',
        ease: 'Linear.easeNone',
        top: '189px',
        duration: 3,
        opacity: 1,
        display: 'flex',

        // top: '15px',
        // left: '15',
        // height: '3rem',
        // top: '15px',
        // ease: 'bounce',
        // display: 'flex',
        // duration: 5,
        // top: '10px',
        // left: '-15px',
        // ease: 'Linear.easeNone',
      }
      // 'parachute'
    )
    timeline.fromTo(
      '.logo-cartoon',
      {
        left: '-206px',
        top: '189px',
        // duration: 3,
      },
      {
        left: '-80px',
        top: '90px',
        ease: 'power1.inOut',
        duration: 2,
        // opacity: 1,
        display: 'flex',
      }
    )
    timeline.fromTo(
      '.logo-cartoon',
      {
        left: '-80px',
        top: '90px',
      },
      {
        duration: 3,
        ease: 'power1.inOut',
        left: '20px',
        top: '16px',
        display: 'flex',
      },
      'jump_1'
    )
    // timeline.fromTo(
    //   '.logo-cartoon',
    //   {
    //     x: -105,
    //     y: -70,
    //   },
    //   {
    //     x: -4,
    //     y: -7,
    //     duration: 3,
    //     ease: 'power1.inOut',
    //     // left: '20px',
    //     // top: '16px',
    //     // display: 'flex',
    //   }
    //   // 'jump_1'
    // )

    const timeout = timeline.then(() => {
      jumpTimeline.kill()
      setTimeout(() => {
        setActive(false) // Set active to false after 5 seconds
      }, 3000)
      // setActive(false) // Optionally set active state
    })
    return () => clearTimeout(timeout)
  }, [])

  // gsap.registerPlugin(BezierPlugin)

  // var bezier = {
  //   type: 'soft',
  //   values: [
  //     { x: 0, y: 0 },
  //     { x: 100, y: -100 },
  //     { x: 200, y: 0 },
  //   ],
  // }

  // Animate the circle along the defined parabola
  // gsap.to('#circle', {
  //   duration: 2,
  //   repeat: -1,
  //   yoyo: true,
  //   bezier: bezier,
  //   ease: 'power1.inOut',
  // })

  return (
    <div className="bg-[url(../Assets/gif/galaxy-awesome-perfect-blue-usagif.gif)] bg-cover bg-center bg-no-repeat   ">
      {active && (
        <div
          className={`"  overflow-hidden  h-[92vh]    lg:h-screen w-screen lg:px-32 lg:py-7 px-4 py-4 flex flex-col justify-around items-center lg:gap-[10px] relative"`}
        >
          <div className="flex flex-col justify-center items-center ">
            <Image
              src={parachute}
              className="lg:w-28 lg:h-32 w-20 h-20 parachute  "
              alt=""
            />
            <h1 className="wel text-center   text-[#FFED00] lg:text-6xl text-2xl font-extrabold font-herald   ">
              {' '}
              Welcome to the Galaxy!
            </h1>
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="relative">
              <Image
                src={cartoonBucket}
                className=" hidden logo-bucket  lg:w-32 w-28 h-[125px]"
                alt=""
              />
              {/* <Image
                src={cartoonBucket2}
                className=" hidden logo-bucket  w-32 h-16 absolute top-[58px] z-40 "
                alt=""
              /> */}

              <Image
                src={cartoon}
                className=" hidden logo-cartoon w-[4rem] h-[3rem] lg:w-20 absolute top-[18px] left-[21px]"
                alt=""
              />
            </div>
            <div className="flex ">
              {/* <p className="snack  text-9xl h-[74px] text-[#ffed00] font-stainy ">
                Snack
              </p> */}
              <Image src={snack} className="snack lg:w-80 w-64" alt="" />
              <span className="mt-4">
                <Image src={tm} className="w-7 snack" alt="" />
              </span>
            </div>
            {/* <p className=" bucket text-[7rem] h-[119px] text-[#e31e23] font-budmoj ">
              Bucket
            </p> */}
            <Image src={bucket} className="bucket w-[32rem]" alt="" />

            <div className="chai flex   justify-end items-end w-full ">
              {/* <p className="snack  text-4xl text-[#ffed00] font-stainy ">
                Chai se khane tak...
              </p> */}
              <Image src={chai} className=" chai w-[15rem]" alt="" />
            </div>
          </div>

          {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          <div className=" below  lg:flex-row justify-center items-center flex-col">
            <a className=" cursor-pointer underline wel3 text-[#FECC00] text-center font-bold lg:text-2xl text-xl lg:text-[2rem] font-khumerUI ">
              Venture Group of Paveetaram Foundation India
            </a>
            <div className=" lg:w-16 lg:h-16 h-20 w-20 my-4 lg:my-0">
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
          <div className="bg lg:h-screen w-screen  px-4 py-4 flex lg:flex-row flex-col   justify-around items-center lg:gap-3 gap-[34px]">
            <div className=" flex flex-col lg:w-1/2 lg:h-full h-1/2 w-full justify-center space-y-10 items-center">
              <Image
                src={full_logo}
                className=" lg:w-52 lg:h-52 w-40 h-40"
                alt=""
              />
              <div className=" flex flex-col wel5 text-6xl text-center text-[#ED3237] font-mono">
                <Image
                  src={bhuk}
                  className=" lg:w-[26rem] lg:h-[8rem] w-[18rem] h-[5rem]"
                  alt=""
                />
                {/* Bhuk lagi hai ?<span>khoob khao...</span> */}
              </div>
              <Link href={'/home'}>
                <div className=" w-[121px] relative   hover:scale-125 transition-all">
                  <Image
                    alt=""
                    src={Rocketee}
                    className=" w-8 h-10 -translate-y-5 -translate-x-5 absolute right-[-33px] "
                  />
                  <button className=" w-full border-[#00A859] border-[3.5px] text-[#2B2A2A]  flex flex-col font-extrabold text-2xl px-4 py-2 rounded bg-[#00CF82] justify-center items-center">
                    <span>ORDER</span> <span className=" underline">NOW</span>
                  </button>
                </div>
              </Link>
            </div>

            <div className=" flex flex-col lg:w-1/2 w-full lg:h-full h-1/2 justify-center lg:border-l-2 border-white items-center gap-[34px] lg:gap-[100px]">
              <Link href={'/login'}>
                <div className=" hover:scale-125 transition-all  relative">
                  <Image
                    alt=""
                    src={Rocketee}
                    className=" w-8 h-10 -translate-y-5 -translate-x-5 absolute left-[237px]"
                  />
                  <button className=" border-[#414B9B] border-[3.5px] text-[#2B2A2A]  flex flex-col font-extrabold text-2xl px-4 py-2 rounded bg-[#5AA4D0] justify-center items-center">
                    Franchiser Login
                  </button>
                </div>
              </Link>
              <Image
                src={full_logo}
                className={
                  width < 400 ? '   hidden' : 'lg:w-52 lg:h-52 w-40 h-40'
                }
                alt=""
              />

              <Link href={'/login'}>
                {' '}
                <div className="w-[179px] hover:scale-125 transition-all relative  ">
                  <Image
                    alt=""
                    src={Rocketee}
                    className=" w-8 h-10 -translate-y-5 -translate-x-5 absolute left-[183px] "
                  />{' '}
                  <button className=" border-[#00A859] border-[3.5px] text-[#2B2A2A]  flex flex-col font-extrabold text-2xl px-4 py-2 rounded bg-[#00CF82] justify-center items-center">
                    <span>Become a</span> <span className=" ">Franchiser?</span>
                  </button>
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

// {/* <style>
//   {`.bg{
//         background-image: url("/images/WhatsApp Image 2024-02-14 at 11.18.40 AM.jpeg");
//        background-repeat: no-repeat;
//       background-size: cover;
//       }
//       @font-face {
//         font-family: 'CustomFont1';
//         src: url('../Assets/image/herald.ttf') format('truetype'); /* Adjust the path and format as needed */
//     }

//     @font-face {
//         font-family: 'CustomFont2';
//         src: url('/images/Stainy_PersonalUseOnly.ttf') format('truetype'); /* Adjust the path and format as needed */
//     }
//     @font-face {
//         font-family: 'CustomFont3';
//         src: url('/images/BudmoJiggler.ttf') format('truetype'); /* Adjust the path and format as needed */
//     }
//     @font-face {
//         font-family: 'CustomFont4';
//         src: url('/images/KhmerUI.ttf') format('truetype'); /* Adjust the path and format as needed */
//     }
//     @font-face {
//         font-family: 'CustomFont5';
//         src: url('/images/NoyhAHand-MenuScript.ttf') format('truetype'); /* Adjust the path and format as needed */
//     }
//     .wel{
//         font-family: "CustomFont1";
//         letter-spacing: .3rem;
//       }

//       `}
// </style> */}
