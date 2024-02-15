'use client'
import React from 'react'
// import './Navigation.css'
import { Link } from 'next/link'
import { useEffect, useState, useContext } from 'react'
// import User from './Global'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

export default function Navigation(props) {
  //   const [user, setUser] = useContext(User)
  //   const [state, setState] = useState(false)
  //   const [open, setOpen] = React.useState(false)
  //   useEffect(() => {
  //     document.onclick = (e) => {
  //       const target = e.target
  //       if (!target.closest('.menu-btn')) setState(false)
  //     }
  //   }, [])
  //   const toastmsg = () => {
  //     if (!user.login) {
  //       toast.warn('Continue to login!!', {
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         style: {
  //           background: 'yellow', // Set the background color to yellow
  //         },
  //       })
  //     }
  //   }

  const Brand = () => (
    <div className="flex lg:flex items-center justify-between h-1/2 lg:h-full md:h-full lg:justify-center px-4 py-4">
      <a
        className="hover:scale-110 transition-all cursor-pointer"
        href="javascript:void(0)"
      >
        <Link to="/">
          <img
            src="/images/logo-with-bacha-CaH_g2nu.png"
            className="w-10 h-10"
          />
        </Link>
      </a>
      <div className="lg:hidden">
        <button
          className={`menu-btn  hover:text-gray-300`}
          //   onClick={() => setState(!state)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
  )
  const Menu = () => (
    <div
      className={`items-center justify-between h-full px-4 py-4 shadow-sm rounded-lg shadow-slate-800 md:block`}
    >
      <div className=" h-8 flex">
        <a className=" justify-start flex p-1 w-1/2" href="javascript:void(0)">
          <svg
            width="158"
            height="23"
            viewBox="0 0 158 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.03 22C10.31 21.98 8.76 21.7 7.38 21.16C6 20.62 4.83 19.88 3.87 18.94C2.91 18 2.17 16.9 1.65 15.64C1.13 14.36 0.87 12.98 0.87 11.5C0.87 10.02 1.13 8.65 1.65 7.39C2.17 6.11 2.91 5 3.87 4.06C4.85 3.12 6.02 2.38 7.38 1.84C8.76 1.3 10.31 1.02 12.03 0.999999H15.27V5.2H12.15C11.21 5.22 10.35 5.39 9.57 5.71C8.81 6.03 8.15 6.47 7.59 7.03C7.05 7.59 6.63 8.25 6.33 9.01C6.05 9.77 5.91 10.6 5.91 11.5C5.91 12.4 6.05 13.23 6.33 13.99C6.63 14.75 7.05 15.41 7.59 15.97C8.15 16.53 8.81 16.97 9.57 17.29C10.35 17.61 11.21 17.78 12.15 17.8H15.27V22H12.03ZM18.0291 22V0.0999994H22.6791V22H18.0291ZM33.735 22.36C32.155 22.36 30.735 22.01 29.475 21.31C28.215 20.61 27.215 19.65 26.475 18.43C25.755 17.21 25.395 15.84 25.395 14.32C25.395 12.78 25.755 11.41 26.475 10.21C27.215 8.99 28.215 8.03 29.475 7.33C30.735 6.61 32.155 6.25 33.735 6.25C35.315 6.25 36.725 6.61 37.965 7.33C39.225 8.03 40.215 8.99 40.935 10.21C41.675 11.41 42.045 12.78 42.045 14.32C42.045 15.84 41.675 17.21 40.935 18.43C40.215 19.65 39.225 20.61 37.965 21.31C36.705 22.01 35.295 22.36 33.735 22.36ZM33.735 18.31C34.475 18.31 35.115 18.13 35.655 17.77C36.195 17.41 36.615 16.93 36.915 16.33C37.215 15.73 37.365 15.05 37.365 14.29C37.365 13.55 37.215 12.88 36.915 12.28C36.615 11.68 36.195 11.2 35.655 10.84C35.115 10.48 34.475 10.3 33.735 10.3C32.995 10.3 32.345 10.48 31.785 10.84C31.245 11.2 30.825 11.68 30.525 12.28C30.225 12.88 30.075 13.55 30.075 14.29C30.075 15.05 30.225 15.73 30.525 16.33C30.825 16.93 31.245 17.41 31.785 17.77C32.345 18.13 32.995 18.31 33.735 18.31ZM52.4864 22.36C50.9064 22.36 49.5364 22.06 48.3764 21.46C47.2364 20.84 46.3564 20.01 45.7364 18.97C45.1164 17.91 44.8064 16.74 44.8064 15.46V6.61H49.4564V15.34C49.4564 15.88 49.5864 16.38 49.8464 16.84C50.1064 17.28 50.4564 17.64 50.8964 17.92C51.3564 18.18 51.8764 18.31 52.4564 18.31C53.0164 18.31 53.5164 18.18 53.9564 17.92C54.4164 17.64 54.7764 17.28 55.0364 16.84C55.2964 16.38 55.4264 15.88 55.4264 15.34V6.61H60.0764V15.46C60.0764 16.74 59.7764 17.91 59.1764 18.97C58.5764 20.01 57.7064 20.84 56.5664 21.46C55.4464 22.06 54.0864 22.36 52.4864 22.36ZM71.0864 22.36C69.8064 22.36 68.6464 22.16 67.6064 21.76C66.5864 21.36 65.7264 20.79 65.0264 20.05C64.3264 19.29 63.7864 18.4 63.4064 17.38C63.0264 16.36 62.8364 15.25 62.8364 14.05C62.8364 12.49 63.1464 11.13 63.7664 9.97C64.4064 8.81 65.2764 7.9 66.3764 7.24C67.4964 6.58 68.7764 6.25 70.2164 6.25C70.8364 6.25 71.4164 6.33 71.9564 6.49C72.5164 6.65 73.0164 6.89 73.4564 7.21C73.9164 7.51 74.2964 7.87 74.5964 8.29H74.6864V0.0999994H79.3364V14.02C79.3364 15.7 78.9964 17.17 78.3164 18.43C77.6364 19.69 76.6764 20.66 75.4364 21.34C74.2164 22.02 72.7664 22.36 71.0864 22.36ZM71.0864 18.34C71.8064 18.34 72.4264 18.17 72.9464 17.83C73.4864 17.47 73.8964 16.99 74.1764 16.39C74.4564 15.77 74.5964 15.08 74.5964 14.32C74.5964 13.56 74.4564 12.88 74.1764 12.28C73.8964 11.68 73.4864 11.21 72.9464 10.87C72.4264 10.51 71.8064 10.33 71.0864 10.33C70.3864 10.33 69.7664 10.51 69.2264 10.87C68.6864 11.21 68.2764 11.68 67.9964 12.28C67.7164 12.88 67.5764 13.56 67.5764 14.32C67.5764 15.08 67.7164 15.77 67.9964 16.39C68.2764 16.99 68.6864 17.47 69.2264 17.83C69.7664 18.17 70.3864 18.34 71.0864 18.34ZM90.8173 22.36C89.1573 22.36 87.7073 22.02 86.4673 21.34C85.2273 20.66 84.2673 19.69 83.5873 18.43C82.9073 17.17 82.5673 15.7 82.5673 14.02V0.0999994H87.2173V8.29H87.3073C87.6073 7.87 87.9773 7.51 88.4173 7.21C88.8773 6.89 89.3773 6.65 89.9173 6.49C90.4773 6.33 91.0673 6.25 91.6873 6.25C93.1473 6.25 94.4273 6.58 95.5273 7.24C96.6273 7.9 97.4873 8.81 98.1073 9.97C98.7473 11.13 99.0673 12.49 99.0673 14.05C99.0673 15.25 98.8773 16.36 98.4973 17.38C98.1173 18.4 97.5673 19.29 96.8473 20.05C96.1473 20.79 95.2873 21.36 94.2673 21.76C93.2673 22.16 92.1173 22.36 90.8173 22.36ZM90.8173 18.34C91.5373 18.34 92.1573 18.17 92.6773 17.83C93.1973 17.47 93.5973 16.99 93.8773 16.39C94.1773 15.77 94.3273 15.08 94.3273 14.32C94.3273 13.56 94.1773 12.88 93.8773 12.28C93.5973 11.68 93.1973 11.21 92.6773 10.87C92.1573 10.51 91.5373 10.33 90.8173 10.33C90.0973 10.33 89.4673 10.51 88.9273 10.87C88.4073 11.21 88.0073 11.68 87.7273 12.28C87.4473 12.88 87.3073 13.56 87.3073 14.32C87.3073 15.08 87.4473 15.77 87.7273 16.39C88.0073 16.99 88.4073 17.47 88.9273 17.83C89.4673 18.17 90.0973 18.34 90.8173 18.34ZM109.498 22.36C107.918 22.36 106.548 22.06 105.388 21.46C104.248 20.84 103.368 20.01 102.748 18.97C102.128 17.91 101.818 16.74 101.818 15.46V6.61H106.468V15.34C106.468 15.88 106.598 16.38 106.858 16.84C107.118 17.28 107.468 17.64 107.908 17.92C108.368 18.18 108.888 18.31 109.468 18.31C110.028 18.31 110.528 18.18 110.968 17.92C111.428 17.64 111.788 17.28 112.048 16.84C112.308 16.38 112.438 15.88 112.438 15.34V6.61H117.088V15.46C117.088 16.74 116.788 17.91 116.188 18.97C115.588 20.01 114.718 20.84 113.578 21.46C112.458 22.06 111.098 22.36 109.498 22.36ZM120.448 22V11.14C120.448 9.74 120.848 8.64 121.648 7.84C122.448 7.04 123.558 6.64 124.978 6.64H129.448V10.42H126.118C125.838 10.42 125.598 10.52 125.398 10.72C125.198 10.9 125.098 11.14 125.098 11.44V22H120.448ZM131.555 22V18.31H138.965C139.165 18.31 139.345 18.27 139.505 18.19C139.665 18.09 139.795 17.96 139.895 17.8C139.995 17.64 140.045 17.47 140.045 17.29C140.045 17.09 139.995 16.91 139.895 16.75C139.795 16.59 139.665 16.47 139.505 16.39C139.345 16.29 139.165 16.24 138.965 16.24H136.265C135.265 16.24 134.355 16.08 133.535 15.76C132.735 15.42 132.095 14.9 131.615 14.2C131.155 13.48 130.925 12.55 130.925 11.41C130.925 10.53 131.135 9.73 131.555 9.01C131.995 8.29 132.585 7.71 133.325 7.27C134.085 6.83 134.915 6.61 135.815 6.61H143.225V10.33H136.535C136.255 10.33 136.015 10.42 135.815 10.6C135.635 10.78 135.545 11 135.545 11.26C135.545 11.54 135.635 11.78 135.815 11.98C136.015 12.16 136.255 12.25 136.535 12.25H139.175C140.295 12.25 141.255 12.42 142.055 12.76C142.875 13.08 143.505 13.6 143.945 14.32C144.405 15.04 144.635 15.97 144.635 17.11C144.635 18.01 144.405 18.83 143.945 19.57C143.505 20.31 142.905 20.9 142.145 21.34C141.405 21.78 140.565 22 139.625 22H131.555ZM152.634 22C151.214 22 150.104 21.6 149.304 20.8C148.504 19.98 148.104 18.88 148.104 17.5V2.86H152.784V17.23C152.784 17.47 152.864 17.68 153.024 17.86C153.204 18.02 153.414 18.1 153.654 18.1H157.014V22H152.634ZM145.584 10.42V6.61H157.014V10.42H145.584Z"
              //   fill={`${props.colorPalette.brandIconColor}`}
            />
          </svg>
        </a>

        <div className=" w-1/2 justify-end flex">
          <button
            className={`menu-btn   hover:text-gray-300`}
            // onClick={() => setState(!state)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`flex-col w-full mt-4  
 text-semibold text-md`}
      >
        <div className="w-full px-2 py-2 justify-start flex">
          <span className="mr-2 flex">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.33268 1.66699H11.666V5.83366H13.3327V7.50033H11.666V16.667H14.9993V9.16699H16.666V16.667H18.3327V18.3337H1.66602V16.667H3.33268V6.66699H4.99935V16.667H9.99935V3.33366H8.33268V1.66699ZM6.66602 5.00033V3.33366H8.33268V5.00033H6.66602ZM6.66602 5.00033H4.99935V6.66699H6.66602V5.00033ZM14.9993 9.16699H13.3327V7.50033H14.9993V9.16699ZM8.33268 8.33366H6.66602V10.0003H8.33268V8.33366ZM6.66602 11.667H8.33268V13.3337H6.66602V11.667Z"
                // fill={`${props.colorPalette.codeIconColor}`}
              />
            </svg>
          </span>
          Resturant
        </div>
        <div className="w-full px-2 py-2 justify-start flex">
          <span className="mr-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6357 12.3184H14.9538V12.7275V13.1366H14.5447H13.2266V12.7275V12.3184H13.6357ZM15.0447 13.6366V13.2275H15.4538H15.8629V13.6366V14.0457H15.4538H15.0447V13.6366ZM15.9538 14.5457V14.1366H16.3629H16.772V16.773H3.22656V14.1366H3.63565H4.04474V14.5457V15.4548V15.9548H4.54474H15.4538H15.9538V15.4548V14.5457ZM4.54474 14.0457H4.13565V13.6366V13.2275H4.54474H4.95384V13.6366V14.0457H4.54474ZM5.45384 13.1366H5.04474V12.7275V12.3184H6.36293H6.77202V12.7275V13.1366H5.45384ZM7.27202 12.2275H6.86293V11.8184V11.4094H13.1357V11.8184V12.2275H12.7266H7.27202ZM11.3175 3.63663V4.04572H10.9084H9.0902H8.68111V3.63663V3.22754H11.3175V3.63663ZM11.4084 4.54572V4.13663H11.8175H12.2266V4.54572V4.95481H11.8175H11.4084V4.54572ZM12.3175 5.45481V5.04572H12.7266H13.1357V7.68208H12.7266H12.3175V7.27299V5.45481ZM11.8175 7.77299H12.2266V8.18208V8.59118H11.8175H11.4084V8.18208V7.77299H11.8175ZM10.9084 8.68208H11.3175V9.09118V9.50027H8.68111V9.09118V8.68208H9.0902H10.9084ZM8.5902 8.18208V8.59118H8.18111H7.77202V8.18208V7.77299H8.18111H8.5902V8.18208ZM7.68111 7.27299V7.68208H7.27202H6.86293V5.04572H7.27202H7.68111V5.45481V7.27299ZM8.18111 4.95481H7.77202V4.54572V4.13663H8.18111H8.5902V4.54572V4.95481H8.18111Z"
                // fill={`${props.colorPalette.codeIconColor}`}
                // stroke={`${props.colorPalette.codeIconColor}`}
              />
            </svg>
          </span>
          Faq
        </div>
        <div className="w-full px-2 py-2 justify-start flex">
          <span className="mr-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66602 4.16699H8.33268V5.83366H6.66602V4.16699ZM4.99935 5.83366H6.66602V7.50033H4.99935V5.83366ZM3.33268 7.50033H4.99935V9.16699H3.33268V7.50033ZM1.66602 9.16699H3.33268V10.8337H1.66602V9.16699ZM3.33268 10.8337H4.99935V12.5003H3.33268V10.8337ZM4.99935 12.5003H6.66602V14.167H4.99935V12.5003ZM6.66602 14.167H8.33268V15.8337H6.66602V14.167ZM13.3327 4.16699H11.666V5.83366H13.3327V4.16699ZM14.9993 5.83366H13.3327V7.50033H14.9993V5.83366ZM16.666 7.50033H14.9993V9.16699H16.666V7.50033ZM18.3327 9.16699H16.666V10.8337H18.3327V9.16699ZM16.666 10.8337H14.9993V12.5003H16.666V10.8337ZM14.9993 12.5003H13.3327V14.167H14.9993V12.5003ZM13.3327 14.167H11.666V15.8337H13.3327V14.167Z"
                // fill={`${props.colorPalette.codeIconColor}`}
              />
            </svg>
          </span>
          Speciality
        </div>
        <div className="w-full px-2 py-2 justify-start flex">
          <span className="mr-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3333 3.33301H8.33333V4.99967H6.66667V6.66634H3.33333V8.33301H1.66667V9.99967H0V14.9997H1.66667V16.6663H18.3333V14.9997H20V9.99967H18.3333V8.33301H16.6667V6.66634H15V4.99967H13.3333V3.33301ZM15 9.99967H18.3333V14.9997H1.66667V9.99967H3.33333V8.33301H6.66667V9.99967H8.33333V8.33301H6.66667V6.66634H8.33333V4.99967H13.3333V6.66634H15V9.99967ZM15 9.99967V11.6663H13.3333V9.99967H15Z"
                // fill={`${props.colorPalette.codeIconColor}`}
              />
            </svg>
          </span>
          Feedback
        </div>
        <div className="w-full px-2 py-2 justify-start flex">
          <span className="mr-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6357 12.3184H14.9538V12.7275V13.1366H14.5447H13.2266V12.7275V12.3184H13.6357ZM15.0447 13.6366V13.2275H15.4538H15.8629V13.6366V14.0457H15.4538H15.0447V13.6366ZM15.9538 14.5457V14.1366H16.3629H16.772V16.773H3.22656V14.1366H3.63565H4.04474V14.5457V15.4548V15.9548H4.54474H15.4538H15.9538V15.4548V14.5457ZM4.54474 14.0457H4.13565V13.6366V13.2275H4.54474H4.95384V13.6366V14.0457H4.54474ZM5.45384 13.1366H5.04474V12.7275V12.3184H6.36293H6.77202V12.7275V13.1366H5.45384ZM7.27202 12.2275H6.86293V11.8184V11.4094H13.1357V11.8184V12.2275H12.7266H7.27202ZM11.3175 3.63663V4.04572H10.9084H9.0902H8.68111V3.63663V3.22754H11.3175V3.63663ZM11.4084 4.54572V4.13663H11.8175H12.2266V4.54572V4.95481H11.8175H11.4084V4.54572ZM12.3175 5.45481V5.04572H12.7266H13.1357V7.68208H12.7266H12.3175V7.27299V5.45481ZM11.8175 7.77299H12.2266V8.18208V8.59118H11.8175H11.4084V8.18208V7.77299H11.8175ZM10.9084 8.68208H11.3175V9.09118V9.50027H8.68111V9.09118V8.68208H9.0902H10.9084ZM8.5902 8.18208V8.59118H8.18111H7.77202V8.18208V7.77299H8.18111H8.5902V8.18208ZM7.68111 7.27299V7.68208H7.27202H6.86293V5.04572H7.27202H7.68111V5.45481V7.27299ZM8.18111 4.95481H7.77202V4.54572V4.13663H8.18111H8.5902V4.54572V4.95481H8.18111Z"
                // fill={`${props.colorPalette.codeIconColor}`}
                // stroke={`${props.colorPalette.codeIconColor}`}
              />
            </svg>
          </span>
          Login
        </div>
      </div>
    </div>
  )
  return (
    <>
      <div>
        <div className={` z-nav w-full `}>
          <div
            className={`
                      h-screen w-full px-3 z-nav py-5 z-50 absolute `}
          >
            {/* ${
                state ? 'block' : 'hidden'
                            }  */}
            {<Menu />}
          </div>

          <header
            className={`w-full justify-center items-center  z-50  flex lg:h-16 h-32`}
          >
            <div className=" h-full lg:flex lg:w-10/12 w-full">
              <div>
                <Brand />
              </div>
              <div
                className={` h-1/3 border-2  rounded-md lg:h-1/2 md:my-4  lg:w-7/12 px-2 w-11/12 mx-auto items-center justify-center flex  `}
              >
                <input
                  type="text"
                  placeholder="Search fast food,Indain,Chinese ..."
                  className={`px-4 py-1 w-full lg:h-full  bg-transparent rounded-sm focus:outline-none  `}
                />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 2H14V4H6V2ZM4 6V4H6V6H4ZM4 14H2V6H4V14ZM6 16H4V14H6V16ZM14 16V18H6V16H14ZM16 14H14V16H16V18H18V20H20V22H22V20H20V18H18V16H16V14ZM16 6H18V14H16V6ZM16 6V4H14V6H16Z" />
                </svg>
              </div>
              <div className=" h-1/2 lg:h-full w-4/12 hidden  items-center justify-center lg:flex">
                <nav
                  className={`lg:flex  items-center text-xs
 justify-center`}
                >
                  <Link to="/academics">
                    {' '}
                    <div className="mr-4 hover:scale-110 cursor-pointer transition-all items-center justify-center ml-2">
                      <div className="items-center justify-center flex">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.33268 1.66699H11.666V5.83366H13.3327V7.50033H11.666V16.667H14.9993V9.16699H16.666V16.667H18.3327V18.3337H1.66602V16.667H3.33268V6.66699H4.99935V16.667H9.99935V3.33366H8.33268V1.66699ZM6.66602 5.00033V3.33366H8.33268V5.00033H6.66602ZM6.66602 5.00033H4.99935V6.66699H6.66602V5.00033ZM14.9993 9.16699H13.3327V7.50033H14.9993V9.16699ZM8.33268 8.33366H6.66602V10.0003H8.33268V8.33366ZM6.66602 11.667H8.33268V13.3337H6.66602V11.667Z"
                            // fill={`${props.colorPalette.academicsIconColor}`}
                          />
                        </svg>
                      </div>
                      <div className="mt-1 text-center text-cloudburst">
                        Resturant
                      </div>
                    </div>
                  </Link>
                  <Link to="/code">
                    {' '}
                    <div className="mr-4 hover:scale-110 cursor-pointer transition-all items-center justify-center ml-2">
                      <div className="items-center justify-center flex">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.66602 4.16699H8.33268V5.83366H6.66602V4.16699ZM4.99935 5.83366H6.66602V7.50033H4.99935V5.83366ZM3.33268 7.50033H4.99935V9.16699H3.33268V7.50033ZM1.66602 9.16699H3.33268V10.8337H1.66602V9.16699ZM3.33268 10.8337H4.99935V12.5003H3.33268V10.8337ZM4.99935 12.5003H6.66602V14.167H4.99935V12.5003ZM6.66602 14.167H8.33268V15.8337H6.66602V14.167ZM13.3327 4.16699H11.666V5.83366H13.3327V4.16699ZM14.9993 5.83366H13.3327V7.50033H14.9993V5.83366ZM16.666 7.50033H14.9993V9.16699H16.666V7.50033ZM18.3327 9.16699H16.666V10.8337H18.3327V9.16699ZM16.666 10.8337H14.9993V12.5003H16.666V10.8337ZM14.9993 12.5003H13.3327V14.167H14.9993V12.5003ZM13.3327 14.167H11.666V15.8337H13.3327V14.167Z"
                            // fill={`${props.colorPalette.codeIconColor}`}
                          />
                        </svg>
                      </div>
                      <div className="mt-1 text-center text-cloudburst">
                        Faq
                      </div>
                    </div>
                  </Link>
                  <Link to="/projects">
                    {' '}
                    <div className="mr-4 hover:scale-110 cursor-pointer transition-all items-center justify-center ml-2">
                      <div className="items-center justify-center flex">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.66602 1.66699H18.3327V15.0003H14.166V16.667H12.4993V15.0003H7.49935V16.667H5.83268V15.0003H1.66602V1.66699ZM5.83268 16.667V18.3337H4.16602V16.667H5.83268ZM14.166 16.667V18.3337H15.8327V16.667H14.166ZM16.666 3.33366H3.33268V13.3337H16.666V3.33366ZM9.99935 6.66699H11.666V8.33366H9.99935V6.66699ZM8.33268 10.0003V8.33366H9.99935V10.0003H8.33268ZM8.33268 10.0003V11.667H6.66602V10.0003H8.33268ZM13.3327 10.0003H11.666V8.33366H13.3327V10.0003ZM13.3327 10.0003H14.9993V11.667H13.3327V10.0003ZM6.66602 5.00033H4.99935V6.66699H6.66602V5.00033Z"
                            // fill={`${props.colorPalette.projectIconColor}`}
                          />
                        </svg>
                      </div>
                      <div className="mt-1 text-center text-cloudburst">
                        Speciality
                      </div>
                    </div>
                  </Link>
                  <Link to="/happenings">
                    {' '}
                    <div className="mr-4 hover:scale-110 cursor-pointer transition-all items-center justify-center ml-2">
                      <div className="items-center justify-center flex">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3333 3.33301H8.33333V4.99967H6.66667V6.66634H3.33333V8.33301H1.66667V9.99967H0V14.9997H1.66667V16.6663H18.3333V14.9997H20V9.99967H18.3333V8.33301H16.6667V6.66634H15V4.99967H13.3333V3.33301ZM15 9.99967H18.3333V14.9997H1.66667V9.99967H3.33333V8.33301H6.66667V9.99967H8.33333V8.33301H6.66667V6.66634H8.33333V4.99967H13.3333V6.66634H15V9.99967ZM15 9.99967V11.6663H13.3333V9.99967H15Z"
                            // fill={`${props.colorPalette.happeningIconColor}`}
                          />
                        </svg>
                      </div>
                      <div className="mt-1 text-center text-cloudburst">
                        Feedback
                      </div>
                    </div>
                  </Link>

                  <Link to="/dashboard">
                    {' '}
                    <div className=" hover:scale-110 cursor-pointer transition-all items-center justify-center ml-2 ">
                      <div className="items-center justify-center flex">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 17.2C7.5 17.2 5.29 15.92 4 14C4.03 12 8 10.9 10 10.9C12 10.9 15.97 12 16 14C14.71 15.92 12.5 17.2 10 17.2ZM10 3C10.7956 3 11.5587 3.31607 12.1213 3.87868C12.6839 4.44129 13 5.20435 13 6C13 6.79565 12.6839 7.55871 12.1213 8.12132C11.5587 8.68393 10.7956 9 10 9C9.20435 9 8.44129 8.68393 7.87868 8.12132C7.31607 7.55871 7 6.79565 7 6C7 5.20435 7.31607 4.44129 7.87868 3.87868C8.44129 3.31607 9.20435 3 10 3ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 4.47 15.5 0 10 0Z"
                            //   fill={`${props.colorPalette.brandIconColor}`}
                          />
                        </svg>
                      </div>

                      <div className="mt-1 text-center text-cloudburst"></div>
                    </div>
                  </Link>
                  <Link to="/login">
                    {' '}
                    <div className=" hover:scale-110 cursor-pointer transition-all items-center justify-center ml-2 ">
                      <div className="items-center justify-center flex">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.6357 12.3184H14.9538V12.7275V13.1366H14.5447H13.2266V12.7275V12.3184H13.6357ZM15.0447 13.6366V13.2275H15.4538H15.8629V13.6366V14.0457H15.4538H15.0447V13.6366ZM15.9538 14.5457V14.1366H16.3629H16.772V16.773H3.22656V14.1366H3.63565H4.04474V14.5457V15.4548V15.9548H4.54474H15.4538H15.9538V15.4548V14.5457ZM4.54474 14.0457H4.13565V13.6366V13.2275H4.54474H4.95384V13.6366V14.0457H4.54474ZM5.45384 13.1366H5.04474V12.7275V12.3184H6.36293H6.77202V12.7275V13.1366H5.45384ZM7.27202 12.2275H6.86293V11.8184V11.4094H13.1357V11.8184V12.2275H12.7266H7.27202ZM11.3175 3.63663V4.04572H10.9084H9.0902H8.68111V3.63663V3.22754H11.3175V3.63663ZM11.4084 4.54572V4.13663H11.8175H12.2266V4.54572V4.95481H11.8175H11.4084V4.54572ZM12.3175 5.45481V5.04572H12.7266H13.1357V7.68208H12.7266H12.3175V7.27299V5.45481ZM11.8175 7.77299H12.2266V8.18208V8.59118H11.8175H11.4084V8.18208V7.77299H11.8175ZM10.9084 8.68208H11.3175V9.09118V9.50027H8.68111V9.09118V8.68208H9.0902H10.9084ZM8.5902 8.18208V8.59118H8.18111H7.77202V8.18208V7.77299H8.18111H8.5902V8.18208ZM7.68111 7.27299V7.68208H7.27202H6.86293V5.04572H7.27202H7.68111V5.45481V7.27299ZM8.18111 4.95481H7.77202V4.54572V4.13663H8.18111H8.5902V4.54572V4.95481H8.18111Z"
                            //   fill={`${props.colorPalette.accountIconColor}`}
                            //   stroke={`${props.colorPalette.accountIconColor}`}
                          />
                        </svg>
                      </div>

                      <div className="mt-1 text-center text-cloudburst">
                        Login
                      </div>
                    </div>
                  </Link>
                </nav>
              </div>
            </div>
          </header>
          <div
            className={`w-full h-8  md:items-center flex px-2  md:justify-center`}
          >
            <style>
              {`
                    .animated{
                        text-decoration: none;
                        display: inline-block;
                        height: 100%;
                    }
                    .animated:hover{
                       
                    }
          .animated::after {
            content: '';
            display: block;
            transform: scaleX(0);
            transition: transform 0.3s ease;
            transform-origin: center; 
          }
          .animated:hover::after {
            transform: scaleX(1);
            
          }
        `}
            </style>

            <div className="flex h-full overflow-x-auto scroll-bar md:justify-center text-sm items-center w-full lg:w-full">
              <Link to="/resturant">
                <div
                  className={`mr-2 text-center transition-all  hover:scale-110 md:py-1  animated text-md font-medium text-md cursor-pointer px-1 md:px-4 justify-center items-center flex`}
                >
                  RESTRURANT
                </div>
              </Link>
              <Link to="/book-table">
                <div
                  className={`mr-2 text-center transition-all hover:} hover:scale-110 md:py-1  text-nowrap animated text-md font-medium text-md cursor-pointer px-1 md:px-4 justify-center items-center flex`}
                >
                  BOOK TABLE
                </div>
              </Link>
              <Link to="/services">
                <div
                  className={`mr-2 text-center transition-all hover:} hover:scale-110 md:py-1 animated text-nowrap text-md font-medium text-md cursor-pointer px-1 md:px-4 justify-center items-center flex`}
                >
                  SERVICES
                </div>
              </Link>
              <Link to="/faq">
                <div
                  className={`mr-2 text-center transition-all hover:} hover:scale-110 md:py-1  animated text-nowrap text-md font-medium text-md cursor-pointer px-1 md:px-4 justify-center items-center flex`}
                >
                  FAQ
                </div>
              </Link>
              <Link to="/speciality">
                <div
                  className={`mr-2 text-center transition-all hover:} hover:scale-110 md:py-1 text-nowrap  animated text-md font-medium text-md cursor-pointer px-1 md:px-4 justify-center items-center flex`}
                >
                  OUR SPECIALITY
                </div>
              </Link>
              <Link to="/feedback">
                <div
                  className={`mr-2 text-center transition-all hover:} hover:scale-110 md:py-1 text-nowrap  animated text-md font-medium text-md cursor-pointer px-1 md:px-4 justify-center items-center flex`}
                >
                  HAPPY CUSTOMBER
                </div>
              </Link>
              <Link to="/contact-us">
                <div
                  className={`mr-2 text-center transition-all hover:} hover:scale-110 md:py-1 text-nowrap  animated text-md font-medium text-md cursor-pointer px-1 md:px-4 justify-center items-center flex`}
                >
                  CONTACT US
                </div>
              </Link>
              {/* <Link to={user.login ? '/dashboard' : '/}>
                <div
                  onClick={toastmsg}
                  className={`mr-2 text-center transition-all hover:} text-nowrap hover:scale-110 md:py-1  animated text-md font-medium text-md cursor-pointer px-1 md:px-4 justify-center items-center flex`}
                >
                  DASHBOARD
                </div>
              </Link> */}
            </div>
          </div>
        </div>
        {/* <Outlet /> */}
      </div>
    </>
  )
}
