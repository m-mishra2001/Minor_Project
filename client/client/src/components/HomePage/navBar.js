import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/system'
import React, { useState } from 'react'
import DrawerComp from './drawerComp'
import { useTheme } from '@emotion/react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../../theme';
import AllUsers from '../AllUsersLR/allUsers';
import { useNavigate } from 'react-router-dom';

const settings = ['Manage Account', 'Logout'];
const NavBar=()=>{
   const [login,setlogin]=useState(false)
    const [modal, setModal] = useState(false);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };  
    const handleUserMenu = (e) => {
     if(e=="Manage Account")
     navigate("/userProfile")
    };
    
  const handleCloseUserMenu = (s) => {
   
    navigate("/userProfile")
    setAnchorElUser(null);
  };
 const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }



    const isMatch=useMediaQuery('(max-width:950px)');
    console.log(isMatch)

    return(<>
     <AppBar
     
     elevation={0}
     sx={{background:'transparent'}}
     >
         <Toolbar>
         <Tabs ><Tab label="WheelzStack" sx={{fontFamily:'Rye',fontStyle:'normal',fontWeight:'400',fontSize:'24px',marginLeft:'130px'}}
                     elevation={0}
                 /></Tabs>
            {
                isMatch ?(<>
                    <DrawerComp/>
                </>):
                <>
                <Tabs sx={{marginLeft:'auto'}} >
                navigate("/")

                <Tab label="Home" sx={{fontWeight:'700', color:'black'}} onClick={()=>{
                  navigate("/")
                }}/>
                <Tab label="Travel Agencies"sx={{fontWeight:'700', color:'black'}} onClick={()=>{
                  navigate("/travelAgency")
                }}/>
                navigate("/drivers")
                <Tab label="Drivers" sx={{fontWeight:'700', color:'black'}} onClick={()=>{
                   navigate("/drivers")
                }} />
                {/* <Tab label="Contact Us" sx={{fontWeight:'700', color:'black'}}/> */}
                {
                  login?<><Tooltip title="Open settings">
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu></>
            :<Button variant="contained" onClick={toggleModal} sx={{width:'115px',height:'29px',top:'9px',background:'#C4C4C4',fontSize:'10px',color:'black',borderRadius:'14px'}}>Login/Registeration</Button>
                
                }
                {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <AllUsers/>
            <button className="close-modal" onClick={toggleModal}>
              
            </button>
          </div>
        </div>
      )}
            
            </Tabs>
                </>
            }
            
         </Toolbar>
         
     </AppBar>
    </>)
}
export default NavBar