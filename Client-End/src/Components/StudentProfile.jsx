/* eslint-disable react/prop-types */
import '../scss/StudentProfile.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function StudentProfile({ activePopup }) {

    const [data, setData] = useState([]);

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
    }, []);

    const navigate = useNavigate()

    const handleLogoutProfile = () => {
        navigate('/')
    }
    return (
        <div className={`StudentProfile-container ${activePopup ? 'open' : 'collapsed'}`}>
            <div className="StudentProfile-body">
       
                <div className="StudentProfile-header">
                    <img src={data.profile_photo} alt="student" style={{ textDecoration: 'none' }} className='student-image'></img>
                    <div className='StudentProfile-details'>
                        <p className='StudentProfile-name'>{data.first_name}&nbsp;{data.last_name}</p>
                        <p className='StudentProfile-email'>{data.email}</p>
                    </div>
                </div>
                <div className='StudentProfile-content'>
                    <ul className='StudentProfile-menu'>
                        <li>Courses completed</li>
                        <li>Courses pending</li>
                        <li>Settings</li>
                        <li>Courses completed</li>
                        <li>Courses completed</li>
                        <li>Courses completed</li>
                        <li className='logout-option'  onClick={handleLogoutProfile}>Log out</li>                   </ul>
                </div>
            </div>
        </div>
    )
}

export default StudentProfile