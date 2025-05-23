import React, { useEffect, useState,  use } from "react";
import { AuthContext } from "../Provider/AuthContext"; 
import { Link } from "react-router"; 
import Swal from "sweetalert2";

const MyPostedTasks = () => {
    const { user } = use(AuthContext);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/tasks?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setTasks(data))
                .catch((err) => console.error("Error loading tasks:", err));
        }
    }, [user]);

    const handleDelete = (id) => {
        console.log('delete clicked')
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/tasks/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            setTasks(tasks.filter(task => task._id !== id));
                            Swal.fire("Deleted!", "Your task has been deleted.", "success");
                        }
                    });
            }
        });
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-center tagesschrift-regular ">My Posted Tasks</h2>
            <div className="overflow-x-auto  rounded-2xl shadow-xl p-5 dancing-script-font">
                <table className="min-w-full bg-white border  border-gray-200 ">

                    <thead>
                        <tr className="bg-gray-100 p-5">
                            <th className="py-2 px-4 text-left">Title</th>
                            <th className="py-2 px-4 text-left">Category</th>
                            <th className="py-2 px-4 text-left">Budget</th>
                            <th className="py-2 px-4 text-left">Deadline</th>
                            <th className="py-2 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {tasks.map((task) => (
                            <tr key={task._id} className="border-t border-gray-200">
                                <td className="py-2 px-4">{task.title}</td>
                                <td className="py-2 px-4">{task.category}</td>
                                <td className="py-2 px-4">${task.budget}</td>
                                <td className="py-2 px-4">
                                    {new Date(task.deadline?.trim?.() || "").toLocaleDateString()}
                                </td>
                                <td className="py-5 px-4 space-x-2">
                                    <Link to={`/updateTask/${task._id}`} className="btn bg-cyan-500 text-white px-3 py-1 border border-pink-200 rounded hover:bg-white hover:text-black">Update</Link>

                                    <button onClick={() => handleDelete(task._id)} className="btn bg-teal-500 text-white px-3 py-1 rounded hover:bg-white hover:text-black">Delete</button>

                                    <Link to={`/task-bids/${task._id}`} className="btn  bg-pink-300 text-green-900 px-3 py-1 rounded hover:bg-white hover:text-black">Bids</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {tasks.length === 0 && <p className="text-center text-gray-500 mt-4 text-5xl">No tasks found.</p>}
            </div>
        </div>
    );
};

export default MyPostedTasks;
