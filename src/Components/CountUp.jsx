import React from 'react';
import CountUp from 'react-countup';
import { FaTasks, FaSmile, FaTruck, FaAward } from 'react-icons/fa';

const stats = [
    { icon: <FaTasks size={30} />, label: 'Project', end: 100 },
    { icon: <FaSmile size={30} />, label: 'Happy Client', end: 31 },
    { icon: <FaTruck size={30} />, label: 'Project Deliver', end: 30 },
    { icon: <FaAward size={30} />, label: 'Awards Received', end: 15 },
];


const StatCard = ({ icon, label, end }) => (
    <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center  transition-shadow hover:shadow-pink-100 hover:scale-105 hover:bg-pink-100">
        <div className="mb-2 text-gray-700">{icon}</div>
        <div className="text-lg font-medium mb-1">{label}</div>
        <div className="text-2xl font-bold text-blue-600">
            <CountUp end={end} duration={2} />
        </div>
    </div>
);


const AnimatedCounters = () => {
    return (
        <div className="max-w-6xl  mx-auto px-4 py-10">
            <h2 className="text-center text-2xl font-semibold mb-8 ">
                Animating Number Counters React JS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>
        </div>
    );
};

export default AnimatedCounters;
