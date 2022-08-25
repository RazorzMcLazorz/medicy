enum MAP_SIZE {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

interface IConfig {
  DEFAULT_MAP_SIZE: MAP_SIZE
  MAP_SIZES: MAP_SIZE[]
  MAP_EXACT_SIZE: {
    [MAP_SIZE.small]: number
    [MAP_SIZE.medium]: number
    [MAP_SIZE.large]: number
  }
  DEFAULT_DIFFICULTY: string
  DIFFICULTIES: string[]
  DEFAULT_HAS_TIME_LIMIT: string
  HAS_TIME_LIMITS: string[]
}

const CONFIG: IConfig = {
  // Sets Default Map Size
  DEFAULT_MAP_SIZE: MAP_SIZE.small,

  // Sets all Map sizes allowed
  MAP_SIZES: [MAP_SIZE.small, MAP_SIZE.medium, MAP_SIZE.large],

  // Sets the exact size of each map size allowed
  MAP_EXACT_SIZE: {
    small: 15,
    medium: 15,
    large: 15,
  },

  // Sets Default Difficulty Size
  DEFAULT_DIFFICULTY: 'normal',

  // Sets all Difficulty sizes allowed
  DIFFICULTIES: ['easy', 'normal', 'hard'],

  // Sets Default Has Time Limit
  DEFAULT_HAS_TIME_LIMIT: 'yes',

  // Sets the options for Has Time Limit
  HAS_TIME_LIMITS: ['yes', 'no'],
}

export default CONFIG
