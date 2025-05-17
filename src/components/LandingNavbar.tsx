"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";




function Navbar() {

  const router = useRouter()

  const [activeSection, setActiveSection] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 

 
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <>
      <div
        className="flex fixed w-full p-4 transition-all duration-300 z-50"
      >
        <div className="flex container mx-auto justify-between items-center bg-[#202544] py-6 px-4 rounded-2xl">
          {/* Logo */}
          <div className="lg:w-1/4">
            <img
              src="./images/logo/company-logo.png"
              alt="Company Logo"
              className="w-24 sm:w-32"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:w-3/4 justify-end items-center gap-6">

            {/* Home */}
            <div className="flex flex-col items-center">
              <a href="#home" onClick={() => setActiveSection("Home")}>
                <span className={`text-white text-lg transition-all duration-300 ${activeSection === "Home" ? "font-medium" : "font-light"}`}>
                  Home
                </span>
              </a>
              {activeSection === "Home" && <hr className="border-2 border-white rounded-lg w-full" />}
            </div>

            {/* Debate */}
            <div className="flex flex-col items-center">
              <a href="#debate" onClick={() => setActiveSection("Debate")}>
                <span className={`text-white text-lg transition-all duration-300 ${activeSection === "Debate" ? "font-medium" : "font-light"}`}>
                  Debate
                </span>
              </a>
              {activeSection === "Debate" && <hr className="border-2 border-white rounded-lg w-full" />}
            </div>

            {/* Support */}
            <div className="flex flex-col items-center">
              <a href="#support" onClick={() => setActiveSection("Support")}>
                <span className={`text-white text-lg transition-all duration-300 ${activeSection === "Support" ? "font-medium" : "font-light"}`}>
                  Support
                </span>
              </a>
              {activeSection === "Support" && <hr className="border-2 border-white rounded-lg w-full" />}
            </div>

            {/* Events */}
            <div className="flex flex-col items-center">
              <a href="#events" onClick={() => setActiveSection("Events")}>
                <span className={`text-white text-lg transition-all duration-300 ${activeSection === "Events" ? "font-medium" : "font-light"}`}>
                  Events
                </span>
              </a>
              {activeSection === "Events" && <hr className="border-2 border-white rounded-lg w-full" />}
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center">
              <a href="#contact" onClick={() => setActiveSection("Contact")}>
                <span className={`text-white text-lg transition-all duration-300 ${activeSection === "Contact" ? "font-medium" : "font-light"}`}>
                  Contact
                </span>
              </a>
              {activeSection === "Contact" && <hr className="border-2 border-white rounded-lg w-full" />}
            </div>

            {/* Sign In */}
            <div>
              <button
                className="flex bg-gray-700 text-black px-4 py-2 border cursor-pointer border-gray-600 rounded-md text-sm font-semibold justify-center items-center gap-4 hover:bg-gray-600 transition"
                onClick={() => router.push("/Login")}
              >
                <span className="text-white">Sign In</span>
              </button>
            </div>

          </div>


          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-3xl px-4 lg:hidden"
          >
            {isSidebarOpen ? <FiX className="text-white" /> : <FiMenu className="text-white" />}
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-32 right-0 w-72 h-full z-10 bg-white rounded-l-xl shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center mt-6 gap-6">
          <button
            onClick={() => {
              setActiveSection("Home");
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
              setIsSidebarOpen(false);
            }}
            className={`text-lg font-medium ${activeSection === "Home" ? "text-pink-500 font-bold" : "text-gray-700"
              }`}
          >
            Home
          </button>

          <button
            onClick={() => {
              setActiveSection("Debate");
              document.getElementById("debate")?.scrollIntoView({ behavior: "smooth" });
              setIsSidebarOpen(false);
            }}
            className={`text-lg font-medium ${activeSection === "Debate" ? "text-pink-500 font-bold" : "text-gray-700"
              }`}
          >
            Debate
          </button>

          <button
            onClick={() => {
              setActiveSection("Support");
              document.getElementById("support")?.scrollIntoView({ behavior: "smooth" });
              setIsSidebarOpen(false);
            }}
            className={`text-lg font-medium ${activeSection === "Support" ? "text-pink-500 font-bold" : "text-gray-700"
              }`}
          >
            Support
          </button>

          <button
            onClick={() => {
              setActiveSection("Events");
              document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
              setIsSidebarOpen(false);
            }}
            className={`text-lg font-medium ${activeSection === "Events" ? "text-pink-500 font-bold" : "text-gray-700"
              }`}
          >
            Events
          </button>

          <button
            onClick={() => {
              setActiveSection("Stories");
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              setIsSidebarOpen(false);
            }}
            className={`text-lg font-medium ${activeSection === "Stories" ? "text-pink-500 font-bold" : "text-gray-700"
              }`}
          >
            Stories
          </button>

          <button
            className="bg-gradient-to-r from-[#63A7D4] to-[#F295BE] text-white px-6 py-2 rounded-full font-medium"
            onClick={() => router.push("/Login")}
          >
            Sign In With Google
          </button>
        </div>
      </div>


    </>
  );
}

export default Navbar;
