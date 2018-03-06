import React from 'react';
import RepoItem from "./RepoItem";

const RepoList = ({ userRepos }) => {

  const repos = userRepos.map((repo, index) => (
     <RepoItem repoInfo={repo} key={index}/>
  ));
  
  return (
    <ul id="repo-list">
    {repos}
    </ul>
  )
}
 
export default RepoList;