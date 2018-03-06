import React from 'react';

const Search = ({ fetchUserInfo, handleUserName, userName }) => {
  return  (
  <form onSubmit={fetchUserInfo}>
    <input type="text" value={userName} onChange={handleUserName}/>
    <button type="submit"></button>
  </form> 
  ) 
};
 
export default Search;