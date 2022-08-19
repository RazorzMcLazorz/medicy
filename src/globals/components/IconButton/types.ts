import { iconTypes } from 'globals/icons/icons'

export interface IconButtonProps {
  disabled?: boolean
  onClick?: () => void
  icon: iconTypes
}
