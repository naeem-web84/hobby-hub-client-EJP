import React from 'react';
import { Tooltip } from 'react-tooltip';
import { Fade, Zoom } from 'react-awesome-reveal';
import { FaSearch, FaUsers, FaCalendarCheck, FaRegLightbulb } from 'react-icons/fa';

const HowHobbyWorks = () => {
  return (
    <section className="bg-gradient-to-br from-[#E3FDFD] to-[#FDFEFE] py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <Fade direction="up" triggerOnce>
          <div className="flex flex-col items-center mb-12">
            <FaRegLightbulb className="text-yellow-500 text-4xl mb-2" />
            <h2 className="text-4xl font-bold text-[#1B2631] tracking-wide">
              How HobbyHub Works
            </h2>
            <p className="text-[#4A4A4A] mt-2 text-base sm:text-lg max-w-md">
              Discover, Connect & Thrive with Your Local Hobby Groups 💬🎨🏃‍♀️
            </p>
          </div>
        </Fade>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <Zoom cascade damping={0.2} triggerOnce>
            {/* Card 1 */}
            <div
              data-tooltip-id="how-works-tooltip"
              data-tooltip-content="Find hobby groups by interest, location, or skill!"
              className="cursor-pointer"
            >
              <div className="p-6 bg-gradient-to-r from-[#E0F7FA] to-[#B2EBF2] rounded-2xl shadow-xl hover:scale-105 transform transition duration-300 border border-[#81D4FA]">
                <div className="text-[#00796B] text-3xl mb-4">
                  <FaSearch />
                </div>
                <h3 className="text-2xl font-bold text-[#004D40] mb-2">1. Browse Groups</h3>
                <p className="text-[#37474F]">Explore local hobby groups based on your interests or location.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              data-tooltip-id="how-works-tooltip"
              data-tooltip-content="Click 'Join' to connect with like-minded enthusiasts."
              className="cursor-pointer"
            >
              <div className="p-6 bg-gradient-to-r from-[#FFF3E0] to-[#FFE0B2] rounded-2xl shadow-xl hover:scale-105 transform transition duration-300 border border-[#FFCC80]">
                <div className="text-[#EF6C00] text-3xl mb-4">
                  <FaUsers />
                </div>
                <h3 className="text-2xl font-bold text-[#E65100] mb-2">2. Join a Community</h3>
                <p className="text-[#4E342E]">Become a part of a group that matches your vibe and passion.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              data-tooltip-id="how-works-tooltip"
              data-tooltip-content="Participate in meetups, workshops, or online events!"
              className="cursor-pointer"
            >
              <div className="p-6 bg-gradient-to-r from-[#EDE7F6] to-[#D1C4E9] rounded-2xl shadow-xl hover:scale-105 transform transition duration-300 border border-[#B39DDB]">
                <div className="text-[#6A1B9A] text-3xl mb-4">
                  <FaCalendarCheck />
                </div>
                <h3 className="text-2xl font-bold text-[#4A148C] mb-2">3. Attend & Enjoy</h3>
                <p className="text-[#5E35B1]">Join events, make friends, and build lasting memories through hobbies.</p>
              </div>
            </div>
          </Zoom>
        </div>
      </div>

      {/* Tooltip */}
      <Tooltip
        id="how-works-tooltip"
        place="top"
        className="!bg-[#2C3E50] !text-white !rounded-lg !px-4 !py-2 text-sm z-50"
      />
    </section>
  );
};

export default HowHobbyWorks;
