import { Grid } from '@mui/material';
import React from 'react'

const MainHeading=(props)=>{
    return(<>
        <Grid item sx={{
    marginTop:'38px',
    alignContent:'center'
}}>
<p className='userLoginText1'><span className='userLoginText'>{props.heading}</span></p> 
</Grid>

    </>)
}
export default MainHeading;