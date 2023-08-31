import banner from '../../assets/banner-about.png'
import '../../styles/Banner-about.scss'

function Banner() {
    return (
      <div className='kasa-banner-about'>
        <img src={banner} alt='bannière'></img>
      </div>
    )
  }
  export default Banner;