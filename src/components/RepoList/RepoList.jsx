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
import RepoItem from "../RepoItem/RepoItem.jsx";
import styles from './RepoList.scss';

const RepoList = ({ userRepos }) => {

  const repos = userRepos.map((repo, index) => (
     <RepoItem repoInfo={repo} key={index}/>
  ));
  
  return (
    <ul id="repo-list" className={styles.repoList}>
    {repos}
    </ul>
  );
}
 
export default RepoList;