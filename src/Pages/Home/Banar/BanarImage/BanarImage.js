import React from 'react';

const BanarImage = ({data}) => {

    const {index, image} = data;
    return (
        <div id={`slide${index}`} className="carousel-item relative w-full">
            <img src={image} className="w-full h-[500px]" alt=''  />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${index-1}`} className="btn btn-circle">❮</a>
                <a href={`#slide${index+1}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BanarImage;