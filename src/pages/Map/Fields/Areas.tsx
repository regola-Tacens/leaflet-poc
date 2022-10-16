// library imports
import { useContext } from 'react'
import { MapContainer, TileLayer, useMap, useMapEvents, ZoomControl } from 'react-leaflet'

// helpers & providers imports
import { MapContext, MapProviderValue } from '../../../providers/mapProvider'
import { INITIAL_MAP } from '../../../constants/initialMapValues'

// type imports
import { FieldType } from '../../../types/fields/FieldTypes'

// component imports
import Area from './Area'

// style imports
import '../styles/mapStyles.scss'

const Areas = () => {
  const {fields} = useContext<MapProviderValue>(MapContext)

  return(
    <div id="map">
      <MapContainer  
        className="map-container" 
        center={INITIAL_MAP.center} 
        zoom={INITIAL_MAP.zoom} 
        zoomControl={false}
      >
        <TileLayer url={INITIAL_MAP.url} />
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