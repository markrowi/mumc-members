import React, { Component } from 'react';
import {init as firebaseInit, setName} from './javascripts/firebase'
import logo from './logo.svg';
import './App.css';

var Input = (props)=>{
  if (props.inp){
  return (<h1>
    <strong>Method</strong><br/>
    <input type="text" ref={input=>input&&input.focus()} name="" id="" onChange={props.rrender}/></h1>)
  } return ""
}
class App extends Component {
  constructor(){
    super();
    firebaseInit();


    this.state = {
      counter:0,
      input: false
    };

    this.handleSetName = this.handleSetName.bind(this);
  }

  componentDidMount(){
    this.setState({input:true})
  }

  rerender(){
    let c = this.state.counter;
    this.setState({counter:++c});
  }

  handleSetName(event){
    console.log(event.target.value)
    setName(event.target.value).then(()=>{

    });
  }

  render() {
  

    let {counter} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={process.env.PUBLIC_URL + logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          
         

        </p>
        <input type="button" className="btn" onClick={this.rerender.bind(this)} value="rerender"/>
        <p>
          {counter}
        </p>
        {(()=>{
          if (this.state.input){
            return (<h1>
              <strong>Anonymous</strong><br/>
              <input type="text" onChange={this.handleSetName} name="" id=""/>
              </h1>)
          } return ""
        })()}
        <Input inp={this.state.input} rrender={this.rerender.bind(this)}/>
      </div>
    );
  }
}

export default App;
