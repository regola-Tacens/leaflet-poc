// library imports
import React, {createContext, Dispatch} from 'react'

// type imports
import {FieldsType} from '../types/fields/FieldTypes'
import {SoilsType} from '../types/fields/SoilTypes'
import {LatLngExpression} from 'leaflet'

export const MapContext = createContext<MapProviderValue | null>(null)

export type MapProviderValue = {
  fields: FieldsType,
  soils: SoilsType,
  selectedSoil: {
    color: string,
    coordinates: LatLngExpression[][]
  } | undefined,
  setSelectedSoil: Dispatch<React.SetStateAction<{
    color: string;
    coordinates: LatLngExpression[][];
  } | undefined>>
}

type MapProviderProps = {
  children: React.ReactNode,
  value: MapProviderValue
}

const MapProvider = ({children, value}:MapProviderProps) => {
  return(
    <MapContext.Provider value={value}>
      {children}
    </MapContext.Provider>
  )
}

export default MapProvider