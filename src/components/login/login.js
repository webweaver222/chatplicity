import React from "react";
import { connect } from "react-redux";

import "./login.sass";

import Preloader from "../preloader";
import SadFace from "../../resources/svg/sad-face.html";

const Login = ({}) => {
  //const preloader = login_fetching ? <Preloader /> : null;

  return (
    <div className="login">
      <div className="bgc-top">
        <div className="chat-icon">
          <h2>Chat</h2>
          <div className="icon-shadow"></div>
        </div>
      </div>
      <div className="bgc-bot">
        <div className="input-form">
          <div className="body">
            <div className="field">
              <label htmlFor="name-input">Username</label>
              <input id="name-input" type="text" />
            </div>
            <div className="field">
              <label htmlFor="pass-input">Password</label>
              <input id="pass-input" type="password" />
            </div>
          </div>
          <div className="footer">
            <span>Get Started</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(() => {
  return {};
}, null)(Login);
