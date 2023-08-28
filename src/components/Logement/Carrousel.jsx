import '../../styles/Carrousel.css'
import logements from "../../datas/logements.json"
import arrow_forward from '../../assets/arrow_forward.png'
import arrow_back from '../../assets/arrow_back.png'
import {useParams} from 'react-router-dom';
import React, { useState } from 'react';

function Carrousel() {

  const {id} = useParams();
  const [slide, setSlide] = useState(0);
  return(
    <div className='kasa-carrousel'>
      {logements.filter(logement => logement.id === id).map(filteredlogement => (
      <div>
        <img className='kasa-background' src={filteredlogement.pictures[slide]} alt="logement"></img>
        <img className='kasa-arrow-back' src={arrow_back} onClick={() => setSlide(slide < 1 ? filteredlogement.pictures.length-1 : slide - 1 )} alt="fleche gauche"></img>
        <img className='kasa-arrow-forward' src={arrow_forward} onClick={() => setSlide(slide > filteredlogement.pictures.length-2 ? 0 : slide + 1)} alt="fleche droite"></img>
      </div>
      ))}
    </div>
  )}

export default Carrousel;

