import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const SellBook = () => {

    const [BookData, setBookData] = useState({})

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => setBookData(data);



    useEffect(() => {


        if (BookData.image) {
            let formData = new FormData()
            formData.append('image', BookData.image[0] || `mk.jpg`);

            const url = `https://api.imgbb.com/1/upload?key=dfdc7a513f976b9fb49f8a4e150e190e`;
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    BookData.BookImage = data.data.display_url;
                    fetch(`http://localhost:5000/addbook`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(BookData)
                    })
                        .then(res => res.json())
                        .then(data => console.log(data))
                })
        }

    }, [BookData])


    console.log(BookData)

    return (
        <div className='p-10'>
            <h2 className='text-4xl p-5 font-bold'>Sell your Book</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Book Name</span>
                    </label>
                    <label className="input-group">
                        <span>Book Name</span>
                        <input type="text" placeholder="Reach Dad "   {...register("bookName")} className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Book Writer</span>
                    </label>
                    <label className="input-group">
                        <span>Book Writer</span>
                        <input type="text" placeholder="Jhon" {...register("bookWriter")} className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Pick a Photo</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image")} />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Select Book Condition</span>
                    </label>
                    <select className="select select-bordered"   {...register("condition")}>
                        <option selected value='used'>Used</option>
                        <option value='new'>New</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text" >Price</span>
                    </label>
                    <label className="input-group">
                        <span>Price</span>
                        <input type="text" placeholder="89" {...register("price")} className="input input-bordered" />
                    </label>
                </div>
                <button className='btn btn-primary'>Add Book </button>
            </form>
        </div>
    );
};

export default SellBook;