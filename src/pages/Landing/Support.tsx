import React from 'react'
import { FaLightbulb } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RiSpeakAiFill } from "react-icons/ri";

function Support() {

    return (
        <section className=" bg-gray-50">

            <div className="container relative mx-auto py-12 px-4 md:px-12">

                <div className="absolute  left-10 bottom-10 ">
                    <img src="/images/tools/dots.png" alt="Image 1" className="w-20" />
                </div>
                {/* AI Support Section */}
                <div className="text-center mb-12">
                    <span className="text-xs md:text-sm text-[#4DA0D7] bg-sky-100 px-4 py-2 rounded-full font-normal mb-2 inline-block">
                        Smart AI Support
                    </span>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#F295BE] to-[#63A7D4] py-4 ">
                    <span className='font-extralight'>Debate Better with </span> <span className='font-extralight'>Real-Time</span>{" "}
                        <span className="font-semibold">AI Assistance</span>
                    </h2>

                    <p className="text-gray-600  mb-12 text-md lg:text-lg justify-center  max-w-2xl mx-auto">
                        Get instant feedback, logical structure, and fact-checking with our intelligent AI debate coach.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                    {/* Left: AI Feedback Simulation */}
                    <div className="bg-white border relative border-gray-100 shadow-xl rounded-2xl p-6 space-y-4">
                        <div className="text-neutral-600 text-sm border  border-blue-100 rounded-lg p-4 bg-blue-50">
                            <p className="font-light text-lg">
                                &quot;The economic impact of renewable energy subsidies is negligible when compared to...&quot;
                            </p>
                            <p className="text-md  text-[#4DA0D7] mt-2">
                                ⓘ This claim requires verification. Consider citing specific studies.
                            </p>
                        </div>

                        <div className="bg-[#4DA0D733] text-sm text-gray-800 p-4 rounded-lg flex items-start gap-3">
                            <span className="p-2 bg-sky-200 rounded-full text-sky-400  text-xl"><FaLightbulb />
                            </span>
                            <div>
                                <p className="font-medium text-lg">AI Coach Suggestion</p>
                                <p className='text-lg font-light'>
                                    Try strengthening your argument with the 2023 International Energy Agency report that shows a 12%
                                    ROI on renewable subsidies.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#4DA0D733] text-sm text-gray-800 p-4 rounded-lg flex items-start gap-3">
                            <span className="p-2 bg-sky-200 rounded-full text-sky-400  "><FaCheck size={20} /> </span>
                            <div>
                                <p className="font-medium text-lg">Fact Check: Verified</p>
                                <p className='text-lg font-light'>
                                    Your point about carbon reduction targets is accurate according to the latest IPCC report (2024).
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Feature List */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-gray-800">Real-time AI Support</h3>

                        {/* AI Coach */}
                        <div className=" text-sm text-neutral-800 p-4 rounded-lg flex items-start gap-3">
                            <span className="p-2 bg-sky-100 rounded-full text-sky-400 text-xl"><FaBrain  size={20}/></span>
                            <div>
                                <p className="font-medium text-lg lg:text-xl">AI Coach</p>
                                <p className="text-lg font-light text-neutral-600">
                                    Receives personalized suggestions to strengthen arguments, improve delivery, and address logical
                                    fallacies in real-time.
                                </p>
                            </div>
                        </div>

                        {/* Fact Checker */}
                        <div className=" text-sm text-neutral-800 p-4 rounded-lg flex items-start gap-3">
                            <span className="p-2 bg-sky-100 rounded-full text-sky-400 text-xl"><FaSearch size={20}/></span>
                            <div>
                                <p className="font-medium text-lg lg:text-xl">Fact Checker</p>
                                <p className="text-lg text-neutral-600 font-light">
                                    Instantly verifies claims against reliable sources, providing confidence in your arguments and
                                    helping identify misinformation.
                                </p>
                            </div>
                        </div>

                        {/* AI Opponent */}
                        <div className=" text-sm text-neutral-800 p-4 rounded-lg flex items-start gap-3">
                            <span className="p-2 bg-sky-100 rounded-full text-sky-400 text-xl"><RiSpeakAiFill size={20}/></span>
                            <div>
                                <p className="font-medium text-lg lg:text-xl">AI Opponent</p>
                                <p className="text-lg text-neutral-600 font-light">
                                    Practice against an AI that adapts to your skill level, offering challenging counterarguments tailored
                                    to your debate style.
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="mt-6 text-lg font-light bg-gradient-to-l from-[#F295BE] to-[#63A7D4] text-white px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition">
                            Try AI Features Now
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}


export default Support