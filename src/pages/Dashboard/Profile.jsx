// src/pages/dashboard/Profile.jsx
import React, { useContext } from "react";
import { FaEnvelope, FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion"; 
import { AuthContext } from "../../contexts/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto bg-primary shadow-lg rounded-2xl px-6 py-8 mb-10 border border-2 border-accent"
    >
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-accent shadow-md">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <FaUserCircle className="text-[7rem] text-accent mx-auto my-auto" />
          )}
        </div>

        {/* User Info */}
        <div className="mt-4">
          <h2 className="text-3xl font-extrabold text-secondary">
            {user?.displayName || "Anonymous User"}
          </h2>
          <p className="text-sm text-gray-200 mt-1 flex items-center justify-center gap-2">
            <FaEnvelope className="text-accent" /> {user?.email || "No email provided"}
          </p>
        </div>

        {/* Optional Tagline */}
        <p className="mt-4 text-gray-200 text-sm italic">
          Passionate about hobbies. Ready to explore and connect.
        </p>
      </div>
    </motion.section>
  );
};

export default Profile;
