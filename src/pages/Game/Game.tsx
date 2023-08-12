import GameMap from './GameMap/GameMap'
import { Stage, Container, Sprite, Text } from '@pixi/react'

const Game = () => {
  return (
    <Stage color='blue'>
      <Sprite image='./assets/mainMenuBackGround.jpg' x={400} y={270} anchor={{ x: 0.5, y: 0.5 }} />

      <Container x={400} y={330}>
        <Text text='Hello World' anchor={{ x: 0.5, y: 0.5 }} />
      </Container>
    </Stage>
  )
}

export default Game
