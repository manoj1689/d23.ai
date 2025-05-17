import { useState } from "react";
import {
  FaHandPaper,
  FaMicrophoneSlash,
  FaVideoSlash,
  FaShareSquare,
  FaSignOutAlt,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { FiUsers } from "react-icons/fi";
import Sidebar from "@/components/Sidebar";
import HomeNavbar from "@/components/HomeNavbar";
import { FaPause, FaRedo } from 'react-icons/fa';

export default function UsersDebate() {
  const [activeTab, setActiveTab] = useState("Chat");
  const [isPlaying, setIsPlaying] = useState(true);

  const percentage = 28;
  const duration = 10; // total duration in seconds
  const stopTime = duration * ((100 - percentage) / 100); // e.g., 7.2s for 28%
  const tabData = {
    Chat: [
      { name: "Emily Richardson", message: "Excellent point about renewable energy sources" },
      { name: "James Thompson", message: "Would like to address the economic impact" },
      { name: "Michael Anderson", message: "Looking forward to the cross-examination" },
    ],
    Arguments: [
      { name: "Pro", point: "Renewables are sustainable and eco-friendly." },
      { name: "Con", point: "Initial costs of implementation are too high." },
    ],
    Notes: [
      "Prepare counterargument for economic impact.",
      "Reference UN climate report from 2022.",
      "Mention community solar success stories.",
    ],
    Rules: [
      "Each participant gets 2 minutes to speak.",
      "No personal attacks or interruptions.",
      "Stick to the topic assigned.",
      "Use data to back claims where possible.",
    ],
  };
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 lg:ml-64 flex flex-col">
        <HomeNavbar />
        <main className="container mx-auto p-6 space-y-6 flex-1 flex flex-col">
          {/* Header */}
          <div className="text-center font-semibold text-xl text-gray-800">
            Climate Change: Global Action vs Economic Growth
            <div className="text-sm text-gray-400">Oxford Style Debate</div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">



            {/* Main Debate Section */}
            <section className=" w-full lg:w-2/3 space-y-4">
              {/* Live Video Area */}
              <div className="bg-white rounded-xl p-4 shadow space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden">
                    <video className="w-full h-80 object-cover rounded-md" controls>
                      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    </video>
                    <p className=" flex justify-between px-4 text-lg text-gray-700 mt-1">Sarah Mitchell <span className="text-xs text-blue-500">Speaking</span></p>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <video className="w-full h-80 object-cover rounded-md" controls>
                      <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
                    </video>
                    <p className=" flex justify-between px-4 text-lg text-gray-700 mt-1">Michael Anderson <span className="text-xs text-gray-400">Next</span></p>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center py-4 space-x-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span>Live Session</span>
                </div>

                <div className="flex justify-around gap-4  pt-4">
                  <button className="flex flex-col w-full items-center gap-1 text-gray-700 text-sm shadow-xl px-4 py-2 rounded-xl">
                    <FaMicrophoneSlash size={20} className="text-red-400" />
                    Mute
                  </button>

                  <button className="flex flex-col w-full items-center gap-1 text-gray-700 text-sm shadow-xl px-4 py-2 rounded-xl">
                    <FaVideoSlash size={20} className="text-yellow-400" />
                    Stop Video
                  </button>

                  <button className="flex flex-col w-full items-center gap-1 text-gray-700 text-sm shadow-xl px-4 py-2 rounded-xl">
                    <FaShareSquare size={20} className="text-blue-400" />
                    Share
                  </button>

                  <button className="flex flex-col w-full items-center gap-1 text-sm text-gray-700 shadow-xl px-4 py-2 rounded-xl">
                    <FaHandPaper size={20} className="text-purple-400" />
                    Raise Hand
                  </button>

                  <button className="flex flex-col w-full items-center gap-1 text-sm text-gray-700 shadow-xl px-4 py-2 rounded-xl">
                    <FaSignOutAlt size={20} className="text-red-400" />
                    Leave
                  </button>
                </div>

              </div>

              {/* Chat & Tabs */}
              <div className="bg-white rounded-xl p-4 shadow">
                {/* Tabs */}
                <div className="flex w-full justify-around   text-md  mb-3">
                  {["Chat", "Arguments", "Notes", "Rules"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`p-2 ${activeTab === tab ? "w-full border-b-2  border-sky-600 text-sky-600" : "w-full cursor-pointer border-b-2 border-gray-300 text-gray-500"}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="space-y-4 text-md  text-gray-700">
                  {activeTab === "Chat" &&
                    tabData.Chat.map((chat, idx) => (
                      <p key={idx} className="flex flex-col bg-gray-100 p-2 rounded-lg">
                        <strong>{chat.name}</strong> <span>{chat.message}</span>
                      </p>
                    ))}

                  {activeTab === "Arguments" &&
                    tabData.Arguments.map((arg, idx) => (
                      <p key={idx} className="flex  bg-gray-100 p-2 rounded-lg">
                        <strong>{arg.name}</strong>: {arg.point}
                      </p>
                    ))}

                  {activeTab === "Notes" &&
                    tabData.Notes.map((note, idx) => (
                      <p key={idx} className="flex flex-col bg-gray-100 p-2 rounded-lg">• {note}</p>
                    ))}

                  {activeTab === "Rules" &&
                    tabData.Rules.map((rule, idx) => (
                      <p key={idx} className="flex flex-col bg-gray-100 p-2 rounded-lg">• {rule}</p>
                    ))}
                </div>

                {/* Input only for Chat */}
                {activeTab === "Chat" && (
                  <input
                    placeholder="Type your message..."
                    className="mt-3 w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                )}
              </div>

              {/* Current Speaker Section */}
              <div className="bg-white rounded-xl p-4 shadow  items-start gap-4">
                <div className="flex  flex-col sm:flex-row items-center justify-between ">
                  <div className="flex  items-center gap-4">
                    <div className="flex justify-center items-center h-20">
                      <CountdownCircleTimer
                        isPlaying={isPlaying}
                        duration={duration}
                        colors={['#F7B801', '#A30000', '#A30000']}
                        strokeWidth={5}
                        size={70}
                        trailColor="#DBEAFE"
                        onUpdate={(remainingTime) => {
                          if (remainingTime <= duration - stopTime) {
                            setIsPlaying(false); // pause the timer when 28% is reached
                          }
                        }}
                      >
                        {() => (
                          <div className="text-blue-600 font-bold text-sm">
                            {percentage}%
                          </div>
                        )}
                      </CountdownCircleTimer>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-600">Opening Arguments</h3>
                      <p className="text-sm text-gray-500 mb-2">Current speaker: Michael Thompson</p>
                    </div>




                  </div>
                <div className="flex gap-4 items-center justify-center mt-4">
      <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
        <FaPause className="text-gray-700" size={18} />
      </button>
      <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
        <FaRedo className="text-gray-700" size={18} />
      </button>
    </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                  <span>Topic Description</span>
                  <p className="text-sm text-gray-600">
                    Analyzing the feasibility and impact of implementing Universal Basic Income across different economic
                    systems, focusing on poverty reduction, wealth inequality, and economic sustainability.
                  </p>
                </div>
              </div>

            </section>
            <section className="flex w-full lg:w-1/3 max-sm:flex-col flex-row lg:flex-col  gap-4">
              {/* Participants Sidebar */}
              <aside className="lg:col-span-2 bg-white rounded-xl p-4 shadow space-y-3">
                <div className="font-semibold text-gray-700 flex items-center gap-2">
                  <FiUsers /> Participants
                  <span className="ml-auto text-sm text-gray-400">4 Online</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>👩‍⚖️ Dr. Emily Parker <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full ml-1">MOD</span></li>
                  <li>🎙️ Michael Thompson <span className="text-xs text-blue-500">Speaker</span></li>
                  <li>🧠 Sarah Chen <span className="text-xs text-blue-500">Speaker</span></li>
                  <li>🗣️ James Wilson <span className="text-xs text-gray-400">Participant</span></li>
                </ul>

                <div className="mt-4">
                  <div className="text-xs text-gray-400 mb-1">Speaking Queue</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>1. Alexi Martinez <span className="text-gray-400 text-xs ml-2">Waiting</span></li>
                    <li>2. Rachel Kim <span className="text-gray-400 text-xs ml-2">Waiting</span></li>
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-400 to-pink-500 text-white font-medium py-2 rounded-md mt-4">
                  ✋ Raise Hand
                </button>
              </aside>

              {/* Right Sidebar: Key Points + Vote */}
              <aside className="lg:col-span-3 space-y-4">

                {/* Public Questions */}
                <div className="bg-white rounded-xl p-4 shadow space-y-2">
                  <div className="text-sm font-semibold text-gray-800">Public Questions</div>
                  <p className="text-sm text-gray-600"><strong>Sarah Chen</strong>: The economic implications of UBI are significant</p>
                  <p className="text-sm text-gray-600"><strong>James Wilson</strong>: Studies show reduced poverty rates in trial regions</p>
                  <input
                    placeholder="Type your message..."
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>

                {/* Key Points & Audience Vote */}
                <div className="bg-white rounded-xl p-4 shadow text-sm space-y-2">
                  <div className="font-semibold text-gray-800">Key Points</div>
                  <div>
                    <p className="font-medium text-green-600">Pro arguments</p>
                    <ul className="list-disc pl-6 text-gray-600">
                      <li>Reduces poverty and income inequality</li>
                      <li>Provides economic security during automation transition</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-red-500">Con arguments</p>
                    <ul className="list-disc pl-6 text-gray-600">
                      <li>High implementation costs</li>
                      <li>Potential reduction in workforce participation</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Audience Vote</span>
                      <span>142 votes</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-green-600 font-medium">Support (64%)</span>
                      <span className="text-red-500 font-medium">Oppose (36%)</span>
                    </div>
                  </div>
                </div>
              </aside>

            </section>

          </div>
        </main>
      </div>

    </div>
  );
}
