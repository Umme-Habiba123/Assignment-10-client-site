import React, { useEffect, useState } from 'react';
import { FaGripfire } from "react-icons/fa";

const FeaturedTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/featured-tasks")
            .then(res => res.json())
            .then(data => setTasks(data));
    }, []);

    return (
        <section className="my-20 px-4 sm:px-6 md:px-8 lg:px-10 w-full max-w-7xl mx-auto ">
            <h2 className="flex justify-center items-center gap-2 text-3xl md:text-4xl font-bold text-center mb-8 text-black">
                <FaGripfire className="text-red-500" /> Featured Tasks
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {tasks.map((task) => (
                    <div
                        key={task._id}
                        className="p-5 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col justify-between hover:shadow-black"
                    >
                        <h3 className="font-semibold text-lg md:text-xl text-black mb-2">{task.title}</h3>
                        <p className="text-gray-700 text-sm md:text-base mb-2">{task.description}</p>
                        <p className="text-gray-400 text-xs md:text-sm">Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedTasks;
