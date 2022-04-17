import { createTheme, palette } from '@mui/system'
import React, { useState } from 'react'





const textFStyle={width:"98%",height:"100%",borderRadius:"5px",
background:'#C4C4C4',border: "0px solid"
}

const Textinput=(props)=>{
    const [number,setNumber]=useState();
    const [Error,setError]=useState("");
const handleChange=(e)=>{
    const value=e.target.value;
    const n=e.target.name;
    console.log(value)
    if(n=="number"){
        setNumber(value)
    }
}
   
// const validate=(number)=>{
// const errors=""
// if(!number){
//     errors=`${props.name}is required`
// }
// }
return(
        <>
             <input type="number" value={number} name={props.name} onChange={handleChange} style={textFStyle}></input>
             
        </>
    )
}
export default Textinput;
