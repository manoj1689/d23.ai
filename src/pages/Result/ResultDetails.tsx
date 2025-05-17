import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { FaStopwatch, FaPlayCircle, FaVolumeUp, FaRegListAlt } from 'react-icons/fa';
import { AiOutlineArrowUp } from 'react-icons/ai'
import { IoMdStopwatch } from "react-icons/io";
import { BsFastForward } from "react-icons/bs";
import { PiSpeakerSimpleHigh } from "react-icons/pi";
import { MdFormatListBulleted } from "react-icons/md";
const performanceData = {
    overallPerformance: {
        score: 85,
        maxScore: 100,
        date: "April 10, 2025 at 2:45 PM"
    },
    sessionStatistics: {
        totalDuration: "00:31:00",
        durationNote: "+5 min from avg. session",
        speakingPace: {
            value: 164,
            unit: "WPM",
            note: "Optimal range (120–180)"
        },
        clarityScore: {
            value: 85,
            note: "+7% from last session"
        },
        keyPoints: {
            achieved: 2,
            total: 4,
            note: "50% coverage"
        }
    },
    performanceComparison: {
        current: 85,
        previous: 78,
        improvement: "+7 points"
    }
};

const ResultDetails = () => {
    const { overallPerformance, sessionStatistics, performanceComparison } = performanceData;

    return (
        <div className="bg-white rounded-xl p-6 shadow-md flex flex-col md:flex-row gap-6">
            {/* Overall Performance */}
            <div className="flex-1  text-center border-r md:border-r border-gray-200">
                <div className="text-lg font-semibold mb-2">Overall Performance</div>
                <div className='flex justify-center items-center'>
                    <CountdownCircleTimer
                        isPlaying
                        duration={7} // <-- stop at 85
                        colors={['#0096FF', '#F7B801']}
                        colorsTime={[overallPerformance.score / 2, overallPerformance.score]} // adjust to 2-color transition
                        size={120}
                        strokeWidth={10}
                        rotation="counterclockwise"
                        trailColor="#87CEEB"
                    >
                        {({ remainingTime }) => {
                            const displayValue = overallPerformance.score - remainingTime;
                            return (
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-bold">{displayValue}</span>
                                    <span className="text-sm text-gray-500">
                                        out of {overallPerformance.maxScore}
                                    </span>
                                </div>
                            );
                        }}
                    </CountdownCircleTimer>
                </div>
                <div className='flex flex-col my-4'>
                    <span>Session Complete On</span>
                    <span>{overallPerformance.date}</span>
                </div>


            </div>

            {/* Session Statistics */}
            <div className="flex-[2]">
                <div className="text-lg font-semibold mb-4">Session Statistics</div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-50 rounded-md p-4 text-center">
                        <div className="text-md font-light flex items-center justify-center gap-2">
                            <span className='p-2 bg-sky-100 rounded-full'><IoMdStopwatch size={20} color='#0096FF' /> </span> Total Duration
                        </div>
                        <div className="text-xl font-bold">{sessionStatistics.totalDuration}</div>
                        <div className="text-xs text-gray-500">{sessionStatistics.durationNote}</div>
                    </div>

                    <div className="bg-gray-50 rounded-md p-4 text-center">
                        <div className="text-md font-light flex items-center justify-center gap-2">
                            <span className='p-2 bg-sky-100 rounded-full'><BsFastForward size={20} color='#0096FF' /> </span> Speaking Pace
                        </div>
                        <div className="text-xl font-bold">
                            {sessionStatistics.speakingPace.value} {sessionStatistics.speakingPace.unit}
                        </div>
                        <div className="text-xs text-green-500">{sessionStatistics.speakingPace.note}</div>
                    </div>

                    <div className="bg-gray-50 rounded-md p-4 text-center">

                        <div className="text-md font-light flex items-center justify-center gap-2">
                            <span className='p-2 bg-sky-100 rounded-full'><PiSpeakerSimpleHigh size={20} color='#0096FF' /> </span> Clarity Score
                        </div>
                        <div className="text-xl font-bold">{sessionStatistics.clarityScore.value}%</div>
                        <div className="text-xs text-green-500">{sessionStatistics.clarityScore.note}</div>
                    </div>

                    <div className="bg-gray-50 rounded-md p-4 text-center">
                         <div className="text-md font-light flex items-center justify-center gap-2">
                            <span className='p-2 bg-sky-100 rounded-full'><MdFormatListBulleted  size={20} color='#0096FF' /> </span> Key Points
                        </div>
                       
                        <div className="text-xl font-bold">
                            {sessionStatistics.keyPoints.achieved}/{sessionStatistics.keyPoints.total}
                        </div>
                        <div className="text-xs text-yellow-500">{sessionStatistics.keyPoints.note}</div>
                    </div>
                </div>

                {/* Performance Comparison */}
                <div className="mt-6 text-md text-gray-600 bg-gray-50 rounded-2xl p-4">
                    <div className="font-light mb-2">Performance Comparison</div>
                    <div className="flex gap-4 text-sm items-center">
                        <span className="text-purple-700">●</span> Current Session: <strong>{performanceComparison.current}/100</strong>
                        <span className="text-gray-500">●</span> Previous Session: <strong>{performanceComparison.previous}/100</strong>
                        <span className="text-green-600 flex items-center gap-1">
                            <AiOutlineArrowUp /> {performanceComparison.improvement}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultDetails;
