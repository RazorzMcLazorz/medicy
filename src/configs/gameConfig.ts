import CONFIG, { DIFFICULTY, TIME_LIMIT } from './createGameConfig'
import { TILE } from './tileConfig'

export interface IMap {
  // This is the default tile before a user builds on the tile it self
  baseTile: TILE
  unit: string
  building: string
}

export interface IDefaultGameConfig {
  mapSize: number
  difficulty: DIFFICULTY
  timeLimit: TIME_LIMIT
  map: IMap[][]
}

export const DEFAULT_GAME_CONFIG: IDefaultGameConfig = {
  mapSize: CONFIG.MAP_EXACT_SIZE[CONFIG.DEFAULT_MAP_SIZE],
  difficulty: CONFIG.DEFAULT_DIFFICULTY,
  timeLimit: CONFIG.DEFAULT_HAS_TIME_LIMIT,
  // This is the map the user will use all the time
  map: [],
}
