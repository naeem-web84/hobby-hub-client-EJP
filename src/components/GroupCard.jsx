import React from 'react';
import { Link } from 'react-router';

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
    <tr className="hover:bg-blue-50 transition duration-300">
      <td className="p-4 font-semibold text-blue-600 text-lg">{index + 1}</td>
      <td className="p-4">
        <img
          src={imageUrl}
          alt={groupName}
          className="w-16 h-16 object-cover rounded-lg shadow-md mx-auto"
        />
      </td>
      <td className="p-4">{groupName}</td>
      <td className="p-4">{hobbyCategory}</td>
      <td className="p-4">{location}</td>
      <td className="p-4">{maxMembers}</td>
      <td className="p-4">{startDate}</td>
      <td className="p-4">{userName}</td>
      <td className="p-4">
        <Link to={`/groupDetails/${_id}`}>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-md">
            See More
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default GroupCard;
