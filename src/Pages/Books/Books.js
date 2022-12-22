import React, { useContext, useEffect, useState } from 'react';
import { UserAuth } from '../../Context/AuthContext/AuthContext';
import SingelBook from './SingelBook/SingelBook';

const Books = () => {


    // UserData 
    const { user, databaseUserInfo } = useContext(UserAuth);


    // Books
    const [mainbooks, mainsetBooks] = useState([]);
    const [books, setBooks] = useState([]);

    // Modal Data 
    const [modalData, setModalData] = useState({});

    const bookLength = mainbooks.length;
    const [perPage, setperPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPage = Math.ceil(bookLength / perPage);


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
    console.log(modalData)

    return (
        <div className="books">
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 p-10'>
                {
                    books?.map(book => <SingelBook data={book} setModalData={setModalData}></SingelBook>)
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
            {/* Modal */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold py-2">{modalData.bookName}</h3>
                    <img src={modalData.BookImage} className='h-48 w-full' alt="" />
                    <div className="user p-5">
                        <input type="text" value={databaseUserInfo?.fullName} className="input input-bordered w-full my-2" disabled />
                        <input type="text" value={user?.email} className="input input-bordered w-full my-2" disabled />
                    </div>
                    <input type="text" value={`Cost $${modalData?.price}`} className="input input-bordered w-full my-2" disabled />
                    <input type="text" value='Your Number' className="input input-bordered w-full my-2"  />
                    <input type="text" value='Location' className="input input-bordered w-full my-2"  />
                    <input type="submit" className='btn btn-success' value='Confirm' name="" id="" />
                </div>
            </div>
        </div>

    );
};

export default Books;