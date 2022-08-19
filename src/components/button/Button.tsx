import classnames from 'classnames'
import { ButtonProps } from './types'
import './styles.css'

const Button = ({ onClick, children, disabled }: ButtonProps) => (
  <button onClick={onClick} className={classnames('button')} disabled={disabled}>
    {children}
  </button>
)

export default Button
