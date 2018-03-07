import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Avatar from 'material-ui/Avatar';
import Drawer from './Drawer.jsx';

import Search from './Search.jsx';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

const Header = ({handleUserName, userName, fetchUserInfo, userPic, handleDrawer, openDrawer, history}) => {
  const style = {
    header: {
      backgroundColor: '#00B4CE',
    },
    title: {
      color:'#fff',
    },
    button: {
      backgroundColor: '#8BC34A',
    },
    avatar: {
      marginRight: '10px',
    },
    menu: {
      color: '#fff',
    }
  }
 return ( 
    <Toolbar style={style.header}>
    <ToolbarGroup firstChild={true}>
    <IconButton 
    style={style.menu} 
    tooltip="History"
    onClick={handleDrawer}>
    <Menu/>
    <Drawer 
    history={history} 
    openDrawer={openDrawer}
    />
    </IconButton>
    <ToolbarTitle text="GitBook" style={style.title}/>
    </ToolbarGroup>
    <ToolbarGroup>
    <Avatar src={userPic} style={style.avatar}/>
    <Search 
    fetchUserInfo={fetchUserInfo} 
    handleUserName={handleUserName} 
    userName={userName}
    />
    </ToolbarGroup>
    </Toolbar>
  )
}
 
export default Header;