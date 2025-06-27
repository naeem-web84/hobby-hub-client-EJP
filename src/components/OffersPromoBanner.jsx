import React from "react";
import { motion } from "framer-motion";

const OffersPromoBanner = () => {
  return (
    <motion.div
      className="bg-primary rounded-xl py-10  md:px-12 w-full relative overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Glow Circle */}
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-secondary">
          🌟 জুন মাসের এক্সক্লুসিভ অফার! মাত্র{" "}
          <span className="text-accent">৫০%</span> ছাড়ে জয়েন করুন!
        </h2>
        <p className="text-secondary/80 mb-6">
          আপনার পছন্দের হবি গ্রুপে যুক্ত হয়ে নতুন কিছু শেখার সুযোগ নিন — সীমিত সময়ের জন্য!
        </p>
        <button className="bg-accent text-white font-semibold px-6 py-3 rounded-md hover:bg-secondary hover:text-primary transition">
          এখনই জয়েন করুন
        </button>
      </div>
    </motion.div>
  );
};

export default OffersPromoBanner;
