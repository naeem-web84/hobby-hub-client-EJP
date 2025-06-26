import React from "react";
import HobbyCard from "./HobbyCard"; // Adjust relative path if needed

const FeaturedGroups = ({ hobbyData }) => {
  return (
    <section className="bg-primary rounded py-12 px-6 my-12 rounded-xl">
      <div
        className="text-center text-secondary max-w-6xl mx-auto mb-8"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-2">Featured Hobby Groups</h2>
        <p className="text-secondary/70 max-w-xl mx-auto">
          Explore trending groups from your area
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16"
        data-aos="fade-up"
      >
        {hobbyData.map((hobby) => (
          <HobbyCard key={hobby.id} hobby={hobby} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedGroups;
