import { IMap } from 'configs/gameConfig'
import { TILE_INDEX, TILE_COUNT } from 'configs/tileConfig'

const tileSelector = () => {
  const ran = Math.round(Math.random() * TILE_COUNT)
  return TILE_INDEX[ran]
}

export const createInitialMapGen = (mapSize: number): IMap[][] =>
  new Array(mapSize).fill(
    new Array(mapSize).fill(
      {
        baseTile: tileSelector(),
        unit: 0,
        building: 0,
      },
      0
    ),
    0
  )
