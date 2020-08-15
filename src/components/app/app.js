import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDidMountEffect } from "../customHooks/didMountEffect";

import "./app.sass";

//import Preloader from '../preloader'

import Login from "../login";
import ChatRoom from "../ChatRoom";
import { try_login } from "../../actions";

const App = ({ currentUser, mount }) => {
  useEffect(() => {
    console.log("me_renders");
    mount();
  }, []);

  useDidMountEffect(() => {}, [currentUser]);

  return <div className="app">{currentUser ? <ChatRoom /> : <Login />}</div>;
};

export default connect(
  ({ currentUser }) => ({ currentUser }),
  dispatch => {
    return {
      mount: () => dispatch(try_login())
    };
  }
)(App);
