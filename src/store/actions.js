export const setPercentTypeFixed = () => ({
  type: "SET_PERCENT_TYPE_FIXED",
});

export const setPercentTypeFloating = () => ({
  type: "SET_PERCENT_TYPE_FLOATING",
});

export const setCoins = (coins) => ({
  type: "SET_COINS",
  payload: coins,
});