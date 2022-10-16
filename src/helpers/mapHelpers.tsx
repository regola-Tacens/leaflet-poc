// library import
import {Map} from 'leaflet'

export const handleChangeMapView = (map: Map, coordinates: number[], zoom: number) => {
  map.setView([coordinates[1], coordinates[0]], zoom, {animate: true, duration: 5.0})
}