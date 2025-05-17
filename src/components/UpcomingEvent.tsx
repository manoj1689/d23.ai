import React from "react";
import { useRouter } from "next/router";
const debates = [
  {
    title: "Climate Change Policy Debate",
    style: "Oxford Style",
    time: "Today, 2:00 PM - 3:30 PM",
    participant: "Emma Thompson",
    status: "Scheduled",
    action: "Join",
    avatar: "https://i.pravatar.cc/100?img=1",
    styleColor: "bg-blue-100 text-blue-600",
  },
  {
    title: "Universal Basic Income",
    style: "Lincoln–Douglas",
    time: "Tomorrow, 10:00 AM - 11:30 AM",
    participant: "Robert Chen",
    status: "Scheduled",
    action: "Edit",
    avatar: "https://i.pravatar.cc/100?img=2",
    styleColor: "bg-purple-100 text-purple-600",
  },
  {
    title: "Artificial Intelligence Ethics",
    style: "Parliamentary",
    time: "April 15, 2025, 3:00 PM - 4:30 PM",
    participant: "Sarah Johnson",
    status: "Scheduled",
    action: "Edit",
    avatar: "https://i.pravatar.cc/100?img=3",
    styleColor: "bg-green-100 text-green-700",
  },
  {
    title: "Climate Change Policy Reform",
    style: "Oxford",
    time: "May 20, 2025, 2:00 PM - 3:30 PM",
    participant: "David Lee",
    status: "Completed",
    action: "View",
    avatar: "https://i.pravatar.cc/100?img=5",
    styleColor: "bg-blue-100 text-blue-700",
  },

];

const UpcomingDebatesPage = () => {
  const router = useRouter();
  return (
    <div className=" mx-auto p-6 bg-white rounded-xl shadow my-4">
      <div className="flex  flex-col lg:flex-row justify-between items-center mb-4 gap-4">
        <h2 className="text-lg lg:text-2xl font-semibold text-gray-800">Upcoming Debates</h2>
        <div className="flex gap-2 text-sm">
          <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">All</button>
          <button className="px-3 py-1 rounded-full bg-gradient-to-r from-[#63A7D4] to-[#F295BE] text-white">This Week</button>
          <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">Next Week</button>
        </div>
      </div>

      <div className="space-y-4">
        {debates.map((debate, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4 flex flex-col gap-2 hover:shadow transition"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg text-gray-900">
                {debate.title}
                <span className={`ml-2 text-sm font-light px-2 py-1 rounded-full ${debate.styleColor}`}>
                  {debate.style}
                </span>
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-sm font-light text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">
                  {debate.status}
                </span>
                <button className="px-4 py-1 text-lg font-light text-stone-600 bg-gray-100 hover:bg-pink-200 border border-gray-300 rounded-lg cursor-pointer"
                  onClick={() => {
                    if (debate.action === "View") router.push("/Result");
                  }}
                >
                  {debate.action}
                </button>
              </div>
            </div>
            <p className="text-md font-light text-gray-600">{debate.time}</p>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <img src={debate.avatar} alt={debate.participant} className="w-6 h-6 rounded-full" />
              <span className="font-light text-black">vs. {debate.participant}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <a href="#" className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#63A7D4] to-[#F295BE] font-medium cursor-pointer hover:underline">
          View All Debates
        </a>
      </div>
    </div>
  );
};

export default UpcomingDebatesPage;
