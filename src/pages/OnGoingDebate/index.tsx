import HomeNavbar from "@/components/HomeNavbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import Switch from 'react-switch'
import { FiClock, FiUser, FiCalendar } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { MdOutlineLiveTv } from "react-icons/md";
type ChatMessage = {
    name: string;
    text: string;
    time: string;
};

export default function DebatePage() {
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
        { name: "Michael Johnson", text: "Dr. Richardson makes a compelling point about the urgency of carbon reduction.", time: "2m ago" },
        { name: "Amelia Lee", text: "Prof. Anderson is overlooking the economic impact of delayed action.", time: "4m ago" },
        { name: "Robert Brown", text: "Adaptation strategies are more practical for developing nations.", time: "7m ago" },
        { name: "Sarah Parker", text: "The false dichotomy here is frustrating. We clearly need both.", time: "9m ago" },
    ]);

    const [question, setQuestion] = useState("");
    const [autoScroll, setAutoScroll] = useState(true)
    const totalVotes = 2118;
    const immediateActionVotes = 0.65;
    const adaptationVotes = 0.35;

    const handleQuestionSubmit = () => {
        if (!question.trim()) return;
        alert(`Question submitted: ${question}`);
        setQuestion("");
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 lg:ml-64 flex flex-col">
                <HomeNavbar />
                <main className="container mx-auto p-6 space-y-6 flex-1 flex flex-col">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-3 text-gray-700">
                            <MdOutlineLiveTv size={28} color="#2B6CB0" />
                            <h1 className="text-xl lg:text-2xl font-light text-gray-700">Climate Change: Action vs. Adaptation</h1>
                        </div>
                        <div className="flex gap-4 items-center">
                            <span className="text-red-500 font-medium px-3 py-1 border border-red-500 rounded-full select-none">Live</span>
                            <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-1.5 rounded-md font-medium transition">Request to Speak</button>
                            <span className="text-gray-600 select-none font-light">104 Viewers</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-xl p-6 shadow">
                        <div className="flex flex-col">
                            <video className="w-full rounded-lg shadow-lg object-cover aspect-video mb-3" controls src="https://www.w3schools.com/html/mov_bbb.mp4" />
                            <p className="text-lg font-light text-gray-800">Dr. Emma Richardson</p>
                            <p className="text-sm font-light text-gray-500 mb-1">Climate Scientist, MIT</p>
                            <span className="inline-flex items-center gap-1 text-green-600 font-medium">● Speaking • 4:23</span>
                        </div>
                        <div className="flex flex-col">
                            <video className="w-full rounded-lg shadow-lg object-cover aspect-video mb-3" controls src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
                            <p className="text-lg font-light text-gray-800">Prof. James Anderson</p>
                            <p className="text-sm font-light text-gray-500 mb-1">Economist, Stanford</p>
                            <span className="inline-flex items-center gap-1 text-gray-500 font-medium">● Waiting</span>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="w-full lg:w-2/3">
                            <section className="bg-white rounded-xl p-6 shadow">
                                <h2 className="text-lg font-medium text-gray-900 mb-1">Climate Change: Action vs. Adaptation</h2>
                                <p className="text-md font-light text-gray-500 mb-4">Should global efforts focus on immediate carbon reduction or prioritize adaptation strategies to climate impacts?</p>
                                <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-3 font-light">
                                    <div className="inline-flex items-center gap-1"><FiCalendar />April 12, 2025</div>
                                    <div className="inline-flex items-center gap-1"><FiClock />90 minutes total</div>
                                    <div className="inline-flex items-center gap-1"><FiUser />Moderator: Dr. Sarah Chen</div>
                                </div>
                                <div className="flex items-center justify-between text-sm font-light mb-2">
                                    <span>Current phase: Rebuttal (2/4)</span>
                                    <span>47% complete</span>
                                </div>
                                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                                    <div className="h-2 bg-blue-600 rounded-full" style={{ width: "47%" }}></div>
                                </div>
                                <div className="grid grid-cols-4 gap-3 font-medium select-none text-sm">
                                    <button className="rounded-lg border-2 border-sky-400 bg-blue-50 text-sky-700 py-2 cursor-default">
                                        Opening <br />
                                        <span className="text-gray-400 font-light">20 min</span>
                                    </button>
                                    <button className="rounded-lg border-2 bg-blue-100 text-sky-700 py-2 cursor-default">
                                        Rebuttal <br />
                                        <span className="text-gray-400 font-light">25 min</span>
                                    </button>
                                    <button className="rounded-lg bg-gray-100 text-gray-700 py-2 cursor-default">
                                        Cross-Exam <br />
                                        <span className="text-gray-400 font-light">30 min</span>
                                    </button>
                                    <button className="rounded-lg bg-gray-100 text-gray-700 py-2 cursor-default">
                                        Closing <br />
                                        <span className="text-gray-400 font-light">15 min</span>
                                    </button>
                                </div>
                            </section>

                            <div className="flex flex-col gap-4">
                                <section className="bg-white rounded-xl p-6 shadow space-y-4">
                                    <h3 className="text-gray-900">Audience Reactions</h3>
                                    <div className="grid grid-cols-2 gap-4 text-center text-sm">
                                        <div className="border border-gray-200 rounded-lg py-4 text-green-600 select-none">
                                            <div className="flex flex-col items-center justify-center gap-2 font-semibold">
                                                <AiOutlineLike size={25} />
                                                Agree
                                            </div>
                                            <div className="text-gray-700 mt-1">1,245</div>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg py-4 text-red-600 select-none">
                                            <div className="flex flex-col  items-center justify-center gap-2 font-semibold">
                                                <AiOutlineDislike size={25} />
                                                Disagree
                                            </div>
                                            <div className="text-gray-700 mt-1">873</div>
                                        </div>
                                    </div>
                                </section>

                                <section className="bg-white rounded-xl p-6 shadow space-y-4">
                                    <h3 className="font-medium text-gray-900">Live Poll: Which approach is more effective?</h3>

                                    {/* Immediate Action */}
                                    <div className="text-sm font-light mb-1">Immediate action</div>
                                    <div className="w-full bg-blue-100 rounded-full h-6 overflow-hidden relative">
                                        <div
                                            className="bg-blue-600 h-6 rounded-full flex items-center px-3 text-white text-sm font-medium"
                                            style={{ width: `${immediateActionVotes * 100}%` }}
                                        >
                                            {Math.round(immediateActionVotes * 100)}%
                                        </div>
                                    </div>

                                    {/* Focus on Adaptation */}
                                    <div className="text-sm font-light mt-3 mb-1">Focus on adaptation</div>
                                    <div className="w-full bg-purple-100 rounded-full h-6 overflow-hidden relative">
                                        <div
                                            className="bg-purple-600 h-6 rounded-full flex items-center px-3 text-white text-sm font-medium"
                                            style={{ width: `${adaptationVotes * 100}%` }}
                                        >
                                            {Math.round(adaptationVotes * 100)}%
                                        </div>
                                    </div>

                                    <div className="text-sm text-gray-500 text-right mt-2 font-light">{totalVotes} votes</div>
                                </section>

                            </div>
                        </div>
                        <div className=" w-full lg:w-1/3  ">
                            <section className="bg-white rounded-xl p-4 shadow space-y-4 h-full flex flex-col">
                                {/* Header */}
                                <div className="flex justify-between items-center">
                                    <h3 className="font-medium text-gray-900">Live Chat</h3>
                                    <label className="flex items-center gap-2 text-sm text-gray-500 font-light">
                                        Auto-scroll
                                        <Switch
                                            onChange={setAutoScroll}
                                            checked={autoScroll}
                                            onColor="#7c3aed"
                                            offColor="#e5e7eb"
                                            onHandleColor="#fff"
                                            offHandleColor="#fff"
                                            handleDiameter={18}
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            height={20}
                                            width={40}
                                            className="ml-1"
                                        />
                                    </label>
                                </div>

                                {/* Chat Messages */}
                                <div className="flex-grow overflow-y-auto space-y-3 pr-1">
                                    {chatMessages.map((msg, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="p-4  rounded-full flex items-center justify-center bg-gradient-to-r from-[#63A7D4] to-[#F295BE] text-white font-medium text-sm"
                                            >
                                                {msg.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                                            </div>
                                            <div className="pt-4">
                                                <div className="flex gap-4">
                                                    <div className="text-md text-gray-900 font-medium">{msg.name}</div>
                                                    <div className="text-sm text-gray-500 font-light">{msg.time}</div>
                                                </div>

                                                <p className="text-md text-gray-700 font-light">{msg.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Message Input */}
                                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mt-2">
                                    <input
                                        type="text"
                                        placeholder="Type a message..."
                                        className="flex-grow px-4 py-2 text-sm focus:outline-none"
                                    />
                                    <button className="bg-gradient-to-r from-sky-500 to-pink-400 text-white px-4 py-2 text-sm font-medium">
                                        Send
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>


                    <div className="flex flex-col">


                        <section className="bg-white rounded-xl p-6 shadow flex flex-col">
                            <h3 className="font-medium text-gray-900 mb-3">Submit a Question</h3>
                            <textarea
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder="Type your question here..."
                                className="resize-none border border-gray-300 rounded-md p-3 mb-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent flex-grow font-light"
                                rows={6}
                            />
                            <div className="flex justify-between items-center">
                                <label className="inline-flex items-center gap-2 text-sm text-gray-600 select-none cursor-pointer font-light">
                                    <input type="checkbox" className="form-checkbox h-4 w-4" />
                                    Submit anonymously
                                </label>
                                <button
                                    onClick={handleQuestionSubmit}
                                    className="bg-gradient-to-r from-pink-400 to-blue-500 text-white px-5 py-2 rounded-md text-sm font-medium hover:from-pink-500 hover:to-blue-600 transition"
                                >
                                    Send
                                </button>
                            </div>
                        </section>
                    </div>

                    <div className="text-right">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition">
                            Leave Debate
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}
