import React from "react";
import trainerImg from "../assets/images/thimmah_cta.png"; // replace with your image path

const TrainWithMe = () => {
  return (
    <section className="relative bg-transparent flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 md:py-20 overflow-hidden">
      {/* Red Glow Effect */}
        {/* <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-red-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div> */}

      {/* Left - Image */}
      <div className="flex justify-center md:w-1/2 mix-blend-luminosity relative z-10">
        <img
          src={trainerImg}
          alt="Trainer"
          className="w-64 md:w-80 object-contain"
        />
      </div>

      {/* Right - Text */}
      <div className="md:w-1/2 mt-6 md:mt-0 text-center md:text-left relative z-10">
        <h2 className="font-heading text-white font-extrabold text-3xl md:text-4xl leading-snug">
          YOU WANT TO TRAIN <br /> WITH ME?
        </h2>
        <p className="text-gray-400 mt-3 text-sm md:text-base">
          Feel free to contact me if you want to train with me.
        </p>

        <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-all">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default TrainWithMe;
