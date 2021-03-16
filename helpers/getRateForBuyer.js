import { DEAL_TYPES } from '../consts';

export default (offer) => {
    const realRateWithoutCommission = offer.get('isCustomPrice') ? offer.get('customPrice') : offer.get('rateCalculated');

    let realRateWithCommission;

    const commission = offer.get('buyServiceCommission');

    if (offer.get('isDirectionInverted')) {
        if (offer.get('operationType') === DEAL_TYPES.CRYPTO) {
            realRateWithCommission = realRateWithoutCommission
                * (1 - (commission !== 100 ? commission : 0) / 100);
        } else {
            realRateWithCommission = realRateWithoutCommission
                / (1 + (commission !== -100 ? commission : 0) / 100);
        }
    } else {
        realRateWithCommission = realRateWithoutCommission
            / (1 - (commission !== 100 ? commission : 0) / 100);
    }

    return { realRateWithoutCommission, realRateWithCommission };
};
