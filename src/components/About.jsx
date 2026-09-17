import React from 'react';

const About = () => (
  <section id="about" className="p-10 text-[navyBlue]">
    <h1 className="flex text-3xl mb-4 justify-center">About Me</h1>
    <div className ="flex items-start  lg:flex-col">
    <p className="mb-4">
    Nikolas Savvides
    I am a passionate software engineering student at Frederick University, where I am honing my skills to blend technology with creativity. With over 5 years of experience across a broad spectrum of technical areas, I've developed a robust foundation in:
    </p>
    <ul className="list-disc pl-5">
    
    <li>Web Development: Crafting responsive and dynamic websites using both front-end and back-end technologies.  </li>
    <li>Console Applications with C++: I've built robust, efficient applications that handle complex data processing and algorithms.</li>
    <li>Complex Problem Solving: My background includes tackling intricate problems, often integrating multiple disciplines for innovative solutions.</li>
    <li>Scripting in Python: From automation scripts to data analysis, Python has been a versatile tool in my toolkit for various project needs.</li>
    <li>Bot Development with API Keys: I've delved into creating bots for social media platforms and other services, enhancing user interaction and automation.</li>
    <li>Robotics Projects: My work in robotics has allowed me to apply coding in real-world scenarios, including autonomous navigation and sensor integration.</li>
    </ul>
    <p>
      My journey in software engineering isn't just about writing code; it's about creating solutions that make a difference. I thrive on challenges that push me to learn new technologies and methodologies. My academic projects and personal endeavors reflect a commitment to continuous learning and innovation, aiming to bridge the gap between theoretical knowledge and practical application.
    I'm eager to collaborate on projects that require a blend of technical prowess and creative thinking, looking forward to opportunities that challenge the status quo and drive technological advancement.</p>
    </div>
  </section>
);
export default About;