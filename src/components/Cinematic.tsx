"use client";

import { useEffect, useState } from "react";

export default function Cinematic() {
  const [show, setShow] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("hasSeenCinematic");
    if (hasSeen) setShow(false);
  }, []);

  const handleSkip = () => {
    setFading(true);
    setTimeout(() => {
      localStorage.setItem("hasSeenCinematic", "true");
      setShow(false);
    }, 700);
  };

  if (!show) return null;

  return (
    <section
      className={`w-full h-screen bg-black text-white flex items-center justify-center flex-col transition-opacity duration-700 ease-in-out ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="text-4xl font-bold mb-4 text-center">
        Your Organizational Clarity Begins Here
      </h1>

      {!videoLoaded && (
        <p className="text-sm text-gray-400 mb-4">Loading cinematic...</p>
      )}

      <video
        src="/cinematic.mp4"
        className="w-3/4 rounded-lg shadow-lg"
        autoPlay
        muted
        playsInline
        preload="auto"
        onCanPlay={() => setVideoLoaded(true)}
        onEnded={handleSkip}
      />

      <button
        onClick={handleSkip}
        className="mt-6 px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
      >
        Skip Intro
      </button>
    </section>
  );
}
