import CONFIG, { DIFFICULTY } from './createGameConfig'

export interface IDefaultGameConfig {
  mapSize: number
  difficulty: DIFFICULTY
}

export const DEFAULT_GAME_CONFIG: IDefaultGameConfig = {
  mapSize: CONFIG.MAP_EXACT_SIZE[CONFIG.DEFAULT_MAP_SIZE],
  difficulty: CONFIG.DEFAULT_DIFFICULTY,
}
