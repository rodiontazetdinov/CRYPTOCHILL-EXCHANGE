const initialState = {
  calls: [],
  filteredCalls: [],
  filteredServices: [],
  filteredItems: [],
  choosedCall: {},
  isCallModalOpen: false,
  isUpdateMenuOpen: false,
  page: [],
  services: [],
  compositions: [],
  filteredCompositions: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SERVICES":
      return {
        ...state,
        services: action.payload,
      };
      case "SET_COMPOSITIONS":
      return {
        ...state,
        compositions: action.payload,
      };
      case "SET_FILTERED_COMPOSITIONS":
      return {
        ...state,
        filteredCompositions: action.payload,
      };
    case "SET_FILTERED_SERVICES":
      return {
        ...state,
        filteredServices: action.payload,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    case "SET_CALLS":
      return {
        ...state,
        calls: action.payload,
      };
    case "SET_FILTERED_CALLS":
      return {
        ...state,
        filteredCalls: action.payload,
      };
    case "SET_CHOOSED_CALL":
      return {
        ...state,
        choosedCall: action.payload,
      };
    case "SET_FILTERED_ITEMS":
      return {
        ...state,
        filteredItems: action.payload,
      };
    case "TOGGLE_CALLMODAL_OPEN":
      return {
        ...state,
        isCallModalOpen: !state.isCallModalOpen,
      };
    case "TOGGLE_IS_UPDATE_MENU_OPEN":
      return {
        ...state,
        isUpdateMenuOpen: !state.isUpdateMenuOpen,
      };

    default:
      return state;
  }
};

export default rootReducer;
