
import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import home from './component/home/home.js';
 import Registration from './component/Registration/Registration.js';

class App extends Component {
  render() {
    return ( 
      <Router>

<Route path="/" exact component={home}/>
 <Route path="/Registration" exact component={Registration}/>
    </Router>
   
  );
}
}

export default App;
