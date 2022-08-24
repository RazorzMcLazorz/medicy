import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainPageBackground from 'globals/mainPageBackground/mainPageBackground'
import Button from 'globals/components/button/Button'
import {
  DEFAULT_MAP_SIZE,
  MAP_SIZES,
  DEFAULT_DIFFICULTY,
  DIFFICULTIES,
  DEFAULT_HAS_TIME_LIMIT,
  HAS_TIME_LIMITS,
} from 'configs/createGameConfig'
import { capitalizeFirstLetter } from 'globals/helperFunctions/Utils/utils'
import URL from 'globals/helperFunctions/URL/URL'
import './styles.css'

const cgsButton = (funct: () => void, type: string, state: string) => (
  <Button onClick={funct} selected={state === type} slim>
    {capitalizeFirstLetter(type)}
  </Button>
)

const CreateGame = ({ client }: { client: any }) => {
  const navigate = useNavigate()
  const [mapSize, setMapSize] = useState(DEFAULT_MAP_SIZE)
  const [difficulty, setDifficulty] = useState(DEFAULT_DIFFICULTY)
  const [timeLimit, setTimeLimit] = useState(DEFAULT_HAS_TIME_LIMIT)

  return (
    <div>
      <MainPageBackground />
      <div>
        <div className='createTitle'>Create Game</div>
        <div className='createReason'>
          Generate a map of your choice to play on, the size can determine the time you have
        </div>
        <div className='createOptions'>
          <div className='createOptionsRow1'>
            <h4>Map Size: {capitalizeFirstLetter(mapSize)}</h4>
            <div>{MAP_SIZES.map((size) => cgsButton(() => setMapSize(size), size, mapSize))}</div>
            <h4>Difficulty: {capitalizeFirstLetter(difficulty)}</h4>
            <div>
              {DIFFICULTIES.map((diff) => cgsButton(() => setDifficulty(diff), diff, difficulty))}
            </div>
            <h4>Time Limit: {capitalizeFirstLetter(timeLimit)}</h4>
            {HAS_TIME_LIMITS.map((hasTimeOption) =>
              cgsButton(() => setTimeLimit(hasTimeOption), hasTimeOption, timeLimit)
            )}
          </div>
        </div>
        <div className='createSave'>
          <Button onClick={() => navigate(URL.root, { replace: true })}>Cancel</Button>
          <Button onClick={() => navigate(URL.root, { replace: true })}>Create</Button>
        </div>
      </div>
    </div>
  )
}

export default CreateGame