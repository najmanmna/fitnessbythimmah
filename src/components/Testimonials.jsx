import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// Import your images
import testimonialImg1 from "../assets/images/testimonials/aashiq.jpg";
// import more if you have more testimonials

const testimonials = [
  {
    name: "Aashiq",
    text: `I’ve struggled with being overweight since I was a kid, and when I started training with Thimira at Leap Yard, I was 123 kg. After working a desk job for a year, I knew I needed serious help to make a change. Thimira has been incredibly supportive and knowledgeable from the start.`,
    image: testimonialImg1,
  },
  {
    name: "Aashiq",
    text: `I’ve struggled with being overweight since I was a kid, and when I started training with Thimira at Leap Yard, I was 123 kg. After working a desk job for a year, I knew I needed serious help to make a change. Thimira has been incredibly supportive and knowledgeable from the start.`,
    image: testimonialImg1,
  },
  // Add more testimonials here
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
        <div className="absolute top-1/2 ml-10 left-1/3 w-[400px] h-[200px] -translate-x-1/2 -translate-y-1/2 bg-red-600 opacity-30 blur-[150px] rounded-full"></div>
      </div>

      {/* Heading */}
      <h2 className="font-heading text-white text-center font-bold text-3xl md:text-4xl mb-20 tracking-wide">
        HEAR IT FROM THEM
      </h2>

      <div className="max-w-5xl justify-center mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left - Quote */}
        <div className="bg-[#1A1A1A] p-8 rounded-xl max-w-lg relative">
          <FaQuoteLeft className="absolute -top-4 -left-4 text-red-600 text-4xl" />
          <p className="text-white text-lg leading-relaxed mb-6">
            {testimonials[index].text}
          </p>
          <p className="text-gray-400 text-sm">{testimonials[index].name}</p>
          <FaQuoteRight className="absolute -bottom-4 -right-4 text-red-600 text-4xl" />
        </div>

        {/* Right - Before/After Image */}
        <div className="w-full md:w-60">
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-40 top-1/2 transform -translate-y-1/2 text-white text-3xl"
      >
        <IoChevronBack />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-40 top-1/2 transform -translate-y-1/2 text-white text-3xl"
      >
        <IoChevronForward />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`cursor-pointer w-3 h-3 rounded-full ${
              i === index ? "bg-red-600" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
