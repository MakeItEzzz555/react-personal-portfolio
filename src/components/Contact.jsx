import React from 'react';

const Contact = () => (
  <section id="contact" className="bg-[saltWhite] text-[navyBlue] p-10">
    <h2 className="text-2xl mb-4">Contact Me</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p><strong>Email:</strong> nikolas.savvides@example.com</p>
        <p><strong>Phone:</strong> +1 (234) 567-8901</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nikolas-savvides" className="text-darkGreen hover:underline">linkedin.com/in/nikolas-savvides</a></p>
      </div>
      <div>
        <p>Feel free to reach out through any of these methods for work opportunities, collaborations, or just to say hello!</p>
      </div>
    </div>
  </section>
);

export default Contact;