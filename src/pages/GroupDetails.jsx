import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import {
  FaTags,
  FaMapMarkerAlt,
  FaUsers,
  FaCalendarAlt,
  FaUserCircle,
} from "react-icons/fa";

const GroupDetails = () => {
  const group = useLoaderData();
  const navigate = useNavigate();

  if (!group) {
    return (
      <p className="text-center text-red-500 mt-20">Group not found.</p>
    );
  }

  const {
    groupName,
    imageUrl,
    hobbyCategory,
    location,
    maxMembers,
    startDate,
    userName,
    description,
  } = group;

   const isExpired = new Date(startDate) < new Date();

   const handleJoin = () => {
 
    Swal.fire({
      title: "Joined Successfully!",
      text: `You have joined "${groupName}"`,
      icon: "success",
      confirmButtonColor: "#6366f1",
      confirmButtonText: "Go to All Groups",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/allGroups"); 
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-white via-blue-50 to-purple-100 shadow-xl rounded-2xl p-8 border border-blue-200 hover:shadow-2xl transition duration-500"
      >
        {/* Group Image */}
        <motion.img
          src={imageUrl}
          alt={groupName}
          className="w-full h-56 object-cover rounded-xl mb-6 shadow-md"
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Group Name */}
        <h2 className="text-3xl font-extrabold text-purple-700 mb-2 text-center">
          {groupName}
        </h2>

        {/* Description */}
        <p className="text-md text-gray-700 italic text-center mb-6">
          {description}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800 mb-8">
          <p className="flex items-center gap-2 text-indigo-600 font-semibold">
            <FaTags /> Category:{" "}
            <span className="text-gray-800 font-normal">{hobbyCategory}</span>
          </p>
          <p className="flex items-center gap-2 text-pink-600 font-semibold">
            <FaMapMarkerAlt /> Location:{" "}
            <span className="text-gray-800 font-normal">{location}</span>
          </p>
          <p className="flex items-center gap-2 text-green-600 font-semibold">
            <FaUsers /> Max Members:{" "}
            <span className="text-gray-800 font-normal">{maxMembers}</span>
          </p>
          <p className="flex items-center gap-2 text-blue-600 font-semibold">
            <FaCalendarAlt /> Start Date:{" "}
            <span className="text-gray-800 font-normal">{startDate}</span>
          </p>
          <p className="flex items-center gap-2 text-orange-600 font-semibold">
            <FaUserCircle /> Created By:{" "}
            <span className="text-gray-800 font-normal">{userName}</span>
          </p>
        </div>

        {/* Join Group or Expired Notice */}
        <div className="text-center mt-6">
          {isExpired ? (
            <p className="text-red-600 font-semibold text-lg">
              ❌ This group is no longer active.
            </p>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleJoin}
              className="bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
            >
              🚀 Join Group
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default GroupDetails;
