import IconButtonMUI from '@mui/material/IconButton'
import icons from 'globals/icons/icons'
import Icon from 'globals/icons/Icon'
import { IconButtonProps } from './types'

const IconButton = ({ onClick, icon, disabled }: IconButtonProps) => {
  console.log(icons)
  return (
    <IconButtonMUI onClick={onClick} disabled={disabled}>
      <Icon icon={icon} />
    </IconButtonMUI>
  )
}

export default IconButton
