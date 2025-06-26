import React from 'react';
import { Tooltip } from 'react-tooltip';
import { Fade, Zoom } from 'react-awesome-reveal';
import { FaSearch, FaUsers, FaCalendarCheck, FaRegLightbulb } from 'react-icons/fa';

const HowHobbyWorks = () => {
  return (
    <section className="bg-primary py-16 rounded-xl" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <Fade direction="up" triggerOnce>
          <div className="flex flex-col items-center mb-12 max-w-xl mx-auto">
            <FaRegLightbulb className="text-accent text-4xl mb-2" />
            <h2 className="text-4xl font-bold text-secondary tracking-wide">
              How HobbyHub Works
            </h2>
            <p className="text-secondary/80 mt-2 text-base sm:text-lg">
              Discover, Connect & Thrive with Your Local Hobby Groups 💬🎨🏃‍♀️
            </p>
          </div>
        </Fade>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <Zoom cascade damping={0.2} triggerOnce>
            {/* Card 1 */}
            <div
              data-tooltip-id="how-works-tooltip"
              data-tooltip-content="Find hobby groups by interest, location, or skill!"
              className="cursor-pointer"
            >
              <div className="p-6 bg-primary/10 rounded-2xl shadow-xl hover:scale-105 transform transition duration-300 border border-accent">
                <div className="text-accent text-3xl mb-4">
                  <FaSearch />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">
                  1. Browse Groups
                </h3>
                <p className="text-secondary/80">
                  Explore local hobby groups based on your interests or location.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              data-tooltip-id="how-works-tooltip"
              data-tooltip-content="Click 'Join' to connect with like-minded enthusiasts."
              className="cursor-pointer"
            >
              <div className="p-6 bg-primary/10 rounded-2xl shadow-xl hover:scale-105 transform transition duration-300 border border-accent">
                <div className="text-accent text-3xl mb-4">
                  <FaUsers />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">
                  2. Join a Community
                </h3>
                <p className="text-secondary/80">
                  Become a part of a group that matches your vibe and passion.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              data-tooltip-id="how-works-tooltip"
              data-tooltip-content="Participate in meetups, workshops, or online events!"
              className="cursor-pointer"
            >
              <div className="p-6 bg-primary/10 rounded-2xl shadow-xl hover:scale-105 transform transition duration-300 border border-accent">
                <div className="text-accent text-3xl mb-4">
                  <FaCalendarCheck />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">
                  3. Attend & Enjoy
                </h3>
                <p className="text-secondary/80">
                  Join events, make friends, and build lasting memories through hobbies.
                </p>
              </div>
            </div>
          </Zoom>
        </div>
      </div>

      {/* Tooltip */}
      <Tooltip
        id="how-works-tooltip"
        place="top"
        className="!bg-primary !text-secondary !rounded-lg !px-4 !py-2 text-sm z-50"
      />
    </section>

  );
};

export default HowHobbyWorks;
