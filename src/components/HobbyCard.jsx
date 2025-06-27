import React from "react";

const HobbyCard = ({ hobby }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md border border-transparent transition-all duration-300 p-4 flex transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/30"
      style={{ height: "220px", maxHeight: "220px", minHeight: "220px" }}
    >
      {/* Image */}
      <img
        src={hobby.image}
        alt={hobby.name}
        className="w-24 h-24 object-cover rounded-md flex-shrink-0 border border-accent/30"
      />

      {/* Content */}
      <div className="ml-4 flex flex-col justify-center flex-grow">
        <h3 className="text-lg font-semibold text-primary mb-1 truncate">
          {hobby.name}
        </h3>
        <p className="text-sm text-primary/80 line-clamp-4">
          {hobby.description}
        </p>
      </div>
    </div>
  );
};

export default HobbyCard;
