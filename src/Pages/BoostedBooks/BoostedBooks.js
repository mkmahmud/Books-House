import React, { useContext, useEffect, useState } from 'react';
import { UserAuth } from '../../Context/AuthContext/AuthContext';
import Loader from '../Loader/Loader';
import BoostedBook from './BoostedBook/BoostedBook';

const BoostedBooks = () => {

    const { databaseUserInfo } = useContext(UserAuth)
    const [boosted, setBoosted] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://bookhouse-server-mkmahmud.vercel.app/boostedBooks?email=${databaseUserInfo?.email}`)
            .then(res => res.json())
            .then(data => {
                setBoosted(data)
                setLoading(false)
            })
    }, [databaseUserInfo?.email])
    console.log(boosted)


    const deleteHandler = (id) => {

        fetch(`https://bookhouse-server-mkmahmud.vercel.app/books/delete`, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    fetch(`https://bookhouse-server-mkmahmud.vercel.app/myadded?email=${databaseUserInfo?.email}`)
                        .then(res => res.json())
                        .then(data => {
                            setBoosted(data)
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
            <h2 className='text-4xl py-2 font-bold text-center py-10 text-white bg-[#150050]'>My Boosted Books</h2>
            <div className="mybookedBooks p-5 ">
                {
                    boosted.map(boostBook => <BoostedBook deleteHandler={deleteHandler} data={boostBook} key={boostBook._id}></BoostedBook>)
                }
            </div>
        </div>
    );
};

export default BoostedBooks;