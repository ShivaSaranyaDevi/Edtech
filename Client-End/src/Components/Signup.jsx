/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import { useNavigate} from "react-router-dom"
import axios from 'axios';
import { format } from 'date-fns';
import '../scss/Signup.scss'

function Signup() {

    const [formData, setFormData] = useState({
        profile_photo: '',
        first_name: '',
        last_name: '',
        father_name: '',
        date_of_birth: '',
        email: '',
        city: '',
        contact_number: '',
        password: ''
    });

    const [confirmPassword, setConfirmPassword] = useState({
        confirmPassword: ''
    });
    const [error, setError] = useState(false);


    const handleChange = (e) => {
        const { name, value, files, type } = e.target;
        if (type == 'file') {
            const file = files[0]
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prevFormData => ({
                    ...prevFormData,
                    [name]: reader.result
                }))
            }
            reader.readAsDataURL(file);
        }
        else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }))
        }
    }

    const handleConfirmPasswordChange = (e) => {
        const { name, value } = e.target;
        setConfirmPassword(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))

    }

    const resetForm = () => {
        setFormData(
            {
                profile_photo: '',
                first_name: '',
                last_name: '',
                father_name: '',
                date_of_birth: '',
                email: '',
                city: '',
                contact_number: '',
                password: ''
            }
        )

        setConfirmPassword(
            {
                confirmPassword: ''
            }
        )
    }
const navigate=useNavigate()
    const handleBack=()=>{
        navigate('/')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password === confirmPassword.confirmPassword) {
            try {

                const response = await axios.post(`https://localhost:7110/api/Registered_StudentController/api/AddStudents`, formData)
                console.log(response.data)
                const data = response.data;

                if (data.DateOfBirth) {
                    const dob = new Date(data.DateOfBirth);
                    const formattedDOB = format(dob, 'yyyy-MM-dd');

                    setFormData(formData => ({
                        ...formData,
                        dateOfBirth: formattedDOB
                    }));
                }

                resetForm();

            }
            catch (error) {
                setError(error)
            }

        }

    }

    return (
        <div className="signup-container">
            <div className="signup-header">
                <p>Sign up to learn</p>
            </div>
            <div className="signup-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">
                            profile photo
                        </label>
                        <input type="file" className="form-control" name="profile_photo" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            First Name*
                        </label>
                        <input type="text" className="form-control" name="first_name" value={formData.first_name} onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label className="form-label">
                            Last Name*
                        </label>
                        <input type="text" className="form-control" name="last_name" value={formData.last_name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Father's Name*
                        </label>
                        <input type="text" className="form-control" name="father_name" value={formData.father_name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Date of Birth*
                        </label>
                        <input type="date" className="form-control" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Location*
                        </label>
                        <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Email id*
                        </label>
                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Mobile Number*
                        </label>
                        <input type="text" className="form-control" name="contact_number" value={formData.contact_number} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Password*
                        </label>
                        <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Confirm Password*
                        </label>
                        <input type="password" className="form-control" name="confirmPassword" value={confirmPassword.confirmPassword} onChange={handleConfirmPasswordChange} />
                    </div>
                    <div className="submit">
                        <button type="submit" className="submit-button">Sign Up</button>
                    </div>
                </form>

                <div className="back-button">
                    <button className="back" onClick={handleBack}>Back</button>
                </div>
            </div>
        </div>
    )
}

export default Signup