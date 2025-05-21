import React, { use } from 'react';
import { Link } from 'react-router';
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { RiAppleLine } from "react-icons/ri";
import { AuthContext } from '../Provider/AuthContext';

const SignUp = () => {

    const { createUser, googleLogIn, setUser, user,updateUserProfile } = use(AuthContext)


    const handleSignUp = e => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const photoURL = e.target.photoURL.value
        const password = e.target.password.value
        const ReTypePassword = e.target.ReTypePassword.value
        console.log(name, email, photoURL, password, ReTypePassword)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                updateUserProfile({displayName: name,
                    photoURL: photoURL}).then(()=>{
                      setUser({...user,displayName: name,
                    photoURL: photoURL })
                    }).catch(error=>{
                        console.log(error)
                        setUser(user)
                    })
                
            }).catch(error => {
                console.log(error)
            }
            )

    }

    const handleGoogleSignUp=()=>{
      googleLogIn().then(result=>{
            console.log(result.user)

        }).catch(error=>{
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
                                type="photo" className="input bg-gray-100 border-none" placeholder="photoURL"  required/>

                            <label className="label">Password</label>
                            <input
                                name='password'
                                type="password" className="input bg-gray-100 border-none" placeholder="Password"  required/>


                            <label className="label">Re-Type Password</label>
                            <input
                                name='ReTypePassword'
                                type="password" className="input bg-gray-100 border-none" placeholder="Re-Type Password"  required/>

                            <div>
                                <Link>
                                    <p className="link link-hover">Forgot password?</p>
                                </Link>
                            </div>

                            <button className="btn btn-neutral mt-4 border-cyan-500 bg-cyan-600 hover:bg-white hover:text-black text-lg">SIGN IN</button>

                        </form>
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