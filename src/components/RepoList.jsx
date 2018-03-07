import React from 'react';
import RepoItem from "./RepoItem";

const RepoList = ({ userRepos }) => {
  const style ={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const repos = userRepos.map((repo, index) => (
     <RepoItem repoInfo={repo} key={index}/>
  ));
  
  return (
    <ul id="repo-list" style={style}>
    {repos}
    </ul>
  )
}
 
export default RepoList;