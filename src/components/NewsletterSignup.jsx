import React, { useState } from "react";
import { motion } from "framer-motion";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter a valid email.");
    alert(`Thanks for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <section className="bg-primary py-16 rounded-xl" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 text-center text-secondary">
        <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-secondary/70 mb-10 text-lg max-w-xl mx-auto">
          Get updates on new hobby groups, community events, and exclusive offers 📬
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-3 rounded-lg text-primary placeholder:text-primary/50 border border-accent focus:outline-none focus:ring-2 focus:ring-accent bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
