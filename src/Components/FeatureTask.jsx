import React, { useEffect, useState } from 'react';
import { FaGripfire } from "react-icons/fa";


const FeaturedTasks = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/feature.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <section className="my-10 px-5 clear-start w-7/12 mx-auto">
            <h2 className="flex justify-center text-3xl font-bold text-center mb-8"> <FaGripfire />
                Featured Task Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 text-center ">
                {categories.map((cat) => (
                    <div key={cat.id} className="p-5 bg-white border border-pink-100 transition-transform duration-300 hover:scale-105 shadow-md rounded-lg hover:shadow-xl hover:shadow-pink-300 ">
                        <div className="text-4xl mb-2">{cat.icon}</div>
                        <h3 className="font-semibold text-lg">{cat.category}</h3>
                        <p className="text-gray-500 text-sm">{cat.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedTasks;
