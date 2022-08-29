import UserLogIn from "./UserLogIn";
import {BrowserRouter as Router, Link, 
  Routes, Route} from 'react-router-dom'
import DashBoard from "./DashBoard";
import Signup from "./Register";
import AdminRegister from "./AdminRegister";
import AdminDashBoard from "./AdminDashBoard";
import AdminLogIn from "./AdminLogIn";

function App() {
  return (
    <Router>
   <Routes>
   <Route path="/" element={<UserLogIn></UserLogIn>} />
   <Route path="/DashBoard" element={<DashBoard></DashBoard>} />
   <Route path="/Register" element={<Signup></Signup>} />
   <Route path="/AdminRegister" element={<AdminRegister></AdminRegister>} />
   <Route path="/AdminLogIn" element={<AdminLogIn></AdminLogIn>} />
   <Route path="/AdminDashBoard" element={<AdminDashBoard></AdminDashBoard>} />
    </Routes>
   </Router>
  );
}

export default App;
