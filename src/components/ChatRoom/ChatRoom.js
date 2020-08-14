import React, { useRef } from "react";

import { connect } from "react-redux";
import { useDidMountEffect } from "../customHooks/didMountEffect";
import "./ChatRoom.sass";

import arrow from "../../resources/img/arrow.png";

const ChatRoom = ({ list, message, onChangeMessage, onPost, onClear }) => {
  const chat = useRef(null);

  useDidMountEffect(() => {
    chat.current.scrollTop = chat.current.scrollHeight;
  }, [list.length]);

  const renderList = () => {
    return list.map((item, i) => {
      return (
        <li key={i} className={item.user === "kemer" ? "user-item" : null}>
          <p>{item.body}</p>
          <span style={item.user === "kemer" ? { textAlign: "right" } : null}>
            {item.user}
          </span>
        </li>
      );
    });
  };

  return (
    <div className="chat-room">
      <div className="header">
        <h2>Testing Task</h2>
      </div>
      <div
        className="main"
        onWheel={e => (chat.current.scrollTop += e.deltaY * 0.3)}
        ref={chat}
      >
        <ul>{renderList()}</ul>
        <div className="bgc-top"></div>
      </div>
      <div className="footer">
        <i className="fas fa-trash-alt" onClick={onClear}></i>
        <input
          type="text"
          placeholder="Type message. . ."
          value={message}
          onChange={e => onChangeMessage(e.target.value)}
        />
        <div className="send" onClick={onPost}>
          <img src={arrow} width="20px" alt="" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ chat, message }) => ({
  list: chat,
  message
});

const mapDispatchToProps = dispatch => ({
  onChangeMessage: text => dispatch({ type: "CHANGE_MESSAGE", payload: text }),
  onPost: () => dispatch("POST_MESSAGE"),
  onClear: () => dispatch("CLEAR_MESSAGE")
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
