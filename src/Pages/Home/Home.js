import React from 'react';
import Banar from './Banar/Banar';
import HomeSlider from './Banar/HomeSlider/HomeSlider';
import BestSell from './BestSell/BestSell';
import Fetures from './Fetures/Fetures';

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <Fetures></Fetures>
            <BestSell></BestSell>
        </div>
    );
};

export default Home;