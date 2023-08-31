import { Link } from 'react-router-dom'
import '../../styles/Header.scss'
import logo from '../../assets/logo.png'

function Header() {
    return (
        <div className='kasa-header'>
        <img src={logo} className='header-logo' alt='logo kasa'></img>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
        </div>

    )
}

export default Header