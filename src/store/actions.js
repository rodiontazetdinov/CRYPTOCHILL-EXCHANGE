export const setPercentTypeFixed = () => ({
  type: "SET_PERCENT_TYPE_FIXED",
});

export const setPercentTypeFloating = () => ({
  type: "SET_PERCENT_TYPE_FLOATING",
});

export const closeAllDropdowns = () => ({
  type: "CLOSE_ALL_DROPDOWNS",
});

export const closeDropdown = (name) => ({
  type: "CLOSE_DROPDOWN",
  paylode: name,
});

export const openDropdown = (name) => ({
  type: "OPEN_DROPDOWN",
  paylode: name,
});

