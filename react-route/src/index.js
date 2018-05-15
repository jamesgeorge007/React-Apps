import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import About from './About';
import Routing from './Routing';
import NoMatch from './NoMatch';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

ReactDOM.render(<Router>
  <div>
      <ul>
          <li> <Link to = "/">Home</Link> </li>
          <li> <Link to = "/about">About</Link> </li>
      </ul>
    <hr />

  <Route exact path = "/" component = {Home}></Route>
  <Route path = "/about" component = {About}>
    <Route path ="/about/:id" component = {Routing} />
  </Route>
  <Route path = "*" component = {NoMatch}></Route>
  </div>
  </Router> , document.getElementById('root'));
registerServiceWorker();
