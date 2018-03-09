/*
 * File: MenuList.jsx
 * Project: part-two
 * File Created: Wednesday, 7th March 2018 2:57:15 am
 * Author: Chris Li
 * -----
 * Last Modified: Wednesday, 7th March 2018 11:24:02 am
 * Modified By: Chris Li
 * -----
 * Copyright 2018 - 2018 cli53, Personal
 */


import React from 'react';
import MenuItem from 'material-ui/MenuItem';


const MenuList = ({ history }) => {
   const listItem = history.map((user, i) => {
    return <MenuItem checked={true} key={i}>{user}</MenuItem>
  });
  return listItem;
}
 
export default MenuList;