import React, { Component } from "react";
import { Link } from "react-router-dom";
class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(newUser);
    };

    render() {
        return (
            <div className="container" >
                <div className="row">
                    <div className="col s8 offset-s2">

                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Register</b> below
                            </h4>
                            <p className="grey-text text-darken-1">
                                Already have an account? <Link to="/login">Log in</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <label htmlFor="name">Name</label>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    // error={this.errors.name}
                                    id="name"
                                    type="text"
                                />
                            </div>
                            <div className="input-field col s12">
                                <label htmlFor="email">Email</label>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    // error={this.state.errors.email}
                                    id="email"
                                    type="email"
                                />
                            </div>
                            <div className="input-field col s12">
                                <label htmlFor="password">Password</label>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    // error={this.state.errors.password}
                                    id="password"
                                    type="password"
                                />
                            </div>
                            <div className="input-field col s12">
                                <label htmlFor="password2">Confirm Password</label>

                                <input
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    // error={this.state.errors.password2}
                                    id="password2"
                                    type="password"
                                />
                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
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
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;