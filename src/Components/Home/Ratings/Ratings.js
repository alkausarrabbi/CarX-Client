import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container} from '@mui/material';
import RatingContent from './RatingContent/RatingContent';


const Ratings = () => {
    const [reviews,setReviews]=useState([]);

    useEffect(()=>{
        fetch("https://protected-eyrie-74731.herokuapp.com/ratings")
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    return (
        <Box sx={{ flexGrow: 1,m:5}}>
            <Container>
                <Typography sx={{ fontWeight: 500, mt: 5, color: '#053361' }} variant="h4" component="div">
                    Customers Rating
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h6" component="div">
                   Happy Clients Give Us Some Comments 
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(review=><RatingContent
                        key={review._id}
                        content={review}
                        ></RatingContent>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Ratings;