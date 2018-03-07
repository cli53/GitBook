import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
const Badge = ({ userBadgeInfo, showRepos }) => {
  // User Profile Image, Name, Number of Followers, Number of people Following
  const {avatar_url, name, followers, following, url, location, bio} = userBadgeInfo;
  console.log(url)
  const style = {
   paper:{ 
    height: 300,
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
   button: {
     margin: 16,
   }
  };
  const card = () => ( 
  <div>
  <a href={url} target="_blank">
  <img src={avatar_url} alt="Profile Picture"/>
  </a>
  <h1>{name}</h1>
  <p>{`Followers: ${followers}`}</p>
  <p>{`Following: ${following}`}</p>
  <RaisedButton
      href="https://github.com/callemall/material-ui"
      target="_blank"
      label="Github Link"
      secondary={true}
      style={style.button}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
      onClick={showRepos}
    />
  </div>
  )
  

  return (
        <div>
        <Paper style={style.paper} zDepth={1}>
        <img src={avatar_url} style={style.img}/>
        <h1>{name}</h1>
        <p>{`Followers: ${followers}`}</p>
        <p>{`Following: ${following}`}</p>
        {/* <button onClick={showRepos}>Fetch Repos</button> */}
        <RaisedButton
          target="_blank"
          label="Github Link"
          secondary={true}
          style={style.button}
          icon={<FontIcon className="muidocs-icon-custom-github" />}
          onClick={showRepos}
        />
        </Paper>
        </div>
  )
}
 
export default Badge;