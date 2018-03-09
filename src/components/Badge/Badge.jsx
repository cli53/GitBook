/*
 * File: Badge.jsx
 * Project: part-two
 * File Created: Tuesday, 6th March 2018 1:11:41 am
 * Author: Chris Li
 * -----
 * Last Modified: Wednesday, 7th March 2018 11:23:34 am
 * Modified By: Chris Li
 * -----
 * Copyright 2018 - 2018 cli53, Personal
 */


import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './Badge.scss';

const Badge = ({ userBadgeInfo, showRepos }) => {
  // User Profile Image, Name, Number of Followers, Number of people Following
  const { avatar_url, 
          name, 
          followers, 
          following, 
          html_url: url, 
          location, 
          bio } = userBadgeInfo;

  return (
        <div>
        <Paper className={styles.paper}  zDepth={1}>
        <a href={url} target="_blank">
        <img src={avatar_url} className={styles.img} alt="paper card repos"/>
        </a>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.bio}>{location}</p>
        <p className={styles.bio}>{bio}</p>
        <p>{`Followers: ${followers}`}</p>
        <p>{`Following: ${following}`}</p>
        <RaisedButton
          target="_blank"
          label="Repos"
          secondary={true}
          onClick={showRepos}
        />
        </Paper>
        </div>
  )
}
 
export default Badge;