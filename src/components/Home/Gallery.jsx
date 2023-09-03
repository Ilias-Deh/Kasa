import '../../styles/Gallery.scss'
import logements from "../../datas/logements.json"
import { Link } from 'react-router-dom'


 function Gallery() {
    return (
      <div className='kasa-gallery'>
        <ul className="kasa-ul">
          {logements.map((logement) => (
            <li key={logement.id} className='kasa-li'>
              <Link to={"/logement/" + logement.id}>
              <img className ="kasa-img" src={logement.cover} alt="logement"></img>
              <h2 className='kasa-title'>{logement.title}</h2>
              </Link>
            </li>      
          ))}
            </ul>
      </div>
      )  
  }
export default Gallery;