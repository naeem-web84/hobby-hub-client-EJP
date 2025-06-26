import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";

const iconSets = {
  FaGamepad: FaIcons.FaGamepad,
  FaRunning: FaIcons.FaRunning,
  FaBook: FaIcons.FaBook,
  FaCamera: FaIcons.FaCamera,
  FaPaintBrush: FaIcons.FaPaintBrush,
  GiFishingHook: GiIcons.GiFishingHook,
  GiCookingPot: GiIcons.GiCookingPot,
  GiLotus: GiIcons.GiLotus,
};

const categories = [
  { id: 1, name: "Video Gaming", icon: "FaGamepad" },
  { id: 2, name: "Fishing", icon: "GiFishingHook" },
  { id: 3, name: "Running", icon: "FaRunning" },
  { id: 4, name: "Cooking", icon: "GiCookingPot" },
  { id: 5, name: "Reading", icon: "FaBook" },
  { id: 6, name: "Photography", icon: "FaCamera" },
  { id: 7, name: "Painting", icon: "FaPaintBrush" },
  { id: 8, name: "Yoga", icon: "GiLotus" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const GridIcons = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-primary py-10 px-6 md:px-12 mx-auto rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-12 text-secondary">
        Explore By Categories
      </h2>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {categories.map(({ id, name, icon }) => {
          const IconComponent = iconSets[icon] || FaIcons.FaQuestionCircle;

          return (
            <motion.div
              key={id}
              className="flex flex-col items-center justify-between p-6 border border-accent rounded-xl bg-secondary shadow-md hover:shadow-xl transition-all duration-300"
              style={{ minHeight: "180px" }}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <IconComponent size={40} color="#2ea44f" className="mb-4" />
              <h3 className="text-lg font-semibold text-primary text-center">
                {name}
              </h3>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default GridIcons;
