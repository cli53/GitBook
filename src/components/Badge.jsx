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

const Badge = ({ userBadgeInfo, showRepos }) => {
  // User Profile Image, Name, Number of Followers, Number of people Following
  const { avatar_url, 
          name, 
          followers, 
          following, 
          html_url: url, 
          location, 
          bio } = userBadgeInfo;

  const style = {
   paper:{ 
    height: 400,
    width: 300,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
   },
   img: {
     marginTop: 10,
     height:100,
     width: 100,
     borderRadius: 50,
   },
   bio: {
     color:"#757575",
   }
  };

  return (
        <div>
        <Paper style={style.paper} zDepth={1}>
        <a href={url} target="_blank">
        <img src={avatar_url} style={style.img} alt="paper card repos"/>
        </a>
        <h1>{name}</h1>
        <p style={style.bio}>{location}</p>
        <p style={style.bio}>{bio}</p>
        <p>{`Followers: ${followers}`}</p>
        <p>{`Following: ${following}`}</p>
        <RaisedButton
          target="_blank"
          label="Github Link"
          secondary={true}
          onClick={showRepos}
        />
        </Paper>
        </div>
  )
}
 
export default Badge;