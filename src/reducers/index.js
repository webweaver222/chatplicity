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
    case "ENTER_CHAT": {
      if (action.payload) {
        return {
          ...state,
          currentUser: action.payload
        };
      }
      return {
        ...state,
        currentUser: state.username
      };
    }

    case "LOGOUT": {
      return {
        ...state,
        currentUser: null
      };
    }

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
      return {
        ...state,
        chat: addMessage(action.payload, state.chat),
        message: ""
      };
    }

    case "LOAD_POSTS": {
      return {
        ...state,
        chat: action.payload
      };
    }

    default:
      return state;
  }
};

export default reducer;
