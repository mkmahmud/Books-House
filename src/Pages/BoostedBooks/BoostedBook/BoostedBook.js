import React from 'react';

const BoostedBook = ({ data, deleteHandler, boostandeler }) => {


    const { status, price, category, bookWriter, BookImage, bookName, location, booksprice, addedTime, _id } = data;

    return (
        <div className="card card-side bg-[#3F0071] text-white shadow-xl my-4 p-2 min-w-md">
            <figure><img src={BookImage} className='h-48 w-48 border border-2 rounded rounded-xl p-2' alt="Movie" /></figure>
            <div className="card-body text-left">
                <h2 className="card-title">{bookName}</h2>
                <h2 className="card-title">{bookWriter}</h2>
                <p>Price: <strong>{price}</strong></p>
                <p>Category: <strong>{category}</strong></p>
                <div className="card-actions justify-end">

                    <button className="btn  btn-primary">Boosted</button>

                    <button className="btn  bg-red-400" onClick={() => { deleteHandler(_id) }}>X</button>
                </div>
            </div>
        </div>
    );
};

export default BoostedBook;