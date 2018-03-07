import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
const Badge = ({ userBadgeInfo, showRepos }) => {
  // User Profile Image, Name, Number of Followers, Number of people Following
  const {avatar_url, name, followers, following, url, location, bio} = userBadgeInfo;

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
  //  button: {
  //    display: 'absolute',
  //    marginTop: 15,
  //  },
   bio: {
     color:"#757575",
   }
  };


  return (
        <div>
        <Paper style={style.paper} zDepth={1}>
        <a href={url}>
        <img src={avatar_url} style={style.img}/>
        </a>
        <h1>{name}</h1>
        <p style={style.bio}>{location}</p>
        <p style={style.bio}>{bio}</p>
        <p>{`Followers: ${followers}`}</p>
        <p>{`Following: ${following}`}</p>
        {/* <button onClick={showRepos}>Fetch Repos</button> */}
        <RaisedButton
          target="_blank"
          label="Github Link"
          secondary={true}
          // style={style.button}
          icon={<FontIcon className="muidocs-icon-custom-github" />}
          onClick={showRepos}
        />
        </Paper>
        </div>
  )
}
 
export default Badge;