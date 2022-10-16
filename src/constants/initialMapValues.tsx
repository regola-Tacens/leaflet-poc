// library imports
import {LatLngTuple} from 'leaflet';

type InitialMapType = {
  center: LatLngTuple,
  zoom: number,
  zoomIn: number,
  streetviewUrl: string,
  satelliteviewUrl: string
}

export const INITIAL_MAP: InitialMapType = {
  center: [49.673, 4.965],
  zoom: 15,
  zoomIn: 17,
  streetviewUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  satelliteviewUrl: 'https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
}