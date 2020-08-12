import React from "react";

import "./app.sass";

//import Preloader from '../preloader'

import Login from "../login";
import ChatRoom from "../ChatRoom";

const App = () => {
  return (
    <div className="app">
      <ChatRoom />
    </div>
  );
};

export default App;
