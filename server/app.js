const { urlencoded } = require("express");
const express = require("express");

const app = express();
const connection =require("./db/conn")
const driverRouter=require("./routers/driverRouter")
// const DriverModel=require("./model/DriverRegistration")
const cookieParser=require("cookie-parser")


if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "server/config/config.env" });
}
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use(driverRouter)



module.exports= app