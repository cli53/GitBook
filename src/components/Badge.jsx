import React from 'react';
const Badge = ({ userBadgeInfo, showRepos }) => {
  // User Profile Image, Name, Number of Followers, Number of people Following
  const {avatar_url, name, followers, following} = userBadgeInfo;

  return <section>
          <img src={avatar_url}/>
          <h1>{name}</h1>
          <p>{`Followers: ${followers}`}</p>
          <p>{`Following: ${following}`}</p>
          <button onClick={showRepos}>Fetch Repos</button>
        </section>
}
 
export default Badge;