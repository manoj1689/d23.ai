'use client';

import { useState } from 'react';
import DebateCalendar from '@/pages/Schedule/DebateCalendar';
import Sidebar from '@/components/Sidebar';
import HomeNavbar from '@/components/HomeNavbar';
import { FaCalendarAlt } from 'react-icons/fa';

export default function DebatePage() {
  const [status, setStatus] = useState('scheduled'); // lowercase to match backend

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 min-h-screen bg-gray-50">
        <HomeNavbar />

        <div className="container mx-auto p-6">
          <div className="flex justify-between items-center mb-4">
              <div className="flex  gap-4 my-4 text-gray-600">
                       <span><FaCalendarAlt size={30} color='#2B6CB0' /> </span> <h2 className="text-2xl font-medium"> Schedule</h2>
                     
                      </div>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border-2 border-gray-300 bg-sky-200 rounded-lg px-8 py-2 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              <option value="scheduled">Scheduled</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <DebateCalendar status={status} />
        </div>
      </div>
    </div>
  );
}
