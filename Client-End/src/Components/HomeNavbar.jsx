import '../scss/HomeNavbar.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const HomeNavbar = () => {
  const navigate= useNavigate()
  const handleSignUp=()=>{
navigate('/Signup')
  }
  return (
    <nav className="HomeNavbar">
      <div className="HomeNavbar-brand"><Link to="/">VISION</Link></div>
      <ul className="HomeNavbar-menu">
        <li><Link to="/Signup" style={{ textDecoration: 'none' }} onClick={handleSignUp}>SignUp</Link></li>
      </ul>
    </nav>
  );
};

export default HomeNavbar;
