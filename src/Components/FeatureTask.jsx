import React, { useEffect, useState } from 'react';
import { FaGripfire } from "react-icons/fa";

const FeaturedTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("https://freelance-marketplace-server-one.vercel.app/featured-tasks")
            .then(res => res.json())
            .then(data => setTasks(data));
    }, []);

    return (
        <section className="my-10 px-5 w-11/12 md:w-9/12 lg:w-7/12 mx-auto">
            <h2 className="flex justify-center items-center gap-2 text-3xl font-bold text-center mb-8">

                <FaGripfire /> Featured Tasks
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                {tasks.map((task) => (
                    <div key={task._id} className="p-5 bg-white border border-pink-100 hover:scale-105 transition-transform duration-300 shadow-md rounded-lg hover:shadow-xl hover:shadow-pink-300">
                        <h3 className="font-semibold text-lg">{task.title}</h3>
                        <p className="text-gray-500 text-sm mb-1">{task.description}</p>
                        <p className="text-xs text-gray-400">Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedTasks;
