import { IMap } from 'configs/gameConfig'
import { TILE_INDEX } from 'configs/tileConfig'

const tileSelector = () => {
  const ran = Math.round(Math.random() * 25)
  return TILE_INDEX[ran >= 9 ? 0 : ran]
}

export const createInitialMapGen = async (mapSize: number): Promise<IMap[][]> =>
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
