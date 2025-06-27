// src/pages/dashboard/Profile.jsx
import React, { useContext } from "react"; 
import { FaEnvelope, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { AuthContext } from "../../contexts/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto p-6"
    >
      <div className="relative flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl shadow-xl ring-2 ring-accent/40 bg-white/70 backdrop-blur-md">
        {/* Profile Image */}
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-accent">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <FaUser className="text-[6rem] text-accent mx-auto my-auto" />
          )}
        </div>

        {/* User Info */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-gray-800">
            {user?.displayName || "Anonymous User"}
          </h2>
          <p className="text-lg text-gray-600 flex items-center gap-2 mt-2">
            <FaEnvelope className="text-accent" /> {user?.email || "Email not available"}
          </p>
          <p className="mt-4 text-sm text-gray-500">
            This is your profile section. Update your avatar, check your dashboard stats, or get involved in your favorite hobbies!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
