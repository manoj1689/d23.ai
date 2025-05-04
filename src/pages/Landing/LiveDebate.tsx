"use client"
import { useState } from "react";
import { MdOutlineVideoCameraFront } from "react-icons/md";
export default function ExploreDebatesPage() {
  const [activeTab, setActiveTab] = useState<"Live" | "Upcoming" | "Past">("Live");

  const renderDebates = () => {
    const list =
      activeTab === "Live"
        ? liveDebates
        : activeTab === "Upcoming"
          ? upcomingDebates
          : pastDebates;

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {list.map((debate, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
          <div className="relative">
            <img src={debate.image} alt={debate.title} className="w-full h-40 object-cover" />
            {activeTab === "Live" && (
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                🔴 LIVE
              </div>
            )}
            <div className="absolute top-2 right-2 text-white text-sm">
              👁️ {debate.viewers} viewers
            </div>
          </div>
    
          {/* Card Content */}
          <div className="flex flex-col justify-between flex-grow p-4 ">
            <div>
              <h3 className="font-semibold text-gray-800 text-lg mb-1">{debate.title}</h3>
              <div className="text-xs text-blue-600 bg-blue-100 inline-block px-2 py-0.5 rounded-full mb-2">
                {debate.format}
              </div>
              <p className="text-sm text-gray-600 mb-3 line-clamp-3">{debate.description}</p>
              <p className="text-xs text-gray-400 mb-3">{debate.timeInfo}</p>
            </div>
    
            {/* Bottom Area */}
            <div className="flex justify-between items-center mt-auto pt-2">
              <div className="flex -space-x-2">
                {debate.speakers.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    className="w-6 h-6 rounded-full border border-white"
                    alt="speaker"
                  />
                ))}
              </div>
              <button className="flex items-center gap-2 bg-gradient-to-l from-[#F295BE] to-[#63A7D4] text-white text-sm px-4 py-2 rounded-lg transition">
                <span><MdOutlineVideoCameraFront size={20} /></span> Join Debate
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    );
  };

  return (
    <section className="bg-white  py-12 px-4 md:px-12 ">
      {/* Top Right Decoration */}



      <div className="container relative mx-auto">
        {/* Header */}
        {/* Bottom Left Decoration */}
        <div className="absolute right-0 top-0 ">
          <img src="/images/tools/chat.png" alt="Image 1" className="w-80" />
        </div>
        {/* Explore Debates Section */}
        <div className="text-center ">
          <span className="text-xs md:text-sm text-[#4DA0D7] bg-sky-100 px-4 py-2 rounded-full font-normal mb-2 inline-block">
            Live & Archive Access
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#F295BE] to-[#63A7D4] py-4 ">
            <span className="font-extralight">Explore Debates –</span> <span className="font-semibold">Live</span>,{" "}
            <span className="font-semibold">Upcoming</span> &{" "}
            <span className="font-semibold">Past</span>
          </h2>

          <p className="text-gray-600 text-md lg:text-lg justify-center  max-2w-xl mx-auto">
            Tune into live debates, prepare for upcoming ones, or learn from past sessions anytime.
          </p>
        </div>
        <hr className="w-20 h-1 bg-gradient-to-r from-[#63A7D4] to-[#F295BE] border-0 rounded mx-auto mt-4  mb-12" />
        {/* View All */}
        <div className="mt-8 text-right">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            View All &gt;&gt;
          </a>
        </div>
        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-8">
          {["Live", "Upcoming", "Past"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "Live" | "Upcoming" | "Past")}
              className={`px-8 py-2 rounded-full text-sm font-normal transition ${activeTab === tab
                ? "bg-blue-100 text-[#2B6CB0]"
                : "text-gray-500 hover:text-[#2B6CD0]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {renderDebates()}


      </div>
    </section>
  );
}

// 🎤 Mock Data
const liveDebates = [
  {
    title: "Social Media Regulation",
    description: "Should governments impose stricter regulations on social media platforms?",
    format: "Oxford Style",
    image: "/images/recordings/image1.png",
    viewers: 87,
    timeInfo: "Live for 32 minutes",
    speakers: [
      "https://randomuser.me/api/portraits/men/10.jpg",
      "https://randomuser.me/api/portraits/women/11.jpg"
    ],
  },
  {
    title: "Universal Healthcare Rights",
    description: "Is access to universal healthcare a fundamental right?",
    format: "Lincoln-Douglas",
    image: "/images/recordings/image2.png",
    viewers: 124,
    timeInfo: "Live for 47 minutes",
    speakers: [
      "https://randomuser.me/api/portraits/men/12.jpg",
      "https://randomuser.me/api/portraits/women/13.jpg"
    ],
  },
  {
    title: "Cryptocurrency Regulation",
    description: "Should decentralized finance be regulated like traditional banks to ensure safety and fairness?",
    format: "Public Forum",
    image: "/images/recordings/image3.png",
    viewers: 65,
    timeInfo: "Live for 15 minutes",
    speakers: [
      "https://randomuser.me/api/portraits/men/14.jpg",
      "https://randomuser.me/api/portraits/women/15.jpg"
    ],
  },
  {
    title: "Online Education vs Traditional",
    description: "Is online education more effective than traditional classroom learning?",
    format: "Parliamentary",
    image: "/images/recordings/image4.png",
    viewers: 102,
    timeInfo: "Live for 25 minutes",
    speakers: [
      "https://randomuser.me/api/portraits/women/16.jpg",
      "https://randomuser.me/api/portraits/men/17.jpg"
    ],
  },
];


const upcomingDebates = [
  {
    title: "AI in Education",
    description: "How should AI tools be integrated into classrooms?",
    format: "Oxford Style",
    image: "/images/recordings/image3.png",
    viewers: 12,
    timeInfo: "Starts in 2 hours",
    speakers: ["https://randomuser.me/api/portraits/men/21.jpg", "https://randomuser.me/api/portraits/women/22.jpg"],
  },
  {
    title: "Climate Policy Reform",
    description: "What climate policies are most effective today?",
    format: "Parliamentary",
    image: "/images/recordings/image1.png",
    viewers: 8,
    timeInfo: "Starts in 3 hours",
    speakers: ["https://randomuser.me/api/portraits/women/31.jpg", "https://randomuser.me/api/portraits/men/32.jpg"],
  },
];

const pastDebates = [
  {
    title: "Remote Work vs. Office Work",
    description: "Which work model is better for productivity?",
    format: "Lincoln-Douglas",
    image: "/images/recordings/image2.png",
    viewers: 340,
    timeInfo: "Ended 1 day ago",
    speakers: ["https://randomuser.me/api/portraits/women/41.jpg", "https://randomuser.me/api/portraits/men/42.jpg"],
  },
  {
    title: "Space Travel for Civilians",
    description: "Is commercial space travel worth the investment?",
    format: "Parliamentary",
    image: "/images/recordings/image4.png",
    viewers: 412,
    timeInfo: "Ended 2 days ago",
    speakers: ["https://randomuser.me/api/portraits/men/51.jpg", "https://randomuser.me/api/portraits/women/52.jpg"],
  },
];
