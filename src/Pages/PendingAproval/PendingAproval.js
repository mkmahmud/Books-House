import React, { useEffect, useState } from 'react';
import PendingBook from './PendingBook/PendingBook';

const PendingAproval = () => {

    const [pendingBooks, setPendingBooks] = useState([])


    // Getting data form Database 
    useEffect(()=>{
        fetch(`http://localhost:5000/booksApproval`) 
         .then(res => res.json())
         .then(data => setPendingBooks(data))
    },[])


    return (
            <div className="overflow-x-auto w-full p-5 ">
                <h2 className='text-4xl font-bold  py-5'>Pending Approval</h2>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>User Email</th>
                            <th>Book Title</th>
                            <th>Writer</th>
                            <th>Price </th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        pendingBooks.map(pendingBook => <PendingBook data={pendingBook}></PendingBook>)
                       }
                    </tbody>

                </table>
            </div>
    );
};

export default PendingAproval;