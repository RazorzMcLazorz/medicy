import { IMap } from 'configs/gameConfig'
import { TILE_INDEX, TILE_COUNT } from 'configs/tileConfig'

const tileSelector = () => {
  const ran = Math.round(Math.random() * TILE_COUNT)
  return TILE_INDEX[ran]
}

export const createInitialMapGen = (mapSize: number): IMap[][] => {
  let baseMapSetup = new Array(mapSize).fill(
    new Array(mapSize).fill(
      {
        xCoord: 0,
        yCoord: 0,
        baseTile: TILE_INDEX[0],
        unit: 0,
        building: 0,
      },
      0
    ),
    0
  )
  return baseMapSetup.map((mapRow: IMap[], xCoord: number) =>
    mapRow.map((tile: IMap, yCoord: number) => ({
      ...tile,
      xCoord,
      yCoord,
      baseTile: tileSelector(),
    }))
  )
}
