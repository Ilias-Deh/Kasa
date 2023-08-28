import { Link } from 'react-router-dom'
import '../../styles/Header.css'
import logo from '../../assets/logo.png'

function Header() {
    return (
        <div className='kasa-header'>
        <img src={logo} className='header-logo'></img>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
        </div>

    )
}

export default Header