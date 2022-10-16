// library imports
import { LatLngTuple } from "leaflet";

type InitialMapType = {
  center: LatLngTuple,
  zoom: number
}

export const INITIAL_MAP: InitialMapType = {
  center: [49.673, 4.965],
  zoom: 15
}