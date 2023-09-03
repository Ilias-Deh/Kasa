import { Link } from 'react-router-dom'
import '../../styles/Header.scss'
import logo from '../../assets/logo.png'
import { useState } from 'react'

function Header() {
    const [isHome, setIsHome] = useState(true);
    return (
        <div className='kasa-header'>
        <img src={logo} className='header-logo' alt='logo kasa'></img>
        <nav>
            <Link to="/" onClick={() => setIsHome(true) } className ={isHome === true ? 'underline' : null}>Accueil</Link>
            <Link to="/about" onClick={() => setIsHome(false) } className ={isHome === false ? 'underline' : null}>A propos</Link>
        </nav>
        </div>
    )
}

export default Header