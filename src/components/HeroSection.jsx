import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroSection = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <section className="py-10 px-4 md:px-6 bg-primary rounded-xl">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug text-white">
          <span className="text-accent">Discover </span>
          <span className="font-semibold text-accent">
            <Typewriter
              words={[
                'Hobby Groups',
                'Local Communities',
                'Creative Circles',
                'Skill-Based Networks',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1300}
            />
          </span>{' '}
          Near You
        </h1>
      </div>

      <div
        className="relative max-w-7xl mx-auto rounded-xl overflow-hidden shadow-lg"
        data-aos="zoom-in"
      >
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
            'https://i.ibb.co/kgkYF58w/pexels-charithk-5787501.jpg',
            'https://png.pngtree.com/background/20230518/original/pngtree-boy-is-read-in-a-large-pile-of-books-picture-image_2646146.jpg',
            'https://i.ibb.co/nsGJVVfL/pexels-photo-853168.webp',
            'https://img.freepik.com/free-photo/retro-digital-art-illustration-person-using-radio-technology_23-2151355979.jpg',
          ].map((url, index) => (
            <SwiperSlide key={index}>
              <img
                src={url}
                alt={`Slide ${index + 1}`}
                className="w-full h-[48vh] sm:h-[55vh] md:h-[60vh] object-cover rounded-xl"
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
                  transition: 'stroke-dashoffset 0.3s linear',
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
    </section>
  );
};

export default HeroSection;
