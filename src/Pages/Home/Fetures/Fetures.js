import { Box } from '@mui/material';
import React from 'react';
import Feture from './Feture/Feture';

const Fetures = () => {
    return (
        <Box className='grid grid-cols-1 md:grid-cols-3 gap-2 w-full bg-[#3F0071] py-10 px-5 my-10'>
            <Feture></Feture>
            <Feture></Feture>
            <Feture></Feture>
        </Box>
    );
};

export default Fetures;