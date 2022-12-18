import React from 'react';

const PendingBook = ({data}) => {

    const {userEmail, bookName, bookWriter, price} = data;
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
                <button className="btn btn-warning mx-2">Approve</button>
            </th>
        </tr>
    );
};

export default PendingBook;