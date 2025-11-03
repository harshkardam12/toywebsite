import React from "react";
import "../make/create.css";
import Poke from "../assets/girl.png";
import Poke2 from "../assets/lll.png";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

function Create() {
  return (
    <div className="create">
      <div className="create-box">
        <div className="create-form">

          {/* Email Input */}
          <div className="create-input">
            <Mail className="create-icon" />
            <input type="email" placeholder="Email or Username" />
          </div>

          {/* Password Input */}
          <div className="create-input">
            <Lock className="create-icon" />
            <input type="password" placeholder="Password" />
          </div>

          {/* Confirm Password */}
          <div className="create-input">
            <Lock className="create-icon" />
            <input type="password" placeholder="Confirm Password" />
          </div>

          <button className="create-btn">Create Account</button>

          <Link to="/sin">
            <p className="create-link">Already have an account?</p>
          </Link>
        </div>
      </div>

      <img src={Poke2} alt="" className="create-lll" />
      <img src={Poke} alt="bear" className="create-bear" />
    </div>
  );
}

export default Create;
