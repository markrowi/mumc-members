import React, { Component } from 'react';
import {setName, signOut, firebaseAuth, uiConfig} from './javascripts/firebase'
import logo from './logo.svg';
import './App.css';
// import 'firebaseui/dist/firebaseui.css'
import 'bootstrap/dist/css/bootstrap.css';
import MembersAppContainer from './containers/MembersAppContainer/MembersAppContainer'
import { FirebaseAuth } from 'react-firebaseui';


// var Input = (props)=>{
//   if (props.inp){
//   return (<h1>
//     <strong>Method</strong><br/>
//     <input type="text" ref={input=>input&&input.focus()} name="" id="" onChange={props.rrender}/></h1>)
//   } return ""
// }
class App extends Component {
  constructor(){
    super();
  
    this.state = {
      counter:0,
      input: false,
      isLoggedIn:null,
      user:undefined
    };
    // var self = this
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
      
      self.setState({isLoggedIn:!!user, user:user})
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
    
    let {isLoggedIn, user} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={process.env.PUBLIC_URL + logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">REACT</h1>
        </header>
        <div className="container">
          {(()=>{
            if(user!==undefined){
              if(!isLoggedIn){
                return <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth()} style={{"display": (!isLoggedIn?"block":"none")}}/>
              }else{
                return (<div>
  
                  <MembersAppContainer/>
                  <br/>
                  <div className="alert alert-light text-center">
                    <p>
                      <small>Logged in as <strong>{user.displayName}</strong></small>
                    </p>
                    <p className="text-center">
                      <input onClick={this.handleSignOut} type="button" className="btn btn-primary" value="Logout"/> 
                    </p>
                  </div>
                  
                  
                </div> )
              }
            }
          })()
          }
          
          
        </div>
       
        
        
      </div>
    );
  }
}

export default App;
