import React from "react";

import { connect } from "react-redux";
import "./ChatRoom.sass";

import camera from "../../resources/img/camera.png";
import arrow from "../../resources/img/arrow.png";

const ChatRoom = props => (
  <div className="chat-room">
    <div className="header">
      <h2>Testing Task</h2>
    </div>
    <div className="main">
      <div className="bgc-top"></div>
    </div>
    <div className="footer">
      <i className="fas fa-trash-alt"></i>
      <input type="text" placeholder="Type message. . ." />
      <div className="send">
        <img src={arrow} width="20px" alt="" />
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
