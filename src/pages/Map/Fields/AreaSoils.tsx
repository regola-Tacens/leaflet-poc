// library imports
import {useContext} from 'react';
import {Polygon, useMap} from 'react-leaflet'
//@ts-ignore
import polylabel from '../../../helpers/mypolyhelper'

// provider import
import {MapContext} from '../../../providers/mapProvider';

const AreaSoils = () => {
  const map = useMap();
  const {selectedSoil} = useContext(MapContext)!
  if(!selectedSoil) return null
  const latlngs = selectedSoil.coordinates
  console.log(latlngs)
  if(latlngs.length === 0) return null
  console.log(latlngs)
  const p = polylabel([latlngs], 1.0);
  L.marker([p[0], p[1]]).addTo(map);

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