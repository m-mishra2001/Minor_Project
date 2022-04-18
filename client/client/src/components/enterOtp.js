import React, { useState }  from 'react'
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, maxWidth } from '@mui/system';
import { ThemeProvider } from '@emotion/react';
import Textinput from './inputFields';
import { useNavigate } from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";
//css for input field

const textFStyle={width:"98%",height:"100%",borderRadius:"5px",
background:'#C4C4C4',border: "0px solid"
}


   
  //css for form
const theme = createTheme({
  breakpoints: {
    values: {
     xxs: 0, // small phone
     sx: 300, // phone
      xs: 400, // phone
      sm: 600, // tablets
      md: 950, // small laptop
      
    }
  }
});

const EnterOtp=()=>{
  const [number,setNumber]=useState();
  const [Error,setError]=useState("");
const handleChange=(e)=>{
  const value=e.target.value;
  const n=e.target.name;
  console.log(value)
  if(n=="otp"){
      setNumber(value)
  }
}
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
   e.preventDefault()
   
  
  }

    return(
        <>

   <Grid 
   container
  
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
   >
 
   <div className='wrapStyle' >
   <form onSubmit={handleSubmit}>
        <Grid item className='loginRegi' >
       <p className='userLoginText1'><span className='userLoginText'>Login/Registration</span></p>   
       </Grid>
       <Grid item className='utext'>
       <p >Enter 4 Digit OTP</p>
       </Grid>
       <Grid item className='otpmsg'>
       <p >A 4 digit OTP has been send on SMS</p>
       </Grid>
       <ThemeProvider theme={theme}>
       <Grid item  sx={
          { width:{
              md:'350px',
              sm:'320px',
              xs:'250px',
              sx: '200px',
              xxs: '150px'
          },
            height:'35px',
           
         marginLeft:'auto',
         marginRight:'auto',
       }
       }>
      
       <input type="number" value={number} name="otp" onChange={handleChange} style={textFStyle}></input>

       </Grid>
       </ThemeProvider>

       <Grid item 
       sx={{
        width:'350px',
            height:'50px',
            marginTop:'15px',
         marginLeft:'auto',
         marginRight:'auto', 
       }}
        >
      <Button variant="contained"
       sx={{
          background:'#C4C4C4',
          borderRadius:'15px',
          paddingTop:'2px',
          marginLeft:'100px',
          marginRight:'100px',
          fontFamily: 'Poppins',
          

      }} className='button' onClick={()=>navigate("/activateUser")} >Next </Button>
     
     
     
      
       </Grid>

       
       </form>     
   </div>
  
 
   </Grid>
 
  

</>
    )

}

export default EnterOtp