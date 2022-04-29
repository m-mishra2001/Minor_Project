import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../../../theme';



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
  
 
  const Rform=()=> {
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);

      console.log({
          name:data.get('name'),
        email: data.get('email'),
        phoneno:data.get('phoneno'),
        password: data.get('password'),
        cpassword:data.get('cpassword')
        
      });
    };
  
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> */}
            <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
            sx={{ width: {
            md:'100px' ,
            sm:'100px',
            xs:'150px' ,
           
            }, height: {
            md:'100px' ,
            sm:'100px',
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
              {/* <LockOutlinedIcon />
            </Avatar> */}
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    type='number'
                    fullWidth
                    id="phoneno"
                    name="phoneno"
                    label="phoneno"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid> */}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="cpassword"
                    label="Confirm Password"
                    type="password"
                    id="cpassword"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 5 }} /> */}
        </Container>
      </ThemeProvider>
    );
  }
export default Rform