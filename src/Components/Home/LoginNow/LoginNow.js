import React from 'react';
import Box from '@mui/material/Box';
import img from "../../../images/info.jpg"
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const LoginNow = () => {
    return (
        <Container sx={{p:5}}>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid item sm={12} lg={6}>
        <Typography sx={{ fontWeight: 500, mt: 5, color: '#053361' }} variant="h5" component="div">
        All The Information You Need
                </Typography>
        <Typography  variant="body1" component="div">
        you’ll discover in-depth resources and guidance that’ll help you navigate every step of your car buying process.
                </Typography>
                <Link to={"/login"} style={{textDecoration:"none"}}><Button variant="contained" style={{backgroundColor:"#053361",color:"white",width:"60%"}} sx={{mt:2}}>login Now</Button></Link>
        
        </Grid>
        <Grid item sm={12} lg={6}>
        <img src={img} alt="" style={{width:'100%'}} />
        </Grid>
      </Grid>
    </Box>
        </Container>
    );
};

export default LoginNow;