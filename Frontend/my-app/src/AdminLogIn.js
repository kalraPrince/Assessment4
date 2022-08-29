import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./LogIn.css"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AdminLogIn=()=>{
    const navigate=useNavigate()
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [userErr,setUsererr]=useState('')
    const [passwordErr,setPassworderr]=useState("")
    const bgstyle={color:"red"}
    const [status,setStatus]=useState(false)

    const [login,setLogin]=useState(false)

    const handleChange=(e,key)=>{
        
        if(key==='username'){
            setUsername(e.target.value)
        }
        if(key==='password'){
            setPassword(e.target.value)
        }
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        console.log("Hello");
        axios.post('http://localhost:3001/adminsignin',{email:username,password:password}).then((res)=>{
        setStatus(res.data.status)}).catch((e)=>console.log(e))
        console.log(status);
    }
 

    const handleBlurEvent=(e,key)=>{
        if(key==='username'){
         if(e.target.value){
             setUsererr(e.target.value)
             setUsererr('')
             
         }
         else{
             setUsererr('Please Enter the Username')
         }
        }
        if(key==='password'){
         if(e.target.value){
             setPassworderr(e.target.value)
             setPassworderr('')
         }
         else{
             setPassworderr('Please Enter the password')
         }
        }
       
     }


    return(
         <div>
            {
                status?navigate('/AdminDashBoard'):<div>
                <h1>Hello</h1>
                <div className="form">
                 Username<input type='text' onChange={(e)=>handleChange(e,"username")} onBlur={(e)=>handleBlurEvent(e,'username')}></input>
                 <h6 style={bgstyle}>{userErr}</h6>
                 Password<input type='text' onChange={(e)=>handleChange(e,"password")} onBlur={(e)=>handleBlurEvent(e,'password')}></input>
                 <h6 style={bgstyle}>{passwordErr}</h6>
                <button className="login-btn" onClick={(e)=>handleLogin(e)}>login</button>
                 
                 </div>
              </div>
            }
         
          
        </div>
        
        
    )
}
export default AdminLogIn