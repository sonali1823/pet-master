'use client';
import React from 'react';

const HeartwarmingPet = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-6">
        Our company provides top-notch services to our clients. Our team of experts
        is dedicated to delivering high-quality solutions that meet your needs.
      </p>
      <h2 className="text-2xl font-bold mb-4">Services</h2>
      <ul className="list-disc mb-6">
        <li className="text-lg mb-2">Service 1</li>
        <li className="text-lg mb-2">Service 2</li>
        <li className="text-lg mb-2">Service 3</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Address</h2>
      <p className="text-lg mb-6">
        123 Main St, Anytown, USA 12345
      </p>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="text-lg mb-2">
        Email: <a href="mailto:info@example.com" className="text-blue-600 hover:text-blue-800">info@example.com</a>
      </p>
      <p className="text-lg mb-2">
        Phone: 555-555-5555
      </p>
    </div>
  );
};

export default HeartwarmingPet;