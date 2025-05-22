import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { RiAppleLine } from "react-icons/ri";
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser, googleLogIn, setUser, user, updateUserProfile, setErrorMessage, errorMessage, } = use(AuthContext)
    const navigate = useNavigate()

    const handleSignUp = e => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const photoURL = e.target.photoURL.value
        const password = e.target.password.value
        const ReTypePassword = e.target.ReTypePassword.value
        const checkBox=e.target.checkBox.checked
        console.log(name, email, photoURL, password, checkBox,ReTypePassword)

        setErrorMessage('')
        if(!checkBox){
            setErrorMessage('Please accept our terms and conditions')
        }

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


        setErrorMessage('')
        if (password !== ReTypePassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Passwords do not match!',
            });
            return
        }


        setErrorMessage('')

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                updateUserProfile({
                    displayName: name,
                    photoURL: photoURL
                }).then(() => {
                    setUser({
                        ...user, displayName: name,
                        photoURL: photoURL
                    })
                    Swal.fire({
                      
                        icon: "success",
                        title: "Sign Up successful!",
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        navigate('/logIn')
                    })

                }).catch(error => {
                    console.log(error)
                    setUser(user)
                })

            }).catch(error => {
                setErrorMessage(error.message)
            }
            )



    }

    const handleGoogleSignUp = () => {
        googleLogIn().then(result => {
            Swal.fire({
              
                icon: "success",
                title: "Google login successful!",
                showConfirmButton: false,
                timer: 1500
            });
            console.log(result.user)

        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='max-w-lg mx-auto '>

            <div>
                <div className="text-center lg:text-left ">
                    <h1 className="text-5xl font-bold mt-20">Sign Up!
                    </h1>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10">
                    <div className="card-body">
                        <form onSubmit={handleSignUp} className="fieldset">

                            <label className="label">Name</label>
                            <input
                                name='name'
                                type="text" className="input bg-gray-100 border-none" placeholder="Your name"
                                required />

                            <label className="label">Email</label>
                            <input

                                name='email'
                                type="email" className="input bg-gray-100 border-none" placeholder="📧 Email" />

                            <label className="label">photoURL</label>
                            <input
                                name='photoURL'
                                type="url" className="input bg-gray-100 border-none" placeholder="photoURL" required />

                            <label className="label">Password</label>
                            <input
                                name='password'
                                type="password" className="input bg-gray-100 border-none" placeholder="🔐 Password" required />


                            <label className="label">Re-Type Password</label>
                            <input
                                name='ReTypePassword'
                                type="password" className="input bg-gray-100 border-none" placeholder="🔐 Re-Type Password" required />

                            <div>
                                <div>
                                    <fieldset className="fieldset bg-base-100 border-base-300  w-64 py-4">
                                       
                                        <label className="label">
                                            <input 
                                            name='checkBox'
                                            type="checkbox"  className="checkbox text-2xl" />
                                           Accept Terms and Conditions
                                        </label>
                                    </fieldset>
                                </div>
                                
                                <Link>
                                    <p className="link link-hover">Forgot password?</p>
                                </Link>
                            </div>

                            <button className="btn btn-neutral mt-4 border-cyan-500 bg-cyan-600 hover:bg-white hover:text-black text-lg">SIGN IN</button>

                        </form>

                        {
                            errorMessage && <p className='text-red-600'>{errorMessage}</p>
                        }



                        <Link to={'/logIn'}>
                            <p>ALready a User ? <span className='text-fuchsia-600 underline hover:text-blue-700'> LOG IN</span> </p>

                        </Link>

                        <p className='text-gray-300 text-center text-xl mt-3'>------- OR -------</p>

                        <Link className='text-4xl flex  justify-center gap-3'>
                            <CiFacebook />
                            <span onClick={handleGoogleSignUp} className=''>
                                <FcGoogle />
                            </span>
                            <FaGithub />
                            <RiAppleLine />
                        </Link>

                    </div>


                </div>

            </div>

        </div>

    );
};

export default SignUp;