import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Shared/Header/Header';
import BookNowForm from './BookNowForm/BookNowForm';

const BookNow = () => {
    const [car,setCar]=useState({});
    const{id}=useParams();
    useEffect(()=>{
        const url=`https://protected-eyrie-74731.herokuapp.com/allproducts/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCar(data))
    },[])
    return (
       <Box>
           <Header></Header>
           <Typography sx={{ fontWeight: 500, m: 2,mt:5, color: '#053361' }} variant="h4" component="div">
           Find the Car You Want, Your Way
                </Typography>
           <Typography sx={{ fontWeight: 500, m: 2,mb:5,color: '#053361' }} variant="h6" component="div">
           Then, build your deal to fit your needs.
                </Typography>
            <Box sx={{ flexGrow: 1,p:5,m:5}} >
      <Grid container spacing={2}>
        <Grid item sm={12} lg={6} >
        <Card sx={{ maxWidth: "100%" ,mt:5}}>
      <CardMedia
        component="img"
        height="140"
        image={car.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {car.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {car.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {car.description}
        </Typography>
      </CardContent>
    </Card>
        </Grid>
        <Grid item sm={12} lg={6} >
            <BookNowForm
            car={car}
            key={car._id}
          
            >
                
            </BookNowForm>
        </Grid>
      </Grid>
    </Box>
       </Box>
    );
};

export default BookNow;