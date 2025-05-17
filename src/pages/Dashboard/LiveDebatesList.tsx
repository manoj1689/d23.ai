import React from 'react';

const liveDebates = [
  {
    title: 'Social Media Regulation',
    style: 'Oxford Style',
    viewers: 28,
    liveFor: '14 minutes',
    avatars: [
      'https://i.pravatar.cc/40?img=1',
      'https://i.pravatar.cc/40?img=2',
    ],
  },
  {
    title: 'Climate Policy Debate',
    style: 'Lincoln-Douglas',
    viewers: 46,
    liveFor: '9 minutes',
    avatars: [
      'https://i.pravatar.cc/40?img=3',
      'https://i.pravatar.cc/40?img=4',
    ],
  },
  {
    title: 'AI in Education',
    style: 'Parliamentary',
    viewers: 19,
    liveFor: '22 minutes',
    avatars: [
      'https://i.pravatar.cc/40?img=5',
      'https://i.pravatar.cc/40?img=6',
    ],
  },
  {
    title: 'Healthcare Reform',
    style: 'Town Hall',
    viewers: 31,
    liveFor: '5 minutes',
    avatars: [
      'https://i.pravatar.cc/40?img=7',
      'https://i.pravatar.cc/40?img=8',
    ],
  },
];

const LiveNowDebates = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow w-full  mx-auto my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg lg:text-2xl font-semibold">Live Now</h2>
        <button className="text-md text-sky-500 font-light hover:underline cursor-pointer">View All</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {liveDebates.map((debate, idx) => (
          <div key={idx} className="rounded-2xl border border-gray-300 p-4  flex flex-col justify-between">
            <div className="flex items-center space-x-2 mb-2">
              {debate.avatars.map((avatar, i) => (
                <img key={i} src={avatar} alt="participant" className="w-8 h-8 rounded-full border-2 border-white -ml-4 first:ml-0" />
              ))}
              <span className="ml-auto bg-red-100 text-red-500 font-light text-xs px-2 py-0.5 rounded-full">LIVE</span>
            </div>
            <div className="font-medium text-lg">{debate.title}</div>
            <div className="text-sm font-light text-gray-500">{debate.style} • {debate.viewers} viewers</div>
            <div className='flex justify-between items-center mt-8 '>
            <div className="text-sm text-gray-400 mb-3">Live for {debate.liveFor}</div>
            <button className="bg-gradient-to-r from-[#63A7D4] to-[#F295BE] text-white py-2 px-4 rounded-lg text-sm self-start">Join</button>
            </div>
         
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveNowDebates;
