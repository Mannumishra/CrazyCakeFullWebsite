import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <>
    <div className="container-fluid">
    <div className={`Login_container ${isActive ? "active" : ""}`}>
      {/* Login Form */}
      <div className="form-box login">
        <form action="#">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt" />
          </div>
          <div className="forgot-link">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btnLogin">
            Login
          </button>
          <p>or login with social platforms</p>
          <div className="social-icon">
            <a href="#">
            <i class="bi bi-facebook"></i>
            </a>
            <a href="#">
            <i class="bi bi-github"></i>
            </a>
            <a href="#">
            <i class="bi bi-whatsapp"></i>
            </a>
            <a href="#">
            <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </form>
      </div>

      {/* Registration Form */}
      <div className="form-box register">
        <form action="#">
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user" />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <i className="bx bxs-envelope" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt" />
          </div>
          <button type="submit" className="btnLogin">
            Register
          </button>
          <p>or register with social platforms</p>
          <div className="social-icon">
            <a href="#">
            <i class="bi bi-facebook"></i>
            </a>
            <a href="#">
            <i class="bi bi-github"></i>
            </a>
            <a href="#">
            <i class="bi bi-whatsapp"></i>
            </a>
            <a href="#">
            <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </form>
      </div>

      {/* Toggle Panels */}
      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account?</p>
          <button className="btn register-btn" onClick={handleRegisterClick}>
            Register
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <button className="btn login-btn" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Login;
