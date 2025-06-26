import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const faqData = [
  {
    question: "How can I join a hobby group?",
    answer:
      "Simply browse our categories, select a group that fits your interests, and click 'Join'. You'll receive updates and event notifications automatically.",
  },
  {
    question: "Can I create my own hobby group?",
    answer:
      "Yes! After signing up, you can create and manage your own hobby groups to invite others and organize events.",
  },
  {
    question: "Is there any fee to join groups?",
    answer:
      "Most groups on HobbyHub are free to join, but some special events or workshops may require a small fee. Details will be provided on the event page.",
  },
  {
    question: "How do I update my profile information?",
    answer:
      "Go to your profile page after logging in to update your personal details, preferences, and contact info.",
  },
];

const SupportPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="min-h-screen bg-primary text-secondary py-16 px-4 rounded-xl">
      <div className="max-w-5xl mx-auto bg-[#141B22] rounded-xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">
          Support Center
        </h1>
        <p className="max-w-3xl mx-auto text-secondary/70 text-center mb-12 text-lg">
          Need help? Find answers to common questions below or contact us directly.
        </p>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 border-b border-accent pb-3">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqData.map(({ question, answer }, index) => (
              <div
                key={index}
                className="bg-[#0F172A] rounded-lg p-5 cursor-pointer border border-accent"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleFAQ(index);
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{question}</h3>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-accent" />
                  ) : (
                    <FaChevronDown className="text-accent" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="mt-3 text-secondary/80 leading-relaxed">{answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support Form */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 border-b border-accent pb-3">
            Contact Support
          </h2>
          <form
            className="max-w-3xl mx-auto space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 font-semibold text-secondary"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-md bg-primary border border-accent text-secondary placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-semibold text-secondary"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md bg-primary border border-accent text-secondary placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-semibold text-secondary"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                required
                placeholder="Write your message"
                className="w-full px-4 py-3 rounded-md bg-primary border border-accent text-secondary placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-primary font-bold py-3 rounded-md hover:bg-secondary hover:text-primary transition"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Support Contact Info */}
        <div className="mt-16 text-center text-secondary/80 space-y-3">
          <p>
            <FaPhoneAlt className="inline mr-2 text-accent" />
            Support Hotline: <a href="tel:+8801234567890" className="underline hover:text-accent">+880 123 456 7890</a>
          </p>
          <p>
            <FaEnvelope className="inline mr-2 text-accent" />
            Email: <a href="mailto:support@hobbyhub.com" className="underline hover:text-accent">support@hobbyhub.com</a>
          </p>
          <p>
            We strive to respond within 24 hours during business days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportPage;
