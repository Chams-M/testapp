import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from '../../assets/images/login.png'
import './dashboard.css';
import NotificationsIcon from '@mui/icons-material/Notifications';


const pages = ['Buy', 'Sell', 'Invest','About','Dashboard'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar 
    sx={{
      color:"white",
      boxShadow:"none"
    }}
    id="myAppBar" color="primary" position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <div className='appbar'>
              <Button
                id="appbar-item"
              >
               Buy
              </Button>
              <Button
               id="appbar-item"
              >
                Sell
              </Button>
              <Button
               id="appbar-item"
              >
                Invest
              </Button>
              </div>
              <div className='appbar'>
              <Button
                id="appbar-item"
              >
               About
              </Button>
              <Button
               id="appbar-item"
              >
                Dashboard
              </Button>
              <Button
               id="appbar-item"
              >
                  <NotificationsIcon sx={{
                    color:"#7B5D6B",
                  }}/>
              
              </Button>
              </div>

          </Box>
          {/******Menuu****/}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={Image}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>



        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;