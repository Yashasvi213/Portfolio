import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-4">
            Hi there! I'm an undergraduate student with a passion for technology and innovation. I am currently pursuing my degree in [Your Major] at [Your University]. 
            I have developed strong skills in various technological fields including:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Software Development</li>
            <li>Web Development</li>
            <li>Data Analysis</li>
            <li>Machine Learning</li>
          </ul>
          <p className="text-gray-700">
            I enjoy working on challenging projects and am always eager to learn new technologies. Feel free to check out my projects and get in touch if you'd like to collaborate!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
