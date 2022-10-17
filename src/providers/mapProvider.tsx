// library imports
import React, {createContext, Dispatch} from 'react'

// type imports
import {FieldsType} from '../types/fields/FieldTypes'
import {SoilsType} from '../types/fields/SoilTypes'
import {LatLngExpression} from 'leaflet'

// default values
import fields from '../data/partfields.json'
import soils from '../data/soilmaps.json'

export const MapContext = createContext<MapProviderValue>(
  {
    fields: fields,
    soils: soils,
  }
)

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