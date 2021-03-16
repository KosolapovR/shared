import {
 cropNumberToN, isCryptoCrypto, isCryptoFiat, isFiatCrypto, round,
} from './index';

/**
 * @param {string} firstPaymentType
 * @param {string} secondPaymentType
 * @param {{min: number, max: number}} refundLimits
 * @param {{min: number, max: number}} receiveLimits
 * @param {number} digits
 * @param {number} digits
 * @param {boolean} isCourseSwapped
 * @param {number} offerRateWithCommission
 * @param {number} offerRateWithoutCommission
 * @param {number} sellWalletBalance
 * @param {number} sellCommission
 * @param {number} buyCommission
 * @returns {{min: number, max: number}}
 */
export default ({
                    firstPaymentType,
                    secondPaymentType,
                    refundLimits,
                    receiveLimits,
                    digits,
                    isCourseSwapped,
                    offerRateWithCommission,
                    offerRateWithoutCommission,
                    sellWalletBalance,
                    sellCommission,
                    buyCommission,
                }) => {
    let minLimitsArray = [0];
    let maxLimitsArray = [0];

    if (isCryptoCrypto(firstPaymentType, secondPaymentType)) {
        minLimitsArray = isCourseSwapped ? [
                round(receiveLimits.min * offerRateWithoutCommission, digits, false),
                round(refundLimits.min, digits, false),
            ]
            : [
                round(refundLimits.min * offerRateWithoutCommission, digits, false),
                round(receiveLimits.min, digits, false),
            ];
        maxLimitsArray = isCourseSwapped ? [
            cropNumberToN(receiveLimits.max * offerRateWithoutCommission, digits, false),
            cropNumberToN(refundLimits.max, digits, false),
            cropNumberToN(
                sellWalletBalance * (1 - sellCommission / 100) / (1 + buyCommission / 100),
                digits,
                false,
            ),
        ] : [
            cropNumberToN(refundLimits.max * offerRateWithoutCommission, digits, false),
            cropNumberToN(receiveLimits.max, digits, false),
            cropNumberToN(sellWalletBalance * offerRateWithCommission, digits, false),
        ];
    } else if (isCryptoFiat(firstPaymentType, secondPaymentType)) {
        minLimitsArray = [
            round(refundLimits.min * offerRateWithoutCommission, digits, false),
            round(receiveLimits.min, digits, false),
        ];
        maxLimitsArray = [
            cropNumberToN(refundLimits.max * offerRateWithoutCommission, digits, false),
            cropNumberToN(receiveLimits.max, digits, false),
            cropNumberToN(sellWalletBalance * offerRateWithCommission, digits, false),
        ];
    } else if (isFiatCrypto(firstPaymentType, secondPaymentType)) {
        minLimitsArray = [
            round(refundLimits.min, digits, false),
            round(receiveLimits.min * offerRateWithoutCommission, digits, false),
        ];
        maxLimitsArray = [
            cropNumberToN(refundLimits.max, digits, false),
            cropNumberToN(receiveLimits.max * offerRateWithoutCommission, digits, false),
        ];
    }
    return {
        min: Math.max(...minLimitsArray),
        max: Math.min(...maxLimitsArray),
    };
};
