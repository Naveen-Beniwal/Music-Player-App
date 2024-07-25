// src/components/Register.jsx
import React from "react";
import style from "./Registration.module.css"; // Import the CSS file
import { assets } from "../assets/assets";
const Register = () => {
  return (
    <div className={style.total}>
      <div>
        <div className={style.container}>
          <h2>Register Here</h2>

          <label htmlFor="Username"></label>
          <input
            type="text"
            name="Username"
            placeholder="Username"
            spellCheck="true"
          />
          <br />
          <br />
          <label htmlFor="Email"></label>
          <input type="text" name="Email" placeholder="Email" />
          <br />
          <br />
          <label htmlFor="Password"></label>
          <input type="password" name="Password" placeholder="Password" />
          <br />
          <br />
          <a href="">
            <button id="bttn">Register</button>
          </a>
        </div>
      </div>
      <div className="okk">
        <img src={assets.img} alt="error" className="ic" />
        <div>
          <h2>Join us</h2>
        </div>

        <div className="reg">Register For Further Information</div>
      </div>
    </div>
  );
};

export default Register;
