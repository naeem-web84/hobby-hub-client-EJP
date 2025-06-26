import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";

const features = [
  {
    title: "Discover Local Groups",
    description:
      "Find hobby groups in your area that match your interests quickly and easily.",
  },
  {
    title: "Create Your Own Group",
    description:
      "Start your own community and invite others who share your passion.",
  },
  {
    title: "Connect & Collaborate",
    description:
      "Engage with members through discussions, events, and shared activities.",
  },
  {
    title: "Build Lasting Friendships",
    description:
      "Grow your social circle by bonding over common hobbies and experiences.",
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-primary py-20 px-6 md:px-20 font-urbanist">
      {/* Hero Header */}
      <div
        className="max-w-4xl mx-auto text-center mb-16"
        data-aos="fade-down"
      >
        <h1 className="text-5xl font-extrabold text-accent tracking-wider mb-4">
          About HobbyHub
        </h1>
        <p className="text-xl text-secondary max-w-3xl mx-auto">
          Your gateway to vibrant local communities where passions meet people.
        </p>
      </div>

      {/* Intro Paragraph */}
      <div
        className="max-w-3xl mx-auto text-secondary text-lg leading-relaxed mb-20"
        data-aos="fade-right"
      >
        <p className="mb-6">
          HobbyHub believes that hobbies are a path to friendship, growth, and
          happiness. Whether you love reading, painting, hiking, or gaming,
          find or create groups that bring your passions to life.
        </p>
        <p>
          Our platform makes social engagement easy, helping you connect with
          like-minded locals and build meaningful communities.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {features.map(({ title, description }, i) => (
          <div
            key={title}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="bg-secondary text-primary p-6 rounded-2xl shadow-lg border border-accent/30 transition hover:scale-105 hover:shadow-xl duration-300"
          >
            <CheckCircle
              className="text-accent mb-4"
              size={36}
              strokeWidth={1.5}
            />
            <h3 className="text-xl font-semibold text-accent mb-2">
              {title}
            </h3>
            <p className="text-base">{description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center max-w-3xl mx-auto" data-aos="zoom-in-up">
        <p className="text-secondary text-2xl font-semibold mb-6 italic">
          Join HobbyHub today — connect, create, and collaborate with your local
          hobby community!
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 rounded-full bg-accent text-white font-bold text-lg hover:bg-accent/90 transition"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default About;
