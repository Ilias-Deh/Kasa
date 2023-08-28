import '../../styles/Footer.css'
import logo from '../../assets/logo-footer.png'

function Header() {
    
    return (
        <div className="kasa-footer">
            <img src={logo} className='footer-logo'></img>
            <p>© 2020 Kasa. All rights reserved</p>
            
        </div>
    )
}

export default Header