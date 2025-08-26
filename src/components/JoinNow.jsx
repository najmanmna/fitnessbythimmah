import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function JoinNowEstimator({ showModal, setShowModal }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    currentWeight: "",
    goal: "",
    frequency: "",
  });

  const handleChange = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const closeModal = () => {
    setShowModal(false);
    setStep(1);
    setAnswers({ currentWeight: "", goal: "", frequency: "" });
  };

  const getResult = () => {
    if (answers.goal === "Lose Weight") {
      return `You can lose around 5-7kg in 4 weeks!`;
    } else if (answers.goal === "Gain Muscle") {
      return `You can gain 2-3kg of muscle in 4 weeks!`;
    } else if (answers.goal === "Stay Fit") {
      return `You will maintain an active and healthy lifestyle!`;
    }
    return `You can achieve amazing results in 4 weeks!`;
  };

  const whatsappLink = `https://wa.me/+94773285022?text=Hi%20Trainer,%20I%20want%20to%20join.%20My%20current%20weight:%20${answers.currentWeight},%20Goal:%20${answers.goal},%20Workout%20Frequency:%20${answers.frequency}`;

  // Progress calculation
  const progress = (step / 4) * 100;

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#1a1a1a] text-white rounded-2xl shadow-2xl w-full max-w-lg p-6 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
            >
              ✕
            </button>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
              <div
                className="bg-red-500 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Steps */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Step 1: Current Weight</h2>
                <input
                  type="number"
                  placeholder="Enter your weight (kg)"
                  value={answers.currentWeight}
                  onChange={(e) => handleChange("currentWeight", e.target.value)}
                  className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg p-3 mb-4 focus:outline-none focus:border-red-500"
                />
                <button
                  disabled={!answers.currentWeight}
                  onClick={handleNext}
                  className={`w-full py-3 rounded-lg font-semibold ${
                    answers.currentWeight
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-gray-500 cursor-not-allowed"
                  }`}
                >
                  Next
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Step 2: Your Goal</h2>
                <div className="space-y-3">
                  {["Lose Weight", "Gain Muscle", "Stay Fit"].map((goal) => (
                    <button
                      key={goal}
                      onClick={() => {
                        handleChange("goal", goal);
                        handleNext();
                      }}
                      className={`w-full py-3 rounded-lg font-semibold ${
                        answers.goal === goal
                          ? "bg-red-500"
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleBack}
                  className="mt-4 text-gray-400 hover:text-white"
                >
                  Back
                </button>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Step 3: Workout Frequency</h2>
                <select
                  value={answers.frequency}
                  onChange={(e) => handleChange("frequency", e.target.value)}
                  className="w-full bg-gray-800 text-white border border-gray-600 rounded-lg p-3 mb-4 focus:outline-none focus:border-red-500"
                >
                  <option value="">Select</option>
                  <option value="2-3 times/week">2-3 times/week</option>
                  <option value="4-5 times/week">4-5 times/week</option>
                  <option value="Everyday">Everyday</option>
                </select>
                <div className="flex justify-between">
                  <button
                    onClick={handleBack}
                    className="text-gray-400 hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    disabled={!answers.frequency}
                    onClick={handleNext}
                    className={`px-5 py-2 rounded-lg ${
                      answers.frequency
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-gray-500 cursor-not-allowed"
                    }`}
                  >
                    See Result
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Your Estimated Progress</h2>
                <p className="text-lg mb-6">{getResult()}</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg inline-block hover:bg-green-600 transition"
                >
                  Start!
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
