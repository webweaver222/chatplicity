const initialState = {
  currentUser: null,
  chat: [],
  username: "",
  pass: "",
  fetching: false,
  error: false,
  message: ""
};

function addMessage(newMessage, list) {
  if (newMessage.body === "") return list;
  return [...list, newMessage];
}

const reducer = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case "CHANGE_USERNAME": {
      return {
        ...state,
        username: action.payload
      };
    }

    case "CHANGE_PASS": {
      return {
        ...state,
        pass: action.payload
      };
    }

    case "CHANGE_MESSAGE": {
      return {
        ...state,
        message: action.payload
      };
    }

    case "CLEAR_MESSAGE": {
      return {
        ...state,
        message: ""
      };
    }

    case "POST_MESSAGE": {
      const newMessage = {
        body: state.message,
        user: state.currentUser
      };
      return {
        ...state,
        chat: addMessage(newMessage, state.chat),
        message: ""
      };
    }

    default:
      return state;
  }
};

export default reducer;
