import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase.init';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const ForgotPass = () => {

    const [email, setEmail] = useState('');
    const navigate = useNavigate()

    const handleForgotPass = e => {
        e.preventDefault();

        if (!email) {
            Swal.fire({
                icon: 'warning',
                title: 'Email Required',
                text: 'Please enter your registered email address.',
            });
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Email Sent',
                    text: 'Password reset link has been sent to your email.',
                })
                .then(()=>{
                           navigate('/login')
                })
            })
      
            .catch(error => {

                Swal.fire({
                    icon: 'error',
                    title: 'Failed to Send Email',
                    text: error.message,
                });
            });
    };

    return (
        <div>
            <div className="max-w-md mx-auto p-4 border rounded shadow border-gray-300 mt-50">
                <h2 className="text-3xl font-bold mb-6 text-center">Reset Password</h2>
                <form onSubmit={handleForgotPass}>
                    <label className="block mb-2 font-semibold">Email Address</label>
                    <input
                        type="email"
                        className="input input-bordered w-full mb-4"
                        placeholder="🔐 Enter your registered email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="btn btn-primary w-full"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPass;
