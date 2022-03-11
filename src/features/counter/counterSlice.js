const initialState = {
  items: [],
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "count/increment":
      console.log("updating state.items length %s", state.items.length+1)
      console.log("current state.items length %s", state.items.length)
      return {
        ...state,
        items: state.items.concat(state.items.length + 1),
      };
    default:
      console.log("initial state.items length %s", state.items.length)
      return state;
  }
}

export default counterReducer;
