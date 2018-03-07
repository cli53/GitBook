import React, { Component } from 'react';
import Header from './components/Header.jsx';
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
    console.log(this.state.userName)
  }

  showRepos = () => {
    this.setState({showRepos: !this.state.showRepos});
  }

  fetchUserInfo = async (event) => {
    event.preventDefault();
    const userName = this.state.userName 
      let userBadgeInfo = await (await(fetch(`https://api.github.com/users/${userName}`))).json();
      let userRepos = await (await(fetch(`https://api.github.com/users/${userName}/repos`))).json();
      console.log(userBadgeInfo)
      this.setState({ userBadgeInfo, userRepos });
  }

  handleGitHubUrl = (url) => {
    return window.location = url;
  }

  render() {
    const userName = this.state.userName;
    const userBadgeInfo = this.state.userBadgeInfo;
    const userPic = this.state.userBadgeInfo.avatar_url;
    const userRepos = this.state.userRepos;
    const showBadge = Object.keys(userBadgeInfo).length;
    const showRepos = this.state.showRepos;
    return (
      <div className="App">
        <Header handleUserName={this.handleUserName} fetchUserInfo={this.fetchUserInfo} userName={userName} userPic={userPic}/>
        {/* <Search handleUserName={this.handleUserName} fetchUserInfo={this.fetchUserInfo} userName={userName} /> */}
        {showBadge > 0 && <Badge showRepos={this.showRepos} userBadgeInfo={userBadgeInfo} />}
        {showRepos && <RepoList userRepos={userRepos} />}
      </div>
    );
  }
}

export default App;

