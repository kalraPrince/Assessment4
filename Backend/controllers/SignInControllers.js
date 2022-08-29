const express=require('express')
const router=express.Router()
const usermodel=require('../models/UserModel')
const jwt=require('jsonwebtoken')
const cookie=require('cookie-parser')
router.post('/adminsignin',async (req,res)=>{
    const data=req.body
    console.log(data);
    try{
        console.log("hello");
        // console.log(req);
        const result=await usermodel.findOne({email:data.email})
        console.log(result)
        if(result && result.role=='admin'){
            if(result.password===data.password){
                console.log("hello once");
                const token=jwt.sign({email:data.email,role:result.role},'jamesbond')
                console.log(token);
                res.status(200).cookie('authorizer',token,{httpOnly:true,maxAge:360000000})
                res.send({"msg":'you are authenticated',"status":true})
            }
            else{
                res.send({"msg":'check your password , not authenticated',"status":false})
            }
        }
        else{
            res.send({"msg":'the email id does not exists',"status":false})
        }
       
    }
    catch(e){
        res.send({'msg':'some error occured',"status":false})
    }
   
})
router.post('/usersignin',async (req,res)=>{
    const data=req.body
    console.log(data)
    try{
        console.log("hello");
        // console.log(req);
        const result=await usermodel.findOne({email:data.email})
        console.log(result && result.role=='user')
        if(result){
            if(result.password===data.password){
                console.log("hello once");
                const token=jwt.sign({email:data.email,role:result.role},'jamesbond')
                console.log(token);
                res.status(200).cookie('authorizer',token,{httpOnly:true,maxAge:360000000})
                res.send({"msg":'you are authenticated',"status":true})
            }
            else{
                res.send({"msg":'check your password , not authenticated',"status":false})
            }
        }
        else{
            res.send({"msg":'the email id does not exists',"status":false})
        }
       
    }
    catch(e){
        res.send({'msg':'some error occured',"status":false})
    }
   
})
module.exports=router
