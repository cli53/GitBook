import React from 'react'
import Drawers from 'material-ui/Drawer';
import MenuList from './MenuList.jsx';
const Drawer = ({ openDrawer, history }) => (
    <Drawers open={openDrawer} width={200} docked={false}>
    <MenuList history={history} />
    </Drawers>
  )

 
export default Drawer;