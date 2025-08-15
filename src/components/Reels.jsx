import React, { useEffect, useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import reel1 from "../assets/reels/reel1.mp4";
import reel2 from "../assets/reels/reel2.mp4";
import reel3 from "../assets/reels/reel3.mp4";

const videos = [
  { id: 1, src: reel1 },
  { id: 2, src: reel2 },
  { id: 3, src: reel3 },
];

export default function WatchThimmah() {
  const videoRefs = useRef([]);
  const [mutedStates, setMutedStates] = useState(videos.map(() => true));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {}); // Prevent autoplay error
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  const toggleMute = (index) => {
    const newMutedStates = [...mutedStates];
    newMutedStates[index] = !newMutedStates[index];
    setMutedStates(newMutedStates);

    if (videoRefs.current[index]) {
      videoRefs.current[index].muted = newMutedStates[index];
    }
  };

  return (
    <section className="bg-[#111] py-16 px-4">
      <h2 className="font-heading text-center text-white text-4xl md:text-5xl font-bold mb-10 tracking-wide">
        WATCH THIMMAH IN ACTION
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="relative overflow-hidden rounded-xl border border-red-600 bg-black"
          >
            <div className="aspect-[9/16] w-full relative">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video.src}
                className="w-full h-full object-cover"
                muted={mutedStates[index]}
                playsInline
                loop
              />
              {/* Mute/Unmute Button */}
              <button
                onClick={() => toggleMute(index)}
                className="absolute bottom-3 right-3 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
              >
                {mutedStates[index] ? (
                  <FaVolumeMute className="text-xl text-red-400" />
                ) : (
                  <FaVolumeUp className="text-xl text-red-400" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
