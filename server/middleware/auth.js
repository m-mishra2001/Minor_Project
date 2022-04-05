const jwt=require("jsonwebtoken")
const DriverModel = require("../model/DriverRegistration")


const auth=async(req,res,next)=>{
try{
const token=req.cookies.drivercookie
const verifyuser=jwt.verify(token,"secreat key")
const user=await DriverModel.findOne({_id:verifyuser._id})
if(user){
    res.status(404).json({
        success:true,
        message:"authorized user "
    })
}else{
    res.status(404).json({
        success:false,
        message:"not verified "
    })
}
next()
}catch(error){
    console.log(error)
    res.status(404).json({
        success:false,
        message:"not verified "
    })
}
}
module.exports=auth