'use client'
import React, { useEffect, useRef, useState } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import { Link } from 'next/link'
// import Food from './Sections/Food'
// import Rooms from './Sections/Rooms'
// import Places from './Sections/Places'
// import ItemView from './Common/ItemView'
// import ChorrBazar from './Sections/ChorrBazar'
// import QuickRentals from './Sections/QuickRentals'
// import TiffinandMaid from './Sections/TiffinandMaid'
// import RapidDropper from './Sections/RapidDropper'
export default function StudentsPlus(props) {
  const [isFixed, setIsFixed] = useState(false)
  // const[itemId,setItemId] = useState("");
  const navRef = useRef(null)

  useEffect(() => {
    const divElement = navRef.current
    const rect = divElement.getBoundingClientRect()
    console.log(rect.top)
    const handleScroll = () => {
      const offset = window.scrollY

      setIsFixed(offset > rect.top)
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div class="">
      <Navigation colorPalette={props.colorPalette} fixed={''} />
      <HeroSection />
      <div
        ref={navRef}
        className={` bg-white z-nav w-full md:px-40 lg:h-16 px-4 flex scroll-bar  whitespace-nowrap overflow-x-scroll  ${
          isFixed ? 'fixed top-0 py-2 ' : 'my-6'
        }`}
      >
        <Link to="/">
          {' '}
          <button className="px-6 py-2.5 border rounded-lg flex-shrink-0 duration-150 bg-gray-200 mr-3">
            Food for You
          </button>
        </Link>
        <Link to="/">
          {' '}
          <button className="px-6 py-2.5 border rounded-lg flex-shrink-0 duration-150 bg-gray-200 mr-3">
            Top Tables
          </button>
        </Link>
        <Link to="/">
          {' '}
          <button className="px-6 py-2.5 border rounded-lg flex-shrink-0 duration-150 bg-gray-200 mr-3">
            Chinese
          </button>
        </Link>
        <Link to="/">
          {' '}
          <button className="px-6 py-2.5 border rounded-lg flex-shrink-0 duration-150 bg-gray-200 mr-3">
            Snack Bucket Special
          </button>
        </Link>
        <Link to="/">
          {' '}
          <button className="px-6 py-2.5 border rounded-lg flex-shrink-0 duration-150 bg-gray-200 mr-3">
            Top Fast Food
          </button>
        </Link>
        <Link to="/">
          {' '}
          <button className="px-6 py-2.5 border rounded-lg flex-shrink-0 duration-150 bg-gray-200 mr-3">
            Sweets
          </button>
        </Link>
        <Link to="/">
          {' '}
          <button className="px-6 py-2.5 border rounded-lg flex-shrink-0 duration-150 bg-gray-200 mr-3">
            Jamun Shots
          </button>
        </Link>
        <Link to="/">
          {' '}
          <button className="px-6 py-2.5 border rounded-lg flex-shrink-0 duration-150 bg-gray-200 mr-3">
            Beverages
          </button>
        </Link>
      </div>
      {/* <Routes>
        <Route path="/" element={<Food fixedNav={isFixed} />} />

        <Route path="/food/:itemId" element={<ItemView fixedNav={isFixed} />} />
      </Routes> */}
      <Footer colorPalette={props.colorPalette} />
    </div>
  )
}
