import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="navbar">
        <div className="logo-container">REDUX LOGIN</div>
        <div className="menu-buttons">
          <Link
            className="btn btn-login"
            to="/"
            style={{ display: this.props.loginStatus ? "none" : "flex" }}
          >
            Login
          </Link>
          <Link
            className="btn btn-register"
            to="/register"
            style={{ display: this.props.loginStatus ? "none" : "flex" }}
          >
            Register
          </Link>
          <Link
            className="btn btn-user"
            to="/user"
            style={{ display: this.props.loginStatus ? "flex" : "none" }}
          >
            User
          </Link>
          <Link
            className="btn btn-logout"
            to="/"
            style={{ display: this.props.loginStatus ? "flex" : "none" }}
            onClick={() => this.props.isLoggedIn()}
          >
            Log Out
          </Link>
          <Link className="btn btn-about" to="/about">
            About
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.isLoggedIn.isLoggedIn,
  };
};

const mapDispatchToProps = (dispach) => {
  return {
    isLoggedIn: () => dispach({ type: "IS_LOGGED_IN" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
