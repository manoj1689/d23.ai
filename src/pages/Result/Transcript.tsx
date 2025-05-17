import { useState } from 'react';
import { FaRegClock } from 'react-icons/fa';
import { IoArrowBackOutline } from 'react-icons/io5';

const TranscriptPage = () => {
    const [transcript, setTranscript] = useState([
        { time: '00:05', text: 'Thank you for the opportunity to discuss this important topic today.' },
        { time: '00:08', text: "I'd like to begin by addressing one of the most critical ethical concerns regarding AI in healthcare: patient privacy." },
        { time: '00:15', text: 'AI systems in healthcare collect and process vast amounts of sensitive patient data, raising significant privacy concerns that must be addressed.' },
        { time: '00:23', text: 'Recent studies show that 76% of patients express serious concerns about how their medical data is being accessed and used by AI systems.' },
        { time: '00:31', text: 'Furthermore, healthcare data breaches have increased by 35% in 2024 alone, highlighting the vulnerability of these systems.' },
        { time: '00:42', text: 'This creates a significant ethical dilemma: how do we balance the potential benefits of AI in healthcare with the fundamental right to privacy?' },
        { time: '00:53', text: 'Um, one approach is to implement robust data protection frameworks that give patients greater control over their information.' },
        { time: '01:05', text: 'These frameworks should include clear consent mechanisms, data minimization principles, and strong security measures.' },
        { time: '01:18', text: 'When patients understand how their data is being used and have control over that usage, they’re more likely to trust AI healthcare systems.' },
        { time: '01:32', text: 'Another important consideration is the potential for bias in AI algorithms, which can lead to disparities in healthcare outcomes.' },
        { time: '01:45', text: 'This is particularly concerning when these algorithms are trained on datasets that may not be representative of diverse populations.' }
    ]);

    return (
        <div className="container mx-auto p-6">
      



            {/* Full Transcript */}
            <div className='bg-gray-50 p-4 rounded-2xl'>
                {transcript.map((item, index) => (
                    <div key={index} className="mb-3">
                        <p className="font-semibold text-sm text-gray-500">{item.time}</p>
                        <p className={`text-md ${index === 2 || index === 3 ? 'bg-blue-100 p-2 rounded-lg' : 'text-gray-700'}`}>
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Action buttons for Copy/Download */}
            <div className="mt-6 flex gap-4">
                <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg">Copy</button>
                <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg">Download</button>
            </div>
        </div>

    );
};

export default TranscriptPage;
