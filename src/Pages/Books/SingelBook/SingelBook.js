import React from 'react';
import BookModal from '../../BookModal/BookModal';


const SingelBook = ({ data, setModalData }) => {
    const { BookImage, bookName, bookWriter, condition, price } = data;
   
    
    return (
        <div className="card glass text-left ">
            <figure><img src={BookImage} alt={bookName} className='h-80 w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>{bookWriter}</p>
                {
                    condition === 'new' ? <div className="badge badge-primary">New</div> : <div className="badge badge-accent">Used</div>
                }
                <div className='text-4xl font-bold '>${price}</div>
                <div className="card-actions justify-end">
                    {
                        condition === 'new' ?
                            <button className="btn btn-success" >Buy Now</button>
                            :

                            <label htmlFor="my-modal-3" className="btn" onClick={() => setModalData(data)}>Book Now</label>
                    }

                </div>
            </div>
        </div>
    );
};

export default SingelBook;