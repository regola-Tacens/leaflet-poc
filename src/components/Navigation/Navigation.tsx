//image import
import easyFarmLogo from '../../assets/logo/my-easy-farm.png'

// style imports
import './styles/navigationStyles.scss'

const Navigation = () => {
  return (
    <div className="navigation">
      <img className="navigation__logo" src={easyFarmLogo} alt="easyfarm" />
    </div>
  )
}

export default Navigation