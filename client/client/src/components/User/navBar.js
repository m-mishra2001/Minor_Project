

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import theme from '../../theme';
import { ThemeProvider } from '@emotion/react';
import PersistentDrawerLeft from './drawer';
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'Travel Agency', 'Drivers'];
const settings = ['Manage Account', 'Logout'];

const NavBar=()=>{
  const navigate=useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
    return(<>


    <AppBar position="static" style={{background:'#C4C4C4'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         <ThemeProvider theme={theme}>
         <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' },
            fontFamily:'Rye',fontStyle:'normal',fontWeight:'600',fontSize:{
              md:'20px',
              sm:'20px',
              xs:'15px'
            },marginLeft:'45px',color:'black'
             }}
          >
           WHEELZSTACK
          </Typography>
         </ThemeProvider>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{marginLeft:'30px',color:'black'}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center"  >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } , fontFamily:'Rye',fontStyle:'normal',fontWeight:'600',fontSize:'20px',marginLeft:'50px',color:'black'}}
          >
            WHEELZSTACK
          </Typography>
          <Box sx={{  display: { xs: 'none', md: 'flex' },marginLeft:'auto' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>{
                  page=="Travel Agency"? navigate("/travelAgency"):(page=="Drivers"?navigate("/drivers"):navigate("/"))
                }}
                sx={{ my: 2, color: 'white', display: 'block',margin:'10px',color:'black',fontWeight:'400',fontSize:'16px' }}
              >
                {page}
               
              </Button>
            ))}
          </Box> 

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                <MenuItem key={setting} onClick={()=>{
                  setting=="Manage Account"?navigate("/userProfile"):handleCloseUserMenu()
                }}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
   
  
  
    </>)
}
export default NavBar





