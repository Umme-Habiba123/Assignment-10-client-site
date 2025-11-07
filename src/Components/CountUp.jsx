import React from 'react';
import CountUp from 'react-countup';
import { FaTasks, FaSmile, FaTruck, FaAward } from 'react-icons/fa';

const stats = [
  { icon: <FaTasks size={30} />, label: 'Projects', end: 100 },
  { icon: <FaSmile size={30} />, label: 'Happy Clients', end: 31 },
  { icon: <FaTruck size={30} />, label: 'Projects Delivered', end: 30 },
  { icon: <FaAward size={30} />, label: 'Awards Received', end: 15 },
];

const StatCard = ({ icon, label, end }) => (
  <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <div className="mb-2 text-black">{icon}</div>
    <div className="text-lg font-medium mb-1 text-black">{label}</div>
    <div className="text-2xl md:text-3xl font-bold text-black">
      <CountUp end={end} duration={2} />
    </div>
  </div>
);

const AnimatedCounters = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-30">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10 text-black">
        Our Achievements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default AnimatedCounters;
