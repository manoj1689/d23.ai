"use client";

import React from "react";
import Sidebar from "../../components/Sidebar";
import { FaBell } from "react-icons/fa";
import Debate from "./Debate"
import HomeNavbar from "@/components/HomeNavbar";
import UpcomingDebatesPage from "@/components/UpcomingEvent";
import AiInsight from "./AiInsight"
import LiveDebatesList from "./LiveDebatesList";
import InvitationRequests from "./InvitationRequest";
import { useState } from 'react';
import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';
import "./custom.css"
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Event {
  date: string; // Format: YYYY-MM-DD
  description: string;
}

const sampleEvents: Event[] = [
  { date: '2025-05-05', description: 'Team Meeting' },
  { date: '2025-05-10', description: 'Project Deadline' },
  { date: '2025-05-15', description: 'Doctor Appointment' },
  { date: '2025-05-22', description: 'Conference' },
  { date: '2025-05-30', description: 'Family Gathering' }
];
function Page() {
  const [value, setValue] = useState<Date>(new Date());

  const selectedDateStr = value.toISOString().split('T')[0];

  const eventsForSelectedDate = sampleEvents.filter(
    (event) => event.date === selectedDateStr
  );

  const hasEvent = (date: Date): boolean => {
    const dateStr = date.toISOString().split('T')[0];
    return sampleEvents.some((event) => event.date === dateStr);
  };


  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <section className="lg:ml-64 flex-1 min-h-screen bg-gray-50">
        {/* Top Navbar */}
        <HomeNavbar />

        {/* Main Body */}
        <div className="container mx-auto p-4 lg:p-6">
          <Debate />
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-2/3">
              <UpcomingDebatesPage />
            </div>
            <div className="w-full lg:w-1/3">
              <AiInsight />
            </div>
          </div>
          <div>
            <LiveDebatesList />
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-1/2 bg-white rounded-xl shadow p-6  mx-auto ">
              <InvitationRequests />
            </div>
            <div className="w-full lg:w-1/2">
              <Calendar
                onChange={setValue}
                value={value}
                tileContent={({ date, view }) =>
                  view === 'month' && hasEvent(date) ? (
                    <div
                      style={{
                        height: '3px',
                        width: '100%',
                        background: 'linear-gradient(to right, #60a5fa, #f472b6)',
                        marginTop: '4px',
                        borderRadius: '2px'
                      }}

                    ></div>

                  ) : null
                }
              />
            </div>
          </div>

        </div>

      </section>
    </div>
  );
}

export default Page;
