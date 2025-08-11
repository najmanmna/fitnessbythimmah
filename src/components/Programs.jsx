import React from "react";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Monitor,
  Users,
  Apple,
  Bike,
  HeartPulse,
  Scale,
} from "lucide-react";

const programs = [
  { icon: <Users size={40} />, title: "1-on-1 Training" },
  { icon: <Monitor size={40} />, title: "Online Coaching" },
  { icon: <Users size={40} />, title: "Group Classes" },
  { icon: <Apple size={40} />, title: "Nutrition Plans" },
  { icon: <Dumbbell size={40} />, title: "Strength & Conditioning" },
  { icon: <Bike size={40} />, title: "Endurance Training" },
  { icon: <HeartPulse size={40} />, title: "Injury Rehab" },
  { icon: <Scale size={40} />, title: "Weight Loss / Gain" },
  { icon: <Dumbbell size={40} />, title: "Resistance Training" },
  { icon: <Users size={40} />, title: "Special Adults & Kids Training" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

export default function TrainingProgramsHex() {
  return (
    <section className="bg-[#111] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-heading text-white text-4xl md:text-5xl font-bold tracking-wide mb-12">
          TRAINING PROGRAMS
        </h2>

        {/* Desktop T shape */}
        <motion.div
          className="hidden lg:flex flex-col items-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }} // triggers on scroll
        >
          {/* Row 1: 6 items */}
          <div className="flex gap-4">
            {programs.slice(0, 6).map((program, index) => (
              <HexagonCard key={index} {...program} />
            ))}
          </div>
          {/* Row 2: 2 items (bounce effect) */}
          <div className="flex gap-4">
            {programs.slice(6, 8).map((program, index) => (
              <HexagonCard key={index + 6} {...program} bounce />
            ))}
          </div>
          {/* Row 3: 2 items (bounce effect) */}
          <div className="flex gap-4">
            {programs.slice(8, 10).map((program, index) => (
              <HexagonCard key={index + 8} {...program} bounce />
            ))}
          </div>
        </motion.div>

        {/* Mobile/Tablet: Wrapped layout */}
        <motion.div
          className="lg:hidden flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {programs.map((program, index) => (
            <HexagonCard key={index} {...program} />
          ))}
        </motion.div>
      </div>

      {/* Hexagon shape */}
      {/* <style jsx>{`
        .hexagon {
          clip-path: polygon(
            25% 6.7%,
            75% 6.7%,
            100% 50%,
            75% 93.3%,
            25% 93.3%,
            0% 50%
          );
        }
      `}</style> */}
    </section>
  );
}

function HexagonCard({ icon, title, bounce }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.08 }}
      animate={
        bounce
          ? {
              y: [0, -6, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2, // starts after entrance
              },
            }
          : {}
      }
      className="relative w-40 h-44 hexagon flex flex-col items-center justify-center 
      bg-gradient-to-b from-[#1F1F1F] to-[#111] border border-red-500/50 
      shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:shadow-[0_0_35px_rgba(255,0,0,0.8)]"
    >
      <div className="text-red-500 mb-2">{icon}</div>
      <h3 className="text-white text-sm font-semibold px-2">{title}</h3>
    </motion.div>
  );
}
