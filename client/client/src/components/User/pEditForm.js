import { ThemeProvider } from '@emotion/react'
import { Button, Grid, Input } from '@mui/material'
import React, { useState } from 'react'
import theme from '../../theme'
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

<Grid container sx={{width:'60vw',height:'350px',marginLeft:{
    md:'180px',
    sm:'200px',
    xs:'130px',
    sx:'100px'
},marginTop:'10px'}}>

<Grid item md={6} sm={6} xs={12} sx={{width:'30%'}}>
<label>Name</label>
<div><input className='inputField1' name="name" value={pData.name} onChange={handleChange}/></div>
</Grid>

<Grid item md={6} sm={6} xs={12}>
<label>Phone No.</label>
<div><input className='inputField1' name="phone" value={pData.phone} onChange={handleChange} /></div>
</Grid>

<Grid item md={12} sm={12} xs={12} >
<label>Email ID</label>
<div><input className='inputField2' name="email" value={pData.email} onChange={handleChange} /></div>
</Grid>

<Button variant="contained" sx={
    {background: '#5381F4',
    border:'0px solid',
    height: '50px',
    width: {
        md:'300px',
        sm:'300px',
        xs:'250px',
        sx:'250px'
    },
    borderRadius: '37px',
    marginLeft:{
        md:'200px',
        sm:'130px',
        
    }
    }
}>Edit</Button>




</Grid>
</form>
</ThemeProvider>

   
</>)

}

export default PEdit