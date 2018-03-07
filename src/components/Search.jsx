/*
 * File: Search.jsx
 * Project: part-two
 * File Created: Tuesday, 6th March 2018 1:10:59 am
 * Author: Chris Li
 * -----
 * Last Modified: Wednesday, 7th March 2018 11:23:22 am
 * Modified By: Chris Li
 * -----
 * Copyright 2018 - 2018 cli53, Personal
 */

import React from 'react';
import TextField from 'material-ui/TextField';

const Search = ({ fetchUserInfo, handleUserName, userName }) => {
  const style ={
    textField: {
      marginBottom: '10px',
    },
    underline: {
      color: '#fff',
    },
    floatingLabel: {
      color: '#fff',
    },
  };
  return  (
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
  ) 
};
 
export default Search;