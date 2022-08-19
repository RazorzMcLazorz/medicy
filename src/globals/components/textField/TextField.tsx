import { TextFieldProps } from './types'
import './styles.css'

const TextField = ({ id, name, label, onChange, value }: TextFieldProps) => (
  <>
    {label && <label htmlFor={name}>{label}</label>}
    <input
      type='type'
      id={id}
      name={name}
      className='textField'
      onChange={(event) => onChange && onChange(event.target.value)}
      value={value}
    />
  </>
)

export default TextField
