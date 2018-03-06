import React, { Component } from 'react';
import Badge from './components/Badge.jsx';
import RepoList from './components/RepoList.jsx';
import Search from './components/Search.jsx';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      userRepos: [],
      userBadgeInfo: {},
      showRepos: false,
    }
  }
    handleUserName = (event) => {
    this.setState({userName: event.target.value})
  }

  showRepos = () => {
    this.setState({showRepos: !this.state.showRepos});
  }

  fetchUserInfo = async (event) => {
    event.preventDefault();
    const userName = this.state.userName 
      let userBadgeInfo = await (await(fetch(`https://api.github.com/users/${userName}`))).json();
      let userRepos = await (await(fetch(`https://api.github.com/users/${userName}/repos`))).json();
      this.setState({ userBadgeInfo, userRepos });
  }

  render() {
    const userName = this.state.userName;
    const userBadgeInfo = this.state.userBadgeInfo;
    const userRepos = this.state.userRepos;
    const showBadge = Object.keys(userBadgeInfo).length;
    const showRepos = this.state.showRepos;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Search handleUserName={this.handleUserName} fetchUserInfo={this.fetchUserInfo} userName={userName} />
        {showBadge > 0 && <Badge showRepos={this.showRepos} userBadgeInfo={userBadgeInfo} />}
        {showRepos && <RepoList userRepos={userRepos} />}
      </div>
    );
  }
}

export default App;


// 2. Create a Search Component for the Github Username

// 3. On Search, make an api call to Github API to fetch the information about the user
// API URL: https://api.github.com/users/{username}

// 4. Create a component User Badge which presents the following about the user
// User Profile Image, Name, Number of Followers, Number of people Following

// 5. Make an api call to get all the repositories for the user 
// API URL: https://api.github.com/users/{username}/repos

// 6. Create a Repo List component which will present cards having Repository details. 
// Following details should be part of each repository card
// Name, Description, Git URL, Number of Stars, Forks Count, Number of Open Issues, Repository Size

// 7. Style the page to the best of the ability to make the UI look clean and presentable

// 8. Click Update from the top Menu and save the link
