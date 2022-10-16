// library imports
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// style imports
import './styles/maps.scss'
import './styles/index.scss'
import './styles/app.scss'

// component imports
import Home from './pages/Home/Home'
import Navigation from './components/Navigation/Navigation'
import Map from './pages/Map/Map'

function App() {
  return (
    <div className='app'>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/map' element={<Map />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App