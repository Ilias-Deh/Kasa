import Carrousel from '../../components/Logement/Carrousel'
import Description from '../../components/Logement/Description'
import logements from "../../datas/logements.json"
import { Navigate, useParams} from 'react-router-dom';

function Logement() {
  const {id} = useParams();
  return (
    <div>
      {logements.find(logement => logement.id === id ) ? <><Carrousel /> <Description /></> :  <Navigate to="/Error" /> }
    </div>
  )
}
export default Logement;

