import '../../styles/Description.scss'
import logements from "../../datas/logements.json"
import Rating from '../../components/Logement/Rating'
import Collapse from '../../components/About/Collapse'
import {useParams} from 'react-router-dom';

function Description() {
  const {id} = useParams();
    return (
        <div className='kasa-description'>
          {logements.filter(logement => logement.id === id).map(filteredlogement => (
            <div className='kasa-description-title'>
                <div className='kasa-flex'>
                    <div className='kasa-name'>
                        <h2>{filteredlogement.title}</h2>
                        <h3>{filteredlogement.location}</h3>
                        <ul>
                            {filteredlogement.tags.map((logement) => (
                                  <li className='kasa-description-tags'>{logement}</li>    
                                ))}
                        </ul>
                    </div>
                    <div className='kasa-description-owner'>
                        <div className='kasa-description-host'>
                            <p>{filteredlogement.host.name}</p>
                            <img src={filteredlogement.host.picture} alt='Propriètaire'></img>
                        </div>
                        <div className='kasa-description-rate' >
                              <Rating>
                                {filteredlogement.rating}
                              </Rating>
                        </div>
                    </div>
                </div>
                <div className='kasa-description-information'>
                    <ul className='kasa-description-details'>
                      <li>
                        <Collapse title="Description">
                            {filteredlogement.description}
                          </Collapse>
                      </li>
                      <li>
                        <Collapse title="Équipements">
                            {filteredlogement.equipments.map((logement) => (
                            <li>{logement}</li>    
                          ))}
                          </Collapse>   
                      </li>
                    </ul>
                </div>
                </div>
            ))}
          </div>
    )
  }

export default Description;