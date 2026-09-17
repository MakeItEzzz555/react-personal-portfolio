import React from 'react';

const Inquiries = () => (
  <section id="inquiries" className="bg-[navyBlue] text-[turquise] p-10">
    <h2 className="text-2xl mb-4">Inquiries</h2>
    <p>Feel free to reach out for any project inquiries or collaborations:</p>
    <form className="mt-4">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
        <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name"/>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email"/>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="3" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Message"></textarea>
      </div>
      <button type="submit" className="bg-[navyBlue] hover:bg-[turquise] text-[saltWhite] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit Inquiry
      </button>
    </form>
  </section>
);

export default Inquiries;