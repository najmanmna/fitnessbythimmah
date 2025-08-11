import React from "react";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { GiVolleyballBall } from "react-icons/gi";
import trainerImg from "../assets/images/aboutmeimg.png";

const AboutMe = () => {
  return (
    <section className="bg-[#111] text-white py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src={trainerImg}
              alt="Trainer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Text */}
          <div>
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
            <div className="flex gap-6 flex-wrap">
              <div className="backdrop-blur-sm rounded-lg px-6 py-4 text-center shadow-lg">
                <h3 className="text-3xl font-bold">150+</h3>
                <p className="text-gray-400 text-sm">Satisfied Clients</p>
              </div>
              <div className="backdrop-blur-sm rounded-lg px-6 py-4 text-center shadow-lg">
                <h3 className="text-3xl font-bold">3+</h3>
                <p className="text-gray-400 text-sm">Years of Experience</p>
              </div>
              <div className="backdrop-blur-sm rounded-lg px-6 py-4 text-center shadow-lg">
                <h3 className="text-3xl font-bold">2+</h3>
                <p className="text-gray-400 text-sm">Years in Sport</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-[#1F1F1F] rounded-lg p-6 text-center shadow-lg py-10">
            <FaGraduationCap className="mx-auto text-4xl text-white mb-3" />
            <h3 className="text-red-600 font-bold text-lg">
              QUALIFIED TRAINER
            </h3>
            <p className="text-gray-400 text-sm">Certified & Experienced</p>
          </div>

          <div className="bg-[#1F1F1F] rounded-lg p-6 text-center shadow-lg py-10">
            <GiVolleyballBall className="mx-auto text-4xl text-white mb-3" />
            <h3 className="text-red-600 font-bold text-lg">S&amp;C TRAINER</h3>
            <p className="text-gray-400 text-sm">@U.O.C Football</p>
          </div>

          <div className="bg-[#1F1F1F] rounded-lg p-6 text-center shadow-lg py-10">
            <FaMapMarkerAlt className="mx-auto text-4xl text-white mb-3" />
            <h3 className="text-red-600 font-bold text-lg">FIND ME AT</h3>
            <p className="text-gray-400 text-sm">@Inleapyard</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
