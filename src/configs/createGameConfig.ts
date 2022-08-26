enum MAP_SIZE {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

enum DIFFICULTY {
  easy = 'easy',
  normal = 'normal',
  hard = 'hard',
}

interface IConfig {
  DEFAULT_MAP_SIZE: MAP_SIZE
  MAP_SIZES: MAP_SIZE[]
  MAP_EXACT_SIZE: {
    [MAP_SIZE.small]: number
    [MAP_SIZE.medium]: number
    [MAP_SIZE.large]: number
  }
  DEFAULT_DIFFICULTY: DIFFICULTY
  DIFFICULTIES: DIFFICULTY[]
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
    medium: 30,
    large: 45,
  },

  // Sets Default Difficulty Size
  DEFAULT_DIFFICULTY: DIFFICULTY.normal,

  // Sets all Difficulty sizes allowed
  DIFFICULTIES: [DIFFICULTY.easy, DIFFICULTY.normal, DIFFICULTY.hard],

  // Sets Default Has Time Limit
  DEFAULT_HAS_TIME_LIMIT: 'yes',

  // Sets the options for Has Time Limit
  HAS_TIME_LIMITS: ['yes', 'no'],
}

export default CONFIG
