import React from "react";
import "../make/sign.css";
import Poke from "../assets/girl.png";
import Poke2 from "../assets/lll.png";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

function Sign() {
  return (
    <div className="sign">
      <div className="login-box">
        <div className="form-box">

          {/* Email Input */}
          <div className="input-box">
            <Mail className="icon" />
            <input type="email" placeholder="Email or Username" />
          </div>

          {/* Password Input */}
          <div className="input-box">
            <Lock className="icon" />
            <input type="password" placeholder="Password" />
          </div>

          <button type="submit" className="signin-btn">Sign in</button>
          <p className="forgot">Forgot password?</p>
          <Link to="/create">
            <button className="create-btn">Create Account</button>
          </Link>
        </div>
      </div>
<img src={Poke2} alt="" className="lll" />
      <img src={Poke} alt="bear" className="bear" />
    </div>
  );
}

export default Sign;
