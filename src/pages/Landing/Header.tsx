"use client";
import React, { useState } from "react";
import { GoPlay } from "react-icons/go";
import { IoArrowForward } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Modal from "react-modal";
import Banner from "./Banner";

function Header() {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div className="flex w-full bg-[#202544] py-12">
            <div className="flex max-lg:flex-col container w-full h-auto mx-auto pt-24 lg:pt-32 px-4">
                {/* Decorative Ellipses */}
                <div className="absolute right-12 top-10 flex flex-col gap-4">
                    <img src="/images/tools/ellipse.png" alt="Image 1" className="w-40" />
                </div>
                <div className="absolute right-60 top-40 flex flex-col gap-4">
                    <img src="/images/tools/ellipse.png" alt="Image 2" className="w-28" />
                </div>
                <div className="absolute right-20 bottom-48 flex flex-col gap-4">
                    <img src="/images/tools/ellipse.png" alt="Image 3" className="w-28" />
                </div>

                {/* Left Content */}
                <div className="flex flex-col w-full lg:w-3/5">
                    <section>
                        <span className="px-4 py-2 bg-[#2c3363] text-xs sm:text-md lg:text-lg rounded-full text-white">
                            AI-Powered Debate Platform
                        </span>
                        <section className="my-4">
                            <span className="text-4xl lg:text-6xl xl:text-7xl font-light leading-snug bg-gradient-to-r from-[#63A7D4] to-[#F295BE] bg-clip-text text-transparent">
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
                    </section>

                    {/* Buttons */}
                    <section className="flex gap-5 mt-8">
                        <button
                            onClick={() => router.push("/SignUp")}
                            className="flex justify-center items-center gap-4 rounded-full px-8 py-3 bg-gradient-to-r from-[#63A7D4] to-[#F295BE] shadow-md shadow-sky-800  text-md md:text-lg text-white "
                        >
                            <span>Get Started</span> <IoArrowForward />
                        </button>
                        <button
                            onClick={onOpenModal}
                            className="flex items-center gap-2 px-5 py-3 bg-transparent border border-gray-500 rounded-full shadow-md shadow-sky-800 text-md md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#63A7D4] to-[#F295BE]"
                        >
                            <GoPlay color="#63A7D4" size={25}/> <span>Watch Demo</span>
                        </button>

                    </section>

                    {/* Stats */}
                    <section className="flex w-full xl:w-3/4 mt-10 text-white text-center">
                        <div className="w-1/3">
                            <div className="text-2xl font-semibold">50K+</div>
                            <div className="text-sm">Active Users</div>
                        </div>
                        <div className="w-1/3 border-l border-gray-500">
                            <div className="text-2xl font-semibold">95%</div>
                            <div className="text-sm">Success Rate</div>
                        </div>
                        <div className="w-1/3 border-l border-gray-500">
                            <div className="text-2xl font-semibold">24/7</div>
                            <div className="text-sm">AI Support</div>
                        </div>
                    </section>
                </div>

                {/* Right Image */}
                <div className="flex w-full h-full items-end max-lg:hidden lg:w-2/5">
                    <Banner />
                </div>
            </div>

            <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        contentLabel="Demo Video"
        className="w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] p-0 rounded-lg bg-white shadow-lg mx-auto my-20 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
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

