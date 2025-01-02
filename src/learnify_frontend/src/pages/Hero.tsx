import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/src/assets/videos/hero_bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold">Shaping Tomorrow’s Energy</h1>
        <p className="mt-4 text-lg">with Smart Solutions</p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
          Discover
        </button>
        <button className="mt-2 px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-green-500 transition">
          Technology
        </button>
      </div>
    </div>
  );
};

export default Hero; 