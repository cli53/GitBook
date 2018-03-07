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