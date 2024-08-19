import React, { Component, SyntheticEvent } from "react";
import axios from "axios";

import "./Public.css";

class Register extends Component {

    first_name = "";
  last_name = "";
  email = "";
  password = "";
  password_confirmation = "";

  submit = async (e:SyntheticEvent) => {
    e.preventDefault();
    const response =  await axios.post('http://127.0.0.1:8000/api/register',{
        first_name : this.first_name,
        last_name : this.last_name,
        email : this.email,
        password : this.password,
        password_confirmation : this.password_confirmation

    });
    console.log(response);


  };

  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.submit}>
          
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder=""
              onChange={e => this.first_name = e.target.value}
            />
            <label>First Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder=""
              onChange={e => this.last_name = e.target.value}

            />
            <label>Last Name</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={e => this.email = e.target.value}

            />
            <label>Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={e => this.password = e.target.value}

            />
            <label>Password</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={e => this.password_confirmation = e.target.value}

            />
            <label>Confirm Password</label>
          </div>

          <button className="btn btn-primary w-100 py-2 mt-5" type="submit">
            Register
          </button>
          <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
        </form>
      </div>
    );
  }
}

export default Register;
