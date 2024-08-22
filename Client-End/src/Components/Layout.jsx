import Dashboard from "./Dashboard";
import HomeNavbar from "./HomeNavbar"
import {Routes, Route} from 'react-router-dom';
import '../scss/Layout.scss'
import Signup from "./Signup";
import Login from "./Login";

function Layout() {
  return (
    <div className='Layout-Container'>
        <div className='navbar-body'>
            <HomeNavbar/>
        </div>
        <div className="mainContent-body">
            <Routes>
                <Route path="/" element={<Dashboard/>}></Route>
                <Route path="/Signup" element={<Signup/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </div>
    </div>
  )
}

export default Layout