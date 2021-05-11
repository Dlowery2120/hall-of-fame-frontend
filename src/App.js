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
import GamePage from './components/GamePage'
import TriviaContainer from './containers/TriviaContainer'
import UserLogin from "./components/UserLogin"

class App extends Component {
  state = {
    isLoggedIn: false
  }

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
      localStorage.setItem("token", data.token)
      this.getUsers()
      this.setState({
        isLoggedIn: true
      })
    })

  }
  handleLogout = () =>{
    console.log('cleared localstorage')
    localStorage.clear()
    if (localStorage != false)
    {this.setState({
      isLoggedIn: false
    })}
  }

  render() {
    return (
      <div className="App">
        
        
        <BrowserRouter>
        <nav>
              {localStorage.token ? <Redirect to="/home"/> : <Redirect to="/login"/>}
        </nav>
        <Header />

          <Switch>

            <Route exact path="/login">
              <br />
              <UserLogin handleLogin = {this.handleLogin}/>
              <br />
            </Route>

            <Route exact path="/home">
              {<TriviaContainer/>}
              <br/>
              <button onClick={()=> this.handleLogout() }>LogOut</button>
              
            </Route>

            {/* create route for "Classic" when they click on button it renders Classic component */}

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
