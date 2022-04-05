const connection =require("../db/conn")
const DriverModel=require("../model/DriverRegistration")
const multer =require("multer")
const path=require("path")
const res = require("express/lib/response")
// const Storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"../Documents/DriverDoc")
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     }
// })



// const fileFilter = (req, file, cb) => {
//     const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//     if(allowedFileTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

// const upload=multer({
//     Storage,
//     fileFilter
// })



const driverController=async(req,res)=>{
//  upload.single("profile")
try{
  console.log(path.join(__dirname,"../Document/DriverDoc"))

  const DriverDoc=new DriverModel({
      name:req.body.name,
      phone:req.body.phone,
      address:req.body.address,
      state:req.body.state,
      city:req.body.city,
      Email:req.body.Email,
      pincode:req.body.pincode,
      password:req.body.password,
       profile:req.file.profile
     
    })


    const token=await DriverDoc.genToken(DriverDoc)
    
     res.cookie("drivercookie",token)
     
    await DriverDoc.save()
    res.status(200).json({success: true, message: "Registeration successfull "})

}catch(error){
  console.log(error)
  res.status(404).json({success: true, message: "not registered "})
}



    


    
  }



  //Login controller
  
const driverLoginController=async(req,res)=>{
  try{
      const email=req.body.email;
      const password=req.body.password;
     const r=await DriverModel.findOne({Email:email});
  //    console.log(r)
     if(!r){
      res.status(404).json({success: false, message: "not a registered user"})
     return;
     }
     
      if( password!== r.password){
          res.status(200).json({success: false, message: "incorrect password"})
          return;
         
      }
      const token= await r.genToken(r)
       
      res.cookie("drivercookie",token);

      res.status(404).json({success: true, message: " registered user"})
      
     return;
  
  
  }catch(err){
console.log(err)
  }
 
  

}

//Show Drivers
const showDrivers=async(req,res)=>{
  try{
   const result=await DriverModel.find()
   res.status(200).json(
    {
      driverData:result
     } 
   )
  }catch(err){
    res.status(404).json({
    success:false,
    message:"there may be some issue can show drivers"
    })
  }
}
// filter 
const filterDriver=async(id)=>{
  
const result=await DriverModel.findOne({_id:id}) 

return result
}
  //Update Driver
  const updateDriver=(req,res)=>{
    try{
      console.log(req.body.email)
    

    }catch(err){
      res.status(404).json({
        success:false,
        message:"not updated"
      })
    }
  }
  module.exports={driverController,driverLoginController,showDrivers,updateDriver,updateDriver}