import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
// Name, Description, Git URL, Number of Stars, Forks Count, Number of Open Issues, Repository Size
const RepoItem = ({ repoInfo }) => {
  const {name, description, html_url: gitUrl, forks, open_issues: issues, size: RepoSize, stargazers_count
    : stars } = repoInfo
    const style ={
      card: {
        width: 500,
        margin: 20,
      },
      title: {
        marginLeft: 45,
        fontSize: 20
      },
      text: {
        fontSize: 18,
      }
    }
  return (
    <Card id="card" style={style.card}>
      <CardHeader
      title={name}
      style={style.title}
      titleStyle={style.title}
      subtitle={description}
      subtitleStyle={style.title}
      textStyle={style.text}
      actAsExpander={true}
      showExpandableButton={true}
      />
      <CardActions>
        <FlatButton label={`Github URL`} primary={true} onClick={()=> window.open(`${gitUrl}`, "_blank")}/>
      </CardActions>
      <CardText expandable={true}>
      {`Forks: ${forks} | Size: ${RepoSize}kb | issues: ${issues}`}
    </CardText>
    </Card>
  ) 
}
 
export default RepoItem;