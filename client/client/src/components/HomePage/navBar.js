import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/system'
import React, { useState } from 'react'
import DrawerComp from './drawerComp'
import { useTheme } from '@emotion/react';

import MenuIcon from '@mui/icons-material/Menu';
import theme from '../../theme';
import AllUsers from '../AllUsersLR/allUsers';



const NavBar=()=>{
   
    const [modal, setModal] = useState(false);

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
                

                <Tab label="Home" sx={{fontWeight:'700', color:'black'}}/>
                <Tab label="Cars"sx={{fontWeight:'700', color:'black'}}/>
                <Tab label="Service" sx={{fontWeight:'700', color:'black'}}/>
                <Tab label="Contact Us" sx={{fontWeight:'700', color:'black'}}/>
                <Button variant="contained" onClick={toggleModal} sx={{width:'115px',height:'29px',top:'9px',background:'#C4C4C4',fontSize:'10px',color:'black',borderRadius:'14px'}}>Login/Registeration</Button>
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