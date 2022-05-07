import React from "react";
import NavBar from "../HomePage/navBar";
import DNavBar from "./navbar";
import PersistentDrawerLeft from './drawer'
import DProfileform from "./DprofileEditForm";
const DriverProfile=()=>{
    
    return(<>
    <DNavBar/>
    <DProfileform/>
    <PersistentDrawerLeft style={{marginTop:'100px'}} />

    </>)
}

export default DriverProfile