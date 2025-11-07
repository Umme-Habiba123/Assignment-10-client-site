import React from "react";
import { FaPenFancy } from "react-icons/fa";

const ContentWriting = () => {
  return (
    <div className="min-h-screen py-12 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <FaPenFancy size={50} className="text-green-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-green-600 mb-2">Content Writing</h2>
        <p className="text-gray-700 text-lg">
          Professional writers to create high-quality blogs, articles, copywriting, and product descriptions to boost your business.
        </p>
      </div>
    </div>
  );
};

export default ContentWriting;
