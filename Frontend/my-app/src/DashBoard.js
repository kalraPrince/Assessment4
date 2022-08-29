import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
axios.defaults.withCredentials=true 
function DashBoard() {
    const navigate=useNavigate()
    const [status,setstatus] = useState(false);
    const [activate,setactivate] = useState(true);
    // const logoutMethod=()=>{
    //     // cookies.removeItem('accesstoken')
    //     // navigate('/')
    //  }
    const logout=()=>{
        axios.post('http://localhost:3001/delete',{},{withCredentials:true}).then((Res)=>console.log(Res)).catch((e)=>console.log(e))
        setstatus(true);

    }
    const ChangeStatus=()=>{
        console.log("Hello");
        setactivate(!activate);
        console.log(activate);
    }
    console.log("render");
return (
<div>
    {
        
        status==true?navigate('/DashBoard'):<div>
            {
                activate==true?<div>
                       <h1>User DashBoard</h1>
                       <button onClick={ChangeStatus}>Deactivate it</button>
                </div>:<div>
                    <h1>Your Account is Deactivated activate it!!</h1>
                    <button onClick={ChangeStatus}>Activate it</button>
                </div>
            }
           
        </div>
    }
    
    {/* <button onClick={logoutMethod}>logout</button> */}
    </div>)
}
export default DashBoard;