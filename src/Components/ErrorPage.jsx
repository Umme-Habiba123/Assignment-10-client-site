
import { Link,  useNavigate } from 'react-router';
import Navbar from './Navbar';
import { FaArrowLeftLong } from "react-icons/fa6";

const ErrorPage = () => {
    const navigate=useNavigate()
    // const location=useLocation()

    return (
        <div className=' '>

            <Navbar></Navbar>
            <div className='flex justify-center w-10/12 mx-auto lg:mt-40 mt-20 gap-10 dancing-script-font'>
                <div>
                    <h1 className='lg:text-[150px] text-6xl mt-20 lg:mt-5'>404</h1>
                </div>
                <div>
                     <h1 className='lg:text-6xl text-3xl  text-red-600 font-semibold'>Page Not Found!</h1>
                    <div>

                       
                        <p className='lg:text-xl lg:mt-15 text-sm mt-5 font-semibold text-gray-500'>We're sorry, but we can't find the page you were looking for. It's probably some thing we've done wrong but now we know about it and we'll try to fix it.</p>

                    </div>
                    <ul>
                        <Link to={'/'}>
                            <li onClick={()=>navigate(-1)} className='flex lg:text-2xl gap-2 tagesschrift-regular text-cyan-600 mt-5 lg:mt-5 hover:text-black'> <span className='mt-1 '><FaArrowLeftLong /></span>Go to Previous Page</li>

                            <li className='flex lg:text-2xl gap-2 tagesschrift-regular text-cyan-600 mt-5 lg:mt-5 hover:text-black'> <span className='mt-1 '><FaArrowLeftLong /></span>Go to home page</li>
                        </Link>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;