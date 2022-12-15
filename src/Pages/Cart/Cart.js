import React, { useState } from 'react';

const Cart = () => {

    const [cartTotal , setcartTotal] = useState(1)


    return (
        <div className='p-10'>
            <h2 className='text-2xl font-bold text-left'>My Cart</h2>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className="card w-96 bg-base-100 shadow-xl border border-1 rounded p-5">
                            <h2 className='card-title'>Order Summary</h2>
                            <div className="divider"></div>
                            <div className="px-2">
                                <p className='flex justify-between'> <span>1 items total</span> <strong>$932</strong></p>
                               <div className="divider"></div>
                                <p className='flex justify-between'> <span>Shipping to</span> <strong>Free</strong></p>
                               <div className="divider"></div>
                                <p className='flex justify-between'> <strong>Total</strong> <strong>$932</strong></p>
                            </div>
                            <button className='btn btn-primary my-4'>Procced to Pay</button>
                            <p>* Prices may vary depending on the final shipping destination.</p>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="Selected-product p-5 flex justify-between">
                            <img src="https://static-01.daraz.com.bd/p/1c1f8e3394ffb3b22f5af8d2c9ee7580.jpg" className='h-52 w-52' alt="" />
                            <div className="productDetails">
                                <h2>Title</h2>
                            </div>
                            <div className="priceQun">
                                <h2 className='text-4xl p-5 font-bold'>$33.90</h2>
                                <div className="qun py-2">
                                    <button className='btn ' onClick={() => setcartTotal(cartTotal-1)}>-</button>
                                    <button className='btn bg-gray-100 text-black'>{cartTotal}</button>
                                    <button className='btn ' onClick={() => setcartTotal(cartTotal+1)}>+</button>
                                </div>
                                <button className='btn btn-warning'>X Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;