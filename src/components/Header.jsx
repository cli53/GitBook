import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MenuList from './MenuList.jsx';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const Header = ({handleUserName, userName, fetchUserInfo, userPic, handleDrawer, openDrawer, history}) => {
  const style = {
    header: {
      backgroundColor: '#00B4CE',
    },
    title: {
      color:'#fff',
    },
    textField: {
      marginBottom: '10px',
    },
    underline: {
      color: '#fff',
    },
    floatingLabel: {
      color: '#fff',
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
    <IconButton style={style.menu} tooltip="History" onClick={handleDrawer}>
    <Menu/>
    <Drawer open={openDrawer} width={200} docked={false}>
      <MenuList history={history} />
    </Drawer>
    </IconButton>
    <ToolbarTitle text="GitBook" style={style.title}/>
    </ToolbarGroup>
    <ToolbarGroup>
    <Avatar src={userPic} style={style.avatar}/>
    <form onSubmit={fetchUserInfo}>
      <TextField
      hintText="mjackson"
      floatingLabelText="Enter Github Username"
      style={style.textField}
      underlineStyle={style.underline}
      floatingLabelStyle={style.floatingLabel}
      value={userName} 
      onChange={handleUserName}
      >
      </TextField>
      </form>
    </ToolbarGroup>
    </Toolbar>
  )
}
 
export default Header;