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
import FormGroup from '@mui/material/FormGroup';
import Autocomplete from '@mui/material/Autocomplete';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { IconButton } from '@mui/material';
const options = ['Desel', 'Petrol']


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
  
 
  const CarDetailsForm=()=> {
     
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
     const state= data.get('state')
    //    const city= data.get('city')
    //    const address=data.get('address')
    //    const pincode=data.get('pincode')
        // if(state==null||city==null||address==null||pincode==null){
        //     setValidate("please fill all the details") 
        //   console.log(validate)

        // }else{
        //     setValidate("") 
        // }
    const d={
        state: data.get('name'),
        city: data.get('phoneno'),
        address:data.get('email'),
        password:data.get('password'),
        cPass:data.get('cpassword')
      }
      console.log(d)
    };

    const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
//   const [validate,setValidate]=React.useState("")
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
           
            <Box component="form" noValidate onSubmit={handleSubmit} >
            <Typography component="h1" variant="h5" sx={{marginTop:2,fontSize:'30px',textAlign:'center'}}>
              Sign up
            </Typography>

           
            {/* <Typography component="h1" sx={{textAlign:'center'}} variant="h5">
              Sign up
            </Typography> */}
         
            <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
                  <TextField
                 
                    autoComplete="given-name"
                    name="state"
                    required
                    fullWidth
                    id="state"
                    label="state"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    
                    fullWidth
                    id="city"
                    name="city"
                    label="city"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item md={12}>
                <Typography component="h1" variant="h5" sx={{marginTop:1,fontSize:'20px',textAlign:'center'}}>
             Enter your Car Details Here
            </Typography>
                </Grid>
                <Grid item md={12} sm={12} xs={12} sx={{display:'flex'}}>
                <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
            sx={{ width: {
            md:'80px' ,
            sm:'80px',
            xs:'80px' ,
           
            }, height: {
            md:'80px' ,
            sm:'80px',
            xs:'80px'  
            } ,
            // marginLeft:{
            //     md:'auto',
            //     sm:'auto',
            //     xs:'auto',
            //     sx:18
            // },
            // marginRight:{
            //     md:'auto',
            //     sm:'auto',
            //     xs:'auto',
            //     sx:18
            // },
            
            marginTop:'2px',
           
            }}
      />
      {/* <Button ><input type='file' style={{marginTop:'35px'}}/></Button> */}

   
              
               
      <input accept="image/*" id="icon-button-file"
        type="file" style={{ display: 'none' }} />
      <label htmlFor="icon-button-file">
        <Button  variant="outlined" color="primary" aria-label="upload picture"
        component="span"
        sx={{
            marginLeft:{
              md:'15px',
              sm:'14px',
              xs:'16px'
            },
           width:'300px',
           marginTop:3
          
        }}
        >
        add image
        {/* <CameraAltIcon sx={{
         
         fontSize:'30px'
        }}/> */}
         
        </Button>
      </label>
      
</Grid>
{/* <Grid item md={6}>

</Grid> */}
      
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="name"
                   
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                   
                    fullWidth
                    id="type"
                    name="type"
                    label="type"
                    autoComplete="family-name"
                  />
                </Grid>
               
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    type="number"
                    name="bags"
                    required
                    fullWidth
                    id="bags"
                    label="bags"
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                   type="number"
                    required
                    fullWidth
                    id="ppkm"
                    name="ppkm"
                    label="price per km"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                <div>
   
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 400 }}
        renderInput={(params) => <TextField {...params}  label="Controllable" />}
      />
    </div>
                </Grid>
                <Grid item xs={12} sx={{display:'flex'}}>
                <FormGroup>
                <FormControlLabel
            control={
              <Checkbox   name="ac" />
            }
            label="AC"
          /></FormGroup>
          <FormGroup>
         <FormControlLabel
            control={
              <Checkbox   name="nonac" />
            }
            label="NON-AC"
          /></FormGroup>
          
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
              {/* <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid> */}
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 5 }} /> */}
        </Container>
      </ThemeProvider>
    );
  }
export default CarDetailsForm