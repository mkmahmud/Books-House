import React, { useState } from 'react';

const SingelProduct = () => {

    const [cartTotal, setcartTotal] = useState(1)

    return (
            <div className="Selected-product p-5 flex justify-between  my-5 bg-gray-100">
                <img src="https://static-01.daraz.com.bd/p/1c1f8e3394ffb3b22f5af8d2c9ee7580.jpg" className='h-52 w-52' alt="" />
                <div className="productDetails">
                    <h2>Title</h2>
                </div>
                <div className="priceQun">
                    <h2 className='text-4xl p-5 font-bold'>$33.90</h2>
                    <div className="qun py-2">
                        <button className='btn ' onClick={() => setcartTotal(cartTotal - 1)}>-</button>
                        <button className='btn bg-gray-100 text-black'>{cartTotal}</button>
                        <button className='btn ' onClick={() => setcartTotal(cartTotal + 1)}>+</button>
                    </div>
                    <button className='btn btn-warning'>X Remove</button>
                </div>
            </div>
    );
};

export default SingelProduct;