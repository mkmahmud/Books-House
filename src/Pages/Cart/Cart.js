import React, { useState } from 'react';
import SingelProduct from './SingelProduct';

const Cart = () => {



    return (
        <div className='p-10'>
            <h2 className='text-2xl font-bold text-left'>My Cart</h2>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse items-start">
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

                    <div className=" flex-shrink-0 w-full   ">
                        <SingelProduct ></SingelProduct>
                        <SingelProduct ></SingelProduct>
                        <SingelProduct ></SingelProduct>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;