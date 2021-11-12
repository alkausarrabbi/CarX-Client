import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
  const { user, logoutUser } = useAuth();
    return (
        <>
        <Box sx={{ display: 'flex' ,justifyContent: 'space-around',color: 'white',backgroundColor:"black"}}>
            <Typography variant="body1">
            We’re here to provide 24/7 at your service
            </Typography>
          
            <Typography variant="body1">
            Email : CarX@gmail.com
            </Typography>
            <Typography variant="body1">
           Phone :+8801862555555
            </Typography>
        
            
        </Box>
            <Box sx={{ flexGrow: 1 , boxShadow: 0}} >
      <AppBar position="static" sx={{ boxShadow: 0}} style={{backgroundColor:"#053361",color:"white"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            CARx
          </Typography>
          <Link to="/home"style={{textDecoration:"none"}}><Button style={{color:"white"}}>Home</Button></Link>
          <Link to="/allproducts"style={{textDecoration:"none"}}><Button style={{color:"white"}}>Find Cars</Button></Link>
          
          
          {user?.email? 
                
                <Link to="/dashboard"style={{textDecoration:"none"}}><Button style={{color:"white"}}>DashBoard</Button></Link>:
                            <></>
                            }
          {user?.email? 
                
                            <Button onClick={logoutUser} style={{color:"white"}}>Logout</Button>:
                            <Link to="/register"style={{textDecoration:"none"}}><Button style={{color:"red"}}>Register Now</Button></Link>
                            }
          {user?.email? 
                
                            <></>:
                            <Link to="/login"style={{textDecoration:"none"}}><Button style={{color:"yellow"}}>Login</Button></Link>
                            }
        <Typography style={{color:"white"}} variant="body1">
        {user?.displayName}
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
        </>
    );
};

export default Header;