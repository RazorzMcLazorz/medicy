/* eslint-disable no-useless-computed-key */
import classnames from 'classnames'
import { ButtonProps } from './types'
import './styles.css'

const Button = ({ onClick, children, disabled, selected, slim }: ButtonProps) => (
  <button
    onClick={onClick}
    className={classnames('button', { ['slimButton']: slim, ['buttonSelected']: selected })}
    disabled={disabled}>
    {children}
  </button>
)

export default Button
