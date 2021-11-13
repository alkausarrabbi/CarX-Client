import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Header from '../Shared/Header/Header';
import Button from '@mui/material/Button';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { Alert, CircularProgress, Typography } from '@mui/material';

const Login = () => {
    const [userLoginData,setUserLoginData]=useState({});
    const location=useLocation();
    const history=useHistory();
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
    const handleOnChange=e=>{
        const type=e.target.name;
        const name=e.target.value;
        const userData={...userLoginData};
        userData[type]=name;
        setUserLoginData(userData);
      
    }

    const handleUSerLogin=e=>{
        loginUser(userLoginData.email,userLoginData.password,history,location);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
      signInWithGoogle(location, history)
  }


    return (
        <Box>
            <Header></Header>
            <Typography sx={{ fontWeight: 500, m: 2,mb:5,mt:5, color: '#053361' }} variant="h3" component="div">
                PLEASE LOGIN
                </Typography>
    <Box  sx={{ flexGrow: 1,mt:5 }}>
      <Grid container spacing={2}>
        <Grid item lg={12} sm={12}>
          <form onSubmit={handleUSerLogin} action="">
         <TextField
        //   required
          id="outlined-required"
          label="Email"
          type="email"
          name="email"
          sx={{width:"60%",mb:2}}
          onBlur={handleOnChange}
        />
        <TextField
          id="outlined-required"
          label="Password"
          type="password"
          name="password"
          sx={{width:"60%",mb:2}}
          onBlur={handleOnChange}
        />
         <Button sx={{ width: '50%', m: 1 }} type="submit" variant="contained">Login</Button>
        
         </form>
         {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
         <NavLink
               style={{ textDecoration: 'none' }}
                to="/register">
                <Button variant="text">New User? Please Register</Button>
                 </NavLink>
                 <br/>
                 <br/>
                 <br/>
                 <Button sx={{mb:5,backgroundColor:'#053361'}} onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
         
        </Grid>
       
      </Grid>
    </Box>
            
        </Box>
    );
};

export default Login;