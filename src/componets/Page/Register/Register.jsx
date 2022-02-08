import React from "react";
import "./register.css";

function Register() {
  return (
    <div className="register">
      <div className="register-wraper">
        <span className="registertitle">Register</span>
        <form className="registerform">
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
          <button className="registerbtn">Register</button>
        </form>
        <button className="loginbtn">login</button>
      </div>
    </div>
  );
}

export default Register;
