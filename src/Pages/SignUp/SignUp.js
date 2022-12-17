import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext/AuthContext';

const SignUp = () => {

    const { signupWithEmail } = useContext(UserAuth)

    const handelSignUp = (e) => {
        e.preventDefault();

        // Getting User Data
        const fullName = e.target.fullname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const userRoleChecked = e.target.userRole.checked;
        const userRole = userRoleChecked ? 1 : 2;
        

        const userInfo = {
            fullName,
            email,
            role:userRole
        }
        

        signupWithEmail(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)


                fetch('http://localhost:5000/insertUser', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
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
                    <form onSubmit={handelSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Full Name</span>
                            </label>
                            <input type="text" name='fullname' placeholder="Full Name" className="input input-bordered bg-[#2B4865] " />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered bg-[#2B4865] " />
                        </div>
                        <div className="form-control py-2 border border-2 rounded my-2">
                            <label className="cursor-pointer label">
                                <span className="label-text text-white">Are you want to sell youe books</span>
                                <input type="checkbox"  name='userRole'  className="checkbox checkbox-success" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered bg-[#2B4865] " />
                            <label className="label">
                                <Link className="label-text-alt link link-hover text-white">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#8FE3CF] text-black hover:bg-[#002B5B] hover:text-white transition-all" type='submit'>Register</button>
                        </div>
                        <p className='py-5'>Already Book House ? <Link to='/login' className='font-bold'>Log In Here</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;