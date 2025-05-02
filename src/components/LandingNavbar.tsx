"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";




function Navbar() {
  const router =useRouter()
  const [activeSection, setActiveSection] = useState("Features");
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
              className="w-32"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:w-3/4 justify-end items-center gap-6">
            {/* Features */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setActiveSection("Features")}
                className={`text-white text-lg transition-all duration-300 ${
                  activeSection === "Features" ? "font-medium" : ""
                }`}
              >
                Features
              </button>
              {activeSection === "Features" && (
                <hr className="border-2 border-white rounded-lg w-full" />
              )}
            </div>

            {/* Pricing */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setActiveSection("Pricing")}
                className={`text-white text-lg transition-all duration-300 ${
                  activeSection === "Pricing" ? "font-medium" : ""
                }`}
              >
                Pricing
              </button>
              {activeSection === "Pricing" && (
                <hr className="border-2 border-white rounded-lg w-full" />
              )}
            </div>

            {/* About */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setActiveSection("About")}
                className={`text-white text-lg transition-all duration-300 ${
                  activeSection === "About" ? "font-medium" : ""
                }`}
              >
                About
              </button>
              {activeSection === "About" && (
                <hr className="border-2 border-white rounded-lg w-full" />
              )}
            </div>

            {/* Blog */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setActiveSection("Blog")}
                className={`text-white text-lg transition-all duration-300 ${
                  activeSection === "Blog" ? "font-medium" : ""
                }`}
              >
                Blog
              </button>
              {activeSection === "Blog" && (
                <hr className="border-2 border-white rounded-lg w-full" />
              )}
            </div>

            {/* Join Us */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setActiveSection("Join Us")}
                className={`text-white text-lg transition-all duration-300 ${
                  activeSection === "Join Us" ? "font-medium" : ""
                }`}
              >
                Join Us
              </button>
              {activeSection === "Join Us" && (
                <hr className="border-2 border-white rounded-lg w-full" />
              )}
            </div>

            {/* Sign in with Google */}
            <div>
              <button className="flex bg-gray-700  text-black px-4 py-2 border border-gray-600 rounded-md text-sm font-semibold justify-center items-center gap-4 hover:bg-gray-600 transition" onClick={()=>router.push("/Login")}>
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
      <div
        className={`fixed top-32 right-0 w-72 h-full z-10 bg-white rounded-l-xl shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center mt-6 gap-6">
          <button
            onClick={() => {
              setActiveSection("Features");
              setIsSidebarOpen(false);
            }}
            className={`text-lg font-medium ${
              activeSection === "Features" ? "text-pink-500 font-bold" : "text-gray-700"
            }`}
          >
            Features
          </button>

          <button
            onClick={() => {
              setActiveSection("Pricing");
              setIsSidebarOpen(false);
            }}
            className={`text-lg font-medium ${
              activeSection === "Pricing" ? "text-pink-500 font-bold" : "text-gray-700"
            }`}
          >
            Pricing
          </button>

          <button
            onClick={() => {
              setActiveSection("About");
              setIsSidebarOpen(false);
            }}
            className={`text-lg font-medium ${
              activeSection === "About" ? "text-pink-500 font-bold" : "text-gray-700"
            }`}
          >
            About
          </button>

          <button
            onClick={() => {
              setActiveSection("Blog");
              setIsSidebarOpen(false);
            }}
            className={`text-lg font-medium ${
              activeSection === "Blog" ? "text-pink-500 font-bold" : "text-gray-700"
            }`}
          >
            Blog
          </button>

          <button
            onClick={() => {
              setActiveSection("Join Us");
              setIsSidebarOpen(false);
            }}
            className={`text-lg font-medium ${
              activeSection === "Join Us" ? "text-pink-500 font-bold" : "text-gray-700"
            }`}
          >
            Join Us
          </button>

          <button className="bg-gradient-to-r from-[#63A7D4] to-[#F295BE] text-white px-6 py-2 rounded-full font-medium" onClick={()=>router.push("/Login")}>
          Sign In With Google
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
