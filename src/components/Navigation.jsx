import React from 'react';

const Navigation = () => (
  <nav className="w-full sticky top-0 h-35 flex items-center justify-center p-10 lg:flex-row space-x-4 bg-[#8DECB4] border-b-2 border-indigo-600 ">
    
    <a href="" className="flex w-1/2 justify-center text-[#141E46] text-3xl font-serif">Nicolas Savvides</a>  
    <ul className="w-1/2 flex items- justify-start p-10 lg:flex-row space-x-4 text-2xl">
      <li><a href="#about" className=" px-3 mx-8 text-[#141E46] border-x-2">About</a></li>
      <li><a href="#projects" className="px-3 mx-8 text-[#141E46] border-x-2">Projects</a></li>
      <li><a href="#contact" className="px-3 mx-8 text-[#141E46] border-x-2">Contact</a></li>
      <li><a href="#inquiries" className="px-3 mx-8  text-[#141E46] border-x-2">Inquiries</a></li>
    </ul>
  </nav>
);

export default Navigation;