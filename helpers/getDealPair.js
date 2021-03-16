export default (activeDeal) => {
  // если пара крипта/фиат или фиат/крипта или imported/крипта или крипта/imported
  if (activeDeal.getIn(['fromBuyerPayment', 'type']) !== 'crypto' || activeDeal.getIn(['fromSellerPayment', 'type']) !== 'crypto'
    || activeDeal.getIn(['fromSellerPayment', 'payment', 'type']) === 'imported'
    || activeDeal.getIn(['fromBuyerPayment', 'payment', 'type']) === 'imported') {
    // если покупатель отдает фиат
    if (activeDeal.getIn(['fromBuyerPayment', 'type']) !== 'crypto'
      || activeDeal.getIn(['fromBuyerPayment', 'payment', 'type']) === 'imported') {
      return `${activeDeal.getIn(['fromSellerPayment', 'payment', 'type'])}/fiat`;
    }
    // если покупатель отдает крипту
    return `fiat/${activeDeal.getIn(['fromBuyerPayment', 'payment', 'type'])}`;
  }
  // если пара крипта/крипта
  return `${activeDeal.getIn(['fromSellerPayment', 'payment', 'type'])}/${activeDeal.getIn(['fromBuyerPayment', 'payment', 'type'])}`;
};
