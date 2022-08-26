import CONFIG, { DIFFICULTY, TIME_LIMIT } from './createGameConfig'

export interface IDefaultGameConfig {
  mapSize: number
  difficulty: DIFFICULTY
  timeLimit: TIME_LIMIT
}

export const DEFAULT_GAME_CONFIG: IDefaultGameConfig = {
  mapSize: CONFIG.MAP_EXACT_SIZE[CONFIG.DEFAULT_MAP_SIZE],
  difficulty: CONFIG.DEFAULT_DIFFICULTY,
  timeLimit: CONFIG.DEFAULT_HAS_TIME_LIMIT,
}
