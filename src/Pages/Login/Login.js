import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext/AuthContext';

const Login = () => {

    const {loginwWithEmail} = useContext(UserAuth)

    const handelLogin = (e) => {
        e.preventDefault();
        
        // Getting User Data
        const email = e.target.email.value;
        const password = e.target.password.value;

        const userInfo = {
            email,
            password
        }
        console.log(userInfo)
        
        loginwWithEmail(email, password) 
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;


            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
        });

    }

    return (
        <div>
            <div className="card flex-shrink-0 mx-auto my-20 w-full max-w-sm shadow-2xl bg-[#002B5B] text-white">
                <div className="card-body">
                    <form onSubmit={handelLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered bg-[#2B4865] " />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered bg-[#2B4865] " />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#8FE3CF] text-black hover:bg-[#002B5B] hover:text-white transition-all" type='submit'>Login</button>
                        </div>
                        <p className='py-5'> New Book House ? <Link to='/signup' className='font-bold'>Register Here</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;