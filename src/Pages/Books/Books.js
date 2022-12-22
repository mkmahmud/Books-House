import React, { useEffect, useState } from 'react';
import SingelBook from './SingelBook/SingelBook';

const Books = () => {

    // Books
    const [mainbooks, mainsetBooks] = useState([]);
    const [books, setBooks] = useState([]);

   
    const bookLength = mainbooks.length;
    const [perPage, setperPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)

    const totalPage = Math.ceil(bookLength / perPage)


    const handelPage = pageNumber => {
        setCurrentPage(pageNumber)
    }


    // Load Data 

    useEffect(() => {
        fetch(`https://bookhouse-server-mkmahmud.vercel.app/allbooks?page=${currentPage}&perpge=${perPage}`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [currentPage, perPage])

    useEffect(() => {
        fetch(`https://bookhouse-server-mkmahmud.vercel.app/allbooks`)
            .then(res => res.json())
            .then(data => mainsetBooks(data))
    }, [])
    

    return (
        <div className="books">
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 p-10'>
                {
                    books?.map(book => <SingelBook data={book}></SingelBook>)
                }
            </div>
            {/* Pagination */}
            <div className="paigenition my-5">
                <div className="btn-group">

                    {
                        currentPage === 0 ?
                            <button className="btn" onClick={() => handelPage(currentPage - 1)} disabled>« Previous</button>
                            :
                            <button className="btn" onClick={() => handelPage(currentPage - 1)}>« Previous</button>
                    }
                    {
                        [...Array(totalPage).keys()].map(pageNumber => <button className="btn" onClick={() => handelPage(pageNumber)}> {pageNumber + 1}</button>)
                    }

                    {
                        totalPage === currentPage + 1 ?
                            <button className="btn" onClick={() => handelPage(currentPage + 1)} disabled>Next »</button>
                            :
                            <button className="btn" onClick={() => handelPage(currentPage + 1)} >Next »</button>
                    }
                </div>
            </div>
        </div>

    );
};

export default Books;