"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { GoPlay } from "react-icons/go";
import { IoArrowForward } from "react-icons/io5";
import { useRouter } from "next/navigation";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Banner from "./Banner";
import "../../modal/custom-styling.css"
function Header() {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div id="Home" className="flex w-full bg-[#202544] pt-12">
            <div className="flex max-lg:flex-col container w-full h-auto mx-auto  px-4">


                {/* Left Content */}
                <div className="flex flex-col w-full lg:w-3/5 py-20 lg:pt-24 pb-16 ">
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-4 py-2 bg-blue-400/10 text-xs sm:text-md lg:text-lg rounded-full font-light text-neutral-200">
                            AI-Powered Debate Platform
                        </span>
                        <section className="my-4">
                            <span className="text-5xl lg:text-6xl xl:text-7xl font-light  bg-gradient-to-r from-[#63A7D4] to-[#F295BE] bg-clip-text text-transparent">
                                <span>Master the Art of </span>
                                <span className="font-bold">Debate with AI</span>
                            </span>
                        </section>
                        <span>
                            <hr className="w-20 h-1 bg-gradient-to-r from-[#63A7D4] to-[#F295BE] border-0 rounded" />
                        </span>
                        <p className="text-white text-md sm:text-lg lg:text-xl font-light mt-4 w-5/6">
                            Experience the future of debate training with our cutting-edge AI platform.
                            Get real-time feedback, practice with intelligent opponents, and join a global community of critical thinkers.
                        </p>
                    </motion.section>

                    {/* Buttons */}
                    <motion.section
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}

                    >
                        <section className="flex flex-col sm:flex-row  gap-5 mt-8">
                            <button
                                onClick={() => router.push("/SignUp")}
                                className="flex justify-center items-center gap-4 cursor-pointer rounded-full px-8 py-3 bg-gradient-to-r from-[#63A7D4] to-[#F295BE] shadow-md shadow-sky-800  text-md md:text-lg text-white "
                            >
                                <span>Get Started</span> <IoArrowForward />
                            </button>
                            <button
                                onClick={onOpenModal}
                                className="flex items-center cursor-pointer gap-2 px-5 py-3 bg-transparent border border-gray-500 rounded-full shadow-md shadow-sky-800 text-md md:text-lg justify-center  text-transparent bg-clip-text bg-gradient-to-r from-[#63A7D4] to-[#F295BE]"
                            >
                                <GoPlay color="#63A7D4" size={25} /> <span>Watch Demo</span>
                            </button>

                        </section>

                    </motion.section>


                    {/* Stats */}
                    <motion.section
                        className="flex w-full xl:w-3/4 mt-10 text-white text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {/* Left: Slide in from left */}
                        <motion.div
                            className="w-1/3 flex max-lg:flex-col justify-center items-center px-2 lg:gap-3"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="text-lg lg:text-2xl font-light">50K+</div>
                            <div className="text-sm font-light">Active Users</div>
                        </motion.div>

                        {/* Center: Fade up */}
                        <motion.div
                            className="w-1/3 flex max-lg:flex-col justify-center items-center px-2 lg:gap-3 border-l-2 border-gray-500"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="text-lg lg:text-2xl font-light">95%</div>
                            <div className="text-sm font-light">Success Rate</div>
                        </motion.div>

                        {/* Right: Slide in from right */}
                        <motion.div
                            className="w-1/3 flex max-lg:flex-col justify-center items-center px-2 lg:gap-3 border-l-2 border-gray-500"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="text-lg lg:text-2xl font-light">24/7</div>
                            <div className="text-sm font-light">AI Support</div>
                        </motion.div>
                    </motion.section>

                </div>

                {/* Right Image */}
                <div className="flex relative w-full h-full items-end max-lg:hidden lg:w-2/5">
                    {/* Decorative Ellipses */}
                    <div className="absolute left-10 top-10 flex flex-col gap-4">
                        <img src="/images/tools/ellipse.png" alt="Image 1" className="w-32" />
                    </div>
                    <div className="absolute left-0 bottom-20 flex flex-col gap-4">
                        <img src="/images/tools/ellipse.png" alt="Image 2" className="w-16" />
                    </div>
                    <div className="absolute right-0 bottom-0 flex flex-col gap-4">
                        <img src="/images/tools/ellipse.png" alt="Image 3" className="w-28" />
                    </div>
                    <Banner />
                </div>
            </div>

            <Modal open={open} onClose={onCloseModal} center
           classNames={{ modal: 'customModal' ,
            closeButton: 'customCloseButton',
           }}

            >
                <video controls className="w-full h-auto rounded-md">
                    <source src="/videos/demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Modal>
        </div>
    );
}

export default Header;

