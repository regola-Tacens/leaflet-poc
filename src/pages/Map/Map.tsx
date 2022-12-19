// library imports
import {useState} from 'react'

// component imports
import Fields from './Fields/Fields'

// map import
import fields from '../../data/partfields.json'
import soils from '../../data/soilmaps.json'

// provider imports
import MapProvider from '../../providers/mapProvider'

// styles imports
import './styles/mapStyles.scss'

// type imports
import {LatLngExpression} from 'leaflet'

const Map = () => {
  const [selectedSoil, setSelectedSoil] = useState<{color: string, coordinates: LatLngExpression[][]}>()
  return (
    <MapProvider value={{fields, soils, selectedSoil, setSelectedSoil}}>
      <div className='map'>
        <Fields>
          <Fields.Areas />
        </Fields>
      </div>
    </MapProvider>
  )
}

export default Map