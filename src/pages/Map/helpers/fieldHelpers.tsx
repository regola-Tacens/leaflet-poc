// type imports
import { LatLngExpression, LatLngTuple } from "leaflet"
import { FieldType } from "src/types/fields/FieldTypes"

export const getFieldCoordinates: LatLngExpression[][] = (field: FieldType) => {
  return field.boundaries.coordinates[0][0].map((coordinate: LatLngTuple) => { return [coordinate[1], coordinate[0]]})
}