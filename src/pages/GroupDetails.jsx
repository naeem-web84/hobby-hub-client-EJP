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
      confirmButtonColor: "#2EA44F", // accent
      confirmButtonText: "Go to All Groups",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/allGroups");
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mb-20" data-aos="zoom-in">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-secondary border border-accent shadow-2xl rounded-2xl p-8"
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
        <h2 className="text-3xl font-extrabold text-accent mb-2 text-center">
          {groupName}
        </h2>

        {/* Description */}
        <p className="text-base text-black/80 italic text-center mb-6">
          {description}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-black mb-8">
          <p className="flex items-center gap-2 font-semibold text-accent">
            <FaTags /> Category:
            <span className="text-black font-normal">{hobbyCategory}</span>
          </p>
          <p className="flex items-center gap-2 font-semibold text-accent">
            <FaMapMarkerAlt /> Location:
            <span className="text-black font-normal">{location}</span>
          </p>
          <p className="flex items-center gap-2 font-semibold text-accent">
            <FaUsers /> Max Members:
            <span className="text-black font-normal">{maxMembers}</span>
          </p>
          <p className="flex items-center gap-2 font-semibold text-accent">
            <FaCalendarAlt /> Start Date:
            <span className="text-black font-normal">{startDate}</span>
          </p>
          <p className="flex items-center gap-2 font-semibold text-accent col-span-full sm:col-span-2">
            <FaUserCircle /> Created By:
            <span className="text-black font-normal">{userName}</span>
          </p>
        </div>

        {/* Join or Expired */}
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
              className="bg-accent text-primary font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:bg-accent/80"
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
