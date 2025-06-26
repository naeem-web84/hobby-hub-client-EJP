import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const TopRatedGroups = () => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    fetch("/initialHobbyData.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((hobby) => hobby.rate >= 4);
        setTopRated(filtered);
      })
      .catch((err) => console.error("Failed to load hobbies:", err));
  }, []);

  const CircleRating = ({ rating }) => {
    const radius = 18;
    const circumference = 2 * Math.PI * radius;
    const progress = (rating / 5) * circumference;
    return (
      <svg width="45" height="45" className="inline-block mr-3 flex-shrink-0">
        <circle
          cx="22.5"
          cy="22.5"
          r={radius}
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="4"
        />
        <circle
          cx="22.5"
          cy="22.5"
          r={radius}
          fill="none"
          stroke="#22c55e"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          transform="rotate(-90 22.5 22.5)"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="14"
          fill="#22c55e"
          fontWeight="700"
        >
          {rating.toFixed(1)}
        </text>
      </svg>
    );
  };

  return (
    <section className="py-10 px-4 md:px-10 max-w-7xl mx-auto bg-primary my-12 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-secondary mb-8 text-center tracking-wide">
        Top Rated Hobby Groups
      </h2>

      {topRated.length === 0 ? (
        <p className="text-center text-secondary/70">Loading top-rated groups...</p>
      ) : (
        <div className="overflow-hidden">
          <div
            className="flex space-x-6 animate-scrollLeft"
            style={{ width: `${topRated.length * 320 * 2}px` }} // width twice for loop
          >
            {[...topRated, ...topRated].map(({ id, name, image, description, rate }, index) => (
              <div
                key={id + "-" + index}
                className="flex-shrink-0 w-[300px] bg-secondary rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300"
                style={{ maxHeight: "110px" }}
              >
                <div className="flex items-center space-x-4 h-full">
                  <img
                    src={image}
                    alt={name}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0 border-2 border-green-500"
                  />
                  <div className="flex flex-col justify-center flex-grow">
                    <div className="flex items-center mb-1">
                      <CircleRating rating={rate} />
                      <h3 className="text-lg font-semibold text-primary">{name}</h3>
                    </div>
                    <p className="text-primary/80 text-xs line-clamp-2">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      )}
      <style>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scrollLeft {
          animation: scrollLeft 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TopRatedGroups;
