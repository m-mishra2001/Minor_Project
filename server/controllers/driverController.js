const connection =require("../db/conn")
const DriverModel=require("../model/DriverRegistration")
const multer =require("multer")
const path=require("path")
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
    console.log("doc created")
    const token=await DriverDoc.genToken()
    console.log(token)
    await DriverDoc.save()
    res.status(200).json({success: true, message: "Registeration successfull "})

}catch(error){
  res.status(404).json({success: true, message: "not registered "})
}



    


    // const DriverDoc=new DriverModel({
    //   name:req.body.name,
    //   phone:req.body.phone,
    //   address:req.body.address,
    //   state:req.body.state,
    //   city:req.body.city,
    //   Email:req.body.Email,
    //   pincode:req.body.pincode,
    //   password:req.body.password,
     
    // })
    // DriverDoc.save().then({
      
    // }).catch(err=>{
    //   console.log(err.message)
    // })
    // res.send("data fetched")
  }
  
  module.exports=driverController