import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Btncomponent />
      </div>
    );
  }
}

class Btncomponent extends Component{
  constructor(props){
    super(props);

    this.state = {randomNumber: 0};
    this.btnClicked = this.btnClicked.bind(this);
  }
  btnClicked(){
    this.setState({randomNumber: Math.floor(Math.random() * 10)});
  }
  render(){
    return(
      <div>
      <button onClick={this.btnClicked}>Click Me</button>
      <Numbercomponent rand = {this.state.randomNumber} />
      </div>
    );
  }
}

class Numbercomponent extends Component{
  componentWillMount(){
    console.log("componentWillMount Invoked!");
  }

  componentDidMount(){
    console.log("componentDidMount Invoked!");
  }

  componentWillReceiveProps(newProps){
    console.log("componentWillReceiveProps Invoked!");
  }

  shouldComponentUpdate(newProps, nextState){
    console.log("shouldComponentUpdate Invoked!");
    return true;
  }

  componentWillUpdate(newProps, nextState){
    console.log("componentWillUpdate Invoked!");
  }

  componentDidUpdate(newProps, nextState){
    console.log("componentDidUpdate Invoked!");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount Invoked!");
  }

  render(){
    return(
      <h4> Random number generated was: {this.props.rand} </h4>
    );
  }
}

export default App;
