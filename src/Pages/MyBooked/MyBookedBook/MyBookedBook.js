import React, { useEffect } from 'react';

const MyBookedBook = ({data}) => {

    const {productId, BookImage, bookName, booksprice} = data;
    
    
    return (
        <div className="card card-side bg-base-100 shadow-xl my-2 min-w-md">
            <figure><img src={BookImage} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>Price {booksprice}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default MyBookedBook;