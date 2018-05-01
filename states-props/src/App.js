import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className = "App" >
            <header className = "App-header" >
            <img src = { logo }
            className = "App-logo"
            alt = "logo" />
            <h1 className = "App-title" > Welcome to React </h1 >
            </header >
            <p className = "App-intro" >
            To get started, edit <code > src / App.js </code > and save to reload.
            </p >
              <Parent />
            </div >
        );
    }
}

class Parent extends Component{

  constructor(props){
    super(props);

    this.state = { 
      randomArray: ['five', 'six', 'seven']
    };

    this.textClicked = this.textClicked.bind(this);
  }

  textClicked(){
    this.setState({
      randomArray : this.state.randomArray.reverse()
    });
  }


  render(){
    return (
    <div>
      <h2 onClick={this.textClicked}> This is the parent. </h2>
      <Child msg={this.state.randomArray} />
      </div>
    );
  }
}

Parent.defaultProps = {
  randomArray : ['one', 'two', 'three']
}

class Child extends Component{
  render(){
    return(
      <div> {this.props.msg.map((value, key) => {
        return <p key={key}> {value} </p> ;
      })}</div>
    );
  }
}

export default App;
