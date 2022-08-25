import CONFIG from './createGameConfig'

export interface IDefaultGameConfig {
  mapSize: number
}

export const DEFAULT_GAME_CONFIG: IDefaultGameConfig = {
  mapSize: CONFIG.MAP_EXACT_SIZE[CONFIG.DEFAULT_MAP_SIZE],
}
