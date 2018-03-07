import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
// Name, Description, Git URL, Number of Stars, Forks Count, Number of Open Issues, Repository Size
const RepoItem = ({ repoInfo }) => {
  const {name, description, html_url: gitUrl, forks, open_issues: issues, size: RepoSize, stargazers_count
    : stars } = repoInfo
  console.log('REPOINFO', repoInfo)
  return (
    <Card>
      <CardHeader
      title={name}
      subtitle={description}
      actAsExpander={true}
      showExpandableButton={true}
      />
      <CardActions>
        <FlatButton label={`Github URL`} onClick={()=> window.open(`${gitUrl}`, "_blank")}/>
      </CardActions>
      <CardText expandable={true}>
      {`Forks: ${forks} | Size: ${RepoSize}kb`}
    </CardText>
    </Card>
    // <article>
    //   <h3>{name}</h3>
    //   <p>{description}</p>
    //   <p>{gitUrl}</p>
    //   <p>{forks}</p>
    //   <p>{issues}</p>
    //   <p>{RepoSize}</p>
    // </article>
  ) 
}
 
export default RepoItem;