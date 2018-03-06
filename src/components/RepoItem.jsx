import React from 'react';

// Name, Description, Git URL, Number of Stars, Forks Count, Number of Open Issues, Repository Size
const RepoItem = ({ repoInfo }) => {
  const {name, description, git_url: gitUrl, forks, open_issues: issues, size: RepoSize } = repoInfo
  console.log('REPOINFO', repoInfo)
  return (
    <article>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{gitUrl}</p>
      <p>{forks}</p>
      <p>{issues}</p>
      <p>{RepoSize}</p>
    </article>
  ) 
}
 
export default RepoItem;