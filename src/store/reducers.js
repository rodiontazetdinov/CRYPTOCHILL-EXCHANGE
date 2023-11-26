const initialDropdowns = {
  account: false,
  flag: false,
  tags: false,
  coinSentOrder: false,
  coinReceivedOrder: false,
  coinSentPartner: false,
  coinReceivedPartner: false,
  mainMenu: false
}

const initialState = {
  coins: [],
  isFixed: true,
  dropdowns: {...initialDropdowns}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SET_COINS":
      return {
        ...state,
        coins: action.paylode,
      };

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

    case "CLOSE_DROPDOWN":
      state.dropdowns[action.paylode] = false;
      return {...state};

    case "OPEN_DROPDOWN":
      state.dropdowns = {...initialDropdowns};
      state.dropdowns[action.paylode] = true;
      return {...state};

    case "CLOSE_ALL_DROPDOWNS":
      return {
        ...state,
        dropdowns: {...initialDropdowns},
      };

    default:
      return state;
  }
};

export default rootReducer;
