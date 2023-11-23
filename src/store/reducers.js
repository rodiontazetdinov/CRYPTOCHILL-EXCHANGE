const initialState = {
  coins: [],
  isFixed: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PERCENT_TYPE_FIXED":
      return {
        ...state,
        isFixed: true,
      };
      case "SET_PERCENT_TYPE_FLOATING":
      return {
        ...state,
        isFixed: false,
      };

    default:
      return state;
  }
};

export default rootReducer;
