import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SearchBooks = () => {

    const data = useLoaderData();

    console.log(data)

    return (
        <div>
            mk
        </div>
    );
};

export default SearchBooks;