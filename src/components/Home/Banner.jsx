import banner from '../../assets/banner.png'
import '../../styles/Banner.scss'

function Banner() {
    return (
      <div className='kasa-banner'>
        <img src={banner} alt='bannière'></img>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    )
  }
  export default Banner;