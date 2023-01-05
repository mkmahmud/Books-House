import { ConstructionOutlined } from '@mui/icons-material';
import React, { useContext, useEffect, useState } from 'react';
import { UserAuth } from '../../Context/AuthContext/AuthContext';
import Loader from '../Loader/Loader';
import MyBookedBook from '../MyBooked/MyBookedBook/MyBookedBook';
import MyAddedBook from './MyAddedBook/MyAddedBook';

const MyAdded = () => {

    // Get User Email
    const { databaseUserInfo } = useContext(UserAuth)
    const [loading, setLoading] = useState(true)

    const [bookedBooks, setBookedBooks] = useState([]);




    useEffect(() => {
        fetch(`https://bookhouse-server-mkmahmud.vercel.app/myadded?email=${databaseUserInfo?.email}`)
            .then(res => res.json())
            .then(data => {
                setBookedBooks(data)
                setLoading(false)
            })
    }, [databaseUserInfo.email])


    

    const deleteHandler = (id) => {

        fetch(`https://bookhouse-server-mkmahmud.vercel.app/books/delete`, {
            method: 'delete',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify({id})
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                fetch(`https://bookhouse-server-mkmahmud.vercel.app/myadded?email=${databaseUserInfo?.email}`)
                .then(res => res.json())
                .then(data => {
                    setBookedBooks(data)
                    setLoading(false)
                })
            }
        })
    }


    const boostandeler = (id) => {


        // console.log(id)
        fetch(`https://bookhouse-server-mkmahmud.vercel.app/books/boost`, {
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({id})
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                fetch(`https://bookhouse-server-mkmahmud.vercel.app/myadded?email=${databaseUserInfo?.email}`)
                .then(res => res.json())
                .then(data => {
                    setBookedBooks(data)
                    setLoading(false)
                })
            }
        })
    }


    return (
        <div>
            {
                loading && <Loader></Loader>
            }
            <h2 className='text-4xl py-2 font-bold text-center py-10 text-white bg-[#150050]'>My Added Books</h2>
            <div className="mybookedBooks p-5 ">
                {
                    bookedBooks.map(bookedBook => !bookedBook?.boost && <MyAddedBook deleteHandler={deleteHandler} boostandeler={boostandeler} data={bookedBook} key={bookedBook._id}></MyAddedBook>)
                }
            </div>
        </div>
    );
};

export default MyAdded;