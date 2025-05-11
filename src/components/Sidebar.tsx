'use client';

import { useState } from "react";
import Link from "next/link";
import {
  FaComments,
  FaHome,
  FaCalendar,
  FaTrophy,
  FaStar,
  FaCalendarAlt,
  FaCog,
  FaSignOutAlt,
  FaMedal,
  FaBars,
} from "react-icons/fa";
import { logout } from '../store/slices/firebaseAuthSlice';
import { useDispatch } from "react-redux"
import { useRouter, usePathname } from "next/navigation";

export default function Sidebar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/');
  };

  const navLinks = [
    { href: '/Dashboard', label: 'Dashboard', icon: <FaHome /> },
    { href: '/MyDebates', label: 'My Debates', icon: <FaCalendar /> },
    { href: '/Rankings', label: 'Rankings', icon: <FaStar /> },
    { href: '/Schedule', label: 'Schedule', icon: <FaCalendarAlt /> },
    { href: '/Settings', label: 'Settings', icon: <FaCog /> },
  ];

  return (
    <>
      {/* Menu Button */}
      <button
        className="fixed top-3 left-4 z-50 bg-white p-2 rounded-md shadow-lg lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars className="text-2xl text-purple-600" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white z-40 flex flex-col transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        {/* Top Logo and Profile */}
        <div className="p-6">
          <div className="flex justify-center items-center mb-6">
            <img
              src="/images/logo/company-logo.png"
              alt="company-logo"
              className="w-32"
            />
          </div>

          <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-2xl mb-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-lg font-semibold">
              AK
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Alex Kovalev</h3>
              <p className="text-sm text-gray-600">Professional Debater</p>
              <div className="flex items-center mt-1">
                <FaMedal className="text-yellow-500 mr-1 text-sm" />
                <span className="text-xs text-gray-600">Elite Status</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 flex flex-col space-y-2 px-6 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive
                    ? 'text-purple-400 bg-purple-50 font-medium'
                    : 'text-gray-600 hover:text-purple-500'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            );
          })}

          <div className="flex-1" />

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 text-red-600 hover:text-red-700 px-4 py-3 rounded-xl mb-6"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}
