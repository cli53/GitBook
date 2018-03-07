import React from 'react';
import MenuItem from 'material-ui/MenuItem';


const MenuList = ({ history }) => {
   const listItem = history.map((user, i) => {
    return <MenuItem checked={true} key={i}>{user}</MenuItem>
  });
  return listItem;
}
 
export default MenuList;