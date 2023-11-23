export const setServices = (services) => ({
  type: "SET_SERVICES",
  payload: services,
});

export const setChoosedCall = (call) => ({
  type: "SET_CHOOSED_CALL",
  payload: call,
});

export const setCalls = (calls) => ({
  type: "SET_CALLS",
  payload: calls,
});
export const setFilteredCalls = (calls) => ({
  type: "SET_FILTERED_CALLS",
  payload: calls,
});

export const setCompositions = (calls) => ({
  type: "SET_COMPOSITIONS",
  payload: calls,
});
export const setFilteredCompositions = (calls) => ({
  type: "SET_FILTERED_COMPOSITIONS",
  payload: calls,
});

export const setFilteredServices = (calls) => ({
  type: "SET_FILTERED_SERVICES",
  payload: calls,
});

export const setPage = (page) => ({
  type: "SET_PAGE",
  payload: page,
});

export const setFilteredItems = (filteredItems) => ({
  type: "SET_FILTERED_ITEMS",
  payload: filteredItems,
});

export const toggleCallModalOpen = () => ({
  type: "TOGGLE_CALLMODAL_OPEN"
});

export const toggleUpdateMenuOpen = () => ({
  type: "TOGGLE_IS_UPDATE_MENU_OPEN"
});

