import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
    const [reviews,setReviews]=useState([]);
    const {user}=useAuth();
    const handleOnChange=e=>{
        const type=e.target.name;
        const name=e.target.value;
        const Data={...reviews};
        Data[type]=name;
        setReviews(Data);
        console.log(Data);
      
    }

    const handleReview=e=>{
       
        const review={name:user.displayName,...reviews}
       console.log(reviews);
       if(review.rating<=5)
       {
           
        fetch('https://protected-eyrie-74731.herokuapp.com/ratings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Rating Add Successfully')
                   
                }
            })
       }

       else{
           alert("Rating Value Must be Between 1-5")
       }
        e.preventDefault();
    }





    return (
        <>
         <Typography sx={{ fontWeight: 500, m: 2,mt:5, color: '#053361' }} variant="h4" component="div">
          Submit Your Review Here
                </Typography>
           <Typography sx={{ fontWeight: 500, m: 2,mb:5,color: '#053361' }} variant="h6" component="div">
          Your every moment is important For Us
                </Typography>
        <Box  sx={{ flexGrow: 1,mt:5 }}>
      <Grid container spacing={2}>
        <Grid item lg={12} sm={12}>
         <form onSubmit={handleReview} action="">
         <TextField
          id="outlined-required"
          value={user.displayName}
          sx={{width:"60%",mb:2}}
        />
        <TextField
        required
        id="outlined-multiline-flexible"
          label="Comment"
          type="text"
          name="review"
          sx={{width:"60%",mb:2}}
          onBlur={handleOnChange}
        />
        <TextField
       id="outlined-required"
          label="Service Rating"
          type="number"
          step="any"
          min="1"
          max="5"
          name="rating"
          sx={{width:"60%",mb:2}}
          onBlur={handleOnChange}
        />
         <Button sx={{ width: '50%', m: 1 }} type="submit" variant="contained">Submit</Button>
        
         </form>
        </Grid>
       
      </Grid>
    </Box>
    </>
    );
};

export default Review;