import React from 'react'
import { IoArrowForward } from "react-icons/io5";

function getReady() {
  return (
    <section className=" container mx-auto bg-white py-12 px-4">
      {/* Title */}
      <div className="text-center mb-8">
        <span className="text-xs md:text-sm text-[#4DA0D7] bg-sky-100 px-4 py-2 rounded-full font-normal mb-2">Quick Onboarding</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-l from-[#F295BE] to-[#63A7D4] py-4">
          <span className='font-extralight'>Start Debating in </span> <span className=" font-semibold">Just 3 Steps</span>
        </h2>
        <p className=" text-gray-600  mb-12 text-md lg:text-lg justify-center ">
          From signup to AI analysis—experience debating like never before, simplified into three easy steps.
        </p>
      </div>

      {/* Steps Cards */}
      <div className="flex w-full max-lg:flex-col gap-6  mx-auto">
        {/* Step 1 */}
        <div className="lg:w-1/3 relative group rounded-xl bg-[#FAFDFD] border border-gray-100 shadow-sm h-80 overflow-hidden p-6">

          {/* Default View */}
          <div className="absolute inset-0 flex flex-col p-6 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
            {/* Number */}
            <div className="flex items-center justify-center text-white font-bold bg-orange-400 w-12 h-12 rounded-full text-xl lg:text-3xl p-8 mb-4">
              01
            </div>

            {/* Title */}
            <h3 className="text-xl lg:text-3xl font-semibold text-[#394A64] mt-12 ">
              Sign Up & Choose Style
            </h3>

            {/* Background Images */}
            <img
              src="/images/logo/d.png"
              alt="Background Art"
              className="absolute -top-4 -right-4 w-32 opacity-10 pointer-events-none"
              style={{ transform: 'rotate(-30deg)' }}
            />

            <img
              src="/images/logo/d.png"
              alt="Background Art"
              className="absolute bottom-4 left-4 w-24 opacity-10 pointer-events-none"
              style={{ transform: 'rotate(40deg)' }}
            />

          </div>

          {/* Hover View */}
          <div className="absolute inset-0 flex flex-col  justify-around  bg-gradient-to-tr from-[#63A7D4] to-[#F295BE]  text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-6">
            <h1 className="text-xl lg:text-3xl font-bold mb-2">Create Your Account</h1>
            <p className="text-lg lg:text-2xl mb-4">
              Select your preferred debate format - Oxford-style, Parliamentary, or casual debates.
            </p>
            <div className='flex justify-end'>
              <span className=""><IoArrowForward size={25} /></span>
            </div>

          </div>

        </div>
        {/* Step 2 */}
        <div className="lg:w-1/3 relative group rounded-xl bg-[#FAFDFD] border border-gray-100 shadow-sm h-80 overflow-hidden p-6">

          {/* Default View */}
          <div className="absolute inset-0 flex flex-col p-6 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
            {/* Number */}
            <div className="flex items-center justify-center text-white font-bold bg-teal-500 w-12 h-12 rounded-full text-xl lg:text-3xl p-8  mb-4">
              02
            </div>

            {/* Title */}
            <h3 className="text-xl lg:text-3xl font-semibold text-[#394A64] mt-12 ">
              Find Opponents
            </h3>

            {/* Background Images */}
            <img
              src="/images/logo/d.png"
              alt="Background Art"
              className="absolute -top-4 right-8 w-32 opacity-10 pointer-events-none"
              style={{ transform: 'rotate(-30deg)' }}
            />

            <img
              src="/images/logo/d.png"
              alt="Background Art"
              className="absolute bottom-8 left-4 w-24 opacity-10 pointer-events-none"
              style={{ transform: 'rotate(40deg)' }}
            />
          </div>

          {/* Hover View */}
          <div className="absolute inset-0 flex flex-col justify-around  bg-gradient-to-tr from-[#63A7D4] to-[#F295BE] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-6">
            <h1 className="text-xl lg:text-3xl font-bold mb-2">Invite Friends by Email
              or Username</h1>
            <p className="text-lg lg:text-2xl mb-4">
              debate against our AI, or use matchmaking to find opponents with similar
              interests.
            </p>
            <div className="flex justify-end">
              <IoArrowForward size={25} />
            </div>
          </div>

        </div>

        {/* Step 3 */}
        <div className="lg:w-1/3 relative group rounded-xl bg-[#FAFDFD] border border-gray-100 shadow-sm h-80 overflow-hidden p-6">

          {/* Default View */}
          <div className="absolute inset-0 flex flex-col p-6 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
            {/* Number */}
            <div className="flex items-center justify-center text-white font-bold bg-gradient-to-l from-[#F295BE] to-[#63A7D4] w-12 h-12 rounded-full text-xl lg:text-3xl p-8 mb-4">
              03
            </div>

            {/* Title */}
            <h3 className="text-xl lg:text-3xl font-semibold text-[#394A64] mt-12 ">
              Schedule and Prepare
            </h3>

            {/* Background Images */}
            <img
              src="/images/logo/d.png"
              alt="Background Art"
              className="absolute -top-12 right-12 w-32 opacity-10 pointer-events-none"
              style={{ transform: 'rotate(-40deg)' }}
            />

            <img
              src="/images/logo/d.png"
              alt="Background Art"
              className="absolute -bottom-4 left-4 w-24 opacity-10 pointer-events-none"
              style={{ transform: 'rotate(40deg)' }}
            />
          </div>

          {/* Hover View */}
          <div className="absolute inset-0 flex flex-col justify-around bg-gradient-to-tr from-[#63A7D4] to-[#F295BE] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-6">
            <h1 className="text-xl lg:text-3xl font-bold mb-2">Set a time with our
              calender</h1>
            <p className="text-lg lg:text-2xl mb-4">
              integration, suggest
              alternate times if needed,
              and prepare with AI
              coaching.
            </p>
            <div className="flex justify-end">
              <IoArrowForward size={25} />
            </div>
          </div>

        </div>
      </div>
    </section>


  )
}

export default getReady