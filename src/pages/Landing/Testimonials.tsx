import React from 'react';

function Testimonials() {
    return (
        <section className="bg-[#f9fbff]">
            <div className="container relative mx-auto py-12 px-4 rounded-2xl">

                {/* Top Right Decoration */}
                <div className="absolute right-12 top-10 flex flex-col gap-4">
                    <img src="/images/tools/book.png" alt="Image 1" className="w-40" />
                </div>

                {/* Bottom Left Decoration */}
                <div className="absolute left-10 top-24 flex flex-col gap-4">
                    <img src="/images/tools/search.png" alt="Image 2" className="w-28" />
                </div>

                {/* Section Label */}
                <div className="text-center mb-4">
                    <span className="text-[13px] md:text-[15px] text-[#4DA0D7] bg-blue-100 px-4 py-1 rounded-full">Testimonials</span>
                </div>

                {/* Heading */}
                <div className="text-center text-3xl sm:text-4xl md:text-5xl font-light leading-tight bg-gradient-to-tr from-[#63A7D4] via-[#F295BE] to-[#63A7D4] bg-clip-text text-transparent">
                    Voices of <span className="font-semibold">Success</span>
                </div>

                {/* Subtext */}
                <p className="text-gray-600  lg:text-lg font-medium text-center max-w-2xl mx-auto mt-2">
                    Hear from debaters who transformed their skills using our AI-powered platform
                </p>

                <hr className="w-20 h-1 bg-gradient-to-r from-[#63A7D4] to-[#F295BE] border-0 rounded mx-auto mt-4 mb-12" />

                {/* Testimonials Grid */}
                <div className="flex flex-col lg:flex-row  w-full  justify-center items-center">
                    <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">

                        {/* Sarah */}
                        <div className="flex flex-col justify-between bg-white shadow-md rounded-2xl w-full lg:w-1/3 text-center p-4 min-h-[600px]">
                            <img src="./images/testimonials/sarah.png" alt="Sarah Chen" className="w-full rounded-lg mb-4" />
                            <div className="w-16 h-16 mx-auto -mt-12 mb-2 border-4 border-white rounded-full overflow-hidden shadow-lg">
                                <img src="./images/testimonials/sarah.png" alt="Sarah Avatar" />
                            </div>
                            <h3 className="text-lg lg:text-xl font-semibold">Sarah Chen</h3>
                            <p className="text-sky-600 text-base lg:text-lg font-light">National Debate Champion</p>
                            <div className="flex justify-center gap-8 text-base lg:text-lg font-light text-gray-600 mt-4">
                                <span className="flex flex-col items-center">
                                    <strong className="text-lg text-gray-800">47</strong> Wins
                                </span>
                                <span className="flex flex-col items-center">
                                    <strong className="text-lg text-gray-800">12</strong> Tournaments
                                </span>
                                <span className="flex flex-col items-center">
                                    <strong className="text-lg text-gray-800">2890</strong> Rating
                                </span>
                            </div>
                            <p className="text-gray-600 text-md lg:text-[17px] font-light mt-4 px-4">
                                “D23.ai helped me secure the national championship. The AI feedback was instrumental in perfecting my arguments.”
                            </p>
                            <div className='flex justify-center'>
                                <button className="mt-4 text-sky-500 hover:underline text-base lg:text-lg bg-gray-100 px-8 py-2 rounded-2xl mb-4 font-normal">View Profile</button>
                            </div>

                        </div>

                        {/* Marcus */}
                        <div className="flex flex-col justify-between bg-white shadow-md rounded-2xl w-full lg:w-1/3 text-center p-4 min-h-[600px]">
                            <img src="./images/testimonials/marcus.png" alt="Marcus Thompson" className="w-full rounded-lg mb-4" />
                            <div className="w-16 h-16 mx-auto -mt-12 mb-2 border-4 border-white rounded-full overflow-hidden shadow-lg">
                                <img src="./images/testimonials/marcus.png" alt="Marcus Avatar" />
                            </div>
                            <h3 className="text-lg lg:text-xl font-semibold">Marcus Thompson</h3>
                            <p className="text-sky-600 text-base lg:text-lg font-light">University Team Captain</p>
                            <div className="flex justify-center gap-8 text-base lg:text-lg font-light text-gray-600 mt-4">
                                <span className="flex flex-col items-center">
                                    <strong className="text-lg text-gray-800">38</strong> Wins
                                </span>
                                <span className="flex flex-col items-center">
                                    <strong className="text-lg text-gray-800">9</strong> Tournaments
                                </span>
                                <span className="flex flex-col items-center">
                                    <strong className="text-lg text-gray-800">2780</strong> Rating
                                </span>
                            </div>
                            <p className="text-gray-600 text-md lg:text-[17px] font-light mt-4 px-4">
                                “Our team’s win rate increased by 70% after incorporating D23.ai into our practice routine.”
                            </p>
                            <div className='flex justify-center'>
                                <button className="mt-4 text-sky-500 hover:underline text-base lg:text-lg bg-gray-100 px-8 py-2 rounded-2xl mb-4 font-normal">View Profile</button>
                            </div>
                        </div>

                        {/* Elena */}
                        <div className="flex flex-col justify-between bg-white shadow-md rounded-2xl w-full lg:w-1/3 text-center p-4 min-h-[600px]">
                            <img src="./images/testimonials/elena.png" alt="Elena Rodriguez" className="w-full rounded-lg mb-4" />
                            <div className="w-16 h-16 mx-auto -mt-12 mb-2 border-4 border-white rounded-full overflow-hidden shadow-lg">
                                <img src="./images/testimonials/elena.png" alt="Elena Avatar" />
                            </div>
                            <h3 className="text-lg lg:text-xl font-semibold">Elena Rodriguez</h3>
                            <p className="text-sky-600 text-base lg:text-lg font-light">International Competitor</p>
                            <div className="flex justify-center gap-8 text-base lg:text-lg font-light text-gray-600 mt-4">
                                <span className="flex flex-col items-center">
                                    <strong className="text-lg text-gray-800">42</strong> Wins
                                </span>
                                <span className="flex flex-col items-center">
                                    <strong className="text-lg text-gray-800">15</strong> Tournaments
                                </span>
                                <span className="flex flex-col items-center">
                                    <strong className="text-lg text-gray-800">2850</strong> Rating
                                </span>
                            </div>
                            <p className="text-gray-600 text-md lg:text-[17px] font-light mt-4 px-4">
                                “The platform’s multilingual support helped me excel in international competitions.”
                            </p>
                            <div className='flex justify-center'>
                                <button className="mt-4 text-sky-500 hover:underline text-base lg:text-lg bg-gray-100 px-8 py-2 rounded-2xl mb-4 font-normal">View Profile</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default Testimonials;

