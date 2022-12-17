import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../Context/AuthContext/AuthContext';

const Profile = () => {

    const { user, databaseUserInfo } = useContext(UserAuth);
   
    return (
        <div className='p-20 text-left'>
            <h2 className='text-4xl font-bold'>My Account </h2>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium bg-gray-200" >
                    Login & Security
                </div>
                <div className="collapse-content">
                    <h2 className='my-2 text-xl'><strong>Name:</strong><span className='px-5'>{databaseUserInfo?.fullName ? databaseUserInfo.fullName : 'Need to Update'}</span></h2>
                    <h2 className='my-2 text-xl'><strong>Email:</strong><span className='px-5'>{user?.email ? user.email : 'Need to Update'}</span></h2>
                    <div className="forgetPassword p-5">
                        <button className="btn bg-[#8FE3CF] text-black hover:bg-[#002B5B] hover:text-white transition-all" >Change Password</button>
                    </div>
                    <div className="forgetPassword p-5">
                        <button className="btn bg-[#8FE3CF] text-black hover:bg-[#002B5B] hover:text-white transition-all" >Update Information</button>
                    </div>
                </div>

            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium bg-gray-200" >
                    Address Book
                </div>
                <div className="collapse-content">
                    <p className='py-5'>Your Doesen't have any Address</p>
                    <div className="forgetPassword p-5">
                        <button className="btn bg-[#8FE3CF] text-black hover:bg-[#002B5B] hover:text-white transition-all" >Add Address</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;