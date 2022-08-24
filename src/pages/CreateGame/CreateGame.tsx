import React, { useEffect, useState } from 'react'
import MainPageBackground from 'globals/mainPageBackground/mainPageBackground'
import './styles.css'

const cgsButton = (
  funct: React.MouseEventHandler<HTMLDivElement> | undefined,
  type: {} | null | undefined,
  state: string
) => (
  <div className={state === type ? 'cgsButtonSelected' : 'cgsButton'} onClick={funct}>
    {type}
  </div>
)

const CreateGame = ({ client }: { client: any }) => {
  const [mapSize, setMapSize] = useState('small')
  const [difficulty, setDifficulty] = useState('small')
  const [timeLimit, setTimeLimit] = useState('small')

  return (
    <div>
      <MainPageBackground />
      <div>
        <div className='createTitle'>Create Game</div>
        <div className='createReason'>Reason</div>
        <div className='createOptions'>
          <div className='createOptionsRow1'>
            <div>Map Size: {mapSize}</div>
            <div>
              {cgsButton(() => setMapSize('Small'), 'Small', mapSize)}
              {cgsButton(() => setMapSize('Medium'), 'Medium', mapSize)}
              {cgsButton(() => setMapSize('Large'), 'Large', mapSize)}
            </div>
            <div>Difficulty: {difficulty}</div>
            <div>
              {cgsButton(() => setDifficulty('Easy'), 'Easy', difficulty)}
              {cgsButton(() => setDifficulty('Normal'), 'Normal', difficulty)}
              {cgsButton(() => setDifficulty('Hard'), 'Hard', difficulty)}
            </div>
            <div>Time Limit: {timeLimit}</div>
            {cgsButton(() => setTimeLimit('No'), 'No', timeLimit)}
            {cgsButton(() => setTimeLimit('Yes'), 'Yes', timeLimit)}
            <input className='cgsText' />
          </div>
        </div>
        <div className='createSave'>
          <a href='/' className='button'>
            Cancel
          </a>
          <a className='button' onClick={() => console.log()}>
            Create
          </a>
        </div>
      </div>
    </div>
  )
}

export default CreateGame
