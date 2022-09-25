import useAppData from 'hooks/AppDataHook/useAppData'
import Tile from './Tile/Tile'
import './styles.css'

const GameMap = () => {
  const [{ game }] = useAppData()

  console.log(game)

  return (
    <div className='map'>
      {game.gameMap.map((mapRow, rowIndex) => (
        <div key={rowIndex + 'MapRow'}>
          {mapRow.map((tile, tileIndex) => (
            <Tile tile={tile} key={rowIndex + tileIndex + 'Tile'} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default GameMap
