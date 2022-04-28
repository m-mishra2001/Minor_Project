import { ThemeProvider } from '@emotion/react'
import { Button, Grid, Input } from '@mui/material'
import React, { useState } from 'react'
import theme from '../../theme'
import TextField from '@mui/material/TextField';
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