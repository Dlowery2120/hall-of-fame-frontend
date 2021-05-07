import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Redirect
} from "react-router-dom";

import './App.css';
import Header from './components/Header'
import SignIn from './components/SignIn'
import GamePage from './components/GamePage'
import TriviaContainer from './containers/TriviaContainer'
import UserLogin from "./components/UserLogin"

class App extends Component {

  getUsers = () => {
    fetch("http://localhost:3000/api/v1/users",{
      method:"GET",
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
      .then((res) => res.json())
      .then((userData) => {
        this.setState({ users: userData });
      });
  }


  handleLogin = (e) => {
    e.preventDefault()
    let user = {
      name: e.target[0].value,
      password: e.target[1].value
    }

    let reqPackage = {
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(user)
    }

    fetch('http://localhost:3000/api/v1/login', reqPackage)
    .then(res => res.json())
    .then(data=> {
      // localStorage.token = data.token
      localStorage.setItem("token", data.token)
      this.getUsers()

    })

  }
  handleLogout = () =>{
    console.log('cleared localstorage')
    localStorage.clear()
    // redirect 
  }

  render() {
    return (
      <div className="App">
        
        
        <BrowserRouter>
        <nav>
          <ul>
              {localStorage.token ? <TriviaContainer /> : <Redirect to="/"/>}
          </ul>
        </nav>
        <Header />

          <Switch>

            <Route exact path="/">
              <br />
              <UserLogin handleLogin = {this.handleLogin}/>
              <br />
              <button onClick={()=> this.handleLogout() }>Log Out</button>
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

{/* <Switch>
  <AuthRoute path="/login" type="guest">
    <LoginPage />
  </AuthRoute>

  <AuthRoute path="/home" render={HomePage} type="private" />
  <AuthRoute path="/my-account" type="private">
    <MyAccount />
  </AuthRoute>

  <Route path="/" render={IndexPage} />
</Switch> */}
export default App;
