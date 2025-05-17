import { useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '@/components/Sidebar';
import HomeNavbar from '@/components/HomeNavbar';
import { TbReportAnalytics } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";
import ResultDetails from './ResultDetails';
import Performance from './Performance';
import Transcript from './Transcript';
import AiFeedback from './AiFeedback';
import Recording from './Recording';

export default function ResultPage() {
    const [activeTab, setActiveTab] = useState(1); // Track the active tab
    const router = useRouter();

    // Function to handle button click and change active tab
    const handleClick = (tabIndex) => {
        setActiveTab(tabIndex); // Set the active tab to the selected index
    };

    return (
        <div>
            <Sidebar />
            <div className="lg:ml-64">
                <div>
                    <HomeNavbar />
                </div>
                <div className="container mx-auto p-4  ">
                    <div className='flex justify-between my-4'>
                        <div className="flex gap-4 text-gray-600">
                            <span><TbReportAnalytics size={30} color='#2B6CB0' /> </span>
                            <h2 className="text-2xl font-medium"> Session Summary</h2>
                        </div>
                        <div className='flex justify-end'>
                            <span className='flex gap-4 items-center bg-sky-100 px-4 py-2 rounded-full'>
                                <FaRegClock /> sep 10, 2024
                            </span>
                        </div>
                    </div>
                    <div>
                        <ResultDetails />
                    </div>
                    <div className=' flex flex-col  my-4 bg-white rounded-2xl'>
                        <div className='flex p-4'>
                            <div className='flex gap-2 p-1 bg-gray-200 rounded-full'>
                                <button
                                    onClick={() => handleClick(1)}
                                    className={`${activeTab === 1 ? 'bg-sky-500 text-white' : 'text-gray-600'
                                        } px-4 py-2 rounded-full transition`}
                                >
                                    Performance
                                </button>
                                <button
                                    onClick={() => handleClick(2)}
                                    className={`${activeTab === 2 ? 'bg-sky-500 text-white' : ' text-gray-600'
                                        } px-4 py-2 rounded-full transition`}
                                >
                                    Transcript
                                </button>
                                <button
                                    onClick={() => handleClick(3)}
                                    className={`${activeTab === 3 ? 'bg-sky-500 text-white' : ' text-gray-600'
                                        } px-4 py-2 rounded-full transition`}
                                >
                                    AI Feedback
                                </button>
                                <button
                                    onClick={() => handleClick(4)}
                                    className={`${activeTab === 4 ? 'bg-sky-500 text-white' : ' text-gray-600'
                                        } px-4 py-2 rounded-full transition`}
                                >
                                    Recording
                                </button>
                            </div>
                        </div>

                        <hr className='text-gray-300 mt-4' />
                        <div className="mt-6 p-4">
                            {activeTab === 1 && <Performance />}
                            {activeTab === 2 && <Transcript />}
                            {activeTab === 3 && <AiFeedback />}
                            {activeTab === 4 && <Recording />}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
