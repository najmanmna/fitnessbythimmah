import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import testimonialImg1 from "../assets/images/testimonials/aashiq.jpg";
import testimonialImg2 from "../assets/images/testimonials/test2.jpg";
import testimonialImg3 from "../assets/images/testimonials/test3.jpg";

const testimonials = [
  {
    name: "Aashiq",
    text: `I’ve struggled with being overweight since I was a kid, and when I started training with Thimira at Leap Yard, I was 123 kg. After working a desk job for a year, I knew I needed serious help to make a change. Thimira has been incredibly supportive and knowledgeable from the start. He understands my body and lifestyle and pushes me in the best way possible. Thanks to his guidance, I’ve gone down to 110 kg, losing about 13kgs in 30days

I couldn’t have achieved this without his encouragement and expertise. Thank you, Thimira!`,
    image: testimonialImg1,
  },
  {
    name: "",
    text: `Coach Thimira's guidance has been
instrumental in helping me get fit , stronger
and achieve my goal of getting into better
shape while losing some weight . His expert
advice on proper techniques truly inspired me
to push my self harder and go beyond what 1
thought was possible. Coach Thimira has not
only helped me transform my body but also my
mindset towards fitness and health`,
    image: testimonialImg2,
  },
  {
    name: "",
    text: `Thimira is a fantastic trainer with great sense of humor so every session is filled with laugh and positive attitude which empower you to work out even harder. Very professional coaching and definitely will help you to achieve your fitness goals! I really enjoyed my training with Thimira.
Over time I got stronger and more confident in my ability. I lost weight and felt great about myself after only in few months.
I would highly recommend Thimira to anyone that is looking confidence in themselves to make a positive change to their health and fitness. `,
    image: testimonialImg3,
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  const nextSlide = () =>
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);

  return (
    <section className="relative py-28 px-4 bg-[#111] overflow-hidden">
      {/* Red Glow Background */}
      <div className="absolute inset-0 -z-1">
        <div className="absolute top-1/2 ml-10 left-1/3 w-[500px] h-[200px] -translate-x-1/2 -translate-y-1/2 bg-red-600 opacity-30 blur-[150px] rounded-full"></div>
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-heading text-white text-center font-bold text-4xl md:text-5xl mb-5 md:mb-20 tracking-wide"
      >
        HEAR IT FROM THEM
      </motion.h2>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-5xl mx-3 md:mx-auto relative h-[600px] md:h-[400px]"
      >
        <div className="flex flex-col md:flex-row gap-8 justify-center h-full">
          {/* Left - Quote */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index + "-text"}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1A1A1A] p-6 rounded-xl max-w-lg flex-1 relative overflow-hidden md:overflow-visible"
            >
              <FaQuoteLeft className="relative -top-4 -left-4 text-red-600 text-4xl" />
              <div className="h-full flex flex-col">
                <p className="text-white text-sm md:text-lg leading-relaxed mb-6 flex-1 overflow-y-auto">
                  {testimonials[index].text}
                  <p className="text-gray-400 text-sm">
                    {testimonials[index].name}
                  </p>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right - Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index + "-image"}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="relative flex justify-end items-end"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-72">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <FaQuoteRight className="absolute -bottom-4 -right-4 text-red-600 text-4xl" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute -left-8 md:-left-16 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-red-600 transition-colors"
        >
          <IoChevronBack />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-8 md:-right-16 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-red-600 transition-colors"
        >
          <IoChevronForward />
        </button>
      </motion.div>

      {/* Dots */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mt-6 gap-2"
      >
        {testimonials.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`cursor-pointer w-3 h-3 rounded-full transition-colors ${
              i === index ? "bg-red-600" : "bg-gray-600"
            }`}
          />
        ))}
      </motion.div>
    </section>
  );
}
