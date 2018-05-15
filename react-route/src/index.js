import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import About from './About';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

ReactDOM.render(<Router>
  <div>
      <ul>
          <li> <Link to="/">Home</Link> </li>
      <li> <Link to="/About">About</Link>  </li>
      </ul>
    <hr />

  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  </div>
  </Router> , document.getElementById('root'));
registerServiceWorker();
