import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { GiVolleyballBall } from "react-icons/gi";
import trainerImg from "../assets/images/aboutmeimg.png";

const AboutMe = () => {
  // Animation variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeUpStagger = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
    }),
  };

  return (
    <section className="bg-[#111] text-white py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            className="rounded-2xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <img
              src={trainerImg}
              alt="Trainer"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <h2 className="font-heading tracking-wide text-4xl md:text-5xl font-bold mb-4">
              ABOUT ME
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Hi, I’m Thimira Chalintha — a passionate fitness coach dedicated
              to helping people transform their bodies and lives. With a focus
              on strength training, functional movement, and sustainable
              nutrition, I create personalized programs that deliver real
              results. Whether you’re starting your fitness journey or aiming to
              push past limits, I’m here to guide, motivate, and keep you
              accountable every step of the way.
            </p>

            {/* Stats */}
            <div className="flex gap-6 flex-wrap flex-col md:flex-row justify-between">
              {[
                { number: "150+", label: "Satisfied Clients" },
                { number: "3+", label: "Years of Experience" },
                { number: "2+", label: "Years in Sport" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="backdrop-blur-sm rounded-lg px-6 py-4 text-center shadow-lg"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUpStagger}
                >
                  <h3 className="text-3xl font-bold">{stat.number}</h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: <FaGraduationCap className="mx-auto text-4xl text-white mb-3" />,
              title: "QUALIFIED TRAINER",
              desc: "Certified & Experienced",
            },
            {
              icon: <GiVolleyballBall className="mx-auto text-4xl text-white mb-3" />,
              title: "S&C TRAINER",
              desc: "@U.O.C Football",
            },
            {
              icon: <FaMapMarkerAlt className="mx-auto text-4xl text-white mb-3" />,
              title: "FIND ME AT",
              desc: "@Inleapyard",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="bg-[#1F1F1F] rounded-lg p-6 text-center shadow-lg py-10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
            >
              {card.icon}
              <h3 className="text-red-600 font-bold text-lg">{card.title}</h3>
              <p className="text-gray-400 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
