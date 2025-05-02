import React from 'react';
import { FaCheck } from "react-icons/fa";
function AISection() {
    return (
        <div className="relative container mx-auto px-4 py-12">
            {/* Decorative Images */}
            <img src="/images/formats/image1.png" alt="Top Right" className="absolute right-2 top-10 w-80" />
            <img src="/images/formats/image2.png" alt="Bottom Left" className="absolute left-0 bottom-0 w-28" />

            <section className='flex flex-col items-center'>
                {/* Tagline */}
                <div className="flex justify-start mb-4">
                    <span className="text-md md:text-lg font-light px-6 py-1 rounded-full text-sky-400 bg-sky-100">
                        AI Tools
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light bg-gradient-to-tr from-[#63A7D4] via-[#F295BE] to-[#63A7D4] bg-clip-text text-transparent leading-tight mb-4">
                    Advanced AI Tools for <span className="font-semibold">Debate Excellence</span>
                </h2>

                {/* Subheading */}
                <p className="text-gray-600 max-w-2xl mb-12 text-md lg:text-lg ">
                    Leverage cutting-edge AI technology to perfect your debating skills and achieve mastery
                </p>

            </section>

            <div className="flex relative flex-col lg:flex-row items-center lg:items-start gap-10">
                {/* Left Content */}
                <div className="lg:w-1/2 w-full">
                    {/* Feature Cards */}
                    <div className="space-y-6">
                        {/* Card 1 */}

                        <div className=" rounded-xl shadow-md p-4 bg-white">
                            <div className='flex gap-4 items-center '>
                                <img src="./images/tools/image1.png" alt="image1" className='w-32' />
                                <div>
                                    <span className="font-semibold  sm:text-lg md:text-xl lg:text-2xl mb-2">
                                        AI-Powered Analysis
                                    </span>
                                    <span className='flex gap-4'>
                                        <span className='px-4 py-1 bg-sky-100 text-sky-400 rounded-full'>
                                            Real-time
                                        </span>
                                        <span className='px-4 py-1 bg-sky-100 text-sky-400 rounded-full'>
                                            Advance-AI
                                        </span>
                                    </span>
                                </div>

                            </div>

                            <p className="font-light text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-4">
                                Get comprehensive feedback on your arguments, style, and delivery through our state-of-the-art AI system.
                            </p>
                            <div className="grid grid-cols-2 gap-2 font-light text-xs sm:text-sm md:text-base text-gray-700">
                                <span className='flex gap-4 bg-sky-50 py-2 px-4 rounded-2xl'><span><FaCheck size={35} color='black' className=' bg-sky-200 p-2 rounded-lg' /></span>Argument Strength</span>
                                <span className='flex gap-4 bg-sky-50 py-2 px-4 rounded-2xl'><span  ><FaCheck size={35} color='black' className=' bg-sky-200 p-2 rounded-lg' /></span> Logical Flow</span>
                                <span className='flex gap-4 bg-sky-50 py-2 px-4 rounded-2xl'><span><FaCheck size={35} color='black' className=' bg-sky-200 p-2 rounded-lg' /></span> Voice Analysis</span>
                                <span className='flex gap-4 bg-sky-50 py-2 px-4 rounded-2xl'><span><FaCheck size={35} color='black' className=' bg-sky-200 p-2 rounded-lg' /></span> Body Language</span>
                            </div>
                        </div>
                        <div className='flex max-lg:flex-col gap-4'>


                            {/* Card 2 */}
                            <div className="bg-white rounded-xl shadow-md p-5 w-full lg:w-1/2">
                                <img src="./images/tools/image2.png" alt="image2" className='w-24' />
                                <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl my-4">
                                    Real-time Practice
                                </h3>
                                <h1>
                                24/7 access to AI opponents with varying skill levels for
                                continuous improvement.
                                </h1>
                                <ul className="font-light text-xs sm:text-sm md:text-base lg:text-lg my-4 text-gray-600 list-disc ml-4">
                                    <li className='flex gap-2 items-center'><FaCheck size={16}/>Multiple Levels</li>
                                    <li className='flex gap-2 items-center'><FaCheck size={16}/>Topic Generator</li>
                                    <li className='flex gap-2 items-center'><FaCheck size={16}/>Instant Feedback</li>
                                </ul>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white rounded-xl shadow-md p-5 w-full lg:w-1/2">
                                <img src="./images/tools/image3.png" alt="image3" className='w-24' />
                                <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl my-4">
                                    Features
                                </h3>
                                <h1>
                                Connect with peers, join tournaments, and grow
                                together.
                                </h1>
                                <ul className="font-light text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 my-4 list-disc ml-4">
                                    <li className='flex gap-2 items-center'><FaCheck size={16}/>Live Tournaments</li>
                                    <li className='flex gap-2 items-center'><FaCheck size={16}/>Peer Review</li>
                                    <li className='flex gap-2 items-center'><FaCheck size={16}/>Global Rankings</li>
                                </ul>
                            </div>
                        </div>



                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 w-full flex justify-center max-lg:hidden">
                    <img
                        src="/images/tools/rightimage.png"
                        alt="AI Dashboard"
                        className=""
                    />
                </div>
            </div>
        </div>
    );
}

export default AISection;
