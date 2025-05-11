"use client";

import React from "react";
import Sidebar from "../../components/Sidebar";
import { FaBell } from "react-icons/fa";
import Debate from "./Debate"
import HomeNavbar from "@/components/HomeNavbar";
import UpcomingDebatesPage from "@/components/UpcomingEvent";
import AiInsight  from "./AiInsight"
function Page() {
  // Example search items
  const items = [
    { id: 0, name: "Oxford Debate" },
    { id: 1, name: "Parliamentary Debate" },
    { id: 2, name: "Casual Debate" },
    { id: 3, name: "Tournament Rankings" },
    { id: 4, name: "Elite Debaters" },
  ];

  // Handle search selection
  const handleOnSelect = (item:any) => {
    console.log(item);
    // Optionally, redirect or fetch related data
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <section className="lg:ml-64 flex-1 min-h-screen bg-gray-50">
        {/* Top Navbar */}
          <HomeNavbar/>

        {/* Main Body */}
        <div className="container mx-auto p-6">
         <Debate/>
         <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-2/3">
          <UpcomingDebatesPage/>
          </div>
          <div className="w-full lg:w-1/3">
          <AiInsight/>
          </div>
        </div>
        </div>
        
      </section>
    </div>
  );
}

export default Page;
