import React, { useContext, useEffect, useState } from 'react';
import { UserAuth } from '../../Context/AuthContext/AuthContext';
import SingelBook from './SingelBook/SingelBook';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import useMyAdded from '../../Hooks/useMyAdded';
import { Link, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';


const Books = () => {


    // Toast for Booking
    const bookingsuccess = (text) => toast.success(text)

    // UserData 
    const { databaseUserInfo } = useContext(UserAuth);
    const { fullName, email } = databaseUserInfo;


    // Books
    const [mainbooks, mainsetBooks] = useState([]);
    // const [books, setBooks] = useState([]);

    // Modal Data 
    const [modalData, setModalData] = useState({});

    const bookLength = mainbooks.length;
    const [perPage, setperPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(0);

    const totalPage = Math.ceil(bookLength / perPage);


    const handelPage = pageNumber => {
        setCurrentPage(pageNumber)
    }

    // Load Data 
    const { loading, books } = useMyAdded(`?page=${currentPage}&perpge=${perPage}`);


    // useEffect(() => {
    //     fetch(`https://bookhouse-server-mkmahmud.vercel.app/allbooks?page=${currentPage}&perpge=${perPage}`)
    //         .then(res => res.json())
    //         .then(data => setBooks(data))
    // }, [currentPage, perPage])

    useEffect(() => {
        fetch(`https://bookhouse-server-mkmahmud.vercel.app/allbooks`)
            .then(res => res.json())
            .then(data => mainsetBooks(data))
    }, [])

    // manage booking Data
    const handleSubmit = (e) => {
        e.preventDefault()
        const bookingInfo = {
            userName: e.target.userName.value,
            userEmail: e.target.userEmail.value,
            phone: e.target.phone.value,
            location: e.target.location.value,
            productId: e.target.productId.value,
            booksUserEmail: e.target.booksUserEmail.value,
            BookImage: e.target.BookImage.value,
            bookName: e.target.bookName.value,
            booksprice: e.target.price.value,

            addedTime: new Date()
        }

        fetch('https://bookhouse-server-mkmahmud.vercel.app/addBooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    bookingsuccess('Your Booked Successfull')
                }
            })
    }


    return (
        <div className="books">
            {
                // Loader
                loading && <Loader></Loader>
            }
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 p-10'>
                {
                    books?.map(book => <SingelBook data={book} key={book._id} setModalData={setModalData}></SingelBook>)
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
                        [...Array(totalPage).keys()].map(pageNumber => <button className={`btn ${currentPage === pageNumber ? 'btn-primary' : ''}`} onClick={() => handelPage(pageNumber)}> {pageNumber + 1}</button>)

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
                    {
                        email && <form onSubmit={handleSubmit}>
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-2xl font-bold py-2">{modalData.bookName}</h3>
                            <img src={modalData.BookImage} className='h-48 w-full' alt="" />
                            <div className="user p-5">
                                <input type="text" value={fullName} name='userName' className="input input-bordered w-full my-2" />
                                <input type="text" value={email} name='userEmail' className="input input-bordered w-full my-2" />
                            </div>
                            <input type="text" value={`Cost $${modalData?.price}`} className="input input-bordered w-full my-2" disabled />
                            <input type="text" placeholder='Your Number' name='phone' className="input input-bordered w-full my-2" />
                            <input type="text" placeholder='Meet Location' name='location' className="input input-bordered w-full my-2" />
                            <input type="hidden" defaultValue={modalData._id} name='productId' />
                            <input type="hidden" defaultValue={modalData.BookImage} name='BookImage' />
                            <input type="hidden" defaultValue={modalData.bookName} name='bookName' />
                            <input type="hidden" defaultValue={modalData.price} name='price' />
                            <input type="hidden" defaultValue={modalData.userEmail} name='booksUserEmail' />
                            <input type="submit" className='btn btn-success' value='Confirm' name="" id="" />
                        </form>
                    }

                    {
                        !email && <h2 className='text-red-400'>Please Log in to Book <Link to='/login'><strong className='text-green-400'>Log In</strong></Link> <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label></h2>
                    }

                </div>
            </div>
        </div>

    );
};

export default Books;