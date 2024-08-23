/* eslint-disable react/prop-types */
import '../scss/StudentNavbar.scss';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from 'react';

const StudentNavbar = ({ handleLogout, searchQuery, setSearchQuery }) => {
    const [data, setData] = useState([]);
    const handleSearch = (e) => {
        setSearchQuery(e.target.value)
    }
    useEffect(() => {
        const fetchData = () => {
            try {
                const response = localStorage.getItem('loggedinUserData');
                const dataContent = response ? JSON.parse(response) : {};
                console.log(dataContent);
                setData(dataContent)

            } catch (error) {
                console.error("Failed to fetch employee data:", error);
            }
        };

        fetchData();
    }, []);``
    return (
        <nav className="navbar">
            <div className="navbar-brand"><Link to="/dashboard">VISION</Link></div>
            <div className='search-container'>
                <input type='text' placeholder='search'
                    value={searchQuery}
                    onChange={handleSearch} className='search-holder'></input>
                <FaSearch className='search-icon' />
            </div>
            <div className='loggedin-student'>
                <img src={data.profile_photo} alt="student" style={{ textDecoration: 'none' }} className='loggedin-student-image' onClick={handleLogout}></img>
                <p className='loggedin-student-name'>{data.first_name
                }&nbsp;{data.last_name}</p>
            </div>
        </nav>
    );
};

export default StudentNavbar;
