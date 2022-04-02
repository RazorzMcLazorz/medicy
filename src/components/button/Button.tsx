import { ButtonProps } from './types'
import './styles.css'

const Button = ({ onClick, children }: ButtonProps) => (
  <button onClick={onClick} className='button'>
    {children}
  </button>
)

export default Button
