import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../../Loader/Loader';


const PendingBook = ({data}) => {
    const {_id, userEmail, bookName, bookWriter, price} = data;

    const approvedToast = (text) => toast.success(text)
    const [loading, setLoading] = useState(false)
    const handelApprove = (id) => {
          setLoading(true)

        fetch(`https://bookhouse-server-mkmahmud.vercel.app/booksapproved?id=${id}`, {
            method:'POST'
        })
         .then(res => res.json())
         .then(data => {
                approvedToast('Approved')
                setLoading(false)
         })

    }


    return (
        <tr>
                {/* Loader */}
                {loading ? <Loader></Loader> : ''}
            <td>
                {
                    userEmail
                }
            </td>
            <td>
                {
                    bookName
                }
            </td>
            <td>{bookWriter}</td>
            <td>${price}</td>
            <th className='flex'>
                <button className="btn btn-info">details</button>
                <button className="btn btn-warning mx-2" onClick={() => {handelApprove(_id)}} >Approve</button>
            </th>
        </tr>
    );
};

export default PendingBook;