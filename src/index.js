/*
 * File: index.js
 * Project: part-two
 * File Created: Tuesday, 6th March 2018 12:59:13 am
 * Author: Chris Li
 * -----
 * Last Modified: Wednesday, 7th March 2018 11:24:49 am
 * Modified By: Chris Li
 * -----
 * Copyright 2018 - 2018 cli53, Personal
 */


import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Application from './App/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Includes a service worker so that your app loads from local cache on future 
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  // Inject material theme into  application context
  <MuiThemeProvider>
      <Application/>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
