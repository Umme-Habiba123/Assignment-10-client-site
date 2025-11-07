import React from "react";
import { FaLaptopCode, FaBullhorn, FaPenFancy, FaSearchDollar } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaLaptopCode size={40} className="text-green-600 mb-4" />,
    title: "Web Development",
    description:
      "Build modern, responsive websites and web apps with the latest technologies. Freelancers provide full-stack, front-end, and back-end solutions."
  },
  {
    id: 2,
    icon: <FaPenFancy size={40} className="text-green-600 mb-4" />,
    title: "Content Writing",
    description:
      "Professional writers to create high-quality blogs, articles, copywriting, and product descriptions to boost your business."
  },
  {
    id: 3,
    icon: <FaBullhorn size={40} className="text-green-600 mb-4" />,
    title: "Digital Marketing",
    description:
      "Experts in SEO, social media marketing, email campaigns, and paid ads to help grow your brand online."
  },
  {
    id: 4,
    icon: <FaSearchDollar size={40} className="text-green-600 mb-4" />,
    title: "Freelance Consulting",
    description:
      "Get professional guidance to scale your projects, optimize workflows, or find the right talent for your team."
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-green-600 mb-4">Our Services</h2>
        <p className="text-gray-700 text-lg">
          We connect clients with top freelancers to help you get your projects done efficiently and professionally.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-green-600 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
