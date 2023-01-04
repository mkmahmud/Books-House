import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {

    // Toast for Error
    const Addbooktoast = (text) => toast.error(text)

    const location = useNavigate();

    const [activebtn, setActivebtn] = useState(false)

    const { user, loginwWithEmail } = useContext(UserAuth);


    const initialState = {
        email: '',
        password: ''
    }

    const reducer = (state, action) => {


        switch (action.type) {
            case 'input':
                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                }
            default: return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        if (state.email && state.password) {
            setActivebtn(true)
        } else {
            setActivebtn(false)
        }
    }, [state])


    if (user?.uid) {
        return location('/')
    }


    const handelLogin = (e) => {
        e.preventDefault();
        setActivebtn(false)

        loginwWithEmail(state.email, state.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if(errorCode === "auth/wrong-password"){
                    Addbooktoast('Password Wrong')
                }


                // ..
            });

    }

    return (
        <div className='bg-[#000000] text-white text-left lg:px-40 sm:px-5 lg:py-20 h-[80vh]'>
            <div className="login lg:w-[400px] sm:w-full">
                <h2 className='text-[#C6D6FF] text-4xl py-2'>Log In</h2>
                <p className='py-4'>Please enter your details to log in</p>
                <form>
                    <input type="email" placeholder="Email" onChange={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })} name='email' className="bg-[#150050] input input-bordered lg:w-full my-2" /> <br />
                    <input type="password" placeholder="Password" onChange={(e) => dispatch({ type: 'input', payload: { name: e.target.name, value: e.target.value } })} name='password' className="bg-[#150050] input input-bordered lg:w-full my-2" /> <br />
                    <p className='text-sm py-4'>I don’t have an account. <Link to='/signup' className='font-bold'>Sign up here</Link></p>

                    {
                        activebtn ? <button type='submit' onClick={handelLogin} className='bg-[#150050] text-[#FFFFFF] px-10 text-xs py-3 rounded-full'>Next</button> : <button className='bg-[#150050a6] text-[#777] px-10 text-xs py-3 rounded-full' disabled>Next</button>
                    }
                </form>

            </div>
        </div>
    );
};

export default Login;