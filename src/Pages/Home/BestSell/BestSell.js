import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingelBook from './SingelBook/SingelBook';

const BestSell = () => {

    // Books
    const [books, setBooks] = useState([]);

    // Load Data 

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data))
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
                <button className='btn btn-info m-5'><Link to='/books'>Show All</Link></button>
            </div>
        </div>


    );
};

export default BestSell;