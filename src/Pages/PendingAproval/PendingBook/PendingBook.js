import React from 'react';

const PendingBook = ({data}) => {
    const {_id, userEmail, bookName, bookWriter, price} = data;

    const handelApprove = (id) => {


        fetch(`https://bookhouse-server-nine.vercel.app/booksapproved?id=${id}`, {
            method:'POST'
        })
         .then(res => res.json())
         .then(data => console.log(data))

    }


    return (
        <tr>
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