// library imports
import { Polygon } from "react-leaflet"

type AreaSoilsProps = {
  selectedSoil: {
    color: string;
    coordinates: number[][];
  } | undefined
}

const AreaSoils = ({selectedSoil}: AreaSoilsProps) => {
  if(!selectedSoil) return null

  return (
    <>
      <Polygon 
        positions={selectedSoil.coordinates}
        color={selectedSoil.color}
        opacity={1}
        fillOpacity={1}
      />
    </>
  )
}

export default AreaSoils