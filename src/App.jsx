import "./App.css";
import AboutMe from "./components/AboutMe";
import TrainWithMe from "./components/CTA";
import Footer from "./components/Footer";
import GymHeroSection from "./components/Hero";
import TrainingPrograms from "./components/Programs";
import WatchThimmah from "./components/Reels";
import TestimonialCarousel from "./components/Testimonials";

function App() {
  return (
    <>
      <GymHeroSection />
      <AboutMe />
      <TrainingPrograms />
      <TestimonialCarousel />
      <WatchThimmah />
      <div className="relative overflow-hidden bg-gradient-to-r from-black to-[#1a1a1a]">
        {/* Shared Red Glow */}
        <div className="absolute right-[100px] bottom-56 w-[700px] h-[400px] bg-red-600 rounded-full blur-[300px] opacity-25 pointer-events-none "></div>

        {/* Sections */}
        <TrainWithMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
