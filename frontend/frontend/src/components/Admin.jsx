import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Admin() {
  const [message, setMessage] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to manage drawer open/close
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:7000/api/user/admin')
      .then(res => {
        if (res.data === "Success") {
          setMessage("Admin");
        } else {
          navigate('/home');
        }
      })
      .catch(err => console.log(err));
  }, [navigate]); // Include navigate in the dependency array

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <h3>Admin Page {message}</h3>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerOpen} // Open drawer on icon button click
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             Edusphere
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Link to={'/adminviewrecruiter'}>  View all recruiters</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <Link to={'/admincourse'}>    View all course</Link>
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         <Link to={'/adminviewplacement'}>    View All Placements</Link>
            </Typography>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             view all college
            </Typography>
            <Button color="inherit">{message}</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={handleDrawerClose} // Close drawer when clicking outside or on close button
        >
          <List style={{ width: '200px' }}>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link to="/addcourse">
                <ListItemText primary="AddCourse" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link to="/addplacement">
                <ListItemText primary="AddPlacement" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link to="/addcollege">
                <ListItemText primary="AddCollege" />
              </Link>
            </ListItem>
            <ListItem button onClick={handleDrawerClose}>
              <Link to="/addrecruiter">
                <ListItemText primary="Recruiters" />
              </Link>
            </ListItem>
          </List>
        </Drawer>
      </Box>
      <Outlet />
    </div>
  );
}

export default Admin;
