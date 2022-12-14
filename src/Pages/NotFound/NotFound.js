import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../Assetes/404.png'
import { UserAuth } from '../../Context/AuthContext/AuthContext';

const NotFound = () => {

    const {mk} = useContext(UserAuth)

    console.log(mk)

    return (
        <div className='bg-black h-screen '>
            <img src={notFound} className='block m-auto' alt="" />
            <Link to='/' className='text-white text-4xl border border-2 px-5 py-2 rounded-lg'>Go Home</Link>
        </div>
    );
};

export default NotFound;