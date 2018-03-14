/*
 * File: RepoItem.jsx
 * Project: part-two
 * File Created: Tuesday, 6th March 2018 2:18:57 pm
 * Author: Chris Li
 * -----
 * Last Modified: Wednesday, 7th March 2018 11:24:08 am
 * Modified By: Chris Li
 * -----
 * Copyright 2018 - 2018 cli53, Personal
 */
import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Stars from 'material-ui/svg-icons/action/stars';
import { yellow500 } from 'material-ui/styles/colors';
import Flip from 'react-reveal/Flip';
import styles from './RepoItem.scss';
// Name, Description, Git URL, Number of Stars, Forks Count, Number of Open Issues, Repository Size
const RepoItem = ({ repoInfo }) => {
  const { name, 
          description, 
          html_url: gitUrl, 
          forks, 
          open_issues: issues, 
          size: RepoSize, 
          stargazers_count: stars 
        } = repoInfo;

    const inlineStyle ={
      title: {
        marginLeft: 45,
        fontSize: 20,
      },
      text: {
        fontSize: 18,
      }
    };
    
  return (
    <Flip top>
    <Card id="card" className={styles.card}>
      <CardHeader
      title={name}
      titleStyle={inlineStyle.title}
      subtitle={description}
      subtitleStyle={inlineStyle.title}
      textStyle={inlineStyle.text}
      actAsExpander={true}
      showExpandableButton={true}
      />
      <CardActions>
        <FlatButton 
        label={`Github URL`} 
        primary={true} onClick={()=> window.open(`${gitUrl}`, "_blank")}
        />
        <IconButton 
        tooltip={`${stars}`} 
        tooltipPosition="top-right">
          <Stars 
          color={yellow500} 
          />
        </IconButton>
      </CardActions>
      <CardText expandable={true}>
      {`Forks: ${forks} | Size: ${RepoSize}kb | issues: ${issues}`}
    </CardText>
    </Card>
    </Flip>
  ) 
}
 
export default RepoItem;