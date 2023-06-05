import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import '../homepage.css';
import { Logo } from '../../../assets/svg/Logo';
import CancelButton from "../../../components/buttons/cancelButton"
import SaveButton from "../../../components/buttons/saveButton"



const pages = ['Buy','Sell','Invest','About','Dashboard'];
const settings = ['Profile','Account','Dashboard','Logout'];

function Navbar() {

  return (
    <section className='navbar-container'>

   
    <div 
    id="myhomeAppBar" color="primary" position="fixed" className='flexCenter innerWidth'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <div className='leftside-appbar'>
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
              <Logo className="logo"/>
              </div>
              <div className='rightside-appbar'>
              <CancelButton
                width="100px"
                height="40px"
                text="Log In"
              />
              <SaveButton
                width="100px"
                height="40px"
                text="Sign Up"
              />
              </div>
          </Box>
        </Toolbar>
      </Container>
    </div>
    </section>
  );
}
export default Navbar;