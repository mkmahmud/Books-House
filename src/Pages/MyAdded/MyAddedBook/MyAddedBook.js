import React from 'react';

const MyAddedBook = ({data}) => {

    
    const {status, price, category, bookWriter, BookImage, bookName,location, booksprice, addedTime} = data;




    return (
        <div className="card card-side bg-base-100 shadow-xl my-2 min-w-md">
        <figure><img src={BookImage} className='h-48 w-48' alt="Movie" /></figure>
        <div className="card-body text-left">
            <h2 className="card-title">{bookName}</h2>
            <h2 className="card-title">{bookWriter}</h2>
            <p>Price: <strong>{price}</strong></p>
            <p>Category: <strong>{category}</strong></p>
            <div className="card-actions justify-end">
                {
                    status === 1 ? <button className="btn  btn-success">Live</button> : <button className="btn  btn-warning">Pending</button>
                }
                <button className="btn  bg-red-400">X</button>
            </div>
        </div>
    </div>
    );
};

export default MyAddedBook;