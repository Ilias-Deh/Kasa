import '../../styles/Description.css'
import logements from "../../datas/logements.json"
import Rating from '../../components/Logement/Rating'
import {useParams} from 'react-router-dom';
import arrow from '../../assets/arrow.png'
import { useState } from 'react'

function Description() {
  const {id} = useParams();
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipementOpen, setIsEquipementOpen] = useState(false);
    return (
        <div className='kasa-description'>
          {logements.filter(logement => logement.id === id).map(filteredlogement => (
            <div>
            <div className='kasa-description-title'>
              < div className='kasa-description-location'>
                    <h2>{filteredlogement.title}</h2>
                    <h3>{filteredlogement.location}</h3>
                </div>
                <div className='kasa-description-host'>
                    <p>{filteredlogement.host.name}</p>
                    <img src={filteredlogement.host.picture} alt='Propriètaire'></img>
                </div>
            </div>
            <div className='kasa-description-rate' >
                <ul>
                {filteredlogement.tags.map((logement) => (
                      <li className='kasa-description-tags'>{logement}</li>    
                    ))}
                </ul>
                <div>
                    <Rating>
                      {filteredlogement.rating}
                    </Rating>
                </div>
            </div>
            <div>
                <ul className='kasa-description-details'>
                  <li>
                      <div className='kasa-description-collapse'>
                          <p>Description</p>
                          <img onClick={() => setIsDescriptionOpen(!isDescriptionOpen) } className={!isDescriptionOpen ? 'buttonArrow' : null} src={arrow} alt='arrow'></img>
                      </div>
                      <div className='kasa-description-content'>
                          { !isDescriptionOpen ? (filteredlogement.description) : null}
                      </div>
                      
                  </li>
                  <li>
                    <div className='kasa-description-collapse'>
                        <p>Équipements</p>
                        <img onClick={() => setIsEquipementOpen(!isEquipementOpen) } className={!isEquipementOpen ? 'buttonArrow' : null} src={arrow} alt='arrow'></img>
                    </div>
                    <div className='kasa-description-content'>
                      <ul>
                        {!isEquipementOpen ?  (filteredlogement.equipments.map((logement) => (
                            <li className='kasa-description-equipement'>{logement}</li>    
                          ))) :null} 
                      </ul>
                    </div>
                    
                  </li>
                </ul>
            </div>
            </div>
            ))}
          </div>
    )
  }

export default Description;