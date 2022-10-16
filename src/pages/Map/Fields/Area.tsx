// library imports
import { LatLngExpression } from "leaflet"
import { useState } from "react"
import { Polygon, Polyline, useMap, useMapEvents } from "react-leaflet"

// helpers & providers imports
import { INITIAL_MAP } from "../../../constants/initialMapValues"

// type imports
import { FieldType } from "../../../types/fields/FieldTypes"

// component imports
import AreaPopup from "./AreaPopup"
import AreaSoils from "./AreaSoils"

type AreaProps = {
  field: FieldType 
}

const Area = ({field}: AreaProps) => {
  const map = useMap();
  const [selectedSoil, setSelectedSoil] = useState<{color: string, coordinates: LatLngExpression[][]}>()

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
    <>
      <Polyline 
        positions={field.boundaries.coordinates[0][0].map((coordinate: number[]) => { return [coordinate[1], coordinate[0]]})}
        color={`#${field.color_hex}`}
      />
      <Polygon 
        positions={field.boundaries.coordinates[0][0].map((coordinate: number[]) => { return [coordinate[1], coordinate[0]]})}
        color={`#${field.color_hex}`}
      >
      <AreaPopup setSelectedSoil={setSelectedSoil} field={field} />
      </Polygon>
      <AreaSoils selectedSoil={selectedSoil} />
    </> 
  )
}

export default Area