import IconButtonMUI from '@mui/material/IconButton'
import Icon from 'globals/icons/Icon'
import { IconButtonProps } from './types'

const IconButton = ({ onClick, icon, disabled }: IconButtonProps) => (
  <IconButtonMUI onClick={onClick} disabled={disabled}>
    <Icon icon={icon} />
  </IconButtonMUI>
)

export default IconButton
