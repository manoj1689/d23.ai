import React from 'react';
import { IoIosRocket } from "react-icons/io";
import { FaCrown } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";


function Index() {
    return (
        <div className='container relative mx-auto py-12 pb-8 px-4'>
            {/* Top Right Decoration */}
            <div className="absolute right-2 top-10 flex flex-col gap-4">
                <img src="/images/formats/image1.png" alt="Image 1" className="w-80" />
            </div>

            {/* Bottom Left Decoration */}
            <div className="absolute left-0 bottom-0 flex flex-col gap-4">
                <img src="/images/formats/image2.png" alt="Image 2" className="w-28" />
            </div>

            {/* Tagline */}
            <div className='flex justify-center items-center mb-4'>
                <span className='text-md md:text-lg font-light px-8 py-1 rounded-full text-sky-400 bg-sky-100'>
                    Pricing Plans
                </span>
            </div>

            {/* Main Heading */}
            <section>
                <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light bg-gradient-to-tr from-[#63A7D4] via-[#F295BE] to-[#63A7D4] text-center bg-clip-text text-transparent leading-tight pb-2'>
                    Invest in <span className='font-semibold'> Your Success </span>
                </div>
            </section>

            <section>
                <div className='my-4 text-sm sm:text-md md:text-lg lg:text-xl text-center md:w-3/4 mx-auto text-neutral-600'>
                    Select your ideal plan and unlock the full potential of AI-powered debate
                    training
                </div>
            </section>
            <section className="mt-10">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
                    {/* Free Plan */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-center">
                        <div className="mb-4">
                            <IoIosRocket size={50} className='p-2 bg-sky-50 text-sky-600 rounded-xl hover:text-sky-400' />
                        </div>
                        <h2 className="text-xl font-semibold">Free</h2>
                        <p className="text-3xl font-bold">$0</p>
                        <span className="text-sm text-gray-500">Forever</span>
                        <ul className="text-sm text-gray-600 my-4 space-y-2 text-left">
                            <li>✔️ Basic AI practice sessions</li>
                            <li>✔️ Community access</li>
                            <li>✔️ Limited debates per month</li>
                            <li>✔️ 24/7 Support</li>
                        </ul>
                        <button className="w-full py-2 mt-4 rounded bg-gradient-to-r from-blue-400 to-pink-400 text-white font-semibold">Get Started</button>
                    </div>

                    {/* Pro Plan */}
                    <div className="relative bg-gradient-to-tr from-[#63A7D4] via-[#F295BE] to-[#63A7D4] shadow-lg rounded-2xl p-6 w-full max-w-sm text-white text-center">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-sky-100 text-sky-700 text-sm px-3 py-1 rounded-full shadow">
                            Most Popular
                        </div>
                        <div className="mb-4">
                            <FaCrown size={50} className='p-2 bg-sky-50 text-sky-600 rounded-xl hover:text-sky-400' />
                        </div>
                        <h2 className="text-xl font-semibold">Pro</h2>
                        <p className="text-3xl font-bold">$19.99</p>
                        <span className="text-sm text-white/80">per month</span>
                        <ul className="text-sm my-4 space-y-2 text-left">
                            <li>✔️ Unlimited AI practice</li>
                            <li>✔️ Advanced analytics</li>
                            <li>✔️ Priority support</li>
                            <li>✔️ Tournament access</li>
                            <li>✔️ Custom training</li>
                        </ul>
                        <button className="w-full py-2 mt-4 rounded bg-white text-sky-700 font-semibold">Get Started</button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm text-center">


                        <div className="mb-4">
                            <FaBuilding size={50} className='p-2 bg-sky-50 text-sky-600 rounded-xl hover:text-sky-400' />
                        </div>
                        <h2 className="text-xl font-semibold">Enterprise</h2>
                        <p className="text-3xl font-bold">Custom</p>
                        <span className="text-sm text-gray-500">Tailored solution</span>
                        <ul className="text-sm text-gray-600 my-4 space-y-2 text-left">
                            <li>✔️ Enterprise solutions</li>
                            <li>✔️ Custom AI training</li>
                            <li>✔️ Dedicated support</li>
                            <li>✔️ API access</li>
                            <li>✔️ White-label options</li>
                        </ul>
                        <button className="w-full py-2 mt-4 rounded bg-gradient-to-r from-blue-400 to-pink-400 text-white font-semibold">Get Started</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Index;