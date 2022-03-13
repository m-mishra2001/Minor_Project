const mongoose=require("mongoose")

 const connection=  mongoose.connect("mongodb://localhost:27017/WheelzStake",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
connection.then(()=>{
    console.log("connected to database")
}).catch(err=>{
    console.log(err.message)
})
module.exports= connection