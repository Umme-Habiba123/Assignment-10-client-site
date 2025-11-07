import React from "react";
import { FaLaptopCode } from "react-icons/fa";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen py-12 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <FaLaptopCode size={50} className="text-green-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-green-600 mb-2">Web Development</h2>
        <p className="text-gray-700 text-lg">
          Build modern, responsive websites and web apps with the latest technologies. Freelancers provide full-stack, front-end, and back-end solutions.
        </p>
      </div>
    </div>
  );
};

export default WebDevelopment;
