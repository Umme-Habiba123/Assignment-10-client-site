import { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateTasks = () => {
    const [selected, setSelected] = useState('Select Category');
    const initialTask = useLoaderData()
    const [tasks, setTasks] = useState(initialTask)
    const { _id, name, email, title, category, budget, description, deadline, user } = useLoaderData()

    const handleUpdateTask = e => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const updatedTask = Object.fromEntries(formData.entries())


        // const taskId=_id
        if (!_id) {
            console.log('Task Id missing')
            return
        }

        fetch(`http://localhost:5000/tasks/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    const remainingTask = tasks.filter(task => task._id !== _id)
                    setTasks(remainingTask)
                }
            })

    }


    return (
        <div>
            <div className='w-8/12 mx-auto my-10 space-y-5 dancing-script-font'>
                <div>
                    <h1 className='tagesschrift-regular text-5xl text-center mt-20'>Update Task</h1>
                    <p className='text-gray-500 text-center mt-4 tagesschrift-regular '>Get what you need faster from freelancers who trained their own personal AI Creation Models. Now you can browse, prompt, and generate instantly. <br /> And if you need a tweak or change, the freelancer is always there to help you perfect it.</p>
                </div>
                <form onSubmit={handleUpdateTask} className="">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* user name */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">User Name</label>
                            <input
                                defaultValue={name}
                                name="name"
                                type="text"
                                value={user?.displayName}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-not-allowed"
                                readOnly
                            />
                        </fieldset>
                        {/* email */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label"> User Email</label>
                            <input
                                defaultValue={email}
                                name="email"
                                type="email"
                                value={user?.email}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-not-allowed"
                                readOnly
                            />
                        </fieldset>

                        {/* task title */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Task Title
                            </label>
                            <input
                                defaultValue={title}
                                name="title"
                                type="text"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                placeholder="Task Title" />
                        </fieldset>

                        {/* category */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Category </label>
                            <select
                                defaultValue={category}
                                name="category"
                                onChange={(e) => setSelected(e.target.value)}
                                className={`p-3 fieldset rounded-lg border ${selected === 'Select Category'
                                        ? ' text-gray-500 border-gray-300 border'
                                        : ' text-black border-teal-500 border-2 focus:outline-none'
                                    }`}
                                required
                            >
                                <option value="" disabled hidden>
                                    Select Category
                                </option>
                                <option value="Web Development">Web Development</option>
                                <option value="Design">Design</option>
                                <option value="Writing">Writing</option>
                                <option value="Marketing">Marketing</option>
                                <option value="SEO">SEO</option>
                                <option value="App Development">App Development</option>
                                <option value="Video Editing">Video Editing</option>
                            </select>


                        </fieldset>

                        {/* deadline---- */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Deadline</label>
                            <input
                                defaultValue={deadline}
                                name="deadline"
                                onChange={(e) => setSelected(e.target.value)}
                                className={`p-3 fieldset rounded-lg border ${selected === 'Select Category'
                                    ? ' text-gray-500 border-gray-300 border'
                                    : ' text-black border-teal-500 border-2 focus:outline-none'
                                    }`}
                                type="date"
                            // className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            // placeholder="dd/mm/yyyy" 
                            />
                        </fieldset>

                        {/* budget-- */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Budget</label>
                            <input
                                defaultValue={budget}
                                name="budget"
                                type="number"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"

                                min='0' />
                        </fieldset>

                    </div>

                    <div className="mt-5">
                        {/* description --*/}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label"> Description (what needs to be done)</label>
                            <textarea
                                defaultValue={description}
                                id="description"
                                name="description"
                                rows="5"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                placeholder="Write clearly what needs to be done..."
                                required
                            ></textarea>

                            <input type="hidden" name="_id" defaultValue={_id} />


                        </fieldset>



                        <input type="submit" className="btn bg-pink-200 border border-pink-200 hover:bg-white hover:text-teal-800  mt-3 w-full text-xl dancing-script-font mb-50" value='Update Task' />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateTasks;