// library imports
import { LatLngTuple } from "leaflet";

type InitialMapType = {
  center: LatLngTuple,
  zoom: number, 
  zoomIn: number, 
  url: string
}

export const INITIAL_MAP: InitialMapType = {
  center: [49.673, 4.965],
  zoom: 15,
  zoomIn: 17,
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
}