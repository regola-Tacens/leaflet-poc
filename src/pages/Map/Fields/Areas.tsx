// library imports
import {useContext} from 'react'
import {LayersControl, MapContainer, TileLayer, ZoomControl} from 'react-leaflet'

// helpers & providers imports
import {MapContext} from '../../../providers/mapProvider'
import {INITIAL_MAP} from '../../../constants/initialMapValues'

// type imports
import {FieldType} from '../../../types/fields/FieldTypes'

// component imports
import Area from './Area'

// style imports
import '../styles/mapStyles.scss'

const Areas = () => {
  const {fields} = useContext(MapContext)!

  return(
    <div id='map'>
      <MapContainer
        className='map-container'
        center={INITIAL_MAP.center}
        zoom={INITIAL_MAP.zoom}
        zoomControl={false}
      >
        <LayersControl>
          <LayersControl.Overlay name='streetview'>
            <TileLayer url={INITIAL_MAP.streetviewUrl} />
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name='Satellite view'>
            <TileLayer url={INITIAL_MAP.satelliteviewUrl} subdomains={['mt1', 'mt2', 'mt3']} />
          </LayersControl.Overlay>
        </LayersControl>
        {fields?.items.map((field: FieldType) => (
          <Area key={field.id} field={field} />
        ))}
        <ZoomControl
          position='topright'
          zoomInText='+'
          zoomOutText='-'
        />
      </MapContainer>
    </div>
  )
}

export default Areas