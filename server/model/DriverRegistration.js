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

DriverSchema.methods.genToken=async()=>{
try{
    const token = jwt.sign({ _id: this._id }, "secreat key");
    console.log(this.tokens)
    console.log(this._id)
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
    // const token=jwt.sign({_id:this._id},"secreate key")
    // console.log(token)
    // this.tokens=this.tokens.concat({token})
    // await this.save()
    // return token
    

}catch(error){
console.log(error)
}
}


const DriverModel=new mongoose.model("Driver",DriverSchema)

module.exports=DriverModel