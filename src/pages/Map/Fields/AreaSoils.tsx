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
        fillColor={selectedSoil.color}
      />
    </>
  )
}

export default AreaSoils