export enum TILE {
  plains = 'plains',
  iron = 'iron',
  mountain = 'mountain',
  coal = 'coal',
  hill = 'hill',
  marsh = 'marsh',
  stone = 'stone',
  forest = 'forest',
  desert = 'desert',
}

export const TILE_INDEX = [
  TILE.plains,
  TILE.iron,
  TILE.mountain,
  TILE.coal,
  TILE.hill,
  TILE.marsh,
  TILE.stone,
  TILE.forest,
  TILE.desert,
]

export const TILE_IMAGE = {
  [TILE.plains]: './assets/plainsv1.png',
  [TILE.iron]: './assets/ironv1.png',
  [TILE.mountain]: './assets/mountainsv1.png',
  [TILE.coal]: './assets/coalv1.png',
  [TILE.hill]: './assets/hillsv1.png',
  [TILE.marsh]: './assets/marshv1.png',
  [TILE.stone]: './assets/stonev1.png',
  [TILE.forest]: './assets/forestv1.png',
  [TILE.desert]: './assets/desertv1.png',
}

export const TILE_ALT = {
  [TILE.plains]: 'This is the Plains Biome',
  [TILE.iron]: 'This is a Iron Resource, found in a Rocky location',
  [TILE.mountain]: 'Impassable Mountain location',
  [TILE.coal]: 'This is a Coal Resource found in a Rocky location',
  [TILE.hill]: 'This Hills location could give an advantage to units',
  [TILE.marsh]: 'The Marshes could be an issue of traversing',
  [TILE.stone]: 'The Stone location could be used to build a quarry',
  [TILE.forest]: 'Forest can be used to gather wood',
  [TILE.desert]: 'Desert can be used to gather sand',
}

export const TILE_COUNT = TILE_INDEX.length
