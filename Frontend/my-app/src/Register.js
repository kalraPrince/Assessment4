
import { useNavigate } from "react-router-dom";
import "./Signup.css"
import {useState} from 'react'
import axios from 'axios'
function Signup() {
    let navigate = useNavigate();
    
    const [fname,setFname] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [status,setStatus]=useState(false)

    const handleChange=(e,key)=>{
        if(key==='email'){
            setEmail(e.target.value)
        }
        if(key==='password'){
            setPassword(e.target.value)
        }
        if(key==='phone'){
            setPhone(e.target.value)
        }
        if(key==='fname'){
            setFname(e.target.value)
        }
    }

    const handleSignup=(e)=>{
        e.preventDefault()
        console.log("Hello Signup");
        axios.post('http://localhost:3001/usersignup',{email:email,password:password,fname:fname,phone:phone}).then((res)=>{
            setStatus(res.data.status)}).catch((e)=>console.log(e))
    }

    return (<div id="formContainer">
    <form id="form" >
      <fieldset>
        <h1>Create New Account!!</h1>
        <div id="fullName">
          <input type="text" name="fName" id="fName" placeholder="First Name" required onChange={(e)=>handleChange(e,'fname')}/>
          <input type="text" name="email" id="email" placeholder="Email Address" required onChange={(e)=>handleChange(e,'email')}/>
          <input type="text" name="password" id="password" placeholder="Password" required onChange={(e)=>handleChange(e,'password')}/>
          <input type="text" name="phone" id="phone" placeholder="Personal Phone Number" required onChange={(e)=>handleChange(e,'phone')} />
        </div>
        <br /><br />
        <button id="submit" onClick={(e)=>handleSignup(e)}>SignUp</button>
      </fieldset>

    </form>
  

  </div>)
}
export default Signup;