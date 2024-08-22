/* eslint-disable react/prop-types */
import '../scss/StudentNavbarCourses.scss';
import { Link } from 'react-router-dom';

const  StudentNavbarCourses = ({handleHtml, handleCss}) => {
  return (
    <nav className="StudentNavbar">
      <ul className="StudentNavbar-menu">
        <li className= 'StudentNavbar-li'><Link to="/dashboard/html" onClick={handleHtml} >Html</Link></li>
           <li className= 'StudentNavbar-li'><Link to="/dashboard/css" onClick={handleCss} >CSS</Link></li>
           <li className= 'StudentNavbar-li'><Link to="/dashboard/bootstrap" >Bootstrap</Link></li>
           <li className= 'StudentNavbar-li'><Link to="/dashboard/javascript" >Javascript</Link></li>
           <li className= 'StudentNavbar-li'><Link to="/dashboard/react" >React</Link></li>
      </ul>
    </nav>
  );
};

export default StudentNavbarCourses;
