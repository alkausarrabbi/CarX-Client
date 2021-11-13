import React from 'react';
import Box from '@mui/material/Box';
import img from "../../../images/404.png"
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

const NotFound = () => {
    return (
        <Container sx={{p:5}}>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid item sm={12} lg={12}>
        <img src={img} alt="" style={{width:'100%'}} />
        </Grid>
      </Grid>
    </Box>
        </Container>
        
    );
};

export default NotFound;