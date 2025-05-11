import React, { useState } from 'react';
import Select from 'react-select';
import { FaTimes } from 'react-icons/fa';

const formatOptions = [
  { value: 'Oxford Style', label: 'Oxford Style' },
  { value: 'Parliamentary', label: 'Parliamentary' },
  { value: 'Cross-Examination', label: 'Cross-Examination' },
  { value: 'Lincoln-Douglas', label: 'Lincoln-Douglas' },
];

const difficultyOptions = [
  { value: 'Beginner', label: 'Beginner' },
  { value: 'Intermediate', label: 'Intermediate' },
  { value: 'Advanced', label: 'Advanced' },
  { value: 'Expert', label: 'Expert' },
];

const participantOptions = [
  { value: 2, label: '2 participants' },
  { value: 4, label: '4 participants' },
  { value: 6, label: '6 participants' },
  { value: 8, label: '8 participants' },
];

const durationOptions = [
  { value: 15, label: '15 minutes' },
  { value: 30, label: '30 minutes' },
  { value: 45, label: '45 minutes' },
  { value: 60, label: '1 hour' },
];

const CreateDebateRoomPage = () => {
  // Inputs
  const [roomName, setRoomName] = useState('');
  const [topic, setTopic] = useState('');
  const [format, setFormat] = useState(formatOptions[0]);
  const [difficulty, setDifficulty] = useState(difficultyOptions[0]);
  const [maxParticipants, setMaxParticipants] = useState(participantOptions[1]);
  const [duration, setDuration] = useState(durationOptions[1]);

  // Headings
  const [roomNameHeading] = useState('Room Name');
  const [topicHeading] = useState('Debate Topic');
  const [formatHeading] = useState('Format');
  const [difficultyHeading] = useState('Difficulty');
  const [participantsHeading] = useState('Maximum Participants');
  const [durationHeading] = useState('Duration');

  // Mock Data for Existing Rooms
  const [filteredRooms] = useState([
    {
      id: '1',
      name: 'Climate Change',
      topic: 'Is climate change reversible?',
      format: 'Oxford Style',
      difficulty: 'Beginner',
      capacity: 4,
      status: 'active',
      participants: [
        { name: 'Alice', avatar: 'A' },
        { name: 'Bob', avatar: 'B' },
      ],
    },
    {
      id: '2',
      name: 'Tech Future',
      topic: 'AI will take over the world?',
      format: 'Lincoln-Douglas',
      difficulty: 'Intermediate',
      capacity: 4,
      status: 'scheduled',
      participants: [{ name: 'Charlie', avatar: 'C' }],
    },
  ]);

  const handleJoinRoom = (roomId: string) => {
    console.log(`Joining room with ID: ${roomId}`);
    // Add navigation or join logic here
  };

  return (
    <div className="bg-white rounded-3xl p-8 mx-auto">
      <div className="flex items-center justify-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Create Group Debate</h3>
        
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-lg font-light text-gray-700 mb-2">{roomNameHeading}</label>
          <input
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            placeholder="Enter a name for your debate room..."
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600/20"
          />
        </div>

        <div>
          <label className="block text-lg font-light text-gray-700 mb-2">{topicHeading}</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter the topic for discussion..."
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600/20"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6 bg-orange-100 rounded-2xl p-4">
          {/* First column group */}
          <div className="flex-1 space-y-6">
            <div>
              <label className="block text-lg font-light text-gray-700 mb-2">{formatHeading}</label>
              <Select
                options={formatOptions}
                value={format}
                onChange={(selected) => setFormat(selected!)}
                classNamePrefix="react-select"
              />
            </div>

            <div>
              <label className="block text-lg font-light text-gray-700 mb-2">{difficultyHeading}</label>
              <Select
                options={difficultyOptions}
                value={difficulty}
                onChange={(selected) => setDifficulty(selected!)}
                classNamePrefix="react-select"
              />
            </div>
          </div>

          {/* Second column group */}
          <div className="flex-1 space-y-6">
            <div>
              <label className="block text-lg font-light text-gray-700 mb-2">{participantsHeading}</label>
              <Select
                options={participantOptions}
                value={maxParticipants}
                onChange={(selected) => setMaxParticipants(selected!)}
                classNamePrefix="react-select"
              />
            </div>

            <div>
              <label className="block text-lg font-light text-gray-700 mb-2">{durationHeading}</label>
              <Select
                options={durationOptions}
                value={duration}
                onChange={(selected) => setDuration(selected!)}
                classNamePrefix="react-select"
              />
            </div>
          </div>
        </div>
  {/* Existing Rooms Section */}
  {filteredRooms.length > 0 && (
        <div className="mt-10">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Existing Debate Rooms</h4>
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {filteredRooms.map((room) => (
              <div key={room.id} className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-lg text-gray-800">{room.name}</h5>
                  <span className={`px-2 py-1 rounded-full text-sm ${room.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {room.status === "active" ? "Active" : "Scheduled"}
                  </span>
                </div>
                <p className="text-md text-gray-600 mb-3">{room.topic}</p>
                <div className="grid grid-cols-3 gap-2 text-sm text-gray-500 mb-3">
                  <div>{room.format}</div>
                  <div>{room.difficulty}</div>
                  <div>
                    {room.participants.length}/{room.capacity} participants
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {room.participants.map((participant, idx) => (
                      <div
                        key={idx}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white text-xs font-semibold border-2 border-white"
                        title={participant.name}
                      >
                        {participant.avatar}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => handleJoinRoom(room.id)}
                    className="bg-gradient-to-r from-[#63A7D4] to-[#F295BE] text-white px-3 py-1.5 rounded-lg hover:scale-105 transition-all text-sm"
                  >
                    Join Room
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

        <button
          onClick={() => {
            console.log({
              roomName,
              topic,
              format,
              difficulty,
              maxParticipants,
              duration,
            });
          }}
           className="w-full py-3 rounded-lg bg-gradient-to-r from-[#63A7D4] to-[#F295BE] text-white text-md font-light hover:scale-105"
        >
          Create Room
        </button>
      </div>

    
    </div>
  );
};

export default CreateDebateRoomPage;
