// library imports
import {useContext} from 'react'
import {useMap} from 'react-leaflet'
import {LatLngExpression} from 'leaflet'

// helpers & constants imports
import {MapContext, MapProviderValue} from '../../../../providers/mapProvider'
import {handleChangeMapView} from '../../../../helpers/mapHelpers'
import {INITIAL_MAP} from '../../../../constants/initialMapValues'

// component imports
import Button from '../../../../components/UI/Button/Button'

// type imports
import {SoilType} from '../../../../types/fields/SoilTypes'

type AreaPopupContentProps = {
  id: string,
  center : number[],
  AreaSoils: SoilType
}

const AreaPopupContent = ({id, center, AreaSoils}: AreaPopupContentProps) => {
  const map = useMap();
  const {setSelectedSoil} = useContext<MapProviderValue>(MapContext)

  return (
    <>
      {
        AreaSoils?.mapdata?.features?.map(areaSoil => (
          <Button
            key={areaSoil?.properties?.id}
            size='small'
            variant='secondary'
            onClick={() => {
              handleChangeMapView(map, center, INITIAL_MAP.zoomIn)
              setSelectedSoil({
                color: areaSoil.properties.color,
                coordinates: areaSoil.geometry.coordinates[0][0].map((coordinate : LatLngExpression[]) => {return [coordinate[1], coordinate[0]]})
              })
            }}
          >
            {areaSoil?.properties?.analysis}
          </Button>
        ))
      }
    </>
  )
}

export default AreaPopupContent