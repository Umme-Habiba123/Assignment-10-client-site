import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { CiFacebook } from "react-icons/ci";
import { SlSocialGoogle } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { RiAppleLine } from "react-icons/ri";
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {

    const { logInUser, googleLogIn, } = use(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)



    const handleLogIn = e => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        logInUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    timer: 1500,
                    showConfirmButton: false,
                });
                navigate(location?.state || '/')
            }).catch(error => {
                console.log(error.code)

                if (error.code === 'auth/user-not-found') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Invalid Email',
                        text: 'This email is not registered. Please check and try again.',
                    })
                 } else if (error.code === 'auth/wrong-password') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Incorrect Password',
                        text: 'The password you entered is incorrect. Please try again.',
                    });
                }
                else if(error.code === 'auth/invalid-email'){
                      Swal.fire({
                    icon: 'error',
                    title: 'Invalid Email Format',
                    text: 'Please enter a valid email address.',
                });

                }else{
                     Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.message,
                });
                }
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
                                type="password" className="input" placeholder="🔐 Password" required />

                            <div>
                                <Link to={'/forgotPass'}>
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