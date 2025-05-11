import React from 'react'
import { motion } from "framer-motion";
import { IoIosArrowForward } from 'react-icons/io'

function Format() {
    return (
        <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
    >
   <div id="formats" className='flex container mx-auto flex-col items-center text-center py-12 px-4 bg-white'>
            {/* Tag */}
            <span className='text-xs md:text-sm text-[#4DA0D7] bg-sky-100 px-4 py-2 rounded-full font-normal mb-2'>
                Flexible Formats
            </span>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-l from-[#F295BE] to-[#63A7D4] my-4">
                <span className='font-extralight'>Choose How You Want to</span>  <span className=' font-semibold'>Debate</span>
            </h1>

            {/* Subheading */}
            <p className='text-gray-600 max-w-2xl mb-12 text-md lg:text-lg py-2'>
                Join an existing debate, start your own, or challenge yourself with AI—tailored for every debater.
            </p>

            {/* Options Cards */}
            <div className='flex gap-4 max-lg:flex-col '>

                {/* Join Debate */}
                <div className='flex flex-col justify-between rounded-xl shadow-md px-4 py-4 bg-gray-50 hover:shadow-xl transition'>
                    <div className='flex items-center '>
                        <div className='w-1/3'>
                            <img src="./images/formats/joinDebate.png" alt="join debate" className='w-20' />
                        </div>
                        <div className='w-2/3'>
                            <h3 className='text-lg md:text-xl lg:text-2xl text-left text-neutral-800'>Join Debate</h3>
                        </div>
                    </div>
                    <div>
                        <p className='text-sm md:text-[17px] 2xl:text-lg font-light text-left text-gray-600 py-2  '>
                            Formal debate with defined speaking times and argument rounds. Perfect for competitive debates and tournaments.
                        </p>
                    </div>
                    <div>
                        <a href='#' className='flex justify-end items-center gap-2 text-[#2B6CB0] text-md font-normal'>
                            Join Now
                            <span className='flex'><IoIosArrowForward /><IoIosArrowForward /></span>
                        </a>
                    </div>
                </div>

                {/* Start a Debate */}
                <div className='flex flex-col justify-between rounded-xl shadow-md px-4 py-4 bg-gray-50 hover:shadow-xl transition'>
                    <div className='flex items-center '>
                        <div className='w-1/3'>
                            <img src="./images/formats/startDebate.png" alt="start debate" className='w-20' />
                        </div>
                        <div className='w-2/3'>
                            <h3 className='text-lg md:text-xl lg:text-2xl text-left text-neutral-800'>Start a Debate</h3>
                        </div>
                    </div>
                    <div>
                        <p className='text-sm md:text-[17px] 2xl:text-lg font-light text-left text-gray-600 py-2 '>
                            Dynamic open debate format without strict time constraints. Ideal for practice and casual discussions.
                        </p>
                    </div>
                    <div>
                        <a href='#' className='flex justify-end items-center gap-2 text-[#2B6CB0] text-md font-normal'>
                            Start Now
                            <span className='flex'><IoIosArrowForward /><IoIosArrowForward /></span>
                        </a>
                    </div>
                </div>

                {/* Debate with AI */}
                <div className='flex flex-col justify-between rounded-xl shadow-md px-4 py-4 bg-gray-50 hover:shadow-xl transition'>
                    <div className='flex items-center '>
                        <div className='w-1/3'>
                            <img src="./images/formats/debateAi.png" alt="debate with ai" className='w-20' />
                        </div>
                        <div className='w-2/3'>
                            <h3 className='text-lg md:text-xl lg:text-2xl text-left text-neutral-800'>Debate with Ai</h3>
                        </div>
                    </div>
                    <div>
                        <p className='text-sm md:text-[17px] 2xl:text-lg  font-light text-left text-gray-600'>
                            Participate at your own pace with thoughtful responses. Great for global participants across time zones.
                        </p>
                    </div>
                    <div>
                        <a href='#' className='flex justify-end items-center gap-2 text-[#2B6CB0] text-md font-normal'>
                            Start with Ai
                            <span className='flex'><IoIosArrowForward /><IoIosArrowForward /></span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </motion.section>
     

    )
}

export default Format

