import React, { useState } from "react";
import { FaPlus, FaLock, FaVideo } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { useRouter } from "next/navigation";
export default function CreateDebatePage() {
  const router =useRouter()
  const [showAIModal, setShowAIModal] = useState(false);
  const [showMatchingModal, setShowMatchingModal] = useState(false);
  const [showRoomModal, setShowRoomModal] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Create Debate */}
        <div className="flex flex-col h-64 bg-[#FFA7A7] rounded-2xl p-6 text-neutral-800 hover:shadow-lg transition-all justify-between">
          <div className="w-12 h-12 bg-white/40 rounded-full flex items-center justify-center mb-4">
            <FaPlus size={20} color="#A14949" />
          </div>
          <div>
            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              Create Debate
            </h4>
            <p className="text-sm md:text-base lg:text-lg font-light mb-4">
              Set up a new debate with custom topics and formats
            </p>
          </div>
          <button
            onClick={() =>router.push('/CreateDebate')}
            className="flex text-black text-sm md:text-base lg:text-lg font-medium items-center gap-2"
          >
            Get Started <IoArrowForward size={20} />
          </button>
        </div>

        {/* Practice with AI */}
        <div className="flex flex-col h-64 bg-[#62E9D7] rounded-2xl p-6 text-neutral-800 hover:shadow-lg transition-all justify-between">
          <div className="w-12 h-12 bg-white/40 rounded-full flex items-center justify-center mb-4">
            <FaLock size={18} color="#14847B" />
          </div>
          <div>
            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              Practice with AI
            </h4>
            <p className="text-sm md:text-base lg:text-lg font-light mb-4">
              Improve your skills with our AI-powered debate assistant
            </p>
          </div>
          <button
            onClick={() => setShowAIModal(true)}
            className="flex text-black text-sm md:text-base lg:text-lg font-medium items-center gap-2"
          >
            Start Practice <IoArrowForward size={20} />
          </button>
        </div>

        {/* Join Live Debate */}
        <div className="flex flex-col h-64 bg-[#FFF3C1] rounded-2xl p-6 text-neutral-800 hover:shadow-lg transition-all justify-between">
          <div className="w-12 h-12 bg-white/40 rounded-full flex items-center justify-center mb-4">
            <FaVideo size={18} color="#E49D00" />
          </div>
          <div>
            <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
              Join Live Debate
            </h4>
            <p className="text-sm md:text-base font-light lg:text-lg mb-4">
              Browse and join ongoing public debates
            </p>
          </div>
          <button
            onClick={() => setShowMatchingModal(true)}
            className="flex text-black text-sm md:text-base lg:text-lg font-medium items-center gap-2"
          >
            Explore Live <IoArrowForward size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

