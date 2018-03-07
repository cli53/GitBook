/*
 * File: Drawer.jsx
 * Project: part-two
 * File Created: Wednesday, 7th March 2018 10:57:45 am
 * Author: Chris Li
 * -----
 * Last Modified: Wednesday, 7th March 2018 11:22:47 am
 * Modified By: Chris Li
 * -----
 * Copyright 2018 - 2018 cli53, Personal
 */


import React from 'react'
import Drawers from 'material-ui/Drawer';
import MenuList from './MenuList.jsx';

const Drawer = ({ openDrawer, history }) => (
    <Drawers open={openDrawer} width={200} docked={false}>
    <MenuList history={history} />
    </Drawers>
  );

 
export default Drawer;