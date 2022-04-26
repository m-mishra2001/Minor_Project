import React from 'react'
import Avatar from '@mui/material/Avatar';
import theme from '../../theme';

const Profile=()=>{
    return(<>
  <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
            sx={{ width: {
            md:'250px' ,
            sm:'250px',
            xs:'200px' ,
           
            }, height: {
            md:'250px' ,
            sm:'250px',
            xs:'200px'  
            } ,marginLeft:{
                md:55,
                sm:40,
                xs:15,
                sx:18
            },marginTop:4,
           
            }}
      />
    </>)
}
export default Profile