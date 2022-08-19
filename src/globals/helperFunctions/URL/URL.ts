import Nav from '../Nav/Nav'
import { paths } from './constants'

class URL {
  static root = () => {
    Nav.path(paths.root)
  }

  static login = () => {
    Nav.path(paths.login)
  }
}

export default URL
