import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const Header = ({handleUserName, userName, fetchUserInfo, userPic}) => {
console.log(userPic)
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
    }
  }
 return ( 
    <Toolbar style={style.header}>
    <ToolbarGroup firstChild={true}>
    <IconButton><Menu /></IconButton>
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