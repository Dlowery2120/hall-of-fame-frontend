import React from 'react';

const LogIn = (props) => {
	return (

<div className="container-sm form-div">
    <h1>D&E Hits Hall of Fame</h1>
    
    <p>
        <a className="btn btn-secondary sign-button" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Log In</a>
        <a className="btn btn-secondary sign-button" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">Sign Up</a>
    </p>

    <form onSubmit={props.handleLogin} className="collapse multi-collapse" id="multiCollapseExample1">
        <h1>Log In</h1><br></br>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" class="btn btn-secondary">Submit</button>
    </form>
    <form onSubmit={props.handleSignup} className="collapse multi-collapse" id="multiCollapseExample2">
        <h1>Sign Up</h1><br></br>
        <div class="mb-3">
            <label for="exampleInputEmail2" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword2"/>
        </div>
        <button type="submit" class="btn btn-secondary">Submit</button>
    </form>
</div>
	);
};

export default LogIn;

{/* <form class="row g-3">
  <div class="col-auto">
    <label for="staticEmail2" class="visually-hidden">Email</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
  </div>
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
  </div>
</form> */}