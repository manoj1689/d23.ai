import React from 'react';
import { FiCheck, FiClock } from 'react-icons/fi';

const invitations = [
  {
    debate: 'Educational Reform',
    style: 'Parliamentary',
    from: 'Jessica Liu',
    avatar: 'https://i.pravatar.cc/40?img=10',
    date: 'Apr 14, 2025',
    time: '2:00 PM',
  },
  {
    debate: 'Nuclear Energy',
    style: 'Oxford Style',
    from: 'David Wilson',
    avatar: 'https://i.pravatar.cc/40?img=11',
    date: 'Apr 16, 2025',
    time: '10:30 AM',
  },
  {
    debate: 'Digital Privacy',
    style: 'Lincoln-Douglas',
    from: 'Sophia Martinez',
    avatar: 'https://i.pravatar.cc/40?img=12',
    date: 'Apr 18, 2025',
    time: '3:15 PM',
  },
];

const InvitationRequests = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg lg:text-2xl font-semibold">Invitations & Requests</h2>
        <span className="bg-pink-100 text-pink-600 text-sm font-light px-3 py-1 rounded-full">
          {invitations.length} New
        </span>
      </div>

      <div className="overflow-x-auto w-full">
        <div className="min-w-[800px] lg:min-w-[1000px]">
          {/* Column Headings */}
          <div className="flex items-center justify-between py-2 border-b text-gray-600 text-sm font-semibold">
            <div className="w-1/3 shrink-0">Debate</div>
            <div className="w-1/4 shrink-0">From</div>
            <div className="w-1/4 shrink-0">Time</div>
            <div className="w-1/4 shrink-0 text-right">Action</div>
          </div>

          {/* Invitation Rows */}
          <div className="divide-y space-y-6 divide-gray-200">
            {invitations.map((item, idx) => (
              <div
                key={idx}
                className="flex py-4 w-full items-center justify-between"
              >
                {/* Debate Info */}
                <div className="w-1/3 shrink-0">
                  <div className="font-medium text-lg text-gray-800">
                    {item.debate}
                  </div>
                  <div className="text-sm font-light text-gray-500">{item.style}</div>
                </div>

                {/* From Info */}
                <div className="w-1/4 flex items-center space-x-2 shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.from}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="text-md font-light text-gray-800">{item.from}</div>
                </div>

                {/* Date/Time */}
                <div className="w-1/4 shrink-0">
                  <div className="text-md font-light text-gray-900">{item.date}</div>
                  <div className="text-sm font-light text-gray-500">{item.time}</div>
                </div>

                {/* Actions */}
                <div className="w-1/4 flex space-x-2 justify-end shrink-0">

                  <button className="flex items-center gap-1 bg-gradient-to-r from-[#63A7D4] to-[#F295BE] text-white text-sm px-4 py-1.5 rounded-md shadow-sm hover:opacity-90 transition">
                    <FiCheck className="text-base" />
                    Accept
                  </button>

                  <button className="flex items-center gap-1 border border-gray-300 text-sm px-3 py-1.5 rounded-md text-gray-700 hover:bg-gray-100 transition">
                    <FiClock className="text-base" />
                    Suggest Time
                  </button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default InvitationRequests;
