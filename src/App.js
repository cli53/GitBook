import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Badge from './components/Badge.jsx';
import RepoList from './components/RepoList.jsx';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      userRepos: [],
      userBadgeInfo: {},
      history: [],
      showRepos: false,
      openDrawer: false,
    }
  }

    handleUserName = (event) => this.setState({userName: event.target.value});

  handleDrawer = () => this.setState({openDrawer: !this.state.openDrawer})

  showRepos = () => this.setState({showRepos: !this.state.showRepos});
  

  fetchUserInfo = async (event) => {
    event.preventDefault();
    const userName = this.state.userName 
      let userBadgeInfo = await (await(fetch(`https://api.github.com/users/${userName}`))).json();
      let userRepos = await (await(fetch(`https://api.github.com/users/${userName}/repos`))).json();
       console.log(userRepos)
      this.setState({ userBadgeInfo, userRepos, history: this.state.history.concat(userName) });
  }

  render() {
    const userName = this.state.userName;
    const userBadgeInfo = this.state.userBadgeInfo;
    const userPic = this.state.userBadgeInfo.avatar_url;
    const userRepos = this.state.userRepos;
    const showBadge = Object.keys(userBadgeInfo).length;
    const showRepos = this.state.showRepos;
    const openDrawer = this.state.openDrawer;
    const history = this.state.history;
    return (
      <div className="App">
        <Header history={history} handleUserName={this.handleUserName} handleDrawer={this.handleDrawer} openDrawer={openDrawer }fetchUserInfo={this.fetchUserInfo} userName={userName} userPic={userPic}/>
        {/* <Search handleUserName={this.handleUserName} fetchUserInfo={this.fetchUserInfo} userName={userName} /> */}
        {showBadge > 0 && <Badge showRepos={this.showRepos} userBadgeInfo={userBadgeInfo} />}
        {showRepos && <RepoList userRepos={userRepos} />}
      </div>
    );
  }
}

export default App;

