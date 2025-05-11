"use client";

import React from "react";
import Sidebar from "../../components/Sidebar";
import { FaBell } from "react-icons/fa";
import Debate from "./Debate"
import HomeNavbar from "@/components/HomeNavbar";

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
        <div className="p-6">
         <Debate/>
        </div>
      </section>
    </div>
  );
}

export default Page;
