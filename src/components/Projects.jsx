import React from 'react';

const Projects = () => (
  <section id="projects" className="h-125 p-5 bg-blue-900/55">
    <h2 className="text-2xl text-[navyBlue] mb-6">Projects</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Project 1 */}
      <div className="bg-slate-900/50 rounded-lg overflow-hidden shadow-lg">
        <img className="w-full h-48 object-cover" src="placeholder-image.jpg" alt="Project 1" />
        <div className="p-4">
          <h3 className="text-[oceanBlue] text-lg font-bold mb-2">Robotics Navigation System</h3>
          <p className="text-[navyBlue] text-sm">Developed an autonomous navigation system for a rover using C++ and ROS, enhancing pathfinding in dynamic environments.</p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-slate-900/50 rounded-lg overflow-hidden shadow-lg">
        <img className="w-full h-48 object-cover" src="placeholder-image.jpg" alt="Project 2" />
        <div className="p-4">
          <h3 className="text-[oceanBlue] text-lg font-bold mb-2">E-commerce Platform</h3>
          <p className="text-[navyBlue] text-sm">Built a scalable e-commerce site with React, using Tailwind CSS for styling and Node.js with Express for the backend.</p>
        </div>
      </div>

      {/* Project 3 */}
      <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg">
        <img className="w-full h-48 object-cover" src="placeholder-image.jpg" alt="Project 3" />
        <div className="p-4">
          <h3 className="text-[oceanBlue] text-lg font-bold mb-2">Python Data Visualization Tool</h3>
          <p className="text-[navyBlue] text-sm">Created an interactive data visualization dashboard with Python, utilizing libraries like Matplotlib and Seaborn for insights from large datasets.</p>
        </div>
      </div>

      {/* You can add more projects here following the same structure */}
    </div>
  </section>
);

export default Projects;