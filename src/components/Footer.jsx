import React from 'react';

const Footer = () => (
  <footer className="bg-[navyBlue] text-[saltWhite] py-4">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} Nikolas Savvides. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;