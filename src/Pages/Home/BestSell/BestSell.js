import React, { useEffect, useState } from 'react';
import SingelBook from './SingelBook/SingelBook';

const BestSell = () => {

    // Books
    const [books, setBooks] = useState([]);

    // Load Data 

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    return (

        <div>
            <h2 className='text-4xl font-bold text-left p-10'>Best Sellers</h2>
            <div className='grid grid-cols-1 md:grid-cols-6 gap-8 p-10'>
                {
                    books?.map(book => <SingelBook data={book}></SingelBook>)
                }
            </div>
        </div>


    );
};

export default BestSell;