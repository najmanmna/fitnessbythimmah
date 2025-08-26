import React, { useRef, useState } from "react";

import "./App.css";
import AboutMe from "./components/AboutMe";
import TrainWithMe from "./components/CTA";
import Footer from "./components/Footer";
import GymHeroSection from "./components/Hero";
import JoinNowEstimator from "./components/JoinNow";
import TrainingPrograms from "./components/Programs";
import WatchThimmah from "./components/Reels";
import TestimonialCarousel from "./components/Testimonials";
import CustomCursor from "./components/Cursor";

function App() {
  const programsRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <CustomCursor />
      <GymHeroSection
        onJoinNowClick={() => setShowModal(true)}
        scrollToPrograms={() =>
          programsRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <AboutMe />
      <TrainingPrograms refProp={programsRef} />
      <TestimonialCarousel />
      <WatchThimmah />
      <div className="relative overflow-hidden bg-gradient-to-r from-black to-[#1a1a1a]">
        {/* Shared Red Glow */}
        <div className="absolute right-[100px] bottom-56 w-[700px] h-[400px] bg-red-600 rounded-full blur-[300px] opacity-25 pointer-events-none "></div>

        {/* Sections */}
        <TrainWithMe onJoinNowClick={() => setShowModal(true)} />
        <Footer refProp={programsRef} />
        <JoinNowEstimator showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
}

export default App;
