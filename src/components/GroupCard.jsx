import React from "react";
import { Link } from "react-router"; 
import { FaMapMarkerAlt, FaUser, FaTags } from "react-icons/fa";

const GroupCard = ({ singleGroup, index }) => {
  const {
    _id,
    groupName,
    userName,
    location,
    hobbyCategory,
    maxMembers,
    startDate,
    imageUrl,
  } = singleGroup;

  return (
    <div
      className="bg-primary rounded-xl shadow-md p-4 flex gap-4 items-start h-full hover:shadow-xl transition duration-300"
      data-aos="zoom-in"
      data-aos-delay={50 * (index % 4)}
    >
      {/* Image */}
      <div className="w-16 h-16 rounded-full ring ring-accent overflow-hidden flex-shrink-0">
        <img
          src={imageUrl}
          alt={groupName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-between flex-grow">
        <h3 className="text-lg font-bold text-accent mb-1">{groupName}</h3>

        <div className="text-sm text-secondary/80 space-y-1 leading-snug">
          <p className="flex items-center gap-1">
            <FaTags className="text-accent" /> {hobbyCategory}
          </p>
          <p className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-accent" /> {location}
          </p>
        </div>

        <div className="mt-3 flex justify-between items-center">
          <p className="text-xs text-secondary/60 flex items-center gap-1">
            <FaUser className="text-accent" /> {userName}
          </p>
          <Link to={`/groupDetails/${_id}`}>
            <button className="bg-accent text-primary text-xs px-4 py-1 rounded-md font-semibold hover:bg-primary hover:text-accent transition">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
