import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex justify-center'>
            <div>
            <h1>404</h1>
            </div>
           <div>
             <div>
                <h1>Page Not Found!</h1>
                <p>We're sorry, but we can't find the page you were looking for. It's probably some thing we've done wrong but now we know about it and we'll try to fix it.</p>

            </div>
           <ul>
           <Link to={'/'}>
            <li>Go to home page</li>
           </Link>
           </ul>
           </div>

        </div>
    );
};

export default ErrorPage;