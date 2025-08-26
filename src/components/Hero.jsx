import React from "react";
import { motion } from "framer-motion";

// ✅ Import images
import gymBg from "../assets/images/danielle-cerullo-CQfNt66ttZM-unsplash 1.png";
import trainerImg from "../assets/images/Untitled design (12).png";

const GymHeroSection = ({ scrollToPrograms, onJoinNowClick }) => {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#1E1E1E]"
    >
      {/* Background Image with slow zoom */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <img
          src={gymBg}
          alt="Gym Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Foreground Person */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center mix-blend-luminosity"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <img
          src={trainerImg}
          alt="Trainer"
          className="h-screen sm:h-full object-cover"
        />
      </motion.div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4 mt-10 md:mt-32">
        <div className="relative inline-block">
          {/* GET FIT WITH */}
          <motion.h2
            className="font-heading text-white text-6xl sm:text-4xl md:text-[7rem] font-bold tracking-wide drop-shadow-[2px_2px_6px_rgba(0,0,0,0.9)] -mb-5 md:-mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            GET FIT WITH
          </motion.h2>

          {/* THIMMAH */}
          <motion.h1
            className="font-oxanium text-[#ff2332] text-opacity-90 text-7xl sm:text-7xl md:text-[12rem] font-extrabold tracking-wide drop-shadow-[3px_3px_10px_rgba(0,0,0,0.95)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          >
            THIMMAH
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          className="text-[#FF2332] text-sm sm:text-lg md:text-xl font-semibold uppercase tracking-wide drop-shadow-[1px_1px_4px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
        >
          Transform Yourself, Transform Your Life
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-6 flex flex-col sm:flex-row w-full px-10 max-w-sm sm:max-w-none justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.8 },
            },
          }}
        >
          <motion.a
            href="#join"
            onClick={onJoinNowClick}
            className="bg-red-600 text-white font-semibold  px-10 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-red-700 transition text-sm sm:text-base"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            JOIN NOW
          </motion.a>
          <motion.a
            href="#programs"
            onClick={scrollToPrograms}
            className=" border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-black transition text-sm sm:text-base"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            VIEW PROGRAMS
          </motion.a>
        </motion.div>
      </div>
      {/* Bottom Blur Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#1E1E1E]/90 to-transparent backdrop-blur-sm z-20 pointer-events-none" />
    </section>
  );
};

export default GymHeroSection;
