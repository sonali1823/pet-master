'use client';
import React from 'react';


const HeartwarmingPet = () => {
  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded shadow-md">
      <h1 className="text-3xl text-black  font-bold mb-4">Get in Touch with Us!</h1>
      <p className="text-lg mb-4 text-black ">We love to hear from you! Whether you have a question, a concern, or just want to say hi, we&apos;re all ears (or should we say, all paws?)</p>
      <form className="mb-4">
        <label htmlFor="name" className="block text-lg text-black mb-2">Your Name:</label>
        <input type="text" id="name" name="name" className="block w-full p-2 mb-4 border border-gray-400 rounded" />
        <label htmlFor="email" className="block text-lg text-black mb-2">Your Email:</label>
        <input type="email" id="email" name="email" className="block w-full p-2 mb-4 border border-gray-400 rounded" />
        <label htmlFor="message" className="block text-black text-lg mb-2">Your Message:</label>
        <textarea id="message" name="message" className="block w-full p-2 mb-4 border border-gray-400 rounded" />
        <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Send</button>
      </form>
      <div className="contact-info mb-4">
        <p className="text-lg text-black mb-2">Phone: 555-555-5555</p>
        <p className="text-lg text-black mb-2">Email: info@heartwarmingpet.com</p>
        <p className="text-lg text-black mb-2">Address: 123 Pet Lane, Anytown, USA</p>
      </div>
    </div>
  );
};

export default HeartwarmingPet;