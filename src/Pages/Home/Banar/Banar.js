import React, { useEffect, useState } from 'react';
import BanarImage from './BanarImage/BanarImage';

const Banar = () => {

    // Slider Data
    const [sliders, setSliders] = useState([])

    // Get Data from API
    useEffect(()=> {
        fetch('Slider.json')
         .then(res => res.json())
         .then(data => setSliders(data))
    }, [])

    
    return (
        <div className="carousel w-full ">
            {
                sliders?.map(slider => <BanarImage key={slider.index} data={slider}></BanarImage>)
            }
        </div>
    );
};

export default Banar;