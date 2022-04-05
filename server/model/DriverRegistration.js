const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const DriverSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone :Number,
    address:{
        type:String,
        required:true
    },
    state:String,
    city:String,
    Email:{
        type:String,
        required:true,
        unique:true
    },
    pincode:Number,
    password:String,
    tokens: [
        {
          token: String,
        },
      ],
    profile:String

})

DriverSchema.methods.genToken=async(DriverDoc)=>{
try{
// console.log(DriverDoc._id)
   const token = jwt.sign({_id:DriverDoc._id}, "secreat key");


DriverDoc.tokens=DriverDoc.tokens.concat({token})


    return token
    

}catch(error){
console.log(error)
}
}


const DriverModel=new mongoose.model("Driver",DriverSchema)

module.exports=DriverModel