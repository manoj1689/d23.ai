import { useState } from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { FaRegClock } from 'react-icons/fa';

const AiFeedbackPage = () => {
  // Feedback data
  const feedbackData = {
    strengths: [
      "Strong opening that clearly establishes the topic",
      "Effective use of statistics to support your argument",
      "Good pacing and clear articulation",
      "Minimal use of filler words",
      "Logical flow between privacy concerns and potential solutions",
      "Strong conclusion that summarizes key points",
    ],
    areasForImprovement: [
      "Include all key evidence points in your argument",
      "Provide more specific examples of data breaches",
      "Consider addressing potential counterarguments",
      "Add more detail about Mayo Clinic's ethical framework",
      "Reference WHO guidelines on data transparency",
      "Strengthen transition between privacy and bias sections",
    ],
    recommendations: [
      "Incorporate Mayo Clinic's ethical framework as a positive example",
      "Mention specific WHO guidelines on healthcare data transparency",
      "Add a brief personal example to connect with audience",
      "Slightly slow your pace during key statistical points",
      "Practice addressing common counterarguments",
      "Develop a more structured approach to evidence presentation",
    ],
    detailedAnalysis: {
      contentStructure: `Your argument on patient privacy concerns was well-structured and supported by compelling statistics. The opening statement effectively established the importance of the topic, and you provided a clear framework for understanding the ethical implications of AI in healthcare.`,
      deliveryPresentation: `Your delivery was clear and well-paced at 164 WPM, which falls within the optimal range. You maintained good vocal clarity (85%) and used minimal filler words (only 3 instances), which enhanced the professionalism of your presentation.`,
      evidenceUsage: `You effectively cited two key statistics (76% patient concerns and 35% increase in data breaches), which provided strong support for your privacy argument. However, you could strengthen your position by referencing Mayo Clinic's ethical framework and WHO guidelines.`,
    }
  };

  return (
    <div className="container mx-auto p-6">
      

     

      {/* Feedback Sections */}
      <div className="flex flex-col lg:flex-row mt-6 gap-4">
        <div className="bg-green-100 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-light text-green-600 mb-4">Strengths</h3>
          <ul className="list-disc pl-5">
            {feedbackData.strengths.map((strength, index) => (
              <li key={index} className="mb-2 text-sm font-light text-green-600">{strength}</li>
            ))}
          </ul>
        </div>

        <div className="bg-orange-100 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-light text-orange-600 mb-4">Areas for Improvement</h3>
          <ul className="list-disc pl-5">
            {feedbackData.areasForImprovement.map((area, index) => (
              <li key={index} className="mb-2 text-sm font-light text-orange-600">{area}</li>
            ))}
          </ul>
        </div>

        <div className="bg-sky-100 p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-light text-sky-600 mb-4">Recommendations</h3>
          <ul className="list-disc pl-5">
            {feedbackData.recommendations.map((recommendation, index) => (
              <li key={index} className="mb-2 text-sm font-light text-sky-600">{recommendation}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Detailed Feedback Analysis */}
      <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-md">
        <h3 className="text-xl font-bold mb-4">Detailed Feedback Analysis</h3>
        <hr className='text-gray-100 py-2' />
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Content & Structure</h4>
          <p className="mb-2 text-sm font-light text-gray-700">{feedbackData.detailedAnalysis.contentStructure}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-semibold">Delivery & Presentation</h4>
          <p className="mb-2 text-sm font-light text-gray-700">{feedbackData.detailedAnalysis.deliveryPresentation}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Evidence Usage</h4>
          <p className="mb-2 text-sm font-light text-gray-700">{feedbackData.detailedAnalysis.evidenceUsage}</p>
        </div>
      </div>
    </div>
  );
};

export default AiFeedbackPage;
