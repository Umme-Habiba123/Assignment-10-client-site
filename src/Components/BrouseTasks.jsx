import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { HiArrowLongRight } from "react-icons/hi2";

const BrouseTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error('Error fetching tasks:', err));
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 my-20 dancing-script-font">
            <h2 className="text-3xl font-bold mb-6 text-center tagesschrift-regular">Browse Tasks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tasks.map(task => (
                    <div key={task._id}

                        className="bg-white rounded-2xl  p-5 hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 shadow-md border border-teal-200 transition-all duration-500 hover:scale-103 hover:shadow-lg ease-in-out ">

                        <h3 className="text-xl font-semibold mb-2 tagesschrift-regular">{task.title}</h3>
                        <p className="text-gray-600 mb-2">
                            <strong>Category:</strong> {task.category}
                        </p>
                        <p className="text-gray-600 mb-2">
                            <strong>Budget:</strong> ${task.budget}
                        </p>
                        <p className="text-gray-500 mb-4 line-clamp-3">{task.description}</p>

                        <div className=''>
                            <Link
                                to={`/taskDetails/${task._id}`}
                                className="inline-block  bg-teal-600 text-white px-4 py-2 rounded hover:bg-white border border-cyan-500 hover:text-black transition "
                            >
                               <li className='flex gap-1 text-lg tagesschrift-regular'> See Details <span className=' '>
                                <HiArrowLongRight size={30}/> 
                                </span></li>
                                   {/* <HiArrowLongRight /> */}

                            </Link>
                         
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrouseTasks;
