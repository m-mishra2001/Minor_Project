import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CarDetailsForm from '../RegistrationForm/CarAttacher/cardetailForm';

import Avatar from '@mui/material/Avatar';

import CssBaseline from '@mui/material/CssBaseline';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../../theme'
import FormGroup from '@mui/material/FormGroup';
import Autocomplete from '@mui/material/Autocomplete';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { IconButton } from '@mui/material';
const options = ['Desel', 'Petrol']
export default function FormDialog() {
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
  
  const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
     <Button variant='contained' color='error' onClick={handleClickOpen} sx={{marginLeft:3,marginTop:'6px',height:'60px',width:'100px'}}>Add  Car</Button>
      {/* <Button variant="outlined" >
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
       
        <DialogContent>
       
        <Box component="form" noValidate onSubmit={handleSubmit} >
            <Typography component="h1" variant="h5" sx={{marginTop:2,fontSize:'40px',textAlign:'center'}}>
              Add Car
            </Typography>
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
         <Grid item md={6} sm={6} xs={12} >
      <input accept="image/*" id="icon-button-file"
        type="file" style={{ display: 'none' }} />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture"
        component="span"
        sx={{
            marginLeft:{
              md:'245px',
              sm:'240px',
              xs:'140px'
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
            {/* <Typography component="h1" sx={{textAlign:'center'}} variant="h5">
              Sign up
            </Typography> */}
         
            <Grid container spacing={2} sx={{ mt: 2 }}>
            {/* <Grid item xs={12} sm={6}>
                  <TextField
                 
                    autoComplete="given-name"
                    name="state"
                    required
                    fullWidth
                    id="state"
                    label="state"
                    autoFocus
                  />
                </Grid> */}
                {/* <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    
                    fullWidth
                    id="city"
                    name="city"
                    label="city"
                    autoComplete="family-name"
                  />
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
               Add Car
              </Button>
              {/* <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid> */}
            </Box>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
