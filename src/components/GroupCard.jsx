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
      className="bg-primary rounded-xl shadow-md p-4 flex gap-4 items-start hover:shadow-xl transition duration-300"
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
      <div className="flex flex-col justify-between flex-grow gap-2">
        {/* Title */}
        <h3 className="text-lg font-bold text-accent leading-snug">{groupName}</h3>

        {/* Meta Info */}
        <div className="text-sm text-secondary/80 space-y-1">
          <p className="flex items-center gap-1">
            <FaTags className="text-accent" /> {hobbyCategory}
          </p>
          <p className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-accent" /> {location}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-2 flex justify-between items-center flex-wrap gap-2">
          <p className="text-xs text-secondary/60 flex items-center gap-1">
            <FaUser className="text-accent" /> {userName}
          </p>

          <Link to={`/groupDetails/${_id}`}>
            <button className="bg-accent text-primary text-sm px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-accent transition duration-300">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
