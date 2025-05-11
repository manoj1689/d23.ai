import React from 'react';
import { Doughnut} from 'react-chartjs-2';
import { IoBulbOutline } from "react-icons/io5";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const AiInsight = () => {
  // Donut chart data
  const donutData = {
    labels: ['Logical', 'Statistical', 'Emotional', 'Anecdotal', 'Other'],
    datasets: [
      {
        label: 'Debate Content Breakdown',
        data: [30, 20, 15, 10, 25],
        backgroundColor: [
          '#3B82F6', // Logical
          '#10B981', // Statistical
          '#F59E0B', // Emotional
          '#EF4444', // Anecdotal
          '#A855F7', // Other
        ],
        borderWidth: 1,
      },
    ],
  };

  const donutOptions = {
    cutout: '40%',
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
    
  };

  // Logic vs Emotion Bar data
  const logicPercentage = 72;
  const emotionPercentage = 28;

  const tips = [
    'Try using more statistical evidence to strengthen your economic arguments.',
    'Your rebuttals could be more effective with direct counter-examples.',
    'Consider slowing your speech rate by 10% for better clarity.',
  ];



  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Donut Chart */}
      <div className="bg-white rounded-xl  shadow p-6 ">
        <h2 className="text-lg font-semibold mb-4 text-center">Debate Content Types</h2>
        <Doughnut data={donutData} options={donutOptions}   />
      </div>

      {/* Logic vs Emotion Balance */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between text-md font-[17px] mb-2">
          <span>Logic vs. Emotion Balance</span>
          <span>{logicPercentage}:{emotionPercentage}</span>
        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-blue-500 float-left"
            style={{ width: `${logicPercentage}%` }}
          />
          <div
            className="h-full bg-pink-400 float-left"
            style={{ width: `${emotionPercentage}%` }}
          />
        </div>

        {/* AI Tips */}
        <h3 className="text-md font-semibold mb-2">Latest AI Tips</h3>
        <ul className="space-y-2">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2  text-md text-gray-600">
              <span className="text-blue-500 p-2 rounded-full bg-gray-100"><IoBulbOutline size={20}/></span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

    
    </div>
  );
};

export default AiInsight;
