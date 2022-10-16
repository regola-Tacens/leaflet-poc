export const invertCoordinates = (coordinates: number[]) => {
  return coordinates.map(coordinate => { return [coordinate[1], coordinate[0]]})
}