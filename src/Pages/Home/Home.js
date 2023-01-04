import React from 'react';
import Banar from './Banar/Banar';
import HomeSlider from './Banar/HomeSlider/HomeSlider';
import BestSell from './BestSell/BestSell';

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <BestSell></BestSell>
        </div>
    );
};

export default Home;