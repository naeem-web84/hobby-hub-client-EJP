import React from 'react';
import { useLoaderData } from 'react-router';
import GroupCard from '../components/GroupCard';
import {
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaCamera,
  FaBullseye,
  FaTags,
  FaInfoCircle,
} from 'react-icons/fa';

const AllGroups = () => {
  const groupData = useLoaderData();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ecf4fc] to-[#f7fbff] px-4 py-12">
      <div className="max-w-7xl mx-auto bg-white/90 rounded-3xl shadow-2xl border border-blue-200 overflow-hidden">
        <div className="overflow-x-auto rounded-3xl">
          <table className="min-w-full text-sm md:text-base text-center table-auto">
            <thead className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
              <tr className="whitespace-nowrap">
                <th className="p-4">No</th>
                <th className="p-4"><FaCamera className="inline mr-1" /> Image</th>
                <th className="p-4"><FaBullseye className="inline mr-1" /> Group</th>
                <th className="p-4"><FaTags className="inline mr-1" /> Category</th>
                <th className="p-4"><FaMapMarkerAlt className="inline mr-1" /> Location</th>
                <th className="p-4"><FaUsers className="inline mr-1" /> Max</th>
                <th className="p-4"><FaCalendarAlt className="inline mr-1" /> Start</th>
                <th className="p-4"><FaUser className="inline mr-1" /> Creator</th>
                <th className="p-4"><FaInfoCircle className="inline mr-1" /> Details</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 bg-white">
              {groupData.map((group, i) => (
                <GroupCard key={group._id} singleGroup={group} index={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllGroups;
