import React from 'react';
import Box from '@mui/material/Box';
import img from "../../../images/exp.jpg"
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Experience = () => {
    return (
        <Container sx={{p:5}}>
        <Typography sx={{ fontWeight: 500, mt: 5, color: '#053361' }} variant="h4" component="div">
        Control Your Car-Buying Experience
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 2 }} variant="h6" component="div">
                At TrueCar, you're in charge of the process from start to finish. Here's how.
                </Typography>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item sm={12} lg={6}>
        <img src={img} alt="" style={{width:'100%'}} />
        </Grid>
        <Grid item sm={12} lg={6}>
        <Typography sx={{ fontWeight: 500, mt: 5, color: '#053361' }} variant="h5" component="div">
        Build Your Deal With Confidence
                </Typography>
        <Typography  variant="body1" component="div">
        Get a personalized offer from a dealer online, including manufacturer incentives and discounts. Next, build a custom deal that includes the value of your trade-in and monthly payments.
                </Typography>
                <Link to={"/allproducts"} style={{textDecoration:"none"}}><Button variant="contained" style={{backgroundColor:"#053361",color:"white",width:"60%"}} sx={{mt:2}}>Get Your Car Now</Button></Link>
        
        </Grid>
        
      </Grid>
    </Box>
        </Container>
    );
};

export default Experience;