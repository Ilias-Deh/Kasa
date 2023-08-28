import { useState } from 'react'
import '../../styles/Collapse.css'
import arrow from '../../assets/arrow.png'

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='kasa-information'>
            <div className='kasa-list'>
            <h2>{props.title}</h2>
                    <img onClick={() => setIsOpen(!isOpen) } className={!isOpen ? 'buttonArrow' : null} src={arrow} alt='arrow'></img>
            </div>
            {isOpen && <div className='kasa-content'>{props.children}</div>}
        </div>
    )
  }

  export default Collapse;