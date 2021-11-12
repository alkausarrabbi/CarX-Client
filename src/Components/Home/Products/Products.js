import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Product from '../product/Product';


const Products = () => {
    const [cars,setCars]=useState([]);

    useEffect(()=>{
        fetch("https://protected-eyrie-74731.herokuapp.com/allproducts")
        .then(res=>res.json())
        .then(data=> setCars(data))
    },[])

    const newCars=cars.slice(0,6)
    console.log(newCars);
    return (
        <Box sx={{ flexGrow: 1,mb:5 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: '#053361' }} variant="h4" component="div">
                    OUR FEATURED CARS
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h6" component="div">
                   Book your Dream Car  
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        newCars.map(newCar=><Product 
                            newcar={newCar}
                            key={newCar._id}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;