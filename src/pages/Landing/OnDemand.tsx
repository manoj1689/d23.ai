import React from 'react';
import { motion } from "framer-motion";
import { FaPlayCircle, FaFolderOpen, FaHighlighter } from 'react-icons/fa';
import { FiVideo } from "react-icons/fi";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { IoTrophyOutline } from "react-icons/io5";
export default function LiveStreamingSection() {
    return (
        <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
     <section className='bg-gray-50 '>
            <div className=" container mx-auto py-12 gap-8 px-4 ">
                {/* Live & On-Demand Debates Section */}
                <div className="text-center mb-16">
                    <span className="text-xs md:text-sm text-[#4DA0D7] bg-sky-100 px-4 py-2 rounded-full font-normal mb-2 inline-block">
                        Instant Access
                    </span>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#F295BE] to-[#63A7D4] py-4 ">
                        <span className="font-extralight">Live</span> <span className="font-extralight">
                            & On-{" "}  </span>
                        <span className="font-semibold">Demand</span>{" "}
                        <span className="font-semibold">Debates</span>
                    </h2>

                    <p className="text-gray-600  mb-12 text-md lg:text-lg justify-center  max-2w-xl mx-auto">
                        Stream your debates live or watch curated content from top debaters.
                    </p>
                </div>


                <div className="grid md:grid-cols-2 gap-6 items-center ">
                <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >

            
    
                    {/* Left: Video Image */}
                    <div className="relative w-full  mx-auto mt-10 rounded-xl overflow-hidden shadow-lg  ">
                        <video
                            src="./videos/demo.mp4"
                            controls
                            className="w-full h-auto"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    </motion.div>
     <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >

   {/* Right: Info */}
   <div className='p-4'>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">YouTube Integration</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                            <span className='p-4 bg-sky-100 rounded-full'>
                                <FiVideo color='#2B6CB0' size={24} />
                                </span>
                                <div className='space-y-4'>
                                    <h4 className=" text-base md:text-lg lg:text-2xl font-normal ">Live Streaming</h4>
                                    <p className="text-md lg:text-[17px] font-light text-gray-600">
                                        Stream your debates live on YouTube with professional overlays and audience interaction.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className='p-4 bg-sky-100 rounded-full'>
                                <MdOutlineLibraryAdd color='#2B6CB0' size={24}  />
                                </span>
                              
                                <div className='space-y-4'>
                                    <h4 className=" text-base md:text-lg lg:text-2xl font-normal ">Archived Content</h4>
                                    <p className="text-md lg:text-[17px] font-light text-gray-600 ">
                                        Access our library of past debates, organized by topic and format for continuous learning.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                            <span className='p-4 bg-sky-100 rounded-full'>
                                <IoTrophyOutline color='#2B6CB0' size={24}  />
                                </span>
                                <div className='space-y-4'>
                                    <h4 className=" text-base md:text-lg lg:text-2xl font-normal ">Highlight Reels</h4>
                                    <p className="text-md lg:text-[17px] font-light text-gray-600">
                                        Watch curated highlights from top debates and learn from the best moments.
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <button className="mt-6 bg-gradient-to-l from-[#F295BE] to-[#63A7D4] text-white px-6 py-2 rounded-md text-sm md:text-base lg:text-lg">
                            Start Streaming
                        </button>
                    </div>
          </motion.div>
                 


                </div>
            </div >
        </section>

      </motion.section>

   

    );
}

