// library imports
import { useContext } from 'react'
import { MapContainer, TileLayer, useMap, useMapEvents, ZoomControl } from 'react-leaflet'

// helpers & providers imports
import { MapContext, MapProviderValue } from '../../../providers/mapProvider'
import { INITIAL_MAP } from '../../../data/initialMapValues'

// type imports
import { FieldType } from '../../../types/fields/FieldTypes'

// component imports
import Area from './Area'

// style imports
import '../styles/mapStyles.scss'

const Areas = () => {
  const {fields} = useContext<MapProviderValue>(MapContext)
  // const selectedSoil = soils.items[0].mapdata.features.find(soil => selectedSoilId === soil.properties.id)
  // const selectedSoilCenter = selectedSoil?.geometry.coordinates[0][0][0]
  // console.log(selectedSoilCenter)
  // const mapCenter = selectedSoilCenter ? selectedSoilCenter : [49.6693621002527, 4.97763928469865]

  return(
    <div id="map">
      <MapContainer  
        className="map-container" 
        center={INITIAL_MAP.center} 
        zoom={INITIAL_MAP.zoom} 
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {fields?.items.map((field: FieldType) => (
           <Area key={field.id} field={field} />
          ))}
        <ZoomControl 
          position="topright" 
          zoomInText="+" 
          zoomOutText="-"
        />
      </MapContainer>
    </div>
  )
}

export default Areas