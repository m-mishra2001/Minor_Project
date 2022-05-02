import { ThemeProvider } from '@emotion/react'
import { Button, Grid, IconButton, Input } from '@mui/material'
import React, { useState } from 'react'
import theme from '../../theme'
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import Profile from './profile'
const PEdit=()=>{
    const [pData,setpData]=useState({
        name:'',
        phone:'',
        email:''
    })
const handleChange=(e)=>{
const name=e.target.name
const   value=e.target.value

setpData({...pData,[name]:value})
}
return(<>
<ThemeProvider theme={theme}>

<form>

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
   
      <Grid item md={6} sm={6} xs={12} >
      <input accept="image/*" id="icon-button-file"
        type="file" style={{ display: 'none' }} />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture"
        component="span"
        sx={{
            marginLeft:'355px',
            size:'500px'
        }}
        >
        <CameraAltIcon sx={{
         
         fontSize:'40px'
        }}/>
         
        </IconButton>
      </label>
</Grid>
      {/* <input type='file' className='profbtn' ></input> */}
      
<Grid container sx={{width:{
    md:'40vw',
    sm:'49vw'
},height:'350px',marginLeft:{
    md:'auto',
    sm:'auto',
    xs:'50px',
    sx:'100px'
},marginRight:'auto',marginTop:'10px'}}>


<Grid item md={6} sm={6} xs={12} sx={{width:'30%'}}>
<label>Name</label>
{/* <input className='inputField1' name="name" value={pData.name} onChange={handleChange}/> */}
<div><TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{marginTop:2,width:'16rem'}} /></div>
</Grid>

<Grid item md={6} sm={6} xs={12}>
<label>Phone No.</label>
{/* <input className='inputField1' name="phone" value={pData.phone} onChange={handleChange} /> */}
<div><TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{marginTop:2,width:'16rem'}}/></div>
</Grid>

<Grid item md={12} sm={12} xs={12} >
<label>Email ID</label>
{/* <input className='inputField2' name="email" value={pData.email} onChange={handleChange} /> */}
<div><TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{width:{
    md:'35rem',
    sm:'430px'
},marginTop:2}} /></div>
</Grid>

<Button variant="contained" sx={
    {background: '#5381F4',
    border:'0px solid',
    height: '50px',
    width: {
        md:'200px',
        sm:'160px',
        xs:'150px',
        sx:'250px'
    },
    borderRadius: '37px',
    marginLeft:{
        md:'auto',
        sm:'130px',
        
    },marginRight:'auto',
    marginTop:2 
    }
}>Edit</Button>




</Grid>
</form>
</ThemeProvider>

   
</>)

}

export default PEdit