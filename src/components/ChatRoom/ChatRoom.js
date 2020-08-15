import React, { useRef, useEffect } from "react";

import { connect } from "react-redux";
import { useDidMountEffect } from "../customHooks/didMountEffect";
import { logout, post, try_login } from "../../actions";
import "./ChatRoom.sass";

import arrow from "../../resources/img/arrow.png";

const ChatRoom = ({
  list,
  message,
  currentUser,
  onChangeMessage,
  onPost,
  onClear,
  onExit,
  mount
}) => {
  const chat = useRef(null);

  useEffect(() => {
    mount();
  }, []);

  useDidMountEffect(() => {
    chat.current.scrollTop = chat.current.scrollHeight;
  }, [list.length]);

  const renderList = () => {
    return list.map((item, i) => {
      return (
        <li key={i} className={item.user === currentUser ? "user-item" : null}>
          <p>{item.body}</p>
          <span
            style={item.user === currentUser ? { textAlign: "right" } : null}
          >
            {item.user}
          </span>
        </li>
      );
    });
  };

  return (
    <div className="chat-room">
      <div className="header">
        <i className="fas fa-caret-left" onClick={onExit}></i>
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

const mapStateToProps = ({ chat, message, currentUser }) => ({
  list: chat,
  message,
  currentUser
});

const mapDispatchToProps = dispatch => ({
  onChangeMessage: text => dispatch({ type: "CHANGE_MESSAGE", payload: text }),
  onPost: () => dispatch(post()),
  onClear: () => dispatch("CLEAR_MESSAGE"),
  onExit: () => dispatch(logout()),
  mount: () => dispatch(try_login())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
