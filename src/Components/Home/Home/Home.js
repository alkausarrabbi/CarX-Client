import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Experience from '../Experience/Experience';
import LoginNow from '../LoginNow/LoginNow';
import Products from '../Products/Products';
import Ratings from '../Ratings/Ratings';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Experience></Experience>
            <Ratings></Ratings>
            <LoginNow></LoginNow>
            <Footer></Footer>
        </div>
    );
};

export default Home;