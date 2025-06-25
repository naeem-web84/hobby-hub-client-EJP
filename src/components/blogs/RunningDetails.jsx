import React from 'react';

const RunningDetails = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Running for Beginners: A Complete Guide</h1>
      <p className="text-lg mb-6">
        Running is one of the simplest yet most effective ways to improve your health. Here are a few essential tips for new runners:
      </p>
      <ul className="list-disc ml-6 mb-6">
        <li>Start slow and build endurance gradually.</li>
        <li>Choose proper running shoes for your foot type.</li>
        <li>Warm up before, and stretch after your runs.</li>
        <li>Stay hydrated and track your progress.</li>
      </ul>
      <p className="text-gray-600">
        Consistency is key—running even twice a week can have noticeable benefits. Stick with it and enjoy the journey!
      </p>
    </div>
  );
};

export default RunningDetails;
