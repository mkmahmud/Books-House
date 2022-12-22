import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingelBook from '../Books/SingelBook/SingelBook';

const CategorySearch = () => {

    const books = useLoaderData();


    // Books
    const [mainbooks, mainsetBooks] = useState([]);

    const bookLength = mainbooks.length;
    const [perPage, setperPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)

    const totalPage = Math.ceil(bookLength / perPage)


    const handelPage = pageNumber => {
        setCurrentPage(pageNumber)
    }


    return (
        <div className="books">
            {
                books.length === 0 ? <h2 className='text-4xl font-bold m-5 text-red-300'>No Data Found</h2>: ''
            }
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 p-10'>
                {
                    books?.map(book => <SingelBook data={book}></SingelBook>)
                }
            </div>
            {/* Pagination */}

            {
                books.length > 8 ?

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
                    :
                    ''}
        </div>
    );
};

export default CategorySearch;