import React, { useState, useEffect } from "react";

const steps = [
  "Account",       // Step 1
  "Preferences",   // Step 2
  "Confirmation"   // Step 3
];

const Stepper = ({ activeStep }) => {
  const [currentStep, setCurrentStep] = useState(activeStep); // Initialize with activeStep from parent

  // Sync currentStep with activeStep when it changes
  useEffect(() => {
    setCurrentStep(activeStep);
  }, [activeStep]); // Dependency array ensures this effect runs when activeStep changes

  return (
    <div className="max-w-3xl mx-auto px-4 py-4">
      <div className="flex justify-between items-center relative">
        {/* Connecting Line */}
        <div className="absolute top-5 left-5 right-5 h-1 bg-gray-300 z-0">
          <div
            className="h-1 bg-sky-200 transition-all duration-300"
            style={{
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {steps.map((label, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col items-center flex-1 cursor-pointer"
            onClick={() => setCurrentStep(index)} // Make steps clickable
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold 
                ${index < currentStep ? "bg-gradient-to-r from-[#63A7D4] to-[#F295BE] text-white " : " text-gray-500 bg-gray-300"}
                ${index === currentStep ? "border-2 border-pink-300 text-gray-500" : ""}
              `}
            >
              {index + 1}
            </div>
            <span className="mt-2 text-sm text-center text-gray-700">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;


