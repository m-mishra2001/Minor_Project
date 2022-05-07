import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {  ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';
import { IconButton } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';


const Copyright=(props)=> {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
 
  const CProfileform=()=> {
     const [fdata,setFdata]=React.useState(
         {
             name:"",
             phoneno:"",
             city:""
         }
     )
     const handleChange=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setFdata({...fdata,[name]:value})
     }
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
     const state= data.get('state')
 
    const d={
        state: data.get('name'),
        city: data.get('phoneno'),
        address:data.get('email'),
        password:data.get('password'),
        cPass:data.get('cpassword')
      }
      console.log(d)
    };

    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm" sx={{width:{
            md:700,
            sm:700,
            xs:300
        } ,boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        marginLeft:{
            md:'auto',
            sm:'auto',
            xs:10
        },marginRight:{
            md:'auto',
            sm:'auto'
        }
         }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            
              
            }}
          >
           
            <Box component="form" noValidate onSubmit={handleSubmit} >
            
            <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
            sx={{ width: {
            md:'100px' ,
            sm:'100px',
            xs:'100px' ,
           
            }, height: {
            md:'100px' ,
            sm:'100px',
            xs:'100px'  
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
            marginLeft:{
              md:'250px',
              sm:'250px',
              xs:'110px'
            },
           
            size:'500px'
        }}
        >
        <CameraAltIcon sx={{
         
         fontSize:'30px'
        }}/>
         
        </IconButton>
      </label>
</Grid>
   
         
            <Grid container spacing={2} sx={{ mt: 0 }}>
                <Grid item xs={12} >
                 <Typography sx={{fontWeight:{
                     md:600,
                     sm:600,
                     xs:600
                 },fontSize:{
                     md:30,
                     sm:30,
                     xs:10
                 },textAlign:'center'}}>
                     Driver@gmail.com
                 </Typography>
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name "
                    name="name"
                    value={fdata.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="number"
                    name="phoneno"
                    label="Phone Number"
                    onChange={handleChange}
                    value={fdata.phoneno}
                    id="phoneno"
                   
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="city"
                    label="City"
                    onChange={handleChange}
                    value={fdata.city}
                    id="city"
                   
                  />
                </Grid>
                
            
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Edit
              </Button>
              <Grid container justifyContent="flex-end">
                {/* <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid> */}
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 5 }} /> */}
        </Container>
      </ThemeProvider>
    );
  }
export default CProfileform