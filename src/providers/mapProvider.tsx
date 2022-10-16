// library imports
import React, {createContext} from 'react'

// type imports
import {FieldsType} from '../types/fields/FieldTypes'
import {SoilsType} from '../types/fields/SoilTypes'

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