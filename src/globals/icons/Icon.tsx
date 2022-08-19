import React from 'react'
import icons, { iconTypes } from './icons'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

interface IIconProps extends SvgIconProps {
  icon: iconTypes
  variant?: 'button'
  viewSize?: string
  fontSize?: 'small' | 'inherit'
}

/** Icon limited to the rovitracker standard set */
const Icon = ({ icon, variant, viewSize, fontSize, ...props }: IIconProps) => {
  const C = icons[icon]
  return (
    <SvgIcon
      fontSize={fontSize}
      viewBox={viewSize && viewSize}
      style={{
        width: viewSize && '24px',
        height: viewSize && '24px',
        marginRight: variant === 'button' ? 8 : undefined,
      }}>
      <C {...props} />
    </SvgIcon>
  )
}

export default Icon
