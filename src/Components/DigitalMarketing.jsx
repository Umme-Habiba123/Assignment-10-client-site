import React from "react";
import { FaBullhorn } from "react-icons/fa";

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen py-12 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <FaBullhorn size={50} className="text-green-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-green-600 mb-2">Digital Marketing</h2>
        <p className="text-gray-700 text-lg">
          Experts in SEO, social media marketing, email campaigns, and paid ads to help grow your brand online.
        </p>
      </div>
    </div>
  );
};

export default DigitalMarketing;
