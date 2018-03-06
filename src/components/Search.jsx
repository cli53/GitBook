import React from 'react';

const Search = ({ fetchUserInfo, handleUserName }) => {
  return  (
  <form onSubmit={fetchUserInfo}>
    <input type="text" onChange={handleUserName}/>
    <button type="submit"></button>
  </form> 
  ) 
};
 
export default Search;