// library imports
import {useContext} from 'react';
import {Polygon} from 'react-leaflet'

// provider import
import {MapContext} from '../../../providers/mapProvider';

const AreaSoils = () => {
  const {selectedSoil} = useContext(MapContext)!
  if(!selectedSoil) return null

  return (
    <>
      <Polygon
        positions={selectedSoil.coordinates}
        color={selectedSoil.color}
        opacity={1}
        fillOpacity={0.6}
        fillColor={selectedSoil.color}
      />
    </>
  )
}

export default AreaSoils