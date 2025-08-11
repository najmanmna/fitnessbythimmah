import "./App.css";
import AboutMe from "./components/AboutMe";
import GymHeroSection from "./components/Hero";
import TrainingPrograms from "./components/Programs";
import TestimonialCarousel from "./components/Testimonials";

function App() {
  return (
    <>
      <GymHeroSection />
      <AboutMe />
      <TrainingPrograms />
      <TestimonialCarousel />
    </>
  );
}

export default App;
