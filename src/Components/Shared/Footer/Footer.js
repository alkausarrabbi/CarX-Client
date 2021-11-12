import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Footer = () => {
    return (
        <>
         <Box sx={{ flexGrow: 1 ,mt:5,p:5}} style={{backgroundColor:"black",color :"white"}}>
      <Grid container spacing={2}>
        <Grid item sm={6} lg={3} >
        <Typography variant="h6" gutterBottom component="div">
        Products
      </Typography>
        <Typography variant="body2" gutterBottom component="div">
        Cars for Sale
      </Typography>
        <Typography variant="body2" gutterBottom component="div">
        Cheap Cars for Sale
      </Typography>
        <Typography variant="body2" gutterBottom component="div">
        TrueCar App
      </Typography>
        </Grid>


        <Grid item sm={6} lg={3} >
        <Typography variant="h6" gutterBottom component="div">
        Media
      </Typography>
        <Typography variant="body2" gutterBottom component="div">
        Newsroom
      </Typography>
        <Typography variant="body2" gutterBottom component="div">
        Investor Relations
      </Typography>
        <Typography variant="body2" gutterBottom component="div">
        TrueCar Blog
      </Typography>
        </Grid>
        
        <Grid item sm={6} lg={3} >
        <Typography variant="h6" gutterBottom component="div">
        TrueCar Dealers
      </Typography>
        <Typography variant="body2" gutterBottom component="div">
        Dealer Signup
      </Typography>
        <Typography variant="body2" gutterBottom component="div">
        Dealer Portal Login
      </Typography>
        
        </Grid>
        
        <Grid item sm={6} lg={3} >
        <Typography variant="h6" gutterBottom component="div">
        About Us
      </Typography>
        <Typography variant="body2" gutterBottom component="div">
        Who We Are
      </Typography>
        <Typography variant="body2" gutterBottom component="div">
        Our Team
      </Typography>
        <Typography variant="body2" gutterBottom component="div">
        FAQs
      </Typography>
        <Typography variant="body2" gutterBottom component="div">
        Contact Us
      </Typography>
        
        </Grid>
        
      </Grid>
      <Box sx={{p:5}}>
    <Typography variant="body2" gutterBottom component="div" >
    © and ™ CarX, Inc. All rights reserved . © 1986-2021 
      </Typography>
        
    </Box>
    </Box>
    
            
        </>
    );
};

export default Footer;