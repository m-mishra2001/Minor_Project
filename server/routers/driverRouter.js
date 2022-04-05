const express=require("express")
const driverRouter=new express.Router;
const driverController=require("../controllers/driverController")
// const driverLoginController=require("../controllers/driverLoginController")
const multer =require("multer")
const path=require("path")
const auth=require("../middleware/auth")

// const Storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,path.join(__dirname,"../Document/DriverDoc"))
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
//upload.single("profile")

driverRouter.route("/driver").post(driverController.driverController)
driverRouter.route("/driverLogin").post(driverController.driverLoginController)
driverRouter.route("/authentication").get(auth)
driverRouter.route("/showDrivers").get(driverController.showDrivers)
driverRouter.route("/updateDriver").post(driverController.updateDriver)
  module.exports=driverRouter