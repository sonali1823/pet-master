'use client';
import React from 'react';

const HeartwarmingPet = () => {
  return (
     <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24 shadow-lg rounded-lg">
   
    <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
    <p className="text-lg mb-6 text-center">
        Our company provides top-notch services to our clients. Our team of experts is dedicated to delivering high-quality solutions that meet your needs.
    </p>
    
  
    <h2 className="text-2xl font-bold mb-4">Services</h2>
    <div className="flex flex-wrap justify-between items-center mb-6">
        <div className="w-full md:w-1/3 p-4 text-center">
            <img src="/adoptme.jpg" alt="Service 1" className="w-full h-72 mb-4  object-cover rounded-lg"/>
            <p className="text-lg">Adopt Me</p>
        </div>
        <div className="w-full md:w-1/3 p-4 text-center">
            <img src="/pet-grooming.png" alt="Service 2" className="w-full h-72  object-cover mb-4 rounded-lg"/>
            <p className="text-lg">Pet Grooming</p>
        </div>
        <div className="w-full md:w-1/3 p-4 text-center">
            <img src="/healthcare.jpg" alt="Service 3" className="w-full h-72  object-cover mb-4 rounded-lg"/>
            <p className="text-lg">Health Care</p>
        </div>
    </div>

  
    <div className="flex flex-wrap justify-between items-start mb-6 text-center">
       
        <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Address</h2>
            <p className="text-lg">123 Main St, Anytown, USA 12345</p>
        </div>
       
        <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg mb-2">
                Email: <a href="mailto:info@example.com" className="text-blue-600 hover:text-blue-800">info@example.com</a>
            </p>
            <p className="text-lg mb-2">Phone: 555-555-5555</p>
        </div>
    </div>
</div>
  );
};

export default HeartwarmingPet;
