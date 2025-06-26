import React from "react";
import { Link } from "react-router";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-primary text-secondary py-16 px-4 rounded-xl">
      <div className="max-w-4xl mx-auto bg-[#141B22] rounded-xl shadow-lg p-10">
        <h1 className="text-4xl font-bold mb-6 text-accent text-center">Contact Us</h1>
        <p className="text-secondary/80 mb-10 text-center max-w-xl mx-auto">
          Have questions or want to connect? Send us a message and we'll get back to you!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt size={28} className="text-accent" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Our Location</h3>
                <p className="text-secondary/70">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt size={28} className="text-accent" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Call Us</h3>
                <p className="text-secondary/70">+880 123 456 7890</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope size={28} className="text-accent" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Email</h3>
                <p className="text-secondary/70">support@hobbyhub.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-md bg-[#0D1117] border border-accent text-secondary placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md bg-[#0D1117] border border-accent text-secondary placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold">
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Write your message"
                className="w-full px-4 py-3 rounded-md bg-[#0D1117] border border-accent text-secondary placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-primary font-bold py-3 rounded-md hover:bg-secondary hover:text-primary transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Back to Home Button */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-block px-8 py-3 border border-accent text-accent rounded-md font-semibold hover:bg-accent hover:text-primary transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
