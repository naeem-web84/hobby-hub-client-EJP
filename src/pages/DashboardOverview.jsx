// src/pages/DashboardOverview.jsx
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router'; // for navigation
import { AuthContext } from '../contexts/AuthContext';
import Profile from './dashboard/Profile';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  FaBullseye,
  FaMapMarkerAlt,
  FaHandshake,
  FaCamera,
  FaStar,
  FaChartLine,
  FaListAlt,
  FaRegFolderOpen,
  FaArrowLeft,
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DashboardOverview = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [allItemsCount, setAllItemsCount] = useState(0);
  const [myItemsCount, setMyItemsCount] = useState(0);

  const maxItems = 100;

  useEffect(() => {
    AOS.init({ once: true });

    fetch('https://hobby-hub-server-theta.vercel.app/hobby')
      .then((res) => res.json())
      .then((data) => {
        setAllItemsCount(data.length);
        const myItems = data.filter(item => item.userEmail === user?.email);
        setMyItemsCount(myItems.length);
      });
  }, [user]);

  const chartData = [
    { name: 'My Items', value: myItemsCount },
    { name: 'Others', value: allItemsCount - myItemsCount },
  ];

  const COLORS = ['#2EA44F', '#0D1117'];

  const suggestions = [
    { icon: <FaBullseye className="text-accent" />, text: 'Try adding a new group this week!' },
    { icon: <FaMapMarkerAlt className="text-accent" />, text: 'Explore hobby events in your area.' },
    { icon: <FaHandshake className="text-accent" />, text: 'Join a group that matches your interest.' },
    { icon: <FaCamera className="text-accent" />, text: 'Upload photos from your last event!' },
    { icon: <FaStar className="text-accent" />, text: 'Leave feedback on a group you joined.' },
  ];

  const activePercentage = allItemsCount ? Math.round((myItemsCount / allItemsCount) * 100) : 0;
  const totalProgress = Math.min(100, Math.round((allItemsCount / maxItems) * 100));

  return (
    <div className="px-4 lg:px-8 py-8 max-w-7xl mx-auto text-secondary rounded-xl shadow-inner relative">
      <div className='my-1'>
        {/* Back to Home Button (top right) */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 right-6 flex items-center gap-2 text-accent hover:text-green-500 transition font-semibold bg-primary p-2 rounded-xl cursor-pointer"
        aria-label="Back to Home"
      >
        <FaArrowLeft />
        Back to Home
      </button>
      </div>

     <div className='my-10'>
       {/* Profile */}
      <Profile />
     </div>

      {/* Stat Cards Row - No gap between cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-6" data-aos="fade-up">
        {/* Total Items */}
        <div className="bg-primary text-secondary p-4 border border-accent rounded-l-xl shadow-inner flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-base font-medium">Total Items</h3>
            <FaListAlt className="text-accent text-lg" />
          </div>
          <p className="text-2xl font-bold text-accent">{allItemsCount}</p>
          <p className="text-xs mt-1 text-secondary/80">Total hobby items on the platform</p>
          <div className="w-full bg-gray-700 rounded-full h-3 mt-3 overflow-hidden">
            <div
              className="bg-accent h-3 rounded-full transition-all duration-1000"
              style={{ width: `${totalProgress}%` }}
            />
          </div>
        </div>

        {/* My Items */}
        <div className="bg-primary text-secondary p-4 border-y border-accent shadow-inner flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-base font-medium">My Items</h3>
            <FaRegFolderOpen className="text-accent text-lg" />
          </div>
          <p className="text-2xl font-bold text-accent">{myItemsCount}</p>
          <p className="text-xs mt-1 text-secondary/80">Your added items</p>
        </div>

        {/* Active Percentage */}
        <div className="bg-primary text-secondary p-4 border border-accent rounded-r-xl shadow-inner flex flex-col justify-between">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-base font-medium">Active %</h3>
            <FaChartLine className="text-accent text-lg" />
          </div>
          <p className="text-2xl font-bold text-accent">{activePercentage}%</p>
          <div className="w-full bg-gray-700 rounded-full h-3 mt-3 overflow-hidden">
            <div
              className="bg-accent h-3 rounded-full transition-all duration-1000"
              style={{ width: `${activePercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Chart */}
      <section className="mt-10 p-6 rounded-xl shadow border border-accent bg-primary" data-aos="zoom-in">
        <h3 className="text-base font-bold mb-4 text-accent text-center">📊 Analytics Overview</h3>
        <div className="bg-secondary p-4 rounded-xl shadow-inner border border-accent max-w-md mx-auto">
          {allItemsCount === 0 ? (
            <p className="text-center text-primary/70">No data available</p>
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={{ fill: '#0D1117', fontWeight: 'bold' }}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#0D1117', borderRadius: '8px', border: 'none' }}
                  itemStyle={{ color: '#2EA44F', fontWeight: 'bold' }}
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </section>

      {/* Suggestions */}
      <section className="mt-10 p-4 rounded-xl shadow border border-accent bg-primary" data-aos="fade-up">
        <h3 className="text-base font-bold mb-3 text-accent">✨ Suggestions for You</h3>
        <ul className="space-y-2 text-secondary max-w-md mx-auto text-sm">
          {suggestions.map(({ icon, text }, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-lg">{icon}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DashboardOverview;
