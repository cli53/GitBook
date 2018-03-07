/*
 * File: RepoList.jsx
 * Project: part-two
 * File Created: Tuesday, 6th March 2018 1:19:05 am
 * Author: Chris Li
 * -----
 * Last Modified: Wednesday, 7th March 2018 11:24:17 am
 * Modified By: Chris Li
 * -----
 * Copyright 2018 - 2018 cli53, Personal
 */

import React from 'react';
import RepoItem from "./RepoItem";

const RepoList = ({ userRepos }) => {
  const style ={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };
  const repos = userRepos.map((repo, index) => (
     <RepoItem repoInfo={repo} key={index}/>
  ));
  
  return (
    <ul id="repo-list" style={style}>
    {repos}
    </ul>
  );
}
 
export default RepoList;