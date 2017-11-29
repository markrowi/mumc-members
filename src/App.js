import React, { Component } from 'react';
import {setName, signOut, firebaseAuth, uiConfig} from './javascripts/firebase'
import logo from './logo.svg';
import './App.css';
// import 'firebaseui/dist/firebaseui.css'

import { FirebaseAuth } from 'react-firebaseui';


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
  
    this.state = {
      counter:0,
      input: false,
      isLoggedIn:false
    };
    var self = this
    this.handleSetName = this.handleSetName.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    // firebase.onAuthStateChanged(function(user){
    //   self.setState({isLoggedIn:!!user})
    //   console.log(user)
    // })
  }

  componentDidMount(){
    var self = this
    this.setState({input:true})
    firebaseAuth().onAuthStateChanged(function(user){
      console.log("Logged In",user);
      self.setState({isLoggedIn:!!user})
    })
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

  handleSignOut(){
    signOut().then(function(){
      console.log('success logged out.')
    })
  }

  render() {
    console.log(firebaseAuth().currentUser)
    let {counter, isLoggedIn} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={process.env.PUBLIC_URL + logo} className="App-logo" alt="logo" />
          <h1 className="App-title">REACT</h1>
        </header>
        <p className="App-intro">
          {(()=>{
            if(!isLoggedIn){
              return <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth()} style={{"display": (!isLoggedIn?"block":"none")}}/>
            }else{
              return <input onClick={this.handleSignOut} type="button" className="btn btn-primary" value="logout"/>
            }})()
          }
          
          
        </p>
       
        
        
      </div>
    );
  }
}

export default App;
