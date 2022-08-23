import DrawerMUI from '@mui/material/Drawer'
import IDrawerProps from './types'

const Drawer = ({ onClose, children, isOpen }: IDrawerProps) => (
  <DrawerMUI anchor={'right'} open={isOpen} onClose={onClose}>
    {children}
  </DrawerMUI>
)

export default Drawer
