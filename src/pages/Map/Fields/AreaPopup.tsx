// library imports
import { Dispatch, useContext, useMemo, useState } from "react"
import { Popup, useMap, useMapEvents } from "react-leaflet"

// component imports
import Button from "../../../components/UI/Button/Button"

// helpers & state imports
import { MapContext, MapProviderValue } from "../../../providers/mapProvider"
import { INITIAL_MAP } from "../../../data/initialMapValues"

type AreapPopupProps = {
  fieldId: string, 
  fieldCenter: number[],
  setSelectedSoil: Dispatch<React.SetStateAction<{
    color: string;
    coordinates: number[][];
} | undefined>>
}

const AreaPopup = ({fieldId, fieldCenter, setSelectedSoil}: AreapPopupProps) => {
  const {soils} = useContext<MapProviderValue>(MapContext)
  const map = useMap();
  const AreaSoils = useMemo(() => soils.items.filter(soil => soil.partfield_id === fieldId)[0],[soils])
  const hasPopup = !!AreaSoils
  if(!hasPopup) return null
  
  const handleChangeMapView = (coordinates: number[], zoom: number) => {
    map.setView([coordinates[1], coordinates[0]], zoom)
  }

  useMapEvents({
    popupclose: () => {
      handleChangeMapView([4.965, 49.673], INITIAL_MAP.zoom)
      setSelectedSoil({color:'', coordinates:[]})
    }
  })

  return (
    <Popup 
      maxHeight={150} 
      maxWidth={150}
      offset={[0,-50]}
        >
        {
          AreaSoils?.mapdata?.features?.map(areaSoil => (
            <Button 
              key={areaSoil?.properties?.id} 
              size='small' 
              onClick={() => {
                handleChangeMapView(fieldCenter, INITIAL_MAP.zoomIn)
                setSelectedSoil({
                  color: areaSoil.properties.color,
                  coordinates: areaSoil.geometry.coordinates[0][0].map(coordinate => { return [coordinate[1], coordinate[0]]})
                })
              }}
            >
                {areaSoil?.properties?.analysis}
            </Button>
          ))
        }
      </Popup>
)
}

export default AreaPopup