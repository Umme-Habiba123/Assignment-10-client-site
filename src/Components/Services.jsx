import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router';

const Services = () => {

        const navigate=useNavigate()

    return (

        <div>
            <h1 className='text-4xl text-red-500 font-bold text-center mt-20 tagesschrift-regular mb-20'>NO SERVICES YET</h1>

         <ul className='flex justify-center'>
                        <Link to={'/'}>
                            <li onClick={()=>navigate(-1)} className='flex lg:text-2xl gap-2 tagesschrift-regular text-cyan-600 mt-5 lg:mt-5 hover:text-black'> <span className='mt-1 '><FaArrowLeftLong /></span>Go to Previous Page</li>

                            <li className='flex lg:text-2xl gap-2 tagesschrift-regular text-cyan-600 mt-5 lg:mt-5 hover:text-black'> <span className='mt-1 '><FaArrowLeftLong /></span>Go to home page</li>
                        </Link>
                    </ul>
        </div>
    );
};

export default Services;