import useAppData from 'hooks/AppDataHook/useAppData'
import { TILE_IMAGE, TILE_ALT } from 'configs/tileConfig'
import './styles.css'

const GameMap = () => {
  const [{ game }] = useAppData()

  console.log(game)

  return (
    <div className='map'>
      {game.gameMap.map((mapRow, rowIndex) => (
        <div key={rowIndex + 'MapRow'}>
          {mapRow.map((tile, tileIndex) => (
            <div key={rowIndex + tileIndex + 'Tile'}>
              <img src={TILE_IMAGE[tile.baseTile]} alt={TILE_ALT[tile.baseTile]}></img>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default GameMap
