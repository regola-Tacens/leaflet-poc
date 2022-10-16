// library import
import { Link } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'

// style imports
import './styles/homeStyles.scss'

const Home = () => {
  return (
    <div className="home" >
        <Link to='/map'>
          <Button size='large'>Start</Button>
        </Link>
    </div>
  )
}

export default Home