import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
      <h1>This is the About section.</h1>
        <ul>
          <li><Link to = "/about/200">Routing</Link></li>
          </ul>
          {this.props.children}
      </div>
    );
  }
}

export default About;
