import React, { useEffect, useState } from 'react';

const MyBookedBook = ({data}) => {

    const {productId, BookImage, bookName,location, booksprice, addedTime} = data;


    
    
    return (
        <div className="card card-side bg-base-100 shadow-xl my-2 min-w-md">
            <figure><img src='https://about.proquest.com/globalassets/proquest/media/images/decrotive/oldbooks.jpg' className='h-48' alt="Movie" /></figure>
            <div className="card-body text-left">
                <h2 className="card-title">{bookName}</h2>
                <p>Price <strong>{booksprice}</strong></p>
                <p>Location: <strong>{location}</strong></p>
                <p>Added Time: <strong>{addedTime}</strong></p>
                <div className="card-actions justify-end">
                    <button className="btn  bg-red-400">X</button>
                </div>
            </div>
        </div>
    );
};

export default MyBookedBook;