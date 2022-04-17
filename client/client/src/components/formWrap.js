import React from 'react'
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, maxWidth } from '@mui/system';
import { ThemeProvider } from '@emotion/react';
import Textinput from './inputFields';
import { useNavigate } from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";

// const WrapStyle=styled('div')({
//     backgroundColor:"#12395D",
//     width:'500px',
//     height:'450px',
//     borderRadius:'15px',
//     position: 'absolute',
    
    
// })


// const LoginText=styled('div')({
//     paddingTop:'30px',
//     width:'292px',
//     height:'42px',
//     marginTop:'58px',
//     marginLeft:'auto',
//     marginRight:'auto',
//     alignContent:'center',
//     backgroundColor:'red'
// })

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

const FormWrap=(props)=>{
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
       <p >{props.msgHead}</p>
       </Grid>
       <Grid item className='otpmsg'>
       <p >{props.otpmsg} </p>
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
       <Textinput name={props.inputfield}/>

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
          

      }} className='button' onClick={()=>navigate(props.url)}>{props.button}</Button>
     
     
     
      
       </Grid>

       
       </form>     
   </div>
  
 
   </Grid>
 
  

</>
    )

}

export default FormWrap