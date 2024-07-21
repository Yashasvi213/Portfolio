import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-blue-500 text-white py-20 flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0">
        <img
          src="https://via.placeholder.com/1500x800" // Replace with your hero image URL
          alt="Hero Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl mb-8">
          I’m a passionate developer with skills in web development, software engineering, and more.
        </p>
        <a
          href="#contact"
          className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 py-2 px-6 rounded-full text-lg font-semibold"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
