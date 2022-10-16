// library imports
import { useContext, useMemo, useState } from "react"
import { Polygon, Polyline, Popup, useMap, useMapEvents } from "react-leaflet"

// helpers & providers imports
import { MapContext, MapProviderValue } from "../../../providers/mapProvider"
import { INITIAL_MAP } from "../../../data/initialMapValues"

// type imports
import { FieldType } from "src/types/fields/FieldTypes"

// component imports
import Button from "../../../components/UI/Button/Button"
import { LatLngExpression } from "leaflet"

type AreaProps = {
  field: FieldType 
}

const Area = ({field}: AreaProps) => {
  const {soils, setSelectedSoil, selectedSoil} = useContext<MapProviderValue>(MapContext)
  const AreaSoils = useMemo(() => soils.items.filter(soil => soil.partfield_id === field.id)[0],[soils])
  const map = useMap();
  const [selectedSoilCoordinates, setSelectedSoilCoordinates] = useState<any>()
  const hasPopup = !!AreaSoils
  const handleChangeMapView = (coordinates: number[], zoom: number) => {
    map.setView([coordinates[1], coordinates[0]], zoom)
  }

  useMapEvents({
    popupclose: () => {
      handleChangeMapView([4.965, 49.673], INITIAL_MAP.zoom)
      setSelectedSoilCoordinates(null)
    }
  })
  const selectedSoilColor = soils.items[0].mapdata.features.find(soil => soil.properties.id === selectedSoil)?.properties.color
  return (
    <>
      <Polyline 
        positions={field.boundaries.coordinates[0][0].map(coordinate => { return [coordinate[1], coordinate[0]]})}
        color={`#${field.color_hex}`}
      />
      <Polygon 
        positions={field.boundaries.coordinates[0][0].map(coordinate => { return [coordinate[1], coordinate[0]]})}
        color={`#${field.color_hex}`}
      >
        { hasPopup &&
          <Popup 
          maxHeight={150} 
          maxWidth={150} 
           >
            {
              AreaSoils?.mapdata?.features?.map(areaSoil => (
                <Button 
                  key={areaSoil?.properties?.id} 
                  size='small' 
                  onClick={() => {
                    handleChangeMapView(field.center, 17)
                    setSelectedSoil(areaSoil.properties.id)
                    setSelectedSoilCoordinates(areaSoil.geometry.coordinates[0][0].map(coordinate => { return [coordinate[1], coordinate[0]]}))
                  }}
                >
                    {areaSoil?.properties?.analysis}
                </Button>
              ))
            }
          </Popup>
        }
      </Polygon>
      {
        selectedSoilCoordinates &&
        <Polygon 
          positions={selectedSoilCoordinates}
          color={selectedSoilColor}
        />
      }
    </> 
  )
}

export default Area