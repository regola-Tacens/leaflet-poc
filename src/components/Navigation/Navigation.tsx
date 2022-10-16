// library import
import {Link} from 'react-router-dom'

//image import
import easyFarmLogo from '../../assets/logo/my-easy-farm.png'

// style imports
import './styles/navigationStyles.scss'

const Navigation = () => {
  return (
    <Link to='/' >
      <div className='navigation'>
        <img className='navigation__logo' src={easyFarmLogo} alt='easyfarm' />
      </div>
    </Link>
  )
}

export default Navigation