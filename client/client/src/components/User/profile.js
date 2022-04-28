import React from 'react'
import Avatar from '@mui/material/Avatar';
import theme from '../../theme';

const Profile=()=>{
    return(<>
  <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
            sx={{ width: {
            md:'200px' ,
            sm:'200px',
            xs:'150px' ,
           
            }, height: {
            md:'200px' ,
            sm:'200px',
            xs:'150px'  
            } ,marginLeft:{
                md:'auto',
                sm:'auto',
                xs:'auto',
                sx:18
            },
            marginRight:{
                md:'auto',
                sm:'auto',
                xs:'auto',
                sx:18
            },
            
            marginTop:'10px',
           
            }}
      />
    </>)
}
export default Profile