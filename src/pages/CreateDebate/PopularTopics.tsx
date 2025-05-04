import React from "react";
import { FaInfoCircle, FaUserFriends } from "react-icons/fa";

const topics = [
  {
    title: "Artificial Intelligence Ethics",
    level: "Advanced",
    levelColor: "bg-blue-100 text-blue-600",
    description: "Should AI development be regulated by international law?",
    tag: "Popular choice",
    debates: 320,
  },
  {
    title: "Universal Basic Income",
    level: "Intermediate",
    levelColor: "bg-green-100 text-green-600",
    description:
      "Should governments provide a universal basic income to all citizens?",
    debates: 234,
  },
  {
    title: "Climate Change Solutions",
    level: "Beginner",
    levelColor: "bg-yellow-100 text-yellow-600",
    description: "Are carbon taxes the most effective way to combat climate change?",
    debates: 185,
  },
  {
    title: "Digital Privacy Rights",
    level: "Intermediate",
    levelColor: "bg-green-100 text-green-600",
    description:
      "Should individuals have the right to be forgotten online?",
    debates: 156,
  },
];

export default function PopularTopics() {
  return (
    <div className="container mx-auto bg-white p-6 rounded-xl mt-4 lg:ml-64 shadow">
        <div className="mb-4">
        Search for a topic or enter your own
        </div>
      <input
        type="text"
        placeholder="E.g., Universal Basic Income, Climate Change Solutions..."
        className="w-full border border-gray-300 px-4 py-2 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex items-center gap-2 mb-4">
        <FaInfoCircle className="text-gray-500" />
        <h2 className="font-semibold text-lg">Popular Topics</h2>
        <span className="text-sm bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">Trending</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topics.map((topic, idx) => (
          <div key={idx} className="border border-gray-300 rounded-xl p-4 hover:shadow-lg hover:bg-gray-100">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold">{topic.title}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full ${topic.levelColor}`}>
                {topic.level}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{topic.description}</p>

            <div className="flex justify-between text-sm text-gray-500 items-center">
              {topic.tag ? (
                <span className="flex items-center gap-1">
                  <FaUserFriends className="text-gray-400" />
                  {topic.tag}
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <FaUserFriends className="text-gray-400" />
                  {topic.debates} debates
                </span>
              )}
              <button className="text-blue-600 font-medium text-sm hover:underline">
                Select Topic
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
