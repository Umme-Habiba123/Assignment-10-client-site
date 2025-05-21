import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { CiFacebook } from "react-icons/ci";
import { SlSocialGoogle } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { RiAppleLine } from "react-icons/ri";
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {

    const { logInUser, googleLogIn } = use(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)



    const handleLogIn = e => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: '🔒 Password must be at least 6 characters long.',
            });
            return;
        }

        if (!/[a-z]/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: '🔡 Password must include at least one lowercase letter.',
            });
            return;
        }

        if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: '🔠 Password must include at least one uppercase letter.',
            });
            return;
        }


        logInUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state || '/')
            }).catch(error => {
                console.log(error)

            })

    }

    const handleGoogleLogIn = () => {
        googleLogIn().then(result => {
            console.log(result.user)

        }).catch(error => {
            console.log(error)
        })
    }




    return (
        <div className='max-w-lg mx-auto'>
            <div>
                <div className="text-center lg:text-left ">
                    <h1 className="text-5xl font-bold mt-20">Log In!
                    </h1>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-5">
                    <div className="card-body">
                        <form onSubmit={handleLogIn} className="fieldset">


                            <label className="label">Email</label>
                            <input

                                name='email'
                                type="email" className="input" placeholder="📧 Email" required />



                            <label className="label">Password</label>
                            <input
                                name='password'
                                type="password" className="input" placeholder="Password" required />

                            <div>
                                <Link>
                                    <p className="link link-hover">Forgot password?</p>
                                </Link>

                            </div>

                            <button className="btn btn-neutral mt-4 border-cyan-500 bg-cyan-600 hover:bg-white hover:text-black text-lg">Login</button>

                        </form>
                        <Link to={'/signUp'}>
                            <p>Need an Account ? <span className='text-fuchsia-600 underline hover:text-blue-700'>SIGN UP</span> </p>

                        </Link>

                    </div>
                    <p className='text-gray-300 text-center text-xl mt-3'>------- OR -------</p>

                    <Link className='text-4xl flex  justify-center gap-3 mb-8 mt-4'>
                        <CiFacebook />
                        <span onClick={handleGoogleLogIn}>
                            <SlSocialGoogle />
                        </span>
                        <FaGithub />
                        <RiAppleLine />
                    </Link>


                </div>

            </div>
        </div>
    );
};

export default Login;