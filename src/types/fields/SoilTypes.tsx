import {LatLngExpression} from 'leaflet'

export type FeatureType = {
  geometry: {
    coordinates: (LatLngExpression | number)[][][][],
    type: string
  },
  properties: {
    analysis: string,
    color: string,
    id: string
  },
  type: string
}

export type SoilType = {
  account_id: string,
  comment: null,
  created_at: string,
  id: string,
  import_status: string,
  is_hidden: boolean,
  mapdata: {
    features: FeatureType[]
  },
  metadata: string | null,
  name: string,
  origin_id: null | number,
  partfield_id: string,
  source: {
    type: string
  },
  task_id: null,
  type_id: number,
  updated_at: string,
  year: null | number
}

export type SoilsType = {
  status: number,
  items: SoilType[]
}
