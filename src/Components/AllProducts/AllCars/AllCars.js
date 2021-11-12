import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import AllCar from '../AllCar/AllCar';

const AllCars = () => {
    const [showCars,setShowCars]=useState([]);
    useEffect(()=>{
        fetch("https://protected-eyrie-74731.herokuapp.com/allproducts")
        .then(res=>res.json())
        .then(data=>setShowCars(data))
    },[])
    return (
        <Box sx={{ flexGrow: 1,mb:5 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2,mb:5, color: '#053361' }} variant="h4" component="div">
                Introducing Love Your Car Guarantee 
                </Typography>
                
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        showCars.map(showCar=><AllCar
                        showcar={showCar}
                        key={showCar._id}
                        ></AllCar>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default AllCars;