const initialDropdowns = {
  account: false,
  flag: false,
  tags: false,
  coinSentOrder: false,
  coinReceivedOrder: false,
  coinSentPartner: false,
  coinReceivedPartner: false,
  mainMenu: false,
  order: {},
};

const initialCreatingOrder = {
  from: {
    code: "BTC",
    network: "BTC",
    coin: "BTC",
    amount: "0.01",
    rate: "18.286272",
    precision: 8,
    min: "0.00036661",
    max: "2.46091842",
    usd: "3.71",
    btc: "0.0001",
  },
  to: {
    code: "ETH",
    network: "ETH",
    coin: "ETH",
    amount: "0.0001245",
    rate: "0.05413837",
    precision: 8,
    min: "0.005",
    max: "44.999328",
    usd: "0.25",
  },
  time: {
    reg: 1701433496,
    start: null,
    finish: null,
    update: 1701433496,
    expiration: 1701435296,
    left: 1744,
  },  
  error: 1,
  status: ["LIMIT_MIN"],
};

const initialState = {
  language: "ru",
  coins: [],
  order: JSON.parse(localStorage.getItem('order')) ?? initialCreatingOrder,
  creatingOrder: initialCreatingOrder,
  isFixed: true,
  dropdowns: { ...initialDropdowns },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORDER":
      return {
        ...state,
        order: action.paylode,
      };
    case "SET_COINS":
      return {
        ...state,
        coins: action.paylode,
      };

    case "SET_ORDER_CREATION_STATE":
      return {
        ...state,
        creatingOrder: action.paylode,
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
      return { ...state };

    case "OPEN_DROPDOWN":
      state.dropdowns = { ...initialDropdowns };
      state.dropdowns[action.paylode] = true;
      return { ...state };

    case "CLOSE_ALL_DROPDOWNS":
      return {
        ...state,
        dropdowns: { ...initialDropdowns },
      };
    
    case "SET_LANGUAGE":
      return {
        ...state,
        language: action.paylode,
      }

    default:
      return state;
  }
};

export default rootReducer;
