// library imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// style imports
import './styles/maps.scss'
import './styles/index.scss'

// component imports
import Home from './pages/Home/Home'
import Navigation from './components/Navigation/Navigation'
import Map from './pages/Map/Map'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/map' element={<Map />} />
      </Routes>
    </Router>
  )
}

export default App

{/* <div id="map">
<MapContainer center={[49.6690444111223, 4.98047399519336]} zoom={15} scrollWheelZoom={true}>
 <TileLayer
   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
 />
 <Marker position={[4.98031720892838, 49.6695093158612]}>
   <Popup>
     A pretty CSS3 popup. <br /> Easily customizable.
   </Popup>
 </Marker>
</MapContainer>
</div> */}