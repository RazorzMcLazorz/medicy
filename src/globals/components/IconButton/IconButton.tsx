import IconButtonMUI from '@mui/material/IconButton'
import { IconButtonProps } from './types'

const IconButton = ({ onClick, children, disabled }: IconButtonProps) => (
  <IconButtonMUI onClick={onClick} disabled={disabled}>
    {children}
  </IconButtonMUI>
)

export default IconButton
