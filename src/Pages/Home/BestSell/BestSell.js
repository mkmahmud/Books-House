import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../Loader/Loader';
import SingelBook from './SingelBook/SingelBook';

const BestSell = () => {

    // Books
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true)

    // Load Data 

    useEffect(() => {
        fetch('https://bookhouse-server-mkmahmud.vercel.app/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                setLoading(false)
            })
    }, [])
    console.log(books)


    return (

        <div>
            <h2 className='text-4xl font-bold text-left p-10'> New In</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 p-10'>
                {
                    books?.map(book => <SingelBook data={book}></SingelBook>)
                }
            </div>
            <div className='text-right'>
                {
                    loading && <Loader></Loader>
                }
                <button className='btn btn-info m-5'><Link to='/books'>Show All</Link></button>
            </div>
        </div>


    );
};

export default BestSell;