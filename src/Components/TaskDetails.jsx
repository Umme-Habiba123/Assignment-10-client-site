import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";





const TaskDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    //   const location=useLocation()
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5000/tasks/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Task not found");
                }
                return res.json();
            })
            .then((data) => {
                setTask(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching task details:", err);
                setError(err.message);
                setLoading(false);
            });

    }, [id]);

    if (loading) return <div className="text-center mt-10">Loading...</div>;
    if (error) return (
        <div className="text-center my-10 text-3xl  text-red-600">
            {error} <br />
            <button onClick={() => navigate(-1)} className=" items-center gap-3 mt-10  py-2 bg-cyan-600 px-10 hover:text-black hover:bg-white border-cyan-600 border hover:border-cyan-500 text-white rounded tagesschrift-regular">
                Go Back
            </button>
        </div>
    );

    return (

        <div className="max-w-4xl  mx-auto p-6 bg-white shadow-lg rounded-lg mt-30 dancing-script-font">
            {/* button----- */}
            <button onClick={() => navigate(-1)} className="text-2xl tagesschrift-regular mb-15 bg-cyan-500 text-white hover:bg-white hover:text-black border-cyan-500 p-5 btn"><FaArrowLeftLong /> Go Back</button>
            <h2 className="text-3xl font-bold mb-4 tagesschrift-regular">
                {task.title}
            </h2>
            <p className=""><strong>Category : </strong> {task.category}</p>
            <p className=""><strong>Budget : </strong> <span className="text-teal-700 font-bold">${task.budget}</span></p>
            <p><strong>Deadline : </strong><span className="tagesschrift-regular">
                {task.deadline}</span></p>
            <p className="mt-4 text-gray-500 font-bold">{task.description}</p>

            <div className="mt-6">
                <p><strong>Posted by : </strong><span className="text-green-700">
                    {task.name}</span></p>
                <p className=""><strong>Email : </strong> <span className="text-green-700">
                    {task.email}</span></p>
            </div>


        </div>
    );
};

export default TaskDetails;
