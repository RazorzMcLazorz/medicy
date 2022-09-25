import { MapDetails } from './types'

const tileSelector = () => {
  const ran = Math.round(Math.random() * 25)
  return ran >= 9 ? 0 : ran
}

export const createInitialMapGen = async (mapSize: number): Promise<MapDetails[][]> =>
  new Array(mapSize).fill(
    new Array(mapSize).fill(
      {
        terrain: tileSelector(),
        unit: 0,
        building: 0,
      },
      0
    ),
    0
  )
