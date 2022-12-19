import {LatLngExpression} from 'leaflet'

export type FieldType = {
  id: string,
  parent_id: string | null,
  updated_at: string,
  designator: string,
  description: string | null,
  external_id: string | null,
  color: number,
  farm_id: number,
  customer_id: number,
  account_id: string,
  specified_area: null |number,
  calculated_area: number,
  crop_id: number,
  crop_variety_id: number | null,
  soil: string,
  year: null | number,
  center: number[],
  boundaries: {
    type: string,
    coordinates: (LatLngExpression | number)[][][][]
  },
  color_hex: string
}

export type FieldsType = {
  status: number,
  items: FieldType[]
}