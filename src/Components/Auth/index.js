import "./index.css";
import GoogelAuth from "../GoogleAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("authToken") !== undefined) {
      navigate("/");
    }
  });

  return (
    <div className="main-container">
      <div className="board-container">
        <h1 className="board-heading">Board.</h1>
      </div>
      <div className="form-wrapper-container">
        <form className="form">
          <h1 className="sign-in-heading">Sign in</h1>
          <p className="sign-in-to-your-acc-para">Sign in to your account</p>
          <div className="auth-btn-container">
            <GoogelAuth />
            <button className="apple-auth-btn">
              <img
                className="apple-icon"
                src="https://res.cloudinary.com/dctfbwk0m/image/upload/v1710685861/apple_1_jinvqt.png"
                alt="apple icon"
              />
              <span className="apple-auth-btn-txt">Sign in with Apple</span>
            </button>
          </div>
          <div className="input-field-container">
            <div className="label-and-input-container">
              <label htmlFor="email">Email address</label>
              <input id="email" type="text" />
            </div>
            <div className="label-and-input-container">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" />
            </div>
            <p className="forgot-pass-para">Forgot password?</p>
            <button className="sign-in-btn">Sign In</button>
          </div>
          <p className="dont-have-acc-para">
            Don't have an account? <span>Register here</span>
          </p>
        </form>
      </div>
    </div>
  );
}
