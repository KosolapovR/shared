const ERC20Tokens = [
  'bnb',
  'usdc',
  'ht',
  'gusd',
  'tusd',
  'usdt',
  'pax',
  'bnt',
  'zrx',
  'eurs',
  'dai',
  'omg',
  'bat',
  'rep',
  'mana',
  'mgo',
];

const ETH_LIKE = [
  'eth',
  'etc',
  ...ERC20Tokens,
];

const FUTURE_CURRENCIES = [
  'xmr',
];

const TRON = 'trx';
const XRP = 'xrp';
const XRP_COMMISSION = '0.000012';

export default {
  ETH_LIKE,
  FUTURE_CURRENCIES,
  ERC20Tokens,
  TRON,
  XRP,
  XRP_COMMISSION,
};
