import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../Hooks/useAuth';
import { Avatar, Button } from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import PaymentSystem from '../PaymentSystem/PaymentSystem';
import DashBoardWelcome from '../DashBoardWelcome/DashBoardWelcome';
import Review from '../Review/Review';
import AddProducts from '../AddProducts/AddProducts';
import ManageAllProducts from '../ManageAllproducts/ManageAllProducts';
import ManageAllOders from '../ManageAllOders/ManageAllOders';
import AddAdmin from '../AddAdmin/AddAdmin';


const drawerWidth = 240;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const {user,logoutUser,userAdmin}=useAuth();
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List sx={{ display: 'flex',flexDirection: 'column',justifyContent: 'center', alignItems: 'center'  }} >
          
          <Avatar alt={user.displayName} src={user.photoURL} />
          <Typography variant="h6" >
          {user.displayName}
          </Typography>
          </List>
      <Divider />
      <List sx={{ display: 'flex',flexDirection: 'column',justifyContent: 'center', alignItems: 'center' }}>
      
      <Link
               style={{ textDecoration: 'none' }}
                to="/home">
                <Button variant="text">Home</Button>
                </Link>
                
     

                <Link
               style={{ textDecoration: 'none' }}
                to={`${url}`}>
                <Button variant="text">DashBoard</Button>
                </Link>

               
                {userAdmin && <Box
                sx={{ display: 'flex',flexDirection: 'column',justifyContent: 'center', alignItems: 'center' }}
                >
                  <Link
               style={{ textDecoration: 'none' }}
                to={`${url}/addproducts`}>
                <Button variant="text">Add Products</Button>
                </Link>
                
                <Link
               style={{ textDecoration: 'none' }}
                to={`${url}/handleproducts`}>
                <Button variant="text">Manage Products</Button>
                </Link>

                <Link
               style={{ textDecoration: 'none' }}
                to={`${url}/managealloders`}>
                <Button variant="text">Manage Oders</Button>
                </Link>
    
                <Link
               style={{ textDecoration: 'none' }}
                to={`${url}/admin`}>
                <Button variant="text">Add Admin</Button>
                </Link>
            </Box>
            }
                {!userAdmin && <Box
                sx={{ display: 'flex',flexDirection: 'column',justifyContent: 'center', alignItems: 'center' }}
                >
                  <Link
               style={{ textDecoration: 'none' }}
                to="/allproducts">
                <Button variant="text">Find Car</Button>
                </Link>

                  <Link
               style={{ textDecoration: 'none' }}
                to={`${url}/payment`}>
                <Button variant="text">Payment</Button>
                </Link>
                <Link
               style={{ textDecoration: 'none' }}
                to={`${url}/review`}>
                <Button variant="text">Products Review</Button>
                </Link>
            </Box>
            }
              
                <Button onClick={logoutUser} style={{color:"red"}}>Logout</Button>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:"#053361"
         
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
                       <MenuIcon />

          </IconButton>
          <Typography variant="h5" noWrap component="div">
           CarX DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>
                    <Route exact path={path}>
                        <DashBoardWelcome></DashBoardWelcome>
                    </Route>
                    <Route exact path={`${path}/payment`}>
                        <PaymentSystem></PaymentSystem>
                    </Route>
                    <Route path={`${path}/review`}>
                       <Review></Review>
                    </Route>
                    <Route path={`${path}/addproducts`}>
                       <AddProducts></AddProducts>
                    </Route>
                    <Route path={`${path}/managealloders`}>
                       <ManageAllOders></ManageAllOders>
                    </Route>
                    <Route path={`${path}/handleproducts`}>
                      <ManageAllProducts></ManageAllProducts>
                    </Route>
                    <Route path={`${path}/admin`}>
                      <AddAdmin></AddAdmin>
                    </Route>
                    
                </Switch>
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
