import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useLoaderData } from "react-router";
import HobbyCard from "../components/HobbyCard";
import LatestBlogs from "../components/LatestBlogs";
import HowHobbyWorks from "../components/HowHobbyWorks";
import { Tooltip } from "react-tooltip";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-tooltip/dist/react-tooltip.css";

const HomePage = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const initialHobbyData = useLoaderData();

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 bg-[#e0f4ff]">
      
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-snug text-[#2C3E50]">
          <span className="text-[#2980B9]">Discover</span>{" "}
          <span className="text-[#1ABC9C] font-semibold">
            <Typewriter
              words={[
                "Hobby Groups",
                "Local Communities",
                "Creative Circles",
                "Skill-Based Networks",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1300}
            />
          </span>{" "}
          <span className="text-[#2980B9]">Near You</span>
        </h1>
        <p className="text-[#566573] text-lg mt-2">
          Connect with passionate individuals. Explore. Engage. Enjoy.
        </p>
      </div>
 
      <div className="mb-12 relative max-w-5xl mx-auto rounded-xl overflow-hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
          {[
            "https://i.ibb.co/kgkYF58w/pexels-charithk-5787501.jpg",
            "https://png.pngtree.com/background/20230518/original/pngtree-boy-is-read-in-a-large-pile-of-books-picture-image_2646146.jpg",
            "https://i.ibb.co/nsGJVVfL/pexels-photo-853168.webp",
            "https://img.freepik.com/free-photo/retro-digital-art-illustration-person-using-radio-technology_23-2151355979.jpg",
          ].map((url, index) => (
            <SwiperSlide key={index}>
              <img
                src={url}
                alt={`Slide ${index + 1}`}
                className="rounded-xl w-full h-[300px] object-cover"
              />
            </SwiperSlide>
          ))}

          <div
            className="autoplay-progress absolute bottom-4 right-4 z-10 w-12 h-12 bg-black/40 rounded-full flex items-center justify-center"
            slot="container-end"
          >
            <svg
              viewBox="0 0 48 48"
              ref={progressCircle}
              className="w-full h-full transform -rotate-90"
            >
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeDasharray="125.6"
                style={{
                  strokeDashoffset: `calc(125.6 * var(--progress))`,
                  transition: "stroke-dashoffset 0.3s linear",
                }}
              />
            </svg>
            <span
              ref={progressContent}
              className="absolute text-white text-xs font-semibold"
            />
          </div>
        </Swiper>
      </div>
 
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Featured Hobby Groups
        </h2>
        <p className="text-gray-600">Explore trending groups from your area</p>
      </div>
 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {initialHobbyData.map((hobby) => (
          <HobbyCard key={hobby.id} hobby={hobby} />
        ))}
      </div>
 
      <Tooltip id="global-tooltip" />
 
      <div>
        <LatestBlogs />
      </div>
 
      <section className="py-12">
        <HowHobbyWorks />
      </section>
 
      <section className="bg-gradient-to-br from-[#E0F7FA] to-[#F1F8FF] py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#1B2631] mb-4">
            What Our Members Say
          </h2>
          <p className="text-[#5D6D7E] mb-10 text-lg max-w-xl mx-auto">
            Real stories from people who discovered new passions with HobbyHub
            💬
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-[#4FC3F7]">
              <div className="text-[#4FC3F7] text-3xl mb-4">“</div>
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                I made lifelong friends through the photography group. Truly a
                game-changer!
              </p>
              <h4 className="text-[#2C3E50] font-semibold">— Sarah R.</h4>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-[#FFB74D]">
              <div className="text-[#FFB74D] text-3xl mb-4">“</div>
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                HobbyHub helped me find a local chess group. Now I play weekly!
              </p>
              <h4 className="text-[#2C3E50] font-semibold">— Jamal K.</h4>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-[#BA68C8]">
              <div className="text-[#BA68C8] text-3xl mb-4">“</div>
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                Such a welcoming community. I joined the gardening club and love
                it!
              </p>
              <h4 className="text-[#2C3E50] font-semibold">— Priya D.</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
