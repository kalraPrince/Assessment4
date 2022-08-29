import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import AdminRegister from './AdminRegister'
import {useState} from 'react'
import UserLogIn from './UserLogIn'
axios.defaults.withCredentials=true
function AdminDashBoard() {
    const [status,setstatus] = useState('false')
    const updateMethod=()=>{
        axios.post('http://localhost:3001/adminsignup',{
            "fname":"peter",
            "email":"peter@gmail.com",
            "phone":9283928388000,
            "password":"peter@1234"
        },{withCredentials:true}).then((Res)=>console.log(Res)).catch((e)=>console.log(e))
    }
    const logout=()=>{
        axios.post('http://localhost:3001/delete',{},{withCredentials:true}).then((Res)=>console.log(Res)).catch((e)=>console.log(e))
        setstatus(true);
    }
return (<div>
    {
        status==true?<UserLogIn></UserLogIn>:<div>
            <AdminRegister></AdminRegister>
    <button onClick={logout}>LogOut</button>
    <h1>Admin  DashBoard</h1>
        </div>
    }
    

</div>)
}
export default AdminDashBoard;