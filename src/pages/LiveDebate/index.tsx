"use client";

import { useEffect, useState } from "react";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { FaArrowLeft, FaBell } from "react-icons/fa";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import HomeNavbar from "@/components/HomeNavbar";

const topicOptions = ["All", "Politics", "Technology", "Environment", "Economy", "Education", "Healthcare", "Ethics"];
const formatOptions = ["All Formats", "Oxford Style", "Lincoln-Douglas", "Parliamentary", "Town Hall"];
const sortOptions = ["Most Viewers", "Recently Started", "Trending"];

interface Debate {
  id: number;
  title: string;
  topic: string;
  format: string;
  image:string;
  viewers: number;
  time: string;
  description?: string;
  timeInfo?: string;
  startTime?: string;
  trendingScore?: number;
  speakers: string[];
  participants?: string[];
}

const LiveDebatesPage = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDebates, setFilteredDebates] = useState<Debate[]>([]);
  const [topic, setTopic] = useState("All");
  const [format, setFormat] = useState("All Formats");
  const [sortBy, setSortBy] = useState("Most Viewers");
  const [liveDebates, setLiveDebates] = useState<Debate[]>([]);

  useEffect(() => {
    fetch('/data/liveDebates.json')
      .then((res) => res.json())
      .then((data) => setLiveDebates(data));
  }, []);

  useEffect(() => {
    let debates = [...liveDebates];

    if (topic !== "All") {
      debates = debates.filter((d) => d.topic === topic);
    }

    if (format !== "All Formats") {
      debates = debates.filter((d) => d.format === format);
    }

    if (searchQuery) {
      debates = debates.filter((d) =>
        d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.participants?.some((p: string) => p.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    switch (sortBy) {
      case "Most Viewers":
        debates.sort((a, b) => b.viewers - a.viewers);
        break;
      case "Recently Started":
        debates.sort((a, b) => new Date(b.startTime || "").getTime() - new Date(a.startTime || "").getTime());
        break;
      case "Trending":
        debates.sort((a, b) => (b.trendingScore || 0) - (a.trendingScore || 0));
        break;
    }

    setFilteredDebates(debates);
  }, [liveDebates, topic, format, sortBy, searchQuery]);

  const handleSearch = (string: string) => {
    setSearchQuery(string);
  };

  const searchItems = liveDebates.map((debate) => ({
    id: debate.id,
    name: debate.title,
  }));

  const renderDebates = () => (
    <div id="events" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredDebates.map((debate, idx) => (
        <div key={idx} className="bg-white shadow-md rounded-xl flex flex-col justify-between ">
          <div className="relative rounded-2xl">
            <img src={debate.image} alt={debate.title} className="w-full h-40 object-cover rounded-t-xl" />
            
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                🔴 LIVE
              </div>
            
            <div className="absolute top-2 right-2 text-white bg-stone-800 py-1 px-2 rounded-full text-sm">
               {debate.viewers} viewers
            </div>
          </div>
          <div className="p-4"> 
          <div>
            <h3 className="font-semibold text-gray-800 text-lg mb-1">{debate.title}</h3>
            <div className="text-xs text-blue-600 bg-blue-100 inline-block px-2 py-0.5 rounded-full mb-2">
              {debate.format}
            </div>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">{debate.description}</p>
            
          </div>
          <div className="flex justify-between items-center mt-auto pt-2">
            <div><p className="text-xs text-gray-400 mb-3">{debate.timeInfo}</p></div>
            <div className="flex -space-x-2">
              {debate.speakers.map((src: string, i: number) => (
                <img
                  key={i}
                  src={src}
                  className="w-6 h-6 rounded-full border border-white"
                  alt="speaker"
                />
              ))}
            </div>
           
          </div>
          <div>
          <button className="flex w-full mt-4 justify-center items-center gap-2 bg-gradient-to-l from-[#F295BE] to-[#63A7D4] text-white text-sm px-4 py-2 rounded-lg transition">
              <MdOutlineVideoCameraFront size={20} /> Join Debate
            </button>
          </div>
          </div>
          
         
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Sidebar />
      <div className="lg:ml-64 min-h-screen bg-gray-50">
      <div>
        <HomeNavbar/>
      </div>

        <div className="container mx-auto p-6">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* <div className="flex justify-end">
              <button className="p-4 bg-sky-500 text-white rounded-lg shadow" onClick={() => router.push("/AddTopics")}>
                Add Topic
              </button>
            </div> */}

            <ReactSearchAutocomplete
              items={searchItems}
              onSearch={handleSearch}
              fuseOptions={{ keys: ['name'] }}
              resultStringKeyName="name"
              placeholder="Search for debates by topic, participants..."
              styling={{
                height: "44px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            />

            {/* Explore Filters */}
            <div className="mb-6 space-y-4">
              {/* Topics */}
              <div>
                <span className="font-semibold text-gray-700 mr-2">Topics:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {topicOptions.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTopic(t)}
                      className={`px-3 py-1 text-sm rounded-full border ${topic === t ? 'bg-blue-500 text-white' : 'border-gray-300 bg-white hover:bg-blue-100'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Format */}
              <div>
                <span className="font-semibold text-gray-700 mr-2">Format:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {formatOptions.map((f) => (
                    <button
                      key={f}
                      onClick={() => setFormat(f)}
                      className={`px-3 py-1 text-sm rounded-full border ${format === f ? 'bg-blue-500 text-white' : 'border-gray-300 bg-white hover:bg-blue-100'}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div>
                <span className="font-semibold text-gray-700 mr-2">Sort by:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSortBy(option)}
                      className={`px-3 py-1 text-sm rounded-full border ${sortBy === option ? 'bg-blue-500 text-white' : 'border-gray-300 bg-white hover:bg-blue-100'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {renderDebates()}
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveDebatesPage;
