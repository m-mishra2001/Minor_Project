import { Box, Typography } from '@mui/material'
import { textAlign } from '@mui/system'
import React from 'react'

const RulesCards=()=>{
    return(
        
        <Box sx={{width:{
            md:'40vw',
            sm:'50vw'
        },
        height:{
            md:'40vh',
            sm:'50vh'
        },
        
        marginTop:'50px' ,
        borderRadius:'6px',
        boxShadow: {
            md:'rgba(0, 0, 0, 0.35) 0px 5px 15px' ,
            sm:'rgba(0, 0, 0, 0.35) 0px 5px 15px' ,
            xs:'rgba(0, 0, 0, 0) 0px 0px 0px' 
        },
        marginLeft:10
        }} >

            <Typography
            sx={{textAlign:'center',fontWeight:'600',fontSize:'30px'}}
            >
                Guidlines
            </Typography>
            <Typography>
                <ul>
                    <li>Customer have to pay a token money before ride  for confirming the booking</li>
                    <li>Final ride amount need to be pay after the ride as per the amount calculated from the ride</li>
                    <li>All Toll charges as well as for state Tax will not be included in final  amount,customer need to pay for them at the time of ride</li>
                    <li>There must be only one Pickup and Drop Point</li>
                    <li>Extra Night Charges will be added in final amount in case of night stay</li>
                </ul>
            </Typography>
        </Box>
    )
}
export default RulesCards