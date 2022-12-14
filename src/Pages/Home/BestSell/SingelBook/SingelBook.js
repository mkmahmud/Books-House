import React from 'react';

const SingelBook = ({data}) => {
    const {image, bookName, bookWriter, condition} = data;
    return (

        <div className="card glass text-left">
            <figure><img src={image} alt={bookName} className='h-80 w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>{bookWriter}</p>
                {
                    condition ? <div className="badge badge-secondary">New</div> : <div className="badge badge-accent">Used</div>
                }
                <div className="card-actions justify-end">
                    <button className="btn btn-success">Buy Now</button>
                    <button className="btn btn-warning">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingelBook;