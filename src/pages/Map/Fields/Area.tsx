// library imports
import {LatLngExpression} from 'leaflet'
import {useContext} from 'react'
import {Polygon, Polyline, Popup, useMap, useMapEvents} from 'react-leaflet'

// helpers & providers imports
import {INITIAL_MAP} from '../../../constants/initialMapValues'
import {handleChangeMapView} from '../../../helpers/mapHelpers'
import {MapContext, MapProviderValue} from '../../../providers/mapProvider'

// type imports
import {FieldType} from '../../../types/fields/FieldTypes'

// component imports
import AreaPopup from './AreaPopup/AreaPopup'
import AreaSoils from './AreaSoils'

type AreaProps = {
  field: FieldType
}

const Area = ({field}: AreaProps) => {
  const map = useMap();
  const {setSelectedSoil} = useContext<MapProviderValue>(MapContext)

  useMapEvents({
    popupclose: () => {
      handleChangeMapView(map, [4.965, 49.673], INITIAL_MAP.zoom)
      setSelectedSoil({color: '', coordinates: []})
    }
  })

  return (
    <>
      <Polyline
        positions={field.boundaries.coordinates[0][0].map((coordinate: LatLngExpression[]) => {return [coordinate[1], coordinate[0]]})}
        color={`#${field.color_hex}`}
      />
      <Polygon
        positions={field.boundaries.coordinates[0][0].map((coordinate: LatLngExpression[]) => {return [coordinate[1], coordinate[0]]})}
        color={`#${field.color_hex}`}
      >
        <Popup maxHeight={150} maxWidth={150} offset={[0, -50]}>
          <AreaPopup field={field} />
        </Popup>
      </Polygon>
      <AreaSoils />
    </>
  )
}

export default Area