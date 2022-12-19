import React from 'react';

const SingelBook = ({data}) => {
    const {BookImage, bookName, bookWriter, condition} = data;
    return (
        <div className="card glass text-left ">
        <figure><img src={BookImage} alt={bookName} className='h-80 w-full' /></figure>
        <div className="card-body">
            <h2 className="card-title">{bookName}</h2>
            <p>{bookWriter}</p>
            {
                condition === 'new' ? <div className="badge badge-primary">New</div> : <div className="badge badge-accent">Used</div>
            }
            <div className='text-4xl font-bold '>$90</div>
            <div className="card-actions justify-end">
                <button className="btn btn-success">Buy Now</button>
                <button className="btn btn-warning">Cart</button>
            </div>
        </div>
    </div>
    );
};

export default SingelBook;