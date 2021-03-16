import { DEAL_TYPES } from '../consts';

export default (firstPaymentType, secondPaymentType) =>
    firstPaymentType === DEAL_TYPES.CRYPTO && secondPaymentType !== DEAL_TYPES.CRYPTO;
