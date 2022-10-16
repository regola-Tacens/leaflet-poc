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
  console.log(selectedSoil)
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