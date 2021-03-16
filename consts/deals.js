const TYPE_DEAL = {
  BANK: 'bank',
  CRYPTO: 'crypto',
  PAYMENT: 'payment',
  FIAT: 'fiat',
};

const WALLETS_TYPES = {
  IMPORTED: 'imported',
  MSIG: 'msig',
  INTERNAL: 'internal',
  FIAT: 'fiat',
};

const DEAL_PAIRS = {
  INTERNAL_INTERNAL: 'internal/internal',
  INTERNAL_MSIG: 'internal/msig',
  MSIG_INTERNAL: 'msig/internal',
  MSIG_MSIG: 'msig/msig',
  INTERNAL_FIAT: 'internal/fiat',
  FIAT_INTERNAL: 'fiat/internal',
  MSIG_FIAT: 'msig/fiat',
  FIAT_MSIG: 'fiat/msig',
};

export {
  TYPE_DEAL,
  WALLETS_TYPES,
  DEAL_PAIRS,
};
