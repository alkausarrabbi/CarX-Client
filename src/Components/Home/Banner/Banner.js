import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import banner from "../../../images/banner.jpg"
import Header from '../../Shared/Header/Header';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Banner = () => {

    const bannerBg = {
        background: `url(${banner})`,
        backgroundSize:'cover',
    }
    
    return (
        <div style={bannerBg}>
            <Header></Header>
        <Box sx={{ flexGrow: 1,pt:20,pb:20,ps:2,mb:5}} >
      <Grid container spacing={2}>
        <Grid item sm={12} lg={6} >
        <Card sx={{ minWidth: 275 }} style={{backgroundColor:"WhiteSmoke"}}>
        <CardContent>
        <Typography variant="h3" style={{color:"#053361"}} component="div">
        Love Your Car Guarantee
        </Typography>
        <Typography variant="h6">
        24-hr test drives || 30-day returns
        </Typography>
        <Typography variant="body2">
        (up to 1500 mi)
        </Typography>
        <Link to="/allproducts" style={{textDecoration:"none"}}><Button variant="contained" style={{backgroundColor:"#f4b207",color:"black"}} sx={{mt:2}}>Find Your Car</Button></Link>
        
      </CardContent>
    </Card>
        </Grid>
        <Grid item sm={12} lg={6} >
        </Grid>
      </Grid>
    </Box>
        </div>
    );
};

export default Banner;