import useAppData from 'hooks/AppDataHook/useAppData'
import { TILE_IMAGE, TILE_ALT } from 'configs/tileConfig'
import { IMap } from 'configs/gameConfig'
import './styles.css'

const Tile = ({ tile }: { tile: IMap }) => {
  const [{ game }] = useAppData()

  console.log(game)

  return (
    <div className='tile'>
      <img
        className='tileImage'
        src={TILE_IMAGE[tile.baseTile]}
        alt={TILE_ALT[tile.baseTile]}></img>
    </div>
  )
}

export default Tile
