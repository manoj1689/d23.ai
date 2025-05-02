import React from 'react';

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
                    Getting Started
                </span>
            </div>

            {/* Main Heading */}
            <section>
                <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light bg-gradient-to-tr from-[#63A7D4] via-[#F295BE] to-[#63A7D4] text-center bg-clip-text text-transparent leading-tight pb-2'>
                    Start Your <span className='font-semibold'>Success Journey</span>
                </div>
            </section>

            <section>
                <div className='my-4 text-sm sm:text-md md:text-lg lg:text-xl text-center md:w-3/4 mx-auto text-neutral-600'>
                    Begin your path to debate mastery with our proven AI-driven learning system
                </div>
            </section>

            <section className='mt-10 flex flex-col lg:flex-row justify-center items-stretch  relative'>
                {/* Create Account */}
                <div className="bg-white shadow-md rounded-xl p-6 w-full lg:w-1/3 text-center justify-between flex flex-col items-center">
                    <div className="relative">
                        {/* Number 1 above the image */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                            <div className="z-10 py-2 px-4 text-2xl font-bold rounded-xl text-white bg-sky-200 border-4  border-white shadow-lg">
                                1
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative z-0">
                            <img
                                src="/images/success/create-account.png"
                                alt="Create Account Icon"
                                className="w-full  mb-4"
                            />
                        </div>
                    </div>


                    <h3 className="text-xl font-semibold text-sky-500 mb-2">Create your Account</h3>
                    <p className="text-neutral-600 text-base font-light mb-4">
                        Set up your profile and preferences in minutes
                    </p>
                    <div className="flex gap-2 flex-wrap justify-center text-xs sm:text-sm font-light text-neutral-700">
                        <span className="bg-sky-100 text-sky-500 px-3 py-1 rounded-full">2 min setup</span>
                        <span className="bg-sky-100 text-sky-500 px-3 py-1 rounded-full">100% Free</span>
                        <span className="bg-sky-100 text-sky-500 px-3 py-1 rounded-full">Instant Access</span>
                    </div>
                </div>
                <div className='flex  h-auto items-center'>
                    <div className='flex  w-8 h-2 max-lg:hidden bg-pink-100  items-center'>

                    </div>
                </div>

                {/* Start Practicing */}
                <div className="bg-white shadow-md rounded-xl p-6 w-full lg:w-1/3 text-center justify-between flex flex-col items-center">
                <div className="relative">
                        {/* Number 1 above the image */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                            <div className="z-10 py-2 px-4 text-2xl font-bold rounded-xl text-white bg-orange-200 border-4  border-white shadow-lg">
                                2
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative z-0">
                        <img src="/images/success/start-practicing.png" alt="Start Practicing Icon" 
                                className="w-full  mb-4"
                            />
                        </div>
                    </div>
                   
                    <h3 className="text-xl font-semibold text-orange-400 mb-2">Start Practicing</h3>
                    <p className="text-neutral-600 text-base font-light mb-4">
                        Engage in AI-powered debate sessions
                    </p>
                    <div className="flex gap-2 flex-wrap justify-center text-xs sm:text-sm font-light text-neutral-700">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">24/7 Available</span>
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">Real-time AI</span>
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">Multiple Formats</span>
                    </div>
                </div>
                <div className='flex  h-auto items-center'>
                    <div className='flex  w-8 h-2 max-lg:hidden bg-pink-100  items-center'>

                    </div>
                </div>
                {/* Track Progress */}
                <div className="bg-white shadow-md rounded-xl p-6 w-full lg:w-1/3 text-center justify-between flex flex-col items-center">
                <div className="relative">
                        {/* Number 1 above the image */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                            <div className="z-10 py-2 px-4 text-2xl font-bold rounded-xl text-white bg-pink-200 border-4  border-white shadow-lg">
                                3
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative z-0">
                        <img src="/images/success/track-progress.png" alt="Track Progress Icon"
                                className="w-full  mb-4"
                            />
                        </div>
                    </div>
                 
                    <h3 className="text-xl font-semibold text-pink-500 mb-2">Track Progress</h3>
                    <p className="text-neutral-600 text-base font-light mb-4">
                        Monitor your growth with advanced analytics
                    </p>
                    <div className="flex gap-2 flex-wrap justify-center text-xs sm:text-sm font-light text-neutral-700">
                        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">Detailed Analytics</span>
                        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">AI Insights</span>
                        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">Progress Path</span>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Index;
