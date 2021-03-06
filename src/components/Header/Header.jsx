/*
 * File: Header.jsx
 * Project: part-two
 * File Created: Tuesday, 6th March 2018 3:29:28 pm
 * Author: Chris Li
 * -----
 * Last Modified: Wednesday, 7th March 2018 11:23:10 am
 * Modified By: Chris Li
 * -----
 * Copyright 2018 - 2018 cli53, Personal
 */
/*
 * File: Header.jsx
 * Project: part-two
 * File Created: Tuesday, 6th March 2018 3:29:28 pm
 * Author: Chris Li
 * -----
 * Last Modified: Friday, 9th March 2018 12:17:20 am
 * Modified By: Chris Li
 * -----
 * Copyright 2018 - 2018 cli53, Personal
 */


import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Avatar from 'material-ui/Avatar';
import Drawer from '../Drawer/Drawer.jsx';
import Search from '../Search/Search.jsx';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import styles from './Header.scss';

const Header = ({handleUserName, userName, fetchUserInfo, userPic, handleDrawer, openDrawer, history}) => {

 return ( 
   
    <Toolbar className={styles.header}>
    <ToolbarGroup firstChild={true}>
    <IconButton 
    className={styles.menu} 
    iconStyle={{color: 'white'}}
    tooltip="History"
    onClick={handleDrawer}>
    <Menu/>
    <Drawer 
    history={history} 
    openDrawer={openDrawer}
    />
    </IconButton>
    <ToolbarTitle text="GitBook" className={styles.title}/>
    </ToolbarGroup>
    <ToolbarGroup>
    <Avatar src={userPic} className={styles.avatar}/>
    <Search 
    fetchUserInfo={fetchUserInfo} 
    handleUserName={handleUserName} 
    userName={userName}
    />
    </ToolbarGroup>
    </Toolbar>
  );
}
 
export default Header;