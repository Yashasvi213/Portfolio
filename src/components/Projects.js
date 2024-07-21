import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <img
              src="https://www.pixelstalk.net/wp-content/uploads/2016/11/Education-Wallpapers-HD-For-Desktop.jpg"
              alt="Project 1"
              className="w-full h-48 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-2xl font-semibold mb-2">Techxury</h3>
            <p className="text-gray-700 mb-4">An Educational Website made with springboot java</p>
          
            <a href="https://techxury-fontend.vercel.app/" className="text-blue-600 hover:underline text-lg">View Project</a>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Project 2"
              className="w-full h-48 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
            <p className="text-gray-700 mb-4">A brief description of the second project, showcasing its main functionalities and impact.</p>
            <a href="#" className="text-blue-600 hover:underline text-lg">View Project</a>
          </div>

          {/* Project 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Project 3"
              className="w-full h-48 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-2xl font-semibold mb-2">Project Three</h3>
            <p className="text-gray-700 mb-4">A brief description of the third project, emphasizing its unique aspects and results.</p>
            <a href="#" className="text-blue-600 hover:underline text-lg">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
