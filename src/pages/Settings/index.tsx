import React, { useState } from 'react';
import Switch from 'react-switch';
import Sidebar from '@/components/Sidebar';
import { useRouter } from 'next/router';
import { FaArrowLeft, FaBell, FaCog } from 'react-icons/fa';
import HomeNavbar from '@/components/HomeNavbar';
import ProfileCard from './Profile';
const SettingsPage = () => {
  const router = useRouter();

  const [settings, setSettings] = useState({
    emailNotifications: false,
    pushNotifications: false,
    eventReminders: false,
    publicProfile: false,
    activityStatus: false,
    dataSharing: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <div>
          <HomeNavbar />
        </div>

        <div className="container mx-auto p-6">
          <div className="flex  gap-4 my-4 text-gray-600">
           <span><FaCog size={30} color='#2B6CB0' /> </span> <h2 className="text-2xl font-medium"> Settings</h2>
         
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Column */}
            <div className="w-full lg:w-2/3">
             <ProfileCard/>

            

              {/* Achievements */}
              <div className="bg-white shadow rounded  p-4 mb-6">
                <h3 className="font-light text-lg mb-2">Debate Achievements</h3>
                <ul className="space-y-3">
                  <li className=" bg-gray-50 p-3 rounded">
                    🥇 First Place – National Policy Debate Championship<br />
                    <span className="text-sm text-gray-500">March 2025</span>
                  </li>
                  <li className="bg-gray-50 p-3 rounded">
                    🗣️ Best Speaker – Regional Debate Tournament<br />
                    <span className="text-sm text-gray-500">January 2025</span>
                  </li>
                  <li className="bg-gray-50 p-3 rounded">
                    🏅 Outstanding Delegate – Model UN Conference<br />
                    <span className="text-sm text-gray-500">December 2024</span>
                  </li>
                </ul>
              </div>

              {/* Event History */}
              <div className="bg-white shadow rounded p-4 mb-6">
                <h3 className="font-light text-lg mb-2">Event History</h3>
                <ul className="space-y-3 ">
                  <li className="bg-gray-50 p-3 rounded flex justify-between items-center">
                    <div>
                      📘 Environmental Policy Debate<br />
                      <span className="text-sm text-gray-500">
                        March 16, 2025 – Speaker
                      </span>
                    </div>
                    <span className="text-green-600 font-semibold">Completed</span>
                  </li>
                  <li className="bg-gray-50 p-3 rounded flex justify-between items-center">
                    <div>
                      📝 Advanced Debate Workshop<br />
                      <span className="text-sm text-gray-500">
                        March 10, 2025 – Participant
                      </span>
                    </div>
                    <span className="text-green-600 font-semibold">Completed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/3">
              <div className="w-full  p-6 bg-white shadow-lg rounded-lg">


                {/* Notification Preferences */}
                <div className="mb-6">
                  <h3 className="font-light text-lg mb-4">Notification Preferences</h3>
                  {[
                    ['Email Notifications', 'Receive email updates about your activity', 'emailNotifications'],
                    ['Push Notifications', 'Get notified about new events and updates', 'pushNotifications'],
                    ['Event Reminders', 'Get reminded about upcoming events', 'eventReminders'],
                  ].map(([label, description, key]) => (
                    <div key={key} className="flex justify-between items-center mb-4">
                      <div>
                        <h4 className="font-[17px]">{label}</h4>
                        <p className="text-sm text-gray-500">{description}</p>
                      </div>
                      <Switch
                        onChange={() => toggleSetting(key as keyof typeof settings)}
                        checked={settings[key as keyof typeof settings]}
                        onColor="#6366f1"
                        uncheckedIcon={false}
                        checkedIcon={false}
                        height={20}
                        width={40}
                      />
                    </div>
                  ))}
                </div>

                {/* Privacy Settings */}
                <div className="mb-6">
                  <h3 className="font-light text-lg mb-4">Privacy Settings</h3>
                  {[
                    ['Public Profile', 'Make your profile visible to other users', 'publicProfile'],
                    ['Show Activity Status', 'Let others see when you’re active', 'activityStatus'],
                    ['Data Sharing', 'Share usage data to improve our services', 'dataSharing'],
                  ].map(([label, description, key]) => (
                    <div key={key} className="flex justify-between items-center mb-4">
                      <div>
                        <h4 className="font-[17px]">{label}</h4>
                        <p className="text-sm text-gray-500">{description}</p>
                      </div>
                      <Switch
                        onChange={() => toggleSetting(key as keyof typeof settings)}
                        checked={settings[key as keyof typeof settings]}
                        onColor="#6366f1"
                        uncheckedIcon={false}
                        checkedIcon={false}
                        height={20}
                        width={40}
                      />
                    </div>
                  ))}
                </div>

                {/* Delete Account */}
                <div className="flex flex-col mt-6 p-4 border border-gray-200  rounded bg-gray-50  items-left justify-between">
                  <div>
                    <h4 className="font-light text-lg">Delete Account</h4>
                    <p className="text-sm text-red-500">
                      Once you delete your account, there is no going back.
                    </p>
                  </div>
                  <button className="text-red-600 border border-red-600 px-4 py-1 rounded mt-8 hover:bg-red-100">
                    Delete Account
                  </button>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
