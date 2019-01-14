import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {firebase,provider,database} from './firebase';


class App extends Component {
  state={
    login:null
  }
  componentDidMount=()=>{
    this.setState({login:false});
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        console.log(user.uid);
        this.setState({login:true})
      }else{
        console.log('logout');
        this.setState({login:false})
      }
    })
  }
  googleHandler=()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function(result) {
     // This gives you a Google Access Token.
     var token = result.credential.accessToken;
     // The signed-in user info.
     var user = result.user;
    });
  }
  
  fbHandler=()=>{
    var provider = new firebase.auth.FacebookAuthProvider();
    
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token.
      console.log('getBack',result);
      var token = result.credential.accessToken;
      console.log('token',token)
      // The signed-in user info.
      var user = result.user;
    });
  }
  fbLogout=()=>{
    firebase.auth().signOut();
  }
  googleLogout=()=>{
    firebase.auth().signOut();
  }
  render() {
    
    return (
      <div className="App">
        <button onClick={this.googleHandler}>Sign in with Google</button>
        <button onClick={this.googleLogout}>Logout from GOOGLE</button>
        <button onClick={this.fbHandler}>Sign in with Facebook</button>
        <button onClick={this.fbLogout}>Logout Facebook</button>
        {this.state.login?<h1>Welcome</h1> :''}
      </div>
    );
  }
}

export default App;

