import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 mb-4">
            Feel free to reach out to me through any of the following methods:
          </p>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold">Phone:</span> 
              <p className="text-blue-500 hover:underline">7828115995</p>
            </li>
            <li>
              <span className="font-semibold">Email:</span> 
              <p className="text-blue-500 hover:underline">yashasvisharma1369@gmail.com</p>
            </li>
            <li>
              <span className="font-semibold">LinkedIn:</span> 
              <a href="https://www.linkedin.com/in/yashasvisharma1369/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            </li>
            <li>
              <span className="font-semibold">GitHub:</span> 
              <a href="https://github.com/Yashasvi213" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            </li>
            <li>
              <span className="font-semibold">Resume:</span> 
              <a href="https://example.com/resume.pdf" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Download Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
