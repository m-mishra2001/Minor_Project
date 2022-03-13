const DriverModel=require("../model/DriverRegistration")
const connection =require("../db/conn")

const driverLoginController=async(req,res)=>{
    try{
          console.log(req.body)
        const email=req.body.email
        const password=req.body.password
       const r=await DriverModel.findOne({Email:email})
       console.log(r)
       if(!r){
           
        res.status(404).json({success: true, message: "not a registered user"})
        
       return;
       }
       
        if( password!==r.password){
            res.status(200).json({success: true, message: "incorrect password"})
            return;
           
        }
        res.status(404).json({success: true, message: " registered user"})
       return;
    
    
    }catch(err){
console.log(err)
    }
   
    

}
module.exports=driverLoginController