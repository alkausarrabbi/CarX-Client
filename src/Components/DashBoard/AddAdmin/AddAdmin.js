import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

const AddAdmin = () => {


    const [roles,setRoles]=useState([]);

        const handleOnChange=e=>{
            const type=e.target.name;
            const name=e.target.value;
            const Data={...roles};
            Data[type]=name;
            setRoles(Data);
        }


        const handleAdmin=e=>{
       
            const admin={...roles}
            const url = `https://protected-eyrie-74731.herokuapp.com/users/admin`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(admin)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Update Successful');
                        e.target.reset();
                    }
                })
           
    
            e.preventDefault();
        }


    return (
        <>
        <Typography sx={{ fontWeight: 500, m: 2,mt:5, color: '#053361' }} variant="h4" component="div">
        Add New Admin
              </Typography>
        <Typography sx={{ fontWeight: 500, m: 2,mt:5, color: '#053361' }} variant="h6" component="div">
       " To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity"
              </Typography>

      <Box  sx={{ flexGrow: 1,mt:5 }}>
    <Grid container spacing={2}>
      <Grid item lg={12} sm={12}>
       <form onSubmit={handleAdmin} action="">
      <TextField
      required
      id="outlined-multiline-flexible"
        label="Admin Email"
        type="email"
        name="email"
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

export default AddAdmin;