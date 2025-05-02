"use client";

import React from "react";
import Sidebar from "../../components/Sidebar";
import { FaBell } from "react-icons/fa";
import Debate from "./Debate"

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
        <div className="flex items-center justify-between p-6 bg-white shadow-sm">
          
          {/* Search Bar with Autocomplete */}
          <div className="w-1/2 max-w-md max-lg:ml-16">
            {/* <ReactSearchAutocomplete
              items={items}
              onSelect={handleOnSelect}
              placeholder="Search topics, tournaments..."
              styling={{
                borderRadius: "8px",
                backgroundColor: "#f9fafb",
                color: "#111827",
                fontSize: "16px",
                height: "40px",
                boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1)",
              }}
            /> */}
          </div>

          {/* Notification Bell */}
          <div className="flex items-center space-x-4">
            <button className="relative">
              <FaBell className="text-gray-600 hover:text-purple-600 " size={28}/>
              {/* Notification Dot */}
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Main Body */}
        <div className="p-6">
         <Debate/>
        </div>
      </section>
    </div>
  );
}

export default Page;
