import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../Hooks/useAuth';


const BookNowForm = (props) => {
    const {user}=useAuth();
    const [info,setInfo]=useState({});
    const {name,_id}=props.car;

    const handleOnChange=e=>{
        const type=e.target.name;
        const field=e.target.value;
        const data={...info};
        data[type]=field;
        setInfo(data);
       
      
    }


    const handleBooking=e=>{
       
        const booking={name:user.displayName,email:user.email,product:name,productId:_id,order:"Processig",...info}
       console.log(booking);
       
        fetch('https://protected-eyrie-74731.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Booking Successfully')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }


    return (
        <Box>
            
            <form onSubmit={handleBooking} >
            <TextField
          id="outlined-required"
          type="text"
          value={user.displayName}
          sx={{width:"90%",mb:2}}
         
        />
            <TextField
          
          id="outlined-required"
          type="email"
          
          value={user.email}
          sx={{width:"90%",mb:2}}
         
        />
            <TextField
            
          id="outlined-required"
          label="Product ID"
          type="text"
          
          value={_id}
          sx={{width:"90%",mb:2}}
         
        />
            <TextField
            
          id="outlined-required"
          label="Product Name"
          type="text"
          
          value={name}
          sx={{width:"90%",mb:2}}
         
        />
            <TextField
           required
           id="outlined-required"
           label="Address"
           type="text" 
           name="Address" 
           sx={{width:"90%",mb:2}}
           onBlur={handleOnChange}
        />
            <TextField
           required
          id="outlined-required"
          label="Contact Number"
          type="number"
          name="phone"
          sx={{width:"90%",mb:2}}
          onBlur={handleOnChange}
          
        />
        <Button sx={{ width: '50%', m: 1 ,backgroundColor:'#053361' }} type="submit" variant="contained">Book Now</Button>
            </form>
        </Box>
    );
};

export default BookNowForm;