const express = require("express");

const app = express();
const connection =require("./db/conn")
const driverRouter=require("./routers/driverRouter")
const DriverModel=require("./model/DriverRegistration")

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "server/config/config.env" });
}

app.use(express.json())


app.use(driverRouter)

// app.post("/driver",(req,res)=>{
  
//   const DriverDoc=new DriverModel({
//     name:req.body.name,
//     phone:req.body.phone,
//     address:req.body.address,
//     state:req.body.state,
//     city:req.body.city,
//     Email:req.body.Email,
//     pincode:req.body.pincode,
//     password:req.body.password
//   })
//   DriverDoc.save().then({
    
//   }).catch(err=>{
//     console.log(err.message)
//   })
//   res.send("data fetched")
// })
app.get("/", (req, res) => {
  res.json({
    success: "True",
    author: "Aman Pandagre",
  });
});

module.exports= app