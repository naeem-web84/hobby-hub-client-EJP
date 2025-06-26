import React from "react";
import { useLoaderData } from "react-router";
import HeroSection from "../components/HeroSection";
import FeaturedGroups from "../components/FeaturedGroups";
import LatestBlogs from "../components/LatestBlogs";
import HowHobbyWorks from "../components/HowHobbyWorks";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import TopRatedGroups from "../components/TopRatedGroups";
import GridIcons from "../components/GridIcons";
import OffersPromoBanner from "../components/OffersPromoBanner";
import NewsletterSignup from "../components/NewsletterSignup";

const HomePage = () => {
  const initialHobbyData = useLoaderData();

  return (
    <div className="min-h-screen font-urbanist bg-white text-primary">
      <section className="mb-4">
        {/* Hero Section */}
        <HeroSection />
      </section>

      <section>
        {/* Grid sections  */}
        <GridIcons></GridIcons>
      </section>


      {/* Featured Groups */}
      <FeaturedGroups hobbyData={initialHobbyData} />

      {/* Top Rated Groups */}
      <section>
        <TopRatedGroups />
      </section>

      {/* Blogs */}
      <div data-aos="fade-up">
        <LatestBlogs />
      </div>

      {/* How Hobby Works */}
      <section className="py-12" data-aos="fade-up">
        <HowHobbyWorks />
      </section>

      {/* Testimonials */}
      <section className="bg-primary py-16 rounded-xl" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-4 text-center text-secondary">
          <h2 className="text-4xl font-bold mb-4">What Our Members Say</h2>
          <p className="text-secondary/70 mb-10 text-lg max-w-xl mx-auto">
            Real stories from people who discovered new passions with HobbyHub 💬
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                quote:
                  "I made lifelong friends through the photography group. Truly a game-changer!",
                name: "Sarah R.",
              },
              {
                quote:
                  "HobbyHub helped me find a local chess group. Now I play weekly!",
                name: "Jamal K.",
              },
              {
                quote:
                  "Such a welcoming community. I joined the gardening club and love it!",
                name: "Priya D.",
              },
            ].map(({ quote, name }, index) => (
              <div
                key={index}
                className="bg-secondary text-primary p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-accent"
              >
                <div className="text-accent text-3xl mb-4">“</div>
                <p className="italic mb-4 leading-relaxed">{quote}</p>
                <h4 className="font-semibold">— {name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Tooltip id="global-tooltip" />

      {/* offers promoo */}
      <section>
        <OffersPromoBanner></OffersPromoBanner>
      </section>

      {/* news letter */}
      <section>
        <NewsletterSignup></NewsletterSignup>
      </section>

    </div>
  );
};

export default HomePage;
