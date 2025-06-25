import React from 'react';
import { Link } from 'react-router';

const LatestBlogs = () => {
  return (
    <section className="bg-[#e0f4ff] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Latest Blog Posts</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Blog Card 1 - Urban Sketching */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
            <img
              src="https://img.freepik.com/premium-photo/image-is-sketch-city-street-with-man-looking-it-man-is-wearing-backpack-street-is-full-people-cars_14117-165887.jpg?ga=GA1.1.1437492054.1736073450&semt=ais_hybrid&w=740"
              alt="Urban Sketching"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">5 Tips for Urban Sketching</h3>
              <p className="text-gray-600 mb-4">Discover how to capture cityscapes effectively with these sketching techniques.</p>
              <Link to="/urbanSketchingDetails" className="text-blue-600 font-medium hover:underline">Read More</Link>
            </div>
          </div>

          {/* Blog Card 2 - Running */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
            <img
              src="https://img.freepik.com/free-vector/silhouettes-men-racing_1048-1470.jpg?ga=GA1.1.1437492054.1736073450&semt=ais_hybrid&w=740"
              alt="Running Blog"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Beginner’s Guide to Running</h3>
              <p className="text-gray-600 mb-4">Kickstart your running journey with these essential tips for beginners.</p>
              <Link to="/runningDetails" className="text-blue-600 font-medium hover:underline">Read More</Link>
            </div>
          </div>

          {/* Blog Card 3 - Fishing */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
            <img
              src="https://img.freepik.com/free-vector/grandpa-grandson-fishing-illustration-with-pastime_1284-61674.jpg?ga=GA1.1.1437492054.1736073450&semt=ais_hybrid&w=740"
              alt="Fishing Blog"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Top 10 Fishing Spots Near You</h3>
              <p className="text-gray-600 mb-4">Explore local fishing spots that every enthusiast should try at least once.</p>
              <Link to="/fishingDetails" className="text-blue-600 font-medium hover:underline">Read More</Link>
            </div>
          </div>

          {/* Blog Card 4 - Photography */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
            <img
              src="https://img.freepik.com/premium-vector/cute-sports-photographer-shooting-action-cartoon-vector_1022901-115568.jpg?ga=GA1.1.1437492054.1736073450&semt=ais_hybrid&w=740"
              alt="Photography Blog"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Photography Hacks for Better Shots</h3>
              <p className="text-gray-600 mb-4">Improve your photography with these creative tips used by pros.</p>
              <Link to="/fishingDetails" className="text-blue-600 font-medium hover:underline">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
