import React from 'react';
import { Link } from 'react-router';

const LatestBlogs = () => {
  const blogData = [
    {
      title: "5 Tips for Urban Sketching",
      desc: "Capture cityscapes with quick sketching techniques.",
      img: "https://img.freepik.com/premium-photo/image-is-sketch-city-street-with-man-looking-it-man-is-wearing-backpack-street-is-full-people-cars_14117-165887.jpg?ga=GA1.1.1437492054.1736073450&semt=ais_hybrid&w=740",
      link: "/urbanSketchingDetails"
    },
    {
      title: "Beginner’s Guide to Running",
      desc: "Start your running journey with confidence.",
      img: "https://img.freepik.com/free-vector/silhouettes-men-racing_1048-1470.jpg?ga=GA1.1.1437492054.1736073450&semt=ais_hybrid&w=740",
      link: "/runningDetails"
    },
    {
      title: "Top 10 Fishing Spots Near You",
      desc: "Discover peaceful and productive local spots.",
      img: "https://img.freepik.com/free-vector/grandpa-grandson-fishing-illustration-with-pastime_1284-61674.jpg?ga=GA1.1.1437492054.1736073450&semt=ais_hybrid&w=740",
      link: "/fishingDetails"
    },
    {
      title: "Photography Hacks for Better Shots",
      desc: "Boost your shots with simple photography tricks.",
      img: "https://img.freepik.com/premium-vector/cute-sports-photographer-shooting-action-cartoon-vector_1022901-115568.jpg?ga=GA1.1.1437492054.1736073450&semt=ais_hybrid&w=740",
      link: "/photographyDetails"
    }
  ];

  return (
    <section className="bg-primary py-10 border rounded-xl">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Latest Blog Posts</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-md transition duration-300 overflow-hidden"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{blog.desc}</p>
                <Link to={blog.link} className="text-blue-600 text-sm font-medium hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
