import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const AllCar = (props) => {
    const {name,description,img,price,_id}=props.showcar;
    return (
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275}}>
            <CardMedia
                component="img"
                style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                image={img}
                alt="Car Pic"
            />
            <CardContent>
                <Typography variant="h5" component="div" sx={{p:2}}>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{p:2}}>
                    {description}
                </Typography>
                <Typography variant="body1" >
                    Price : {price}
                </Typography>
                <Link to={`/allproducts/${_id}`} style={{textDecoration:"none"}}><Button variant="contained" style={{backgroundColor:"#053361",color:"white"}} sx={{mt:2}}>BOOK NOW</Button></Link>
            </CardContent>
        </Card>
    </Grid>
        
    );
};

export default AllCar;