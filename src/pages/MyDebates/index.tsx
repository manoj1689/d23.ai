'use client';

import { FaArrowLeft, FaBell, FaCalendar } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';
import Sidebar from '@/components/Sidebar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // use 'next/navigation' if you're using App Router
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { fetchMyScheduledDebates } from '@/store/slices/debateSlice';
import HomeNavbar from '@/components/HomeNavbar';

const STATUS_OPTIONS = [
  { label: 'All', value: '' },
  { label: 'Upcoming', value: 'scheduled' },
  { label: 'Ongoing', value: 'ongoing' },
  { label: 'Completed', value: 'completed' },
];

export default function DebatePage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { debates } = useSelector((state: RootState) => state.debate);
  const [status, setStatus] = useState('scheduled');

  useEffect(() => {
    dispatch(fetchMyScheduledDebates({ status }));
  }, [status, dispatch]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 min-h-screen bg-gray-50">
        {/* Header */}
        <HomeNavbar />

        {/* Content */}
        <div className="container mx-auto p-6">
          {/* Top Row */}
           <div className="flex  gap-4  my-4 text-gray-600">
                      <span><FaCalendar size={30} color='#2B6CB0' /> </span> <h2 className="text-2xl font-medium"> My Debates</h2>
          
                    </div>

          {/* Status Filter */}
          <div className="flex mb-6">
            <div className="flex gap-2 bg-gray-200 rounded-2xl p-2">
              {STATUS_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setStatus(option.value)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium ${status === option.value
                      ? 'bg-sky-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Debate Cards */}
          {/* Enhanced Debate Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {debates.length === 0 ? (
              <p className="text-gray-500 text-lg col-span-full">
                No debates found for this status.
              </p>
            ) : (
              debates.map((debate, idx) => (
                <div key={idx} className="bg-white shadow-md rounded-xl flex flex-col justify-between">
                  <div className="relative rounded-2xl">
                    <img
                      src={debate.image || '/images/recordings/image1.png'}
                      alt={debate.title}
                      className="w-full h-40 object-cover rounded-t-xl"
                    />

                    {debate.status === 'ongoing' && (
                      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                        🔴 LIVE
                      </div>
                    )}

                    <div className="absolute top-2 right-2 text-white bg-stone-800 py-1 px-2 rounded-full text-sm">
                      {debate.viewers || 0} viewers
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">{debate.title}</h3>

                    <div  className='flex '>
                      <div  className="text-xs text-blue-600 bg-blue-100 inline-block px-2 py-0.5 rounded-full mb-2">
                      {debate.format}
                      </div>
                     
                    </div>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">{debate.description}</p>

                    <div className="flex justify-between items-center mt-auto pt-2">
                      <p className="text-xs text-gray-400">
                        {new Date(debate.scheduled_start).toLocaleString()}
                      </p>
                      <div className="flex -space-x-2">
                        {(debate.speakers || []).map((src: string, i: number) => (
                          <img
                            key={i}
                            src={src}
                            className="w-6 h-6 rounded-full border border-white"
                            alt="speaker"
                          />
                        ))}
                      </div>
                    </div>

                    <button className="flex w-full mt-4 justify-center items-center gap-2 bg-gradient-to-l from-[#F295BE] to-[#63A7D4] text-white text-sm px-4 py-2 rounded-lg transition">
                      <span className="material-icons">videocam</span> Join Debate
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
