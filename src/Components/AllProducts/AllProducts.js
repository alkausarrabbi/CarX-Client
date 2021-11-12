import { Box } from '@mui/system';
import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import AllCars from './AllCars/AllCars';

const AllProducts = () => {
    return (
        <Box>
           <Header></Header>
           <AllCars></AllCars>
           <Footer></Footer>
        </Box>
    );
};

export default AllProducts;