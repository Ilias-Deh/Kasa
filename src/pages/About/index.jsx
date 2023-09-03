import Banner from '../../components/About/Banner'
import Collapse from '../../components/About/Collapse'
import '../../styles/About.scss'
function About() {
    return (
      <div>
      <Banner />
        <div className='kasa-about-description'>
            <div className='kasa-information'>
                <Collapse title="Fiabilité" >
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                  régulièrement vérifiées par nos équipes.</p>
                </Collapse>
            </div>
            <div className='kasa-information'>
                <Collapse title="Respect">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collapse>
            </div>
            <div className='kasa-information'>
                  <Collapse title="Services" >
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                    perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                  </Collapse>
                          
            </div>
            <div className='kasa-information'>
                  <Collapse title="Sécurité">
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                      correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                      locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                      également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                  </Collapse>       
            </div>
      </div>
      </div>
    )
  }
  
  export default About;
  