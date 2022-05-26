import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(userData);
  };
  render() {
    const { errors } = this.state;
    return (
      <>

        <input
          onChange={this.onChange}
          value={this.state.email}
          error={errors.email}
          id="email"
          type="email"
        />
        <label htmlFor="email">Email</label>

        <input
          onChange={this.onChange}
          value={this.state.password}
          error={errors.password}
          id="password"
          type="password"
        />
        <label htmlFor="password">Password</label>

        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem"
          }}
          type="submit"
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Login
        </button>
      </>
    );
  }
}
export default Login;
