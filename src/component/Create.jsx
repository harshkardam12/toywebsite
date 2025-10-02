import React from "react";
import "../make/create.css";
import Poke from "../assets/girl.png";
import Poke2 from "../assets/lll.png";

import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

function Create() {
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

          {/* Confirm Password */}
          <div className="input-box">
            <Lock className="icon" />
            <input type="password" placeholder="Confirm Password" />
          </div>

          <button className="create-btn">Create Account</button>
          <Link to="/sin">
            <p className="forgot">Already have an account</p>
          </Link>
        </div>
      </div>
<img src={Poke2} alt="" className="lll" />

      <img src={Poke} alt="bear" className="bear" />
    </div>
  );
}

export default Create;
