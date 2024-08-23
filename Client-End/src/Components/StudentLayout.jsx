import StudentDashboard from "./StudentDashboard";
import StudentNavbar from "./StudentNavbar"
import StudentNavbarCourses from "./StudentNavbarCourses"
import { Routes, Route,  useLocation } from 'react-router-dom';
import '../scss/StudentLayout.scss'
import { useState } from "react";
import StudentProfile from "./StudentProfile";
import HtmlHomePage from "./HtmlHomePage";
import ReactHomepage from './ReactHomepage'
import CssHomePage from './CssHomePage'
import BootstrapHomepage from './BootstrapHomepage'
import JavaScriptHomepage from './JavaScriptHomepage'
import HtmlSidebar from "./HtmlSidebar";
import CssSidebar from "./CssSidebar";

function StudentLayout() {
  const [activePopup, setActivePopup] = useState(null);
  const [htmlsidebarOpen, setHtmlSidebarOpen] = useState(false)
  const [cssSidebarOpen, setCssSidebarOpen] = useState(false)
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');



  const handleProfile = () => {
    setActivePopup(activePopup === "profile" ? null : "profile")
  }

  const toggleHtmlSidebar = () => {
    setHtmlSidebarOpen(!htmlsidebarOpen);
    if (cssSidebarOpen) {
      setCssSidebarOpen(false);
    }
  };

  const toggleCssSidebar = () => {
    setCssSidebarOpen(!cssSidebarOpen);
    if (htmlsidebarOpen) {
      setHtmlSidebarOpen(false);
    }
  };

 
  return (
    <div className='StudentLayout-Container'>
      <div className='Studentnavbar-body'>
        <StudentNavbar handleLogout={handleProfile} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <StudentNavbarCourses handleHtml={toggleHtmlSidebar} handleCss={toggleCssSidebar} />
      </div>
      <div className='StudentLayout-body'>
        <div className="sidebar-body">
          <HtmlSidebar isHtmlOpen={htmlsidebarOpen} />
          <CssSidebar isCssOpen={cssSidebarOpen} />
        </div>
        <div className={`profilePopUp ${activePopup === 'profile' ? 'open' : 'collapsed'}`}>
          {activePopup && <StudentProfile />}
        </div>
        <div className={`StudentmainContent-body ${cssSidebarOpen ? 'open' : 'collapsed'} ${htmlsidebarOpen ? 'open' : 'collapsed'}`}>
          <Routes location={location}>
            <Route path="/" element={<StudentDashboard />} />
            <Route path="/html/*" element={<HtmlHomePage />} />
            <Route path="/css/*" element={<CssHomePage />} />
            <Route path="/bootstrap/*" element={<BootstrapHomepage />} />
            <Route path="/javascript/*" element={<JavaScriptHomepage />} />
            <Route path="/react/*" element={<ReactHomepage />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default StudentLayout