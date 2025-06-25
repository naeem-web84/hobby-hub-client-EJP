import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-orange-50 via-blue-50 to-orange-100 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10 border border-blue-100">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-6 text-center tracking-wide">
          About HobbyHub
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          HobbyHub is a platform where people can discover and join local hobby-based groups (e.g., book clubs, hiking crews, painting circles) or create their own. It encourages social engagement through shared interests, helping people build communities around their passions.
        </p>
        <p className="mt-6 text-gray-600 italic text-center">
          Join us to connect, create, and collaborate with your local hobby community!
        </p>
      </div>
    </div>
  );
};

export default About;
