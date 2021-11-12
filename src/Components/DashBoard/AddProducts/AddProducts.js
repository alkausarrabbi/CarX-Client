import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';




const AddProducts = () => {
    const [addProducts,setAddProducts]=useState([]);
    const handleOnChange=e=>{
        const type=e.target.name;
        const name=e.target.value;
        const Data={...addProducts};
        Data[type]=name;
        setAddProducts(Data);
      
    }

    const handleProducts=e=>{
       
        const product={...addProducts}
        fetch('https://protected-eyrie-74731.herokuapp.com/allproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Add Successfully')
                    e.target.reset();
                }
            })
       

        e.preventDefault();
    }





    return (
        <>
         <Typography sx={{ fontWeight: 500, m: 2,mt:5, color: '#053361' }} variant="h4" component="div">
          Add Products Here 
                </Typography>

        <Box  sx={{ flexGrow: 1,mt:5 }}>
      <Grid container spacing={2}>
        <Grid item lg={12} sm={12}>
         <form onSubmit={handleProducts} action="">
        <TextField
        required
        id="outlined-multiline-flexible"
          label="Product Name"
          type="text"
          name="name"
          sx={{width:"60%",mb:2}}
          onBlur={handleOnChange}
        />
        <TextField
        required
        id="outlined-multiline-flexible"
          label="Product Description"
          type="text"
          name="description"
          sx={{width:"60%",mb:2}}
          onBlur={handleOnChange}
        />
        <TextField
        required
        id="outlined-multiline-flexible"
          label="Product Price"
          type="number"
          name="price"
          sx={{width:"60%",mb:2}}
          onBlur={handleOnChange}
        />
        <TextField
        required
        id="outlined-multiline-flexible"
          label="Product URL"
          type="text"
          name="img"
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

export default AddProducts;