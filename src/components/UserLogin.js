import React from 'react'


const LogIn = (props) => {
    return(
    <form onSubmit={props.handleLogin}>
        <label>email</label>
        <input type="text"/>
        <br/>
        <label>password</label>
        <input type="password"/>
        <br/>
        <input type="submit" value="Log in"/>
    </form>)
}

export default LogIn; 