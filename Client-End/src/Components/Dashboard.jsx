import '../scss/Dashboard.scss'
import computer from '../assets/computer.jpg'
import { useNavigate } from 'react-router-dom'
function Dashboard() {

    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login')
    }
    return (
        <div className="dashboard-container">
            <div className="dashboard-container-section1">
                <img src={computer} alt='cover-image' className='section1-image'></img>
                <p className='text-overlay'>
                    Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Eveniet, id.<br />
                    <button className='login-trigger' onClick={handleLogin}>Get Started</button>
                </p>
            </div>
            <div className='dashboard-container-section2'>
                <div className='about'>
                    <h3>About us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus non sequi ipsa aperiam dignissimos dolor incidunt! Ex, illum voluptatem! Corrupti cum, consequuntur fugiat non est inventore modi quam aspernatur. Cupiditate vitae voluptatibus facere aut rerum nulla perferendis repellat eligendi. Consequatur necessitatibus, perferendis eius laboriosam, maiores inventore deserunt blanditiis optio culpa quam quis commodi, deleniti quibusdam omnis illo eum. Vitae, inventore magni dicta nihil dolor quibusdam neque eveniet quas dolorum laboriosam animi soluta, libero sit, a reprehenderit aliquam debitis non dolorem recusandae eligendi voluptatem similique! Quaerat tenetur illum cum accusamus in dolorem nobis error molestias iste facilis. Voluptate veniam, nihil fuga optio adipisci, deleniti a dicta iure reprehenderit fugiat ab. Recusandae commodi repudiandae voluptate laborum at earum rerum ea deserunt veniam iusto minus ullam, accusamus accusantium illo modi, corporis adipisci amet sunt distinctio nobis qui velit! Provident, illum, voluptatum exercitationem ipsa unde laborum quis laboriosam, cumque veniam magni a! Iusto in aperiam nulla et ullam cupiditate. Nesciunt aperiam recusandae dolor neque non similique eligendi sequi eum! Hic sunt, amet laboriosam, sit eos, corrupti provident esse quos minima incidunt molestias autem. Laborum aperiam quae vitae omnis, qui voluptate voluptas culpa at provident accusamus error quos nihil. Repellendus eum vitae rerum blanditiis pariatur?</p>
                </div>
            </div>
            <div className='dashboard-container-section3'>
                <div className='customerCare'>
                    <h3>Customer Care</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita assumenda, magnam similique maiores cumque voluptatibus odio adipisci error perferendis harum?</p>
                </div>
                <div className='Help'>
                    <h3>Help</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita assumenda, magnam similique maiores cumque voluptatibus odio adipisci error perferendis harum?</p>
                </div>
                <div className='Grievances'>
                    <h3>Grievances</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita assumenda, magnam similique maiores cumque voluptatibus odio adipisci error perferendis harum?</p>
                </div>

            </div>
        </div>
    )
}

export default Dashboard