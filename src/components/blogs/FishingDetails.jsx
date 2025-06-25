import React from 'react';

const FishingDetails = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Best Fishing Spots & Tips</h1>
      <p className="text-lg mb-6">
        Fishing offers relaxation and the thrill of the catch. Whether you prefer lakes, rivers, or coastal shores, here are tips for a successful outing:
      </p>
      <ul className="list-disc ml-6 mb-6">
        <li>Research local regulations and permits.</li>
        <li>Use bait that suits the local fish species.</li>
        <li>Be patient—good things come to those who wait.</li>
        <li>Go early in the morning or late in the afternoon.</li>
      </ul>
      <p className="text-gray-600">
        Don't forget to enjoy the peaceful moments of waiting. Fishing is as much about presence as it is about the catch.
      </p>
    </div>
  );
};

export default FishingDetails;
