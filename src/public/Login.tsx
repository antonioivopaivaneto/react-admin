import React, { Component, SyntheticEvent } from "react";
import "./Public.css";
class Login extends Component {

  first_name = "";
  last_name = "";
  email = "";
  password = "";
  confirm_password = "";

  submit = (e:SyntheticEvent) => {
    e.preventDefault();


  };


  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.submit}>
         
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label>Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label>Password</label>
          </div>

          <button className="btn btn-primary w-100 py-2 mt-5" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
        </form>
      </div>
    );
  }
}

export default Login;
