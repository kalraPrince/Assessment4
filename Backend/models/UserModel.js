const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://prince:abcd@cluster0.bcwhyar.mongodb.net/?retryWrites=true&w=majority").then((res)=>console.log('connected to db')).catch((e)=>console.log('error in connection',e))
const usermodel=mongoose.model("usercollection",{
    fname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,   
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    role:{
        type:String,
        default:"user",
        enum:['user','admin'],
        required:true
    }
})
// const obj=new contactModel({
//     fname:'Prince',
//     email:'kalraprince75@gmil.com',
//     password:'1234',
//     phone:'1234',
//     role:'admin'  
// })
// obj.save().then((result)=>res.send({'msg':'signup succeeded',"status":true}))
//creating a document
module.exports=usermodel;
