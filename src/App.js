import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';
import { Button } from 'element-react';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import zhaoa from './zhaoa';
import zhaob from './zhaob';
import zhaoc from './zhaoc';
import 'element-theme-default';

class App extends Component {
  render() {  
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
          <Router>
              <div calssName="content">
                  <Route exact path="/" component={zhaoa} />
                  <Route  path="/zhaob" component={zhaob} />
                  <Route  path="/zhaoc" component={zhaoc} />
              </div>
          </Router>  
          {/* <Button type="primary">Hello</Button> */}
      </div>
    );
  }
}

export default App;
