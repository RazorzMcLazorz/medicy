export enum TILE {
  plains = 'plains',
}

export const TILE_INDEX = [TILE.plains]

export const TILE_IMAGE = {
  [TILE.plains]: './assets/plainsv1.png',
}

export const TILE_ALT = {
  [TILE.plains]: 'This is the Plains Biome',
}

export const TILE_COUNT = TILE_INDEX.length
