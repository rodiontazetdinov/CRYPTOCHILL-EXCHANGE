const STATES = [
  /* 0 */ 'Transaction expected',
  /* 1 */ 'The transaction is waiting for the required number of confirmations',
  /* 2 */ 'Currency exchange',
  /* 3 */ 'Sending funds',
  /* 4 */ 'Completed',
  /* 5 */ 'Expired',
  /* 6 */ 'Not currently in use',
  /* 7 */ 'A decision must be made to proceed with the order'
];

const API_KEY = 'CZC970YKLNIquCCgW0JFxxBDvILAU27bZMImDaot'
const API_SECRET = 'k4sSQ8D9jxtiBEDKKMXWIIX2hV0FuEZsicpwpCff'

const FixedFloat = require("fixedfloat-api");
const fixed = new FixedFloat(API_KEY, API_SECRET);

export const getCurrencies = async () => {
  const response = await fixed.getCurrencies();
  console.log(response.length)
}

export const getPrice = async (options) => {
  const response = await fixed.getPrice('0.1 ETH', 'BTC');
  // const response = await fixed.getPrice('ETH', '0.1 BTC', 'fixed');
  console.log(response)
}

export const getPriceFixed = async (options) => {
  // const response = await fixed.getPrice('0.1 ETH', 'BTC');
  const response = await fixed.getPrice('ETH', '0.1 BTC', 'fixed');
  console.log(response)
}

export const getOrder = async (options) => {
  const response = await fixed.getOrder('ORDER_ID', 'ORDER_TOKEN');
  console.log(response)
}

export const setEmergency = async (options) => {
  await fixed.setEmergency('ORDER_ID', 'ORDER_TOKEN', 'EXCHANGE or REFUND', 'ADDRESS for refund');
}

export const createOrder = async (options) => {
  const response = await fixed.createOrder('0.1 ETH', 'BTC', 'BTC address');
  console.log(response)
}