// component imports
import Fields from "./Fields/Fields"

// map import
import fields from '../../data/partfields.json'
import soils from  '../../data/soilmaps.json'

// provider imports
import MapProvider from "../../providers/mapProvider"

// styles imports
import './styles/mapStyles.scss'

const Map = () => {
  return (
    <MapProvider value={{fields, soils}}>
      <div className="map">
        <Fields>
          <Fields.Areas />
        </Fields> 
      </div>
    </MapProvider>
  )
}

export default Map