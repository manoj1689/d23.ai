import { useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { FaRegClock } from 'react-icons/fa';

const RecordingPage = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Function to toggle the video playing state
  const toggleVideo = () => {
    setVideoPlaying(!videoPlaying);
  };

  return (
    <div className="container mx-auto p-6">


      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='w-full lg:w-2/3 auto bg-white p-6 rounded-lg shadow-md'>
          {/* Session Video Player */}
          <div className="">
            <video
              width="100%"
              height="auto"
              controls
              className="rounded-lg"
              onClick={toggleVideo}
              style={{ cursor: "pointer" }}
            >
              <source src="path_to_your_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4  my-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Download Recording
            </button>
            <button className="bg-gray-300 text-gray-600 px-6 py-2 rounded-lg hover:bg-gray-400">
              Share
            </button>
            <button className="bg-gray-300 text-gray-600 px-6 py-2 rounded-lg hover:bg-gray-400">
              Export Transcript
            </button>
          </div>

        </div>
        <div className='flex flex-col w-full lg:w-1/3 h-auto bg-white p-6 rounded-lg shadow-md'>
          {/* Recording Details */}
          <div className="flex flex-col space-y-6 ">
            <h3 className="text-xl font-semibold mb-4">Recording Details</h3>
            <div className="flex justify-between">
              <div className="w-1/2">
                <p className="text-md text-gray-500">Recording Name</p>
                <p className="text-md font-light">AI Healthcare Ethics - Practice 1</p>
              </div>
              <div className="w-1/2">
                <p className="text-md text-gray-500">Date & Time</p>
                <p className="text-md font-light">April 10, 2025 at 2:45 PM</p>
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <div className="w-1/2">
                <p className="text-md text-gray-500">Duration</p>
                <p className="text-md font-light">00:31:00</p>
              </div>
              <div className="w-1/2">
                <p className="text-md text-gray-500">File Size</p>
                <p className="text-md font-light">124.5 MB</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-md text-gray-500">Tags</p>
              <div className="flex gap-2">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">Ethics</span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">Healthcare</span>
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Privacy</span>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-500">Notes</p>
              <p className="text-md text-gray-700 bg-white ">First practice session on patient privacy concerns. Need to work on including all key evidence points and addressing potential counterarguments.</p>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default RecordingPage;
