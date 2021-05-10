import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter,
    Redirect
  } from "react-router-dom";
  
  import Header from './components/Header'
  import SignIn from './components/SignIn'
  import GamePage from './components/GamePage'
  import TriviaContainer from './containers/TriviaContainer'
  import UserLogin from "./components/UserLogin"

const AuthRoute = props => {
    const { isAuthUser, type } = props;
    if (type === "guest" && isAuthUser) return <Redirect to="/home" />;
    else if (type === "private" && !isAuthUser) return <Redirect to="/" />;
  
    return <Route {...props} />;
};

const mapStateToProps = ({ isAuthUser }) => ({
    isAuthUser
});

export default connect(mapStateToProps)(AuthRoute);
