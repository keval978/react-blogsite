import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <div className="login-wraper">
        <span className="logintitle">Login</span>
        <form className="loginform">
          <label>Email</label>
          <input
            type="text"
            className="inputgroup"
            placeholder="Enter your email.."
          />
          <label>password</label>
          <input
            type="password"
            className="inputgroup"
            placeholder="Enter your password.."
          />
          <button className="loginbutton">Login</button>
        </form>
        <button className="registerbutton">Registation</button>
      </div>
    </div>
  );
}

export default Login;
