import React from "react";

const HobbyCard = ({ hobby }) => {
  const { name, image, description } = hobby;

  return (
    <div
      data-tooltip-id="global-tooltip"
      data-tooltip-content={`Join the ${name} group to connect with like-minded people!`}
      className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default HobbyCard;
